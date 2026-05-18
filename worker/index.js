const UPSTREAM_URL = 'https://api.openai.com/v1/images/edits';
const RENDER_MODEL = 'gpt-image-2';

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/api/render') {
      return json({ error: 'Not Found' }, 404, request);
    }
    if (request.method !== 'POST') {
      return json({ error: 'Method Not Allowed' }, 405, request);
    }
    if (!env.OPENAI_API_KEY) {
      return json({ error: 'Renderer is not configured.' }, 500, request);
    }

    const contentType = request.headers.get('Content-Type') || '';
    if (!contentType.toLowerCase().startsWith('multipart/form-data')) {
      return json({ error: 'Expected multipart/form-data.' }, 400, request);
    }

    try {
      const incoming = new Uint8Array(await request.arrayBuffer());
      const boundaryMatch = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(contentType);
      const boundary = boundaryMatch ? (boundaryMatch[1] || boundaryMatch[2]) : null;

      let outgoing = incoming;
      if (boundary) {
        const modelPart = new TextEncoder().encode(
          `--${boundary}\r\n` +
          `Content-Disposition: form-data; name="model"\r\n\r\n` +
          `${RENDER_MODEL}\r\n`
        );
        const merged = new Uint8Array(modelPart.byteLength + incoming.byteLength);
        merged.set(modelPart, 0);
        merged.set(incoming, modelPart.byteLength);
        outgoing = merged;
      }

      const upstream = await fetch(UPSTREAM_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.OPENAI_API_KEY}`,
          'Content-Type': contentType,
        },
        body: outgoing,
      });

      const body = await upstream.arrayBuffer();
      return new Response(body, {
        status: upstream.status,
        headers: {
          'Content-Type': upstream.headers.get('Content-Type') || 'application/json',
          ...corsHeaders(request),
        },
      });
    } catch (err) {
      console.error('[render-proxy]', err);
      return json({ error: 'Render failed. Please try again.' }, 502, request);
    }
  },
};

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(payload, status, request) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(request),
    },
  });
}
