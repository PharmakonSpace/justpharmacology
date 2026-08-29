import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { PlayCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { categories } from './data/categories';
import { lessons } from './data/lessons';
import LessonCard from './components/lessons/LessonCard';
import Animation from './components/animations/Animation';
import Quiz from './components/quiz/Quiz';
import { completeLesson, isComplete } from './utils/progress';
import VideoEmbed from './components/video/VideoEmbed';

/* ───────────────────────── helpers ───────────────────────── */

const safeArray = (v) => (Array.isArray(v) ? v : []);

/* ───────────────────────── Recent videos ─────────────────────────
   Paste real YouTube video IDs into youtubeId to show thumbnails.
   Example: youtubeId: 'dQw4w9WgXcQ'
*/
const recentVideos = [
  {
    id: '1',
    title: 'Introduction to General Pharmacology',
    youtubeId: '',
    duration: '12:40',
    topic: 'General Pharmacology',
  },
  {
    id: '2',
    title: 'Pharmacokinetics — ADME Explained Simply',
    youtubeId: '',
    duration: '15:20',
    topic: 'Pharmacokinetics',
  },
  {
    id: '3',
    title: 'Drug–Receptor Interactions',
    youtubeId: '',
    duration: '11:05',
    topic: 'Pharmacodynamics',
  },
];

/* ───────────────────────── Home ───────────────────────── */

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">INTERACTIVE PHARMACOLOGY LEARNING</div>
            <h1>
              Understand Pharmacology.
              <br />
              <span>Don't Just Memorize It.</span>
            </h1>
            <p>
              An educational initiative inspired by the teaching of{' '}
              <strong>Dr. Manoj Goyal</strong> — simple explanations, animation-based
              concepts, interactive learning and rapid revision.
            </p>
            <div className="actions">
              <Link className="btn primary" to="/learn">
                Start Learning <ArrowRight />
              </Link>
              <Link className="btn secondary" to="/revision">
                Rapid Revision
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="molecule-card">
              <div className="molecule-orb">💊</div>
              <div className="connector">↓</div>
              <div className="target">🎯</div>
              <div className="connector">↓</div>
              <div className="response">⚡ Biological Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">LEARNING PATH</div>
              <h2>Build your pharmacology foundation</h2>
            </div>
            <Link to="/learn">
              View all <ArrowRight />
            </Link>
          </div>
          <div className="category-grid">
            {categories.slice(0, 6).map((c) => (
              <Link
                className="category-card"
                to={`/learn?category=${c.id}`}
                key={c.id}
              >
                <div className="cat-icon">{c.icon}</div>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <span>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visual learning */}
      <section className="section tinted">
        <div className="container feature-grid">
          <div>
            <div className="eyebrow">VISUAL LEARNING</div>
            <h2>See the mechanism, not just the paragraph.</h2>
            <p>
              Interactive visual models turn difficult pharmacology concepts into steps
              you can see, click and revise.
            </p>
            <Link className="btn primary" to="/animations">
              Explore animations
            </Link>
          </div>
          <Animation type="drug-receptor" />
        </div>
      </section>

      {/* Recent Videos */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">FROM THE CHANNEL</div>
              <h2>Recent videos</h2>
              <p className="section-sub">
                Short, focused lessons from the Just Pharmacology YouTube channel.
              </p>
            </div>
            <a
              className="btn secondary"
              href="https://www.youtube.com/@JustPharmacology"
              target="_blank"
              rel="noreferrer"
            >
              View channel <ArrowRight />
            </a>
          </div>
          <div className="video-grid">
            {recentVideos.map((v) => (
              <a
                key={v.id}
                className="video-card"
                href={
                  v.youtubeId
                    ? `https://www.youtube.com/watch?v=${v.youtubeId}`
                    : 'https://www.youtube.com/@JustPharmacology'
                }
                target="_blank"
                rel="noreferrer"
              >
                <div className="video-thumb">
                  {v.youtubeId ? (
                    <img
                      src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="video-thumb-placeholder">
                      <PlayCircle size={40} />
                    </div>
                  )}
                  {v.duration && <span className="video-duration">{v.duration}</span>}
                </div>
                <div className="video-meta">
                  <span className="video-topic">{v.topic}</span>
                  <h3>{v.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Manoj Goyal */}
      {/* About Dr. Manoj Goyal */}
<section className="section tinted about-educator">
  <div className="container">
    <div className="section-head">
      <div>
        <div className="eyebrow">THE EDUCATOR</div>
        <h2>Guided by the vision of Dr. Manoj Goyal</h2>
      </div>
      <Link to="/about">Full profile <ArrowRight /></Link>
    </div>

    <div className="educator-grid">
      <div className="educator-card">
        <div className="educator-badge">MG</div>
        <div>
          <h3>Dr. Manoj Goyal</h3>
          <p className="educator-role">
            Associate Professor · Pharmacology Educator · Academic Leader
          </p>
          <p className="educator-org">
            Department of Pharmaceutical Sciences
            <br />
            Hemvati Nandan Bahuguna Garhwal University (HNBGU)
            <br />
            Central University · Srinagar, Uttarakhand, India
          </p>
        </div>
      </div>

      <div className="educator-body">
        <p>
          <strong>Just Pharmacology</strong> stands on the teaching philosophy of{' '}
          <strong>Dr. Manoj Goyal</strong> — a distinguished academician and
          pharmacology educator whose work has helped countless students move from
          rote memorisation to genuine understanding of how drugs act in the body.
        </p>
        <p>
          With deep roots in pharmaceutical sciences and years of dedicated classroom
          teaching, Dr. Goyal has built a reputation for clarity, clinical relevance,
          and a rare ability to simplify complex mechanisms without losing scientific
          depth. His approach — simple explanations, visual learning, and rapid
          revision — forms the foundation of this platform.
        </p>

        <h4>Academic credentials</h4>
        <ul className="edu-list">
          <li>
            <strong>Doctor of Philosophy (Ph.D.)</strong> in Pharmacy —
            Birla Institute of Technology
          </li>
          <li>
            <strong>Master of Pharmacy (Pharmacology)</strong> —
            Birla Institute of Technology, 2004
          </li>
          <li>
            <strong>Bachelor of Pharmacy (B.Pharm)</strong> —
            Lachoo Memorial College of Science and Technology
          </li>
          <li>
            <strong>Bachelor of Laws (LL.B.)</strong> —
            Jai Narain Vyas University, 2015–2018
          </li>
        </ul>

        <p style={{ marginTop: '1rem' }}>
          Beyond formal qualifications, Dr. Goyal is widely regarded by students as a
          mentor who makes pharmacology approachable, memorable, and clinically
          meaningful — the same spirit that inspires every lesson, animation, and
          revision card on this site.
        </p>

        <div className="educator-links">
          <a
            className="btn primary"
            href="https://www.youtube.com/@JustPharmacology"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube — Just Pharmacology
          </a>
          <a
            className="btn secondary"
            href="https://www.linkedin.com/in/manoj-goyal-327231ab/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Disclaimer */}
      <section className="section disclaimer-section">
        <div className="container">
          <div className="disclaimer-box">
            <h3>Disclaimer</h3>
            <p>
              This website is a student-built educational project created under the
              inspiration of <strong>Dr. Manoj Goyal</strong> and the Just Pharmacology
              teaching approach. It is intended solely for learning and revision purposes.
            </p>
            <p>
              <strong>
                Any mistake, error, or incorrect information found on this platform is the
                sole responsibility of the student developer.
              </strong>{' '}
              Dr. Manoj Goyal is not responsible for the content, accuracy, or any
              consequences arising from the use of this website.
            </p>
            <p className="disclaimer-note">
              Always cross-check critical drug information with standard textbooks,
              official guidelines, and your teachers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────── Learn ───────────────────────── */

function Learn() {
  const [filter, setFilter] = useState('general');
  const shown =
    filter === 'all' ? lessons : lessons.filter((l) => l.categoryId === filter);
  const topicGroups = shown.reduce((a, l) => {
    (a[l.topic] ??= []).push(l);
    return a;
  }, {});
  const completedCount = shown.filter((l) => isComplete(l.id)).length;

  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">MODULE 1 · GENERAL PHARMACOLOGY</div>
          <h1>General Pharmacology</h1>
          <p>
            Foundation module with structured lessons covering drug administration,
            pharmacokinetics, pharmacodynamics, receptors, dose-response, safety,
            interactions and individual variation.
          </p>
        </div>
      </div>

      <div className="module-strip">
        <div>
          <b>Module 1 progress</b>
          <span>
            {shown.length} lessons available · {completedCount} completed
          </span>
        </div>
        <Link className="btn secondary" to="/lesson/general-pharmacology-final-review">
          Final Rapid Review <ArrowRight />
        </Link>
      </div>

      <div className="filterbar">
        <button
          type="button"
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            type="button"
            className={filter === c.id ? 'selected' : ''}
            onClick={() => setFilter(c.id)}
            key={c.id}
          >
            {c.name}
          </button>
        ))}
      </div>

      {filter === 'general' ? (
        <div className="topic-groups">
          {Object.entries(topicGroups).map(([topic, items]) => (
            <section className="topic-group" key={topic}>
              <div className="topic-group-head">
                <h2>{topic}</h2>
                <span>{items.length} lessons</span>
              </div>
              <div className="lesson-grid">
                {items.map((l) => (
                  <LessonCard lesson={l} key={l.id} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="lesson-grid">
          {shown.map((l) => (
            <LessonCard lesson={l} key={l.id} />
          ))}
        </div>
      )}
    </main>
  );
}

/* ───────────────────────── Lesson ───────────────────────── */

function Lesson() {
  const { id } = useParams();
  const nav = useNavigate();
  const l = lessons.find((x) => x.id === id);
  const index = lessons.findIndex((x) => x.id === id);

  if (!l) {
    return (
      <main className="container page">
        <div className="empty">
          <h2>Lesson Not Found</h2>
          <Link to="/learn">Back to Learn</Link>
        </div>
      </main>
    );
  }

  const previous = lessons[index - 1];
  const next = lessons[index + 1];

  return (
    <main className="container lesson-page">
      <div className="breadcrumbs">
        <Link to="/learn">Learn</Link> /{' '}
        {categories.find((c) => c.id === l.categoryId)?.name} / {l.topic}
      </div>

      <div className="lesson-hero">
        <span className="pill">{l.level}</span>
        <h1>{l.title}</h1>
        <p>{l.description}</p>
        <span className="meta">
          ⏱ {l.time} min · Lesson {index + 1} of {lessons.length}
        </span>
      </div>

      <div className="lesson-layout">
        <article>
          <section className="content-card">
            <h2>🎯 Learning Objectives</h2>
            <ul>
              {safeArray(l.objectives).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>

          {safeArray(l.sections).map((s) => (
            <section className="content-card" key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.content}</p>
            </section>
          ))}

          {l.animation && (
            <section className="content-card">
              <h2>🧬 Interactive Explanation</h2>
              <Animation type={l.animation} />
            </section>
          )}

          {l.video && (
            <section className="content-card">
              <h2>🎥 Short Video</h2>
              <VideoEmbed video={l.video} />
            </section>
          )}

          {safeArray(l.drugs).length > 0 && (
            <section className="content-card">
              <h2>💊 Drug/Class Cards</h2>
              <div className="clinical-grid">
                {safeArray(l.drugs).map((d, i) => (
                  <div className="drug-mini" key={d.name || i}>
                    <b>{d.name}</b>
                    <span>{d.className || d.class || ''}</span>
                    <span>{d.mechanism || ''}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {safeArray(l.clinicalPearls).length > 0 && (
            <section className="content-card">
              <h2>🩺 Clinical Pearls</h2>
              <ul>
                {safeArray(l.clinicalPearls).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          )}

          {safeArray(l.mnemonics).length > 0 && (
            <section className="content-card">
              <h2>🧠 Mnemonics</h2>
              {safeArray(l.mnemonics).map((x) => (
                <div className="rapid" key={x}>
                  <div>{x}</div>
                </div>
              ))}
            </section>
          )}

          <section className="content-card">
            <h2>⚡ Key Points</h2>
            <div className="key-grid">
              {safeArray(l.keyPoints).map((x) => (
                <div key={x}>
                  <CheckCircle2 size={18} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="content-card rapid">
            <h2>⚡ Rapid Revision</h2>
            {safeArray(l.rapid).map((x) => (
              <div key={x}>{x}</div>
            ))}
          </section>

          {safeArray(l.quiz).length > 0 && (
            <section className="content-card">
              <h2>📝 Test Yourself</h2>
              <Quiz questions={safeArray(l.quiz)} />
            </section>
          )}

          <div className="lesson-nav">
            <button
              type="button"
              disabled={!previous}
              onClick={() => previous && nav('/lesson/' + previous.id)}
            >
              ← Previous
            </button>
            <button
              type="button"
              className="btn primary"
              onClick={() => {
                completeLesson(l.id);
                nav(next ? '/lesson/' + next.id : '/learn');
              }}
            >
              {next ? 'Complete & Next →' : 'Complete Module ✓'}
            </button>
          </div>
        </article>

        <aside className="toc">
          <b>Lesson contents</b>
          <a href="#">Objectives</a>
          {safeArray(l.sections).map((s) => (
            <a href="#" key={s.heading}>
              {s.heading}
            </a>
          ))}
          {l.animation && <a href="#">Interactive explanation</a>}
          {l.video && <a href="#">Video</a>}
          {safeArray(l.drugs).length > 0 && <a href="#">Drug cards</a>}
          {safeArray(l.clinicalPearls).length > 0 && <a href="#">Clinical pearls</a>}
          <a href="#">Key points</a>
          <a href="#">Rapid revision</a>
          {safeArray(l.quiz).length > 0 && <a href="#">Quiz</a>}
        </aside>
      </div>
    </main>
  );
}

/* ───────────────────────── Revision ───────────────────────── */

function Revision() {
  const cards = lessons.flatMap((l) =>
    safeArray(l.rapid).map((r, i) => ({
      key: l.id + '-' + i,
      topic: l.topic,
      title: l.title,
      text: r,
    }))
  );

  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">FAST REVIEW</div>
          <h1>Rapid Revision</h1>
          <p>Compact cards for quick recall before class, exams or clinical discussions.</p>
        </div>
      </div>
      {cards.length === 0 ? (
        <div className="empty">No revision cards yet.</div>
      ) : (
        <div className="revision-grid">
          {cards.map((c) => (
            <div className="revision-card" key={c.key}>
              <span>{c.topic}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

/* ───────────────────────── Animations ───────────────────────── */

function Animations() {
  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">VISUAL LEARNING LAB</div>
          <h1>Interactive Animations</h1>
          <p>Reusable animation components can be attached to any future lesson.</p>
        </div>
      </div>
      <div className="animation-stack">
        <Animation type="drug-receptor" />
        <Animation type="adme" />
        <Animation type="agonist-antagonist" />
      </div>
    </main>
  );
}

/* ───────────────────────── Videos ───────────────────────── */

function Videos() {
  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">VIDEO LEARNING</div>
          <h1>Short Video Lessons</h1>
          <p>Connect lesson content to the Just Pharmacology YouTube channel.</p>
        </div>
      </div>
      <div className="video-placeholder">
        <PlayCircle size={48} />
        <h2>Videos can be added lesson-by-lesson</h2>
        <p>
          The content model supports a YouTube ID for every lesson. Add the real video ID
          when available.
        </p>
        <a
          className="btn primary"
          href="https://www.youtube.com/@JustPharmacology"
          target="_blank"
          rel="noreferrer"
        >
          Open YouTube Channel
        </a>
      </div>
    </main>
  );
}

/* ───────────────────────── Quiz Center ───────────────────────── */

function QuizPage() {
  const questions = lessons.flatMap((l) => safeArray(l.quiz));

  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">PRACTICE</div>
          <h1>Quiz Center</h1>
          <p>Practice the questions currently available in the demo content.</p>
        </div>
      </div>
      {questions.length === 0 ? (
        <div className="empty">No quiz questions yet.</div>
      ) : (
        <Quiz questions={questions} />
      )}
    </main>
  );
}

/* ───────────────────────── Search ───────────────────────── */

function Search() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const s = q.toLowerCase().trim();
    if (!s) return [];
    return lessons.filter((l) =>
      [l.title, l.topic, l.description, ...safeArray(l.keyPoints)]
        .join(' ')
        .toLowerCase()
        .includes(s)
    );
  }, [q]);

  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">FIND ANYTHING</div>
          <h1>Search</h1>
          <p>Search lessons, topics and key concepts.</p>
        </div>
      </div>
      <input
        className="searchbox"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Try: receptors, absorption, pharmacokinetics..."
      />
      {q.trim() && (
        <div className="search-results">
          {results.map((l) => (
            <LessonCard lesson={l} key={l.id} />
          ))}
          {!results.length && <div className="empty">No matching lessons.</div>}
        </div>
      )}
    </main>
  );
}

/* ───────────────────────── About ───────────────────────── */

function About() {
  return (
    <main className="container page">
      <div className="profile">
        <div className="profile-badge">MG</div>
        <div>
          <div className="eyebrow">ABOUT THE INITIATIVE</div>
          <h1>Just Pharmacology</h1>
          <p className="lead">
            An educational initiative shaped by the teaching vision of{' '}
            <strong>Dr. Manoj Goyal</strong> — created to help students truly
            <em> understand</em> pharmacology through clear explanations,
            animation-based learning, and rapid revision of essential drug concepts.
          </p>

          <h2>Dr. Manoj Goyal</h2>
          <p>
            Dr. Manoj Goyal is a respected academician, pharmacology educator, and
            pharmaceutical sciences professional with a long-standing commitment to
            excellence in higher education. He currently serves as{' '}
            <strong>Associate Professor</strong> in the Department of Pharmaceutical
            Sciences at <strong>Hemvati Nandan Bahuguna Garhwal University (HNBGU)</strong>,
            a Central University in Srinagar, Uttarakhand, India.
          </p>
          <p>
            Known for his lucid teaching style and deep subject mastery, Dr. Goyal has
            guided generations of pharmacy and medical students toward a clearer,
            more confident grasp of drug action, mechanisms, and clinical application.
            His emphasis on conceptual clarity over pure memorisation continues to
            influence how pharmacology is taught and learned.
          </p>

          <h3>Academic journey</h3>
          <ul>
            <li>
              <strong>Doctor of Philosophy (Ph.D.)</strong> — Pharmacy,
              Birla Institute of Technology
            </li>
            <li>
              <strong>Master’s Degree (Pharmacology)</strong> —
              Birla Institute of Technology, 2004
            </li>
            <li>
              <strong>Bachelor of Pharmacy (B.Pharm)</strong> —
              Lachoo Memorial College of Science and Technology
            </li>
            <li>
              <strong>Bachelor of Laws (LL.B.)</strong> —
              Jai Narain Vyas University, 2015–2018
            </li>
          </ul>

          <h3>Teaching philosophy</h3>
          <p>
            Dr. Goyal believes that pharmacology should not remain a list of facts to
            be memorised under exam pressure. Instead, it should be experienced —
            through simple language, visual mechanisms, and structured rapid revision —
            so that students carry lasting understanding into the clinic and beyond.
          </p>
          <p>
            This platform exists as a student-built tribute to that philosophy: an
            attempt to extend his approach into an interactive digital space for
            learners everywhere.
          </p>

          <h3>Connect</h3>
          <div className="educator-links" style={{ marginTop: '0.75rem' }}>
            <a
              className="btn primary"
              href="https://www.youtube.com/@JustPharmacology"
              target="_blank"
              rel="noreferrer"
            >
              YouTube — Just Pharmacology
            </a>
            <a
              className="btn secondary"
              href="https://www.linkedin.com/in/manoj-goyal-327231ab/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn — Dr. Manoj Goyal
            </a>
          </div>

          <div className="disclaimer-box" style={{ marginTop: '2.5rem' }}>
            <h3>Disclaimer</h3>
            <p>
              This website is a student-built educational project created under the
              inspiration of Dr. Manoj Goyal and the Just Pharmacology teaching
              approach. It is intended solely for learning and revision.
            </p>
            <p>
              <strong>
                Any mistake, error, or incorrect information found on this platform is
                the sole responsibility of the student developer.
              </strong>{' '}
              Dr. Manoj Goyal is not responsible for the content, accuracy, or any
              consequences arising from the use of this website.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
/* ───────────────────────── App ───────────────────────── */

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route path="/revision" element={<Revision />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
