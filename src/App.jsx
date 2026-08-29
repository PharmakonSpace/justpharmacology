import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import {
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Crown,
  GraduationCap,
  Medal,
  ExternalLink,
  Globe,
  Quote,
  Sparkles,
  Heart,
  Lightbulb,
  Users,
  Building2,
  Star,
  Play,
  FolderTree,
} from 'lucide-react';
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

/* ───────────────────────── Recent videos ───────────────────────── */
function YoutubeIcon({ className, size, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
const recentVideos = [
  {
    id: '1',
    title: '',
    youtubeId: '0XbGRhGVVDY',
    duration: '',
    topic: '',
  }, 
  {
    id: '2',
    title: '',
    youtubeId: 'KRKvPxiVTmw',
    duration: '',
    topic: '',
  },
  {
    id: '3',
    title: '',
    youtubeId: '7MUrNkgzjkU',
    duration: '',
    topic: '',
  },
];

/* ───────────────────────── Dr. Goyal tribute data ───────────────────────── */

const drGoyalQuotes = [
  {
    quote:
      'Pharmacology is not an intimidating directory of chemicals to memorize—it is the fascinating science of molecular keys unlocking living cells to relieve human suffering.',
    context: 'On the true spirit of pharmacology',
  },
  {
    quote:
      'Understanding receptor signaling and molecular pathways makes memorization obsolete.',
    context: 'Core teaching belief',
  },
  {
    quote:
      'When you understand how Gs, Gi, and Gq regulate secondary messengers, hundreds of drugs fall into place logically.',
    context: 'On mechanisms over lists',
  },
  {
    quote:
      'Simple explanations, visual learning, and rapid revision — that is how pharmacology becomes clear and lasting.',
    context: 'Just Pharmacology philosophy',
  },
];

const degreesAndQualifications = [
  {
    degree: 'Doctor of Philosophy (Ph.D.) — Pharmacy',
    institution: 'Birla Institute of Technology (BIT Mesra)',
    field: 'Pharmaceutical Sciences',
    year: '',
    highlight:
      'Doctoral research grounding a career devoted to rigorous, student-centred pharmacology education.',
  },
  {
    degree: 'Master of Pharmacy (Pharmacology)',
    institution: 'Birla Institute of Technology (BIT Mesra)',
    field: 'Pharmacology',
    year: '2004',
    highlight: 'Advanced training in drug action, mechanisms, and therapeutic reasoning.',
  },
  {
    degree: 'Bachelor of Pharmacy (B.Pharm)',
    institution: 'Lachoo Memorial College of Science and Technology',
    field: 'Pharmacy',
    year: '',
    highlight: 'Foundation in pharmaceutical sciences and professional practice.',
  },
  {
    degree: 'Bachelor of Laws (LL.B.)',
    institution: 'Jai Narain Vyas University',
    field: 'Law · Pharma Jurisprudence',
    year: '2015–2018',
    highlight:
      'Legal literacy supporting ethical, regulatory, and professional dimensions of pharmacy education.',
  },
];

const teachingPillars = [
  {
    step: 1,
    title: 'Concept first',
    desc: 'Begin with the big idea — what the drug does in the body — before names and lists.',
    icon: Lightbulb,
  },
  {
    step: 2,
    title: 'See the mechanism',
    desc: 'Visual pathways and animations so receptor and messenger logic becomes intuitive.',
    icon: Sparkles,
  },
  {
    step: 3,
    title: 'Connect clinically',
    desc: 'Link action, effect, side effect, and use so knowledge is usable at the bedside.',
    icon: Heart,
  },
  {
    step: 4,
    title: 'Revise with purpose',
    desc: 'Compact rapid revision so high-yield points stick for exams and practice.',
    icon: CheckCircle2,
  },
];

const studentTributes = [
  {
    name: 'Aman Sharma',
    role: 'Pharm.D Clinical Pharmacist',
    batch: 'Mentored',
    institution: 'Inspired by classroom teaching',
    badge: 'Gratitude',
    message: `Sir's passion for teaching is contagious. He didn't just teach us pharmacology for exams; he taught us the rationale behind saving patient lives at the bedside. This portal is our humble tribute to his legendary classroom pedagogy.`,
},
  {
    name: 'Sneha Rawat',
    role: 'Senior Research Scientist',
    batch: 'Online',
    institution: 'YouTube · @JustPharmacology',
    badge: 'Respect',
    message:
      'Clear lectures, calm teaching, and mechanisms that finally make sense. Thank you, Sir.',
  },
];

const signatureLectures = [
  {
    tag: 'General Pharmacology',
    title: 'Core concepts explained simply',
    desc: '',
    link: 'https://www.youtube.com/watch?v=8AOAt2zKa4g',
  },
  {
    tag: 'Mechanisms',
    title: '',
    desc: 'Visual, structured teaching of how drugs act — the heart of Dr. Goyal’s style.',
    link: 'https://www.youtube.com/watch?v=kgKBICGXjW4',
  },
];

/* ───────────────────────── Home ───────────────────────── */

function Home() {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const [mentorActiveTab, setMentorActiveTab] = useState('letter');

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

      {/* ═══ GRAND TRIBUTE — Dr. Manoj Goyal ═══ */}
<section className="section tribute-section">
  <div className="container tribute-wrap">
    <div className="tribute-panel">
      {/* Ribbon */}
      <div className="tribute-ribbon">
        <div className="tribute-ribbon-badge">
          <Crown size={16} />
          <span>Dedicated with Deepest Respect &amp; Gratitude by his Students</span>
        </div>
        <div className="tribute-ribbon-meta">
          <span>Associate Professor of Pharmacology</span>
          <span className="dot" />
          <span>HNBGU Central University</span>
        </div>
      </div>

      {/* Profile + quotes */}
      <div className="tribute-main">
        <div className="tribute-profile">
          <div className="tribute-crest-wrap">
            <div className="tribute-crest">
              <div className="tribute-crest-inner">
                <GraduationCap size={48} />
                <div className="tribute-crest-name">Dr. Manoj Goyal</div>
                <div className="tribute-crest-deg">Ph.D. · M.Pharm · LL.B</div>
              </div>
            </div>
            <div className="tribute-medal">
              <Medal size={18} />
            </div>
          </div>

          <h2 className="tribute-name">Dr. Manoj Goyal</h2>
          <p className="tribute-title">Distinguished Pharmacologist &amp; Master Educator</p>
          <p className="tribute-org">
            Department of Pharmaceutical Sciences, Hemvati Nandan Bahuguna Garhwal
            University (Central University), Srinagar, Uttarakhand, India
          </p>

          <div className="tribute-social">
            <a
              href="https://www.youtube.com/@JustPharmacology"
              target="_blank"
              rel="noreferrer"
              className="tribute-btn tribute-btn-yt"
            >
              <YoutubeIcon size={16} />
              @JustPharmacology
              <ExternalLink size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-goyal-327231ab/"
              target="_blank"
              rel="noreferrer"
              className="tribute-btn tribute-btn-li"
            >
              <Globe size={16} />
              LinkedIn
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="tribute-right">
          <div className="tribute-quote-card">
            <div className="tribute-quote-head">
              <span>
                <Quote size={14} /> Words of Wisdom from Dr. Manoj Goyal
              </span>
              <span>
                {activeQuoteIdx + 1} of {drGoyalQuotes.length}
              </span>
            </div>
            <p className="tribute-quote-text">
              &ldquo;{drGoyalQuotes[activeQuoteIdx].quote}&rdquo;
            </p>
            <p className="tribute-quote-ctx">
              <Sparkles size={14} /> {drGoyalQuotes[activeQuoteIdx].context}
            </p>
            <div className="tribute-quote-nav">
              <div className="tribute-dots">
                {drGoyalQuotes.map((_, qIdx) => (
                  <button
                    key={qIdx}
                    type="button"
                    className={activeQuoteIdx === qIdx ? 'dot active' : 'dot'}
                    onClick={() => setActiveQuoteIdx(qIdx)}
                  />
                ))}
              </div>
              <div className="tribute-quote-btns">
                <button
                  type="button"
                  onClick={() =>
                    setActiveQuoteIdx((p) =>
                      p === 0 ? drGoyalQuotes.length - 1 : p - 1
                    )
                  }
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  className="next"
                  onClick={() =>
                    setActiveQuoteIdx((p) =>
                      p === drGoyalQuotes.length - 1 ? 0 : p + 1
                    )
                  }
                >
                  Next Quote →
                </button>
              </div>
            </div>
          </div>

          <div className="tribute-stats">
            {[
              { v: '20+ Yrs', l: 'Academic Pedagogy', c: '#fbbf24' },
              { v: 'BIT Mesra', l: 'Ph.D. & M.Pharm', c: '#34d399' },
              { v: 'LL.B.', l: 'Pharma Jurisprudence', c: '#22d3ee' },
              { v: 'Central Univ.', l: 'HNBGU Faculty', c: '#fcd34d' },
              { v: 'YouTube', l: 'Just Pharmacology', c: '#f87171' },
              { v: 'Mentor', l: 'Students worldwide', c: '#c084fc' },
            ].map((s) => (
              <div className="tribute-stat" key={s.l}>
                <div className="tribute-stat-v" style={{ color: s.c }}>
                  {s.v}
                </div>
                <div className="tribute-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tribute-tabs-bar">
        <span className="tribute-tabs-label">Explore Dr. Goyal&apos;s profile &amp; teachings</span>
        <span className="tribute-tabs-hub">Interactive Mentor Hub</span>
      </div>
      <div className="tribute-tabs">
        {[
          { id: 'letter', label: 'Personal Welcome Letter', Icon: Heart },
          { id: 'journey', label: 'Academic Degrees', Icon: GraduationCap },
          { id: 'pedagogy', label: '4-Step Teaching Philosophy', Icon: Lightbulb },
          { id: 'tributes', label: 'Student Gratitude', Icon: Users },
          { id: 'videos', label: 'Signature Lectures', Icon: YoutubeIcon },
        ].map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            className={mentorActiveTab === id ? 'tab active' : 'tab'}
            onClick={() => setMentorActiveTab(id)}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {mentorActiveTab === 'letter' && (
        <div className="tribute-panel-box">
          <div className="tribute-panel-head">
            <span>
              <Heart size={16} className="rose" /> A message in the spirit of Dr. Manoj
              Goyal&apos;s teaching
            </span>
            <span>HNBGU · Pharmaceutical Sciences</span>
          </div>
          <p className="tribute-letter-quote">
            &ldquo;Pharmacology is not an intimidating directory of chemicals to
            memorize—it is the fascinating science of molecular keys unlocking living cells
            to relieve human suffering.&rdquo;
          </p>
          <p>Dear Students, Doctors, Pharmacists, and Healthcare Aspirants,</p>
          <p>
            Welcome to <strong>Just Pharmacology</strong>. This space is built under the
            inspiration of Dr. Manoj Goyal&apos;s classroom approach — clarity first,
            mechanisms next, revision with purpose.
          </p>
          <p>
            When receptor signaling and pathways are understood, lists of drugs stop being a
            burden and start forming a logical map. That is the spirit we try to honour here.
          </p>
          <div className="tribute-letter-foot">
            <div>
              <div className="sign">Dr. Manoj Goyal</div>
              <div className="sign-sub">
                Ph.D., M.Pharm (BIT), B.Pharm, LL.B · Associate Professor of Pharmacology
              </div>
            </div>
            <Link to="/learn" className="tribute-btn tribute-btn-start">
              <FolderTree size={16} />
              Start Learning
            </Link>
          </div>
        </div>
      )}

      {mentorActiveTab === 'journey' && (
        <div className="tribute-degrees">
          {degreesAndQualifications.map((deg, idx) => (
            <div className="tribute-degree" key={idx}>
              <div className="tribute-degree-top">
                <div>
                  <span className="num">Academic Qualification 0{idx + 1}</span>
                  <h4>{deg.degree}</h4>
                </div>
                {deg.year && <span className="year">{deg.year}</span>}
              </div>
              <div className="inst">
                <Building2 size={14} /> {deg.institution}
              </div>
              <div className="field">
                <strong>Specialization:</strong> {deg.field}
              </div>
              <p>{deg.highlight}</p>
            </div>
          ))}
        </div>
      )}

      {mentorActiveTab === 'pedagogy' && (
        <div className="tribute-pillars">
          {teachingPillars.map((tp) => {
            const Icon = tp.icon;
            return (
              <div className="tribute-pillar" key={tp.step}>
                <div className="pillar-top">
                  <span className="phase">PHASE 0{tp.step}</span>
                  <span className="pillar-icon">
                    <Icon size={16} />
                  </span>
                </div>
                <h4>{tp.title}</h4>
                <p>{tp.desc}</p>
                <div className="pillar-foot">
                  <CheckCircle2 size={14} /> Core classroom tenet
                </div>
              </div>
            );
          })}
        </div>
      )}

      {mentorActiveTab === 'tributes' && (
        <div className="tribute-wall">
          {studentTributes.map((st, sIdx) => (
            <div className="tribute-card-stu" key={sIdx}>
              <div className="stu-head">
                <div className="stu-avatar">{st.name.charAt(0)}</div>
                <div>
                  <h5>{st.name}</h5>
                  <p>{st.role}</p>
                </div>
                <span className="batch">{st.batch}</span>
              </div>
              <p className="stu-msg">&ldquo;{st.message}&rdquo;</p>
              <div className="stu-foot">
                <span>{st.institution}</span>
                <span className="badge">
                  <Star size={12} /> {st.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {mentorActiveTab === 'videos' && (
        <div className="tribute-videos">
          <div className="tribute-videos-banner">
            <div>
              <h4>
                <YoutubeIcon size={20} /> Signature lectures · @JustPharmacology
              </h4>
              <p>
                Animated, clear pharmacology teaching in the spirit of Dr. Goyal&apos;s
                classroom.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@JustPharmacology"
              target="_blank"
              rel="noreferrer"
              className="tribute-btn tribute-btn-yt"
            >
              <Play size={14} /> Visit channel <ExternalLink size={12} />
            </a>
          </div>
          <div className="tribute-lec-grid">
            {signatureLectures.map((lec, lIdx) => (
              <div className="tribute-lec" key={lIdx}>
                <span className="tag">{lec.tag}</span>
                <h5>{lec.title}</h5>
                <p>{lec.desc}</p>
                <a href={lec.link} target="_blank" rel="noreferrer">
                  <Play size={14} /> Watch on YouTube <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* YouTube footer banner */}
      <div className="tribute-yt-banner">
        <div>
          <div className="yt-title">
            <YoutubeIcon size={22} /> Just Pharmacology on YouTube
          </div>
          <p>
            Free, high-quality pharmacology teaching inspired by{' '}
            <strong>Dr. Manoj Goyal</strong> — for medical, pharmacy, nursing, and healthcare
            students.
          </p>
        </div>
        <a
          href="https://www.youtube.com/@JustPharmacology"
          target="_blank"
          rel="noreferrer"
          className="tribute-btn tribute-btn-yt"
        >
          <Play size={16} /> Subscribe &amp; Watch <ExternalLink size={14} />
        </a>
      </div>
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
      <div className="profile profile--tribute">
        <div className="profile-badge">MG</div>
        <div>
          <div className="eyebrow">IN HONOUR OF</div>
          <h1>Dr. Manoj Goyal</h1>
          <p className="lead">
            Associate Professor · Pharmacology Educator · The mind behind the clarity of
            Just Pharmacology
          </p>
          <p>
            This website exists because of <strong>Dr. Manoj Goyal</strong> — a
            distinguished academician and educator whose teaching made pharmacology
            understandable for countless students.
          </p>
          <p>
            As Associate Professor in the Department of Pharmaceutical Sciences at{' '}
            <strong>Hemvati Nandan Bahuguna Garhwal University (HNBGU)</strong>, a Central
            University in Srinagar, Uttarakhand, he has devoted years to shaping how
            students understand drug action, mechanisms, and clinical reasoning.
          </p>

          <h2>Academic journey</h2>
          <ul>
            <li>
              <strong>Ph.D. (Pharmacy)</strong> — Birla Institute of Technology
            </li>
            <li>
              <strong>M.Pharm (Pharmacology)</strong> — Birla Institute of Technology, 2004
            </li>
            <li>
              <strong>B.Pharm</strong> — Lachoo Memorial College of Science and Technology
            </li>
            <li>
              <strong>LL.B.</strong> — Jai Narain Vyas University, 2015–2018
            </li>
          </ul>

          <div className="educator-links" style={{ marginTop: '1.25rem' }}>
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
              LinkedIn
            </a>
          </div>

          <div className="disclaimer-box" style={{ marginTop: '2.5rem' }}>
            <h3>Disclaimer</h3>
            <p>
              This website is a student-built educational project created under the
              inspiration of Dr. Manoj Goyal. Any mistake or incorrect information is the
              sole responsibility of the student developer. Dr. Manoj Goyal is not
              responsible for the content of this platform.
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
