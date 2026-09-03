import React from 'react';

const modules = [
  {
    title: '1. Service overview',
    label: 'Overview',
    description: 'Trace the portal entry point and user flow before changing anything.',
  },
  {
    title: '2. Scope',
    label: 'Alignment',
    description: 'Define a focused scope and keep the implementation intentionally small.',
  },
  {
    title: '3. Change',
    label: 'Small update',
    description: 'Apply the approved small change after reviewing the implementation.',
  },
  {
    title: '4. IDE-based debugging',
    label: 'Verification',
    description: 'Use terminal output to explain build output, tests, and service calls.',
  },
];

const checklist = [
  'Identify the files that explain the current UI behavior.',
  'Keep the approved change isolated and easy to review.',
  'Run the lightweight Node test after the cleanup change.',
  'Keep authentication changes separate from the UI integration path.',
];

function App() {
  return (
    <main className="portal-shell">
      <section className="hero-panel" aria-labelledby="portal-title">
        <header className="topbar">
          <div className="brand-mark" aria-hidden="true">CP</div>
          <div>
            <p className="eyebrow">Customer Portal</p>
            <h1 id="portal-title">Customer Portal Services</h1>
          </div>
        </header>

        <div className="hero-grid">
          <div className="summary-card">
            <p className="eyebrow">Scenario summary</p>
            <h2>Modernize one integration seam.</h2>
            <p>
              Teams can explore a lightweight customer portal, review the source,
              and apply one focused cleanup.
            </p>
          </div>

          <aside className="status-card" aria-label="Project status">
            <span className="status-dot" aria-hidden="true" />
            <p>Ready for local review</p>
            <strong>{modules.length} service checkpoints</strong>
          </aside>
        </div>
      </section>

      <section className="section-block" aria-labelledby="modules-title">
        <div className="section-heading">
          <p className="eyebrow">Review flow</p>
          <h2 id="modules-title">Service checkpoints</h2>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.title}>
              <span>{module.label}</span>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="improvement-panel" aria-labelledby="improvement-title">
        <div>
          <p className="eyebrow">Source review</p>
          <h2 id="improvement-title">Source-led improvement path</h2>
          <p>
            The source provides a visible place to compare tests and runtime behavior before choosing a small change.
          </p>
        </div>

        <div className="endpoint-card">
          <dl>
            <div>
              <dt>Review input</dt>
              <dd>Read the relevant source first</dd>
            </div>
            <div>
              <dt>Review standard</dt>
              <dd>Explain the evidence before accepting a diff</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-block" aria-labelledby="checklist-title">
        <div className="section-heading">
          <p className="eyebrow">Validation checklist</p>
          <h2 id="checklist-title">What good looks like</h2>
        </div>
        <ul className="checklist">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
