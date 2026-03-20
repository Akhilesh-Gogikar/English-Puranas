import { useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png';
import {
  audienceSegments,
  interactiveProducts,
  kpiFramework,
  launchFranchises,
  rolloutPlan,
} from '../content_deliveryIdeas';

const audienceGoals = [
  {
    id: 'discovery',
    label: 'Maximize discovery',
    matches: ['kids', 'global-seekers', 'diaspora'],
    description: 'Prioritize formats that travel well on short-form and introductory channels.',
  },
  {
    id: 'depth',
    label: 'Build deeper learning',
    matches: ['young-adults', 'diaspora', 'seniors'],
    description: 'Emphasize richer context, commentary, and repeatable educational value.',
  },
  {
    id: 'retention',
    label: 'Create weekly habits',
    matches: ['professionals', 'families', 'seniors'],
    description: 'Lean into ritualized formats that people return to on a schedule.',
  },
];

function Home() {
  const history = useHistory();
  const [selectedGoal, setSelectedGoal] = useState(audienceGoals[0].id);

  const recommendedAudienceIds = useMemo(() => {
    const activeGoal = audienceGoals.find((goal) => goal.id === selectedGoal);
    return activeGoal ? activeGoal.matches : [];
  }, [selectedGoal]);

  const recommendedAudiences = audienceSegments.filter((segment) =>
    recommendedAudienceIds.includes(segment.id)
  );

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

      <main className="landing-page">
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">Modern delivery ideas for timeless stories</span>
            <h1>Simple Puranas can become more than a reading archive.</h1>
            <p className="hero-lead">
              This product direction turns the repository’s idea list into an actionable content system:
              audience-specific storytelling, launchable franchises, interactive rituals, and a measurable
              90-day rollout.
            </p>
            <div className="hero-actions">
              <Button variant="primary" onClick={() => history.push('/about')}>
                Explore the roadmap
              </Button>
              <Button variant="outline-light" onClick={() => history.push('/login')}>
                Continue to reader app
              </Button>
            </div>
          </div>

          <div className="hero-highlight-card">
            <p className="mini-label">Recommended launch wedge</p>
            <h2>Diaspora teens + dilemma-led short video</h2>
            <p>
              Start narrow: teach modern decisions through emotionally relevant Purana moments, then deepen
              into long-form explainers, Q&amp;A, and interactive products.
            </p>
            <ul>
              <li>Short-form discovery with “Pick the Dharma” debates.</li>
              <li>Weekly long-form for context, symbolism, and cultural identity.</li>
              <li>Interactive follow-up via Ask the Rishi and quiz loops.</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Audience studio</span>
            <h2>Choose the growth goal and see the strongest audience segments.</h2>
            <p>
              The repo’s ideas become more useful when grouped by strategy: discovery, depth, or retention.
            </p>
          </div>

          <div className="goal-tabs">
            {audienceGoals.map((goal) => (
              <button
                key={goal.id}
                type="button"
                className={selectedGoal === goal.id ? 'goal-tab active' : 'goal-tab'}
                onClick={() => setSelectedGoal(goal.id)}
              >
                <strong>{goal.label}</strong>
                <span>{goal.description}</span>
              </button>
            ))}
          </div>

          <Row>
            {recommendedAudiences.map((segment) => (
              <Col md={4} className="mb-4" key={segment.id}>
                <Card className="idea-card h-100">
                  <Card.Body>
                    <span className="mini-label">{segment.flagship}</span>
                    <Card.Title>{segment.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{segment.format}</Card.Subtitle>
                    <Card.Text>
                      <strong>{segment.hook}</strong>
                    </Card.Text>
                    <Card.Text>{segment.promise}</Card.Text>
                    <div className="pill-row">
                      {segment.channels.map((channel) => (
                        <span className="idea-pill" key={channel}>
                          {channel}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="content-section alt-surface">
          <div className="section-heading">
            <span className="eyebrow">Launchable franchises</span>
            <h2>Five repeatable show formats that can organize the whole product.</h2>
          </div>
          <div className="franchise-grid">
            {launchFranchises.map((franchise) => (
              <article className="franchise-card" key={franchise.title}>
                <p className="mini-label">{franchise.format}</p>
                <h3>{franchise.title}</h3>
                <p>{franchise.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Interactive extensions</span>
            <h2>Use the archive as a foundation for products, not just pages.</h2>
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

        <section className="content-section alt-surface">
          <div className="section-heading">
            <span className="eyebrow">90-day execution plan</span>
            <h2>Turn inspiration into a staged rollout.</h2>
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

        <section className="content-section">
          <div className="section-heading">
            <span className="eyebrow">Measurement</span>
            <h2>Track whether Simple Puranas is growing attention, trust, and repeat usage.</h2>
          </div>
          <div className="kpi-grid">
            {kpiFramework.map((kpi) => (
              <article className="kpi-card" key={kpi.label}>
                <h3>{kpi.label}</h3>
                <p className="metric-line">{kpi.metric}</p>
                <p>{kpi.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
