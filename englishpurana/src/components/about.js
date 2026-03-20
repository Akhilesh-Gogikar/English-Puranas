import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png';
import {
  audienceSegments,
  ideaPrinciples,
  interactiveProducts,
  rolloutPlan,
} from '../content_deliveryIdeas';

function About() {
  const history = useHistory();

  return (
    <div className="App app-shell">
      <Navbar bg="warning" variant="light" className="app-navbar">
        <Navbar.Brand href="/" className="brand-lockup">
          <img
            alt="Simple Puranas logo"
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          Simple Puranas
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className="btn btn-link nav-link-button">
            <a href="about" style={{ color: 'brown' }}>
              Roadmap
            </a>
          </Navbar.Brand>
          <Navbar.Text>
            <Button variant="outline-light" href="/login">
              Sign in
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <main className="strategy-page">
        <section className="content-section strategy-hero">
          <span className="eyebrow">Product roadmap</span>
          <h1>How to evolve Simple Puranas from archive into ecosystem.</h1>
          <p className="hero-lead">
            The strongest opportunity in this repository is not just preserving text. It is packaging Purana
            wisdom for different ages, contexts, and rituals without losing reverence or clarity.
          </p>
          <div className="hero-actions">
            <Button variant="primary" onClick={() => history.push('/')}>
              Back to overview
            </Button>
            <Button variant="outline-light" onClick={() => history.push('/login')}>
              Open the reader
            </Button>
          </div>
        </section>

        <section className="content-section alt-surface">
          <div className="section-heading">
            <span className="eyebrow">Operating principles</span>
            <h2>Guidelines for building the next version of the product.</h2>
          </div>
          <div className="principles-list">
            {ideaPrinciples.map((principle) => (
              <div className="principle-card" key={principle}>
                {principle}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Audience map</span>
            <h2>Eight addressable segments already identified in the repo.</h2>
            <p>
              Each segment needs different pacing, packaging, and depth even though they draw from the same
              source archive.
            </p>
          </div>
          <div className="audience-table">
            {audienceSegments.map((segment) => (
              <article className="audience-row" key={segment.id}>
                <div>
                  <h3>{segment.name}</h3>
                  <p>{segment.promise}</p>
                </div>
                <div>
                  <p className="audience-meta"><strong>Format:</strong> {segment.format}</p>
                  <p className="audience-meta"><strong>Best for:</strong> {segment.bestFor.join(', ')}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section alt-surface">
          <div className="section-heading">
            <span className="eyebrow">Interactive product stack</span>
            <h2>Three layers beyond static reading.</h2>
          </div>
          <div className="stack-grid">
            <article className="stack-card">
              <h3>1. Content layer</h3>
              <p>Structured story pages, summaries, images, and scripture-linked metadata.</p>
            </article>
            <article className="stack-card">
              <h3>2. Ritual layer</h3>
              <p>Quizzes, family prompts, challenge sequences, and festival-based programming.</p>
            </article>
            <article className="stack-card">
              <h3>3. Conversational layer</h3>
              <p>Guided Q&amp;A, AI-avatar narration, age-adaptive prompts, and contextual recommendations.</p>
            </article>
          </div>
          <div className="interactive-grid">
            {interactiveProducts.map((product) => (
              <article className="interactive-card" key={product.title}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul>
                  {product.prompts.map((prompt) => (
                    <li key={prompt}>{prompt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Execution cadence</span>
            <h2>A realistic validate → deepen → scale sequence.</h2>
          </div>
          <div className="timeline-grid">
            {rolloutPlan.map((phase) => (
              <article className="timeline-card" key={phase.phase}>
                <h3>{phase.phase}</h3>
                <p>{phase.focus}</p>
                <ul>
                  {phase.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
