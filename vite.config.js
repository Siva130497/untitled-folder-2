import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const UPSTREAM_RENDER_URL = 'https://api.openai.com/v1/images/edits';
const RENDER_MODEL = 'gpt-image-2';

function renderProxyPlugin(apiKey) {
  return {
    name: 'render-proxy',
    configureServer(server) {
      server.middlewares.use('/api/render', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
        }
        if (!apiKey) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          return res.end(
            JSON.stringify({ error: 'Renderer is not configured.' }),
          );
        }
        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const incoming = Buffer.concat(chunks);
          const contentType = req.headers['content-type'] || '';

          // Inject the model field server-side so the browser request never reveals it.
          let outgoingBody = incoming;
          let outgoingContentType = contentType;
          const boundaryMatch = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(contentType);
          const boundary = boundaryMatch ? boundaryMatch[1] || boundaryMatch[2] : null;
          if (boundary) {
            const modelPart =
              `--${boundary}\r\n` +
              `Content-Disposition: form-data; name="model"\r\n\r\n` +
              `${RENDER_MODEL}\r\n`;
            outgoingBody = Buffer.concat([Buffer.from(modelPart, 'utf8'), incoming]);
          }

          const upstream = await fetch(UPSTREAM_RENDER_URL, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': outgoingContentType,
            },
            body: outgoingBody,
          });
          const buf = Buffer.from(await upstream.arrayBuffer());
          res.statusCode = upstream.status;
          res.setHeader(
            'Content-Type',
            upstream.headers.get('content-type') || 'application/json',
          );
          res.end(buf);
        } catch (err) {
          console.error('[render-proxy]', err);
          res.statusCode = 502;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Render failed. Please try again.' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), renderProxyPlugin(env.OPENAI_API_KEY)],
  };
});
