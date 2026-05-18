import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Download,
  Medal,
  Palette,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import defaultTop3 from './assets/reference-designs/default-top3.jpeg';
import defaultRest from './assets/reference-designs/default-rest.jpeg';
import animalsCastle from './assets/reference-designs/animals-castle.png';
import fantasyHeroes from './assets/reference-designs/fantasy-heroes.png';
import cartoonTeam from './assets/reference-designs/cartoon-team.png';
import realisticTeam from './assets/reference-designs/realistic-team.png';
import rainbowFun from './assets/reference-designs/rainbow-fun.png';
import animalsTop3 from './assets/template-halves/animals-top3.png';
import animalsRest from './assets/template-halves/animals-rest.png';
import fantasyTop3 from './assets/template-halves/fantasy-top3.png';
import fantasyRest from './assets/template-halves/fantasy-rest.png';
import cartoonTop3 from './assets/template-halves/cartoon-top3.png';
import cartoonRest from './assets/template-halves/cartoon-rest.png';
import realisticTop3 from './assets/template-halves/realistic-top3.png';
import realisticRest from './assets/template-halves/realistic-rest.png';
import rainbowTop3 from './assets/template-halves/rainbow-top3.png';
import rainbowRest from './assets/template-halves/rainbow-rest.png';

const SPLIT_POSTER_SIZE = { width: 768, height: 1024 };

const posterGroups = [
  { id: 'top3', label: 'Top 3 Places', shortLabel: '1st - 3rd', filename: 'top-3' },
  { id: 'rest', label: 'Places 4-8', shortLabel: '4th - 8th', filename: 'places-4-8' },
];

const templates = [
  {
    id: 'default',
    name: 'Default Shell Awards',
    category: 'Default',
    assetMode: 'separate',
    overviewAssets: [defaultTop3, defaultRest],
    topAsset: defaultTop3,
    restAsset: defaultRest,
    sourceChrome: true,
    dimensions: {
      top3: { width: 1466, height: 1073 },
      rest: { width: 1515, height: 1038 },
    },
    accent: '#d71920',
    accent2: '#071a58',
    cardTone: '#fff8e7',
  },
  {
    id: 'animals',
    name: 'Animal Champions',
    category: 'Animals',
    assetMode: 'separate',
    overviewAsset: animalsCastle,
    topAsset: animalsTop3,
    restAsset: animalsRest,
    sourceChrome: true,
    dimensions: {
      top3: SPLIT_POSTER_SIZE,
      rest: SPLIT_POSTER_SIZE,
    },
    accent: '#c71920',
    accent2: '#0d3478',
    cardTone: '#fff5da',
  },
  {
    id: 'fantasy',
    name: 'Fantasy Heroes',
    category: 'Fantasy',
    assetMode: 'separate',
    overviewAsset: fantasyHeroes,
    topAsset: fantasyTop3,
    restAsset: fantasyRest,
    sourceChrome: true,
    dimensions: {
      top3: SPLIT_POSTER_SIZE,
      rest: SPLIT_POSTER_SIZE,
    },
    accent: '#d89b16',
    accent2: '#061b42',
    cardTone: '#fff2d2',
  },
  {
    id: 'cartoon-staff',
    name: 'Cartoon Team',
    category: 'Cartoon',
    assetMode: 'separate',
    overviewAsset: cartoonTeam,
    topAsset: cartoonTop3,
    restAsset: cartoonRest,
    sourceChrome: true,
    dimensions: {
      top3: SPLIT_POSTER_SIZE,
      rest: SPLIT_POSTER_SIZE,
    },
    accent: '#f4a000',
    accent2: '#071a58',
    cardTone: '#fff9e8',
  },
  {
    id: 'realistic',
    name: 'Real Team Prize',
    category: 'Realistic',
    assetMode: 'separate',
    overviewAsset: realisticTeam,
    topAsset: realisticTop3,
    restAsset: realisticRest,
    sourceChrome: true,
    dimensions: {
      top3: SPLIT_POSTER_SIZE,
      rest: SPLIT_POSTER_SIZE,
    },
    accent: '#d71920',
    accent2: '#071a58',
    cardTone: '#fff8e9',
  },
  {
    id: 'rainbow',
    name: 'Rainbow Fun',
    category: 'Colourful',
    assetMode: 'separate',
    overviewAsset: rainbowFun,
    topAsset: rainbowTop3,
    restAsset: rainbowRest,
    sourceChrome: true,
    dimensions: {
      top3: SPLIT_POSTER_SIZE,
      rest: SPLIT_POSTER_SIZE,
    },
    accent: '#8b22c8',
    accent2: '#ef3b86',
    cardTone: '#fff7d9',
  },
];

const starterData = {
  teamName: 'GRAYSKULL TEAM',
  titlePrimary: 'WINNERS',
  titleSecondary: 'AWARDS',
  week: '19TH',
  dateRange: '4TH MAY - 10TH MAY 2025',
  metricTitle: 'GO PLUS PENETRATION & NEW SIGN UPS',
  slogan: 'DRIVE MORE. SIGN UP MORE. GO PLUS+',
  winners: [
    {
      place: 1,
      branch: 'BROXBOURNE',
      penetration: '56.93',
      signups: '115',
      performers: [
        { name: 'Uday', score: '40' },
        { name: 'Aruna', score: '20' },
        { name: 'Vini', score: '20' },
      ],
    },
    {
      place: 2,
      branch: 'SAWBRIDGEWORTH',
      penetration: '54.39',
      signups: '163',
      performers: [{ name: '-', score: '' }],
    },
    {
      place: 3,
      branch: 'HALFMOON',
      penetration: '53.2',
      signups: '64',
      performers: [
        { name: 'Shehana', score: '20' },
        { name: 'Mohana', score: '15' },
      ],
    },
    {
      place: 4,
      branch: 'EPPING',
      penetration: '51.62',
      signups: '74',
      performers: [
        { name: 'Sangeetha', score: '39' },
        { name: 'Uday', score: '13' },
      ],
    },
    {
      place: 5,
      branch: 'ENFIELD',
      penetration: '39.38',
      signups: '39',
      performers: [
        { name: 'Mohana', score: '16' },
        { name: 'Sandra', score: '14' },
      ],
    },
    {
      place: 6,
      branch: 'BULLSMOOR',
      penetration: '36.87',
      signups: '76',
      performers: [
        { name: 'Mano', score: '40' },
        { name: 'Mohana', score: '25' },
      ],
    },
    {
      place: 7,
      branch: 'BUCKHURST',
      penetration: '36.82',
      signups: '71',
      performers: [
        { name: 'Ravi', score: '38' },
        { name: 'Raja', score: '10' },
      ],
    },
    {
      place: 8,
      branch: 'HARLOW',
      penetration: '33.86',
      signups: '72',
      performers: [
        { name: 'Taya', score: '44' },
        { name: 'Karthika', score: '15' },
      ],
    },
  ],
};

function ordinal(place) {
  const number = Number(place);
  if (!Number.isFinite(number)) return String(place || '');
  const rem100 = number % 100;
  if (rem100 >= 11 && rem100 <= 13) return `${number}TH`;
  const rem10 = number % 10;
  if (rem10 === 1) return `${number}ST`;
  if (rem10 === 2) return `${number}ND`;
  if (rem10 === 3) return `${number}RD`;
  return `${number}TH`;
}

function sanitizeFileName(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function performersToText(performers) {
  return performers
    .map((performer) =>
      performer.score ? `${performer.name} - ${performer.score}` : performer.name,
    )
    .join('\n');
}

function textToPerformers(text) {
  const performers = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, ...scoreParts] = line.split(/\s+-\s+|,\s*/);
      return {
        name: name?.trim() || '-',
        score: scoreParts.join(' ').trim(),
      };
    });
  return performers.length ? performers : [{ name: '-', score: '' }];
}

function getSortedWinners(winners) {
  return [...winners].sort((a, b) => (Number(a.place) || 999) - (Number(b.place) || 999));
}

function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [posterGroup, setPosterGroup] = useState(null);
  const [data, setData] = useState(starterData);
  const [aiStatus, setAiStatus] = useState('idle');
  const [aiImage, setAiImage] = useState(null);
  const [aiError, setAiError] = useState(null);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);

  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id === selectedTemplateId) || null,
    [selectedTemplateId],
  );
  const selectedGroup = posterGroups.find((group) => group.id === posterGroup) || null;
  const posterSize =
    selectedTemplate && posterGroup ? getPosterSize(selectedTemplate, posterGroup) : null;

  const updateData = (field, value) => {
    setData((current) => ({ ...current, [field]: value }));
  };

  const updateWinnerByPlace = (place, field, value) => {
    setData((current) => ({
      ...current,
      winners: current.winners.map((winner) =>
        Number(winner.place) === Number(place) ? { ...winner, [field]: value } : winner,
      ),
    }));
  };

  const generateWithAI = async (options = {}) => {
    if (aiStatus === 'generating') return;
    if (!selectedTemplate || !posterGroup) return;
    const feedback = (options.feedback || '').trim();
    const refinePrevious = Boolean(feedback && aiImage);
    setAiPanelOpen(true);
    setAiStatus('generating');
    setAiError(null);
    if (!refinePrevious) setAiImage(null);
    try {
      let sourceBlob;
      if (refinePrevious) {
        const previousResp = await fetch(aiImage);
        sourceBlob = await previousResp.blob();
      } else {
        const artUrl = getArtAsset(selectedTemplate, posterGroup);
        const artResp = await fetch(artUrl);
        if (!artResp.ok) throw new Error(`Failed to load template image (${artResp.status})`);
        sourceBlob = await artResp.blob();
      }
      const ext = sourceBlob.type === 'image/jpeg' ? 'jpg' : sourceBlob.type === 'image/webp' ? 'webp' : 'png';
      const file = new File([sourceBlob], `source.${ext}`, { type: sourceBlob.type || 'image/png' });

      const prompt = buildAiPrompt({
        data,
        feedback,
        group: posterGroup,
        refinePrevious,
        template: selectedTemplate,
      });
      const size = pickOpenAiSize(posterSize.width, posterSize.height);

      const formData = new FormData();
      formData.append('image', file);
      formData.append('prompt', prompt);
      formData.append('size', size);
      formData.append('quality', 'high');
      formData.append('n', '1');

      const resp = await fetch('/api/render', { method: 'POST', body: formData });
      const text = await resp.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        throw new Error(`Unexpected response (${resp.status}): ${text.slice(0, 200)}`);
      }
      if (!resp.ok) {
        const msg = json?.error?.message || json?.error || `HTTP ${resp.status}`;
        throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
      }
      const b64 = json?.data?.[0]?.b64_json;
      if (!b64) throw new Error('No image returned by the renderer.');
      setAiImage(`data:image/png;base64,${b64}`);
      setAiStatus('idle');
    } catch (err) {
      setAiError(err?.message || String(err));
      setAiStatus('error');
    }
  };

  const downloadAiImage = () => {
    if (!aiImage) return;
    const baseName = sanitizeFileName(
      `${data.teamName}-${data.week}-${selectedTemplate.name}-${selectedGroup.filename}`,
    );
    const link = document.createElement('a');
    link.download = `${baseName || 'weekly-winners-awards'}.png`;
    link.href = aiImage;
    link.click();
  };

  if (!selectedTemplate) {
    return (
      <main className="app-shell selection-screen">
        <section className="selection-top">
          <div>
            <p className="eyebrow">Step 1 of 3</p>
            <h1>Choose one of your 6 designs</h1>
          </div>
          <div className="selection-badge">
            <Trophy size={30} />
          </div>
        </section>

        <section className="template-grid" aria-label="Template selection">
          {templates.map((template) => (
            <button
              className="template-card"
              key={template.id}
              onClick={() => {
                setPosterGroup(null);
                setSelectedTemplateId(template.id);
              }}
              type="button"
            >
              <span className="template-card-header">
                <span>
                  <span className="template-category" style={{ color: template.accent }}>
                    {template.category}
                  </span>
                  <strong>{template.name}</strong>
                </span>
                <Palette size={24} />
              </span>
              <TemplatePreview template={template} />
              <span className="template-card-footer">
                <span style={{ backgroundColor: template.accent }} />
                <span style={{ backgroundColor: template.accent2 }} />
              </span>
            </button>
          ))}
        </section>
      </main>
    );
  }

  if (!posterGroup) {
    return (
      <PageSelectionScreen
        onBack={() => setSelectedTemplateId(null)}
        onPick={setPosterGroup}
        template={selectedTemplate}
      />
    );
  }

  return (
    <>
      <DataFormScreen
        aiStatus={aiStatus}
        data={data}
        group={posterGroup}
        groupLabel={selectedGroup}
        onBack={() => setPosterGroup(null)}
        onGenerate={generateWithAI}
        onUpdateData={updateData}
        onUpdateWinner={updateWinnerByPlace}
        template={selectedTemplate}
      />
      {aiPanelOpen && (
        <AiResultPanel
          error={aiError}
          image={aiImage}
          onClose={() => setAiPanelOpen(false)}
          onDownload={downloadAiImage}
          onRegenerate={(feedback) => generateWithAI({ feedback })}
          status={aiStatus}
        />
      )}
    </>
  );
}

function AiResultPanel({ error, image, onClose, onDownload, onRegenerate, status }) {
  const [feedbackMode, setFeedbackMode] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status !== 'generating') return undefined;
    const startTime = Date.now();
    setProgress(0);
    const id = setInterval(() => {
      const elapsedSec = (Date.now() - startTime) / 1000;
      setProgress(Math.min(96, 96 * (1 - Math.exp(-elapsedSec / 35))));
    }, 250);
    return () => clearInterval(id);
  }, [status]);

  const cancelFeedback = () => {
    setFeedbackMode(false);
    setFeedbackText('');
  };

  const submitFeedback = () => {
    onRegenerate(feedbackText);
    setFeedbackMode(false);
    setFeedbackText('');
  };

  return (
    <div className="result-modal" role="dialog" aria-modal="true">
      <div className="result-modal-card">
        <header className="result-modal-header">
          <div>
            <p className="eyebrow">Poster Studio</p>
            <h2>Your poster</h2>
          </div>
          <button
            aria-label="Close"
            className="icon-button"
            onClick={onClose}
            type="button"
          >
            <X size={18} />
          </button>
        </header>

        <div className="result-modal-body">
          {status === 'generating' && (
            <div className="result-modal-loading">
              <Sparkles size={28} />
              <p>Composing your poster…</p>
              <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
              <p className="progress-bar-label">{Math.round(progress)}%</p>
              <p className="result-modal-hint">
                This usually takes 1–3 minutes. Please don't close this window.
              </p>
            </div>
          )}
          {status === 'error' && (
            <div className="result-modal-error">
              <p><strong>Something went wrong.</strong></p>
              <pre>{error}</pre>
              <button className="primary-button" onClick={() => onRegenerate('')} type="button">
                Try again
              </button>
            </div>
          )}
          {status === 'idle' && image && (
            <>
              <img alt="Generated poster" className="result-modal-image" src={image} />
              {feedbackMode ? (
                <div className="revision-feedback">
                  <label className="revision-feedback-label" htmlFor="revision-feedback-input">
                    What should change? (Optional — leave blank for a fresh attempt)
                  </label>
                  <textarea
                    autoFocus
                    className="revision-feedback-input"
                    id="revision-feedback-input"
                    onChange={(event) => setFeedbackText(event.target.value)}
                    placeholder="e.g. The branch name for 2nd place is wrong, it should be SAWBRIDGEWORTH. Also make the percentage text bigger."
                    rows={4}
                    value={feedbackText}
                  />
                  <p className="revision-feedback-hint">
                    With notes, we'll revise the image above. Leave it empty to start fresh from the template.
                  </p>
                  <div className="result-modal-actions">
                    <button
                      className="secondary-button"
                      onClick={cancelFeedback}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button className="primary-button" onClick={submitFeedback} type="button">
                      <Sparkles size={18} />
                      Regenerate
                    </button>
                  </div>
                </div>
              ) : (
                <div className="result-modal-actions">
                  <button className="download-button" onClick={onDownload} type="button">
                    <Download size={18} />
                    Download PNG
                  </button>
                  <button
                    className="primary-button"
                    onClick={() => setFeedbackMode(true)}
                    type="button"
                  >
                    <Sparkles size={18} />
                    Regenerate
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function TemplatePreview({ template }) {
  return (
    <span className="template-preview">
      {template.overviewAsset ? (
        <img alt={`${template.name} full reference`} src={template.overviewAsset} />
      ) : (
        <span className="template-preview-pair">
          {template.overviewAssets.map((asset, index) => (
            <img alt={`${template.name} ${posterGroups[index].shortLabel}`} key={asset} src={asset} />
          ))}
        </span>
      )}
      <span className="template-preview-chip">Full set</span>
    </span>
  );
}

function PageSelectionScreen({ onBack, onPick, template }) {
  return (
    <main className="app-shell selection-screen">
      <section className="selection-top">
        <div className="step-heading">
          <button
            aria-label="Back to template selection"
            className="icon-button"
            onClick={onBack}
            type="button"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <p className="eyebrow">Step 2 of 3 · {template.name}</p>
            <h1>Which page do you want to create?</h1>
          </div>
        </div>
      </section>

      <section className="page-grid" aria-label="Page selection">
        {posterGroups.map((group, index) => {
          const art = group.id === 'top3' ? template.topAsset : template.restAsset;
          return (
            <button
              className="page-card"
              key={group.id}
              onClick={() => onPick(group.id)}
              type="button"
            >
              <span className="page-card-header">
                <span>
                  <span className="page-card-eyebrow">Page {index + 1}</span>
                  <strong>{group.label}</strong>
                </span>
                <span className="page-card-chip">{group.shortLabel}</span>
              </span>
              <span className="page-card-art">
                <img alt={`${template.name} — ${group.label}`} src={art} />
              </span>
            </button>
          );
        })}
      </section>
    </main>
  );
}

function DataFormScreen({
  aiStatus,
  data,
  group,
  groupLabel,
  onBack,
  onGenerate,
  onUpdateData,
  onUpdateWinner,
  template,
}) {
  const visibleWinners = getSortedWinners(data.winners).filter((winner) => {
    const place = Number(winner.place);
    return group === 'top3' ? place >= 1 && place <= 3 : place >= 4 && place <= 8;
  });
  const isGenerating = aiStatus === 'generating';

  return (
    <main className="app-shell form-screen">
      <header className="form-top">
        <button
          aria-label="Back to page selection"
          className="icon-button"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <p className="eyebrow">Step 3 of 3 · {template.name}</p>
          <h1>Fill in {groupLabel.label}</h1>
        </div>
      </header>

      <section className="form-section">
        <div className="section-title">
          <Trophy size={18} />
          <h2>Poster details</h2>
        </div>
        <div className="field-grid">
          <label>
            Team
            <input
              value={data.teamName}
              onChange={(event) => onUpdateData('teamName', event.target.value)}
            />
          </label>
          <label>
            Week
            <input
              value={data.week}
              onChange={(event) => onUpdateData('week', event.target.value)}
            />
          </label>
          <label className="wide-field">
            Date range
            <input
              value={data.dateRange}
              onChange={(event) => onUpdateData('dateRange', event.target.value)}
            />
          </label>
          <label className="wide-field">
            Metric banner
            <input
              value={data.metricTitle}
              onChange={(event) => onUpdateData('metricTitle', event.target.value)}
            />
          </label>
          <label className="wide-field">
            Bottom slogan
            <input
              value={data.slogan}
              onChange={(event) => onUpdateData('slogan', event.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="form-section">
        <div className="section-title">
          <Medal size={18} />
          <h2>Winners — {groupLabel.shortLabel}</h2>
        </div>
        <div className="winner-fieldset-grid">
          {visibleWinners.map((winner) => (
            <article className="winner-fieldset" key={winner.place}>
              <header>
                <span className="winner-place">{ordinal(winner.place)} Place</span>
                <strong>{winner.branch || 'Store'}</strong>
              </header>
              <div className="winner-fields">
                <label>
                  Store
                  <input
                    value={winner.branch}
                    onChange={(event) =>
                      onUpdateWinner(winner.place, 'branch', event.target.value.toUpperCase())
                    }
                  />
                </label>
                <label>
                  Penetration %
                  <input
                    inputMode="decimal"
                    value={winner.penetration}
                    onChange={(event) =>
                      onUpdateWinner(winner.place, 'penetration', event.target.value)
                    }
                  />
                </label>
                <label>
                  New sign ups
                  <input
                    inputMode="numeric"
                    value={winner.signups}
                    onChange={(event) =>
                      onUpdateWinner(winner.place, 'signups', event.target.value)
                    }
                  />
                </label>
                <label className="wide-field">
                  Best performers
                  <textarea
                    value={performersToText(winner.performers)}
                    onChange={(event) =>
                      onUpdateWinner(
                        winner.place,
                        'performers',
                        textToPerformers(event.target.value),
                      )
                    }
                  />
                </label>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="form-footer">
        <button
          className="primary-button primary-button-large"
          disabled={isGenerating}
          onClick={onGenerate}
          type="button"
        >
          <Sparkles size={20} />
          {isGenerating ? 'Generating…' : 'Generate poster'}
        </button>
      </footer>
    </main>
  );
}

function getPosterSize(template, group) {
  return template.dimensions?.[group] || SPLIT_POSTER_SIZE;
}

function getArtAsset(template, group) {
  return group === 'top3' ? template.topAsset : template.restAsset;
}

function pickOpenAiSize(width, height) {
  const ratio = width / height;
  if (ratio > 1.15) return '1536x1024';
  if (ratio < 0.87) return '1024x1536';
  return '1024x1024';
}

function buildAiPrompt({ data, feedback, group, refinePrevious, template }) {
  const winners = getSortedWinners(data.winners).filter((winner) => {
    const place = Number(winner.place);
    return group === 'top3' ? place >= 1 && place <= 3 : place >= 4 && place <= 8;
  });

  const winnerLines = winners.map((winner) => {
    const performers = (winner.performers || [])
      .filter((performer) => performer.name && performer.name !== '-')
      .map((performer) =>
        performer.score ? `${performer.name} (${performer.score})` : performer.name,
      )
      .join(', ');
    return [
      `  - ${ordinal(winner.place)} place: branch "${winner.branch}"`,
      `      Go Plus Penetration: ${winner.penetration}%`,
      `      New Sign Ups: ${winner.signups}`,
      `      Best Performers: ${performers || 'none'}`,
    ].join('\n');
  });

  const sections = [];

  if (feedback) {
    sections.push(
      `IMPORTANT — USER FEEDBACK ON THE PREVIOUS RENDER:`,
      feedback,
      ``,
      `Address this feedback in your revision. The attached image is the previous render that the user is asking you to fix.`,
      ``,
    );
  }

  sections.push(
    refinePrevious
      ? `You are revising a "Weekly Winners Awards" poster you generated previously. The attached image is your previous render.`
      : `You are editing a "Weekly Winners Awards" poster. The image attached is the existing poster.`,
    ``,
    `Replace ONLY the textual data fields (branch names, Go Plus Penetration percentages, New Sign Ups counts, best performer names and scores, week number, date range, team name, metric banner, slogan) with the new values listed below.`,
    ``,
    `Do NOT modify the artwork, illustrations, photographs, layout, badges, decorations, fonts, type weights, colors, frames, or any visual element. Keep the poster's dimensions, composition, and aesthetic identical. Only the text content changes.`,
    ``,
    `Template style: ${template.name} (${template.category})`,
    `Poster section: ${group === 'top3' ? 'Top 3 places (1st–3rd)' : 'Places 4–8'}`,
    ``,
    `Header data:`,
    `  Team name: ${data.teamName}`,
    `  Week: ${data.week}`,
    `  Date range: ${data.dateRange}`,
    `  Metric banner: ${data.metricTitle}`,
    `  Slogan: ${data.slogan}`,
    ``,
    `Winners to display:`,
    ...winnerLines,
  );

  return sections.join('\n');
}

export default App;
