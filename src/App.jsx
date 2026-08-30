import { Routes, Route, Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
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
  Search as SearchIcon,
  Filter,
  Clock,
  BookOpen,
  Layers,
  Tv,
  HelpCircle,
  Shuffle,
  RotateCcw,
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
import NewArrivalsSection from './components/home/NewArrivalsSection';
import { getModulesWithStats, getRecentCurriculumVideos, getAllCurriculumVideos, getNewArrivals } from './utils/contentUtils';

/* ───────────────────────── helpers ───────────────────────── */

const safeArray = (v) => (Array.isArray(v) ? v : []);

/* ───────────────────────── YouTube icon helper ───────────────────────── */
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
  const modulesWithStats = useMemo(() => getModulesWithStats(), []);
  const recentVideos = useMemo(() => getRecentCurriculumVideos(6), []);
  const allCurriculumVideos = useMemo(() => getAllCurriculumVideos(), []);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-update-pill">
              <span className="pulse-dot" />
              <span>
                <strong>Curriculum Update:</strong> New module &ldquo;Healthcare Psychology&rdquo; &amp; clinical topics added!
              </span>
              <a href="#new-arrivals">Explore what&apos;s new ↓</a>
            </div>
            <div className="eyebrow">INTERACTIVE PHARMACOLOGY LEARNING</div>
            <h1>
              Understand Pharmacology.
              <br />
              <span>Don&apos;t Just Memorize It.</span>
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
              <a className="btn secondary" href="#new-arrivals">
                <Sparkles size={16} /> What&apos;s New
              </a>
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

      {/* Dynamic New Arrivals & Curriculum Updates Section */}
      <NewArrivalsSection />

      {/* Learning path */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">CURRICULUM MODULES</div>
              <h2>Build your pharmacology foundation</h2>
              <p className="section-sub">
                Explore available subfolders with active interactive lessons or preview the upcoming curriculum.
              </p>
            </div>
            <Link to="/learn">
              View all modules <ArrowRight />
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((c) => {
              const modStat = modulesWithStats.find(
                (m) => m.id === c.id || (c.id === 'cardio' && m.id === 'cardiovascular') || (c.id === 'gi' && m.id === 'gastrointestinal')
              );
              const lessonCount = modStat?.lessonsCount || (c.id === 'general' ? 13 : c.id === 'healthcare_psychology' ? 1 : 0);
              const isAvailable = lessonCount > 0;
              const isNewMod = c.isNew || modStat?.isNew;

              return (
                <Link
                  className={`category-card ${isNewMod ? 'is-new-cat' : ''}`}
                  to={`/learn?category=${c.id}`}
                  key={c.id}
                >
                  <div className="cat-badge-wrap">
                    <div className="cat-icon">{c.icon}</div>
                    {isNewMod && (
                      <span className="pill-new">
                        <Sparkles size={10} /> NEW MODULE
                      </span>
                    )}
                    {!isNewMod && isAvailable && (
                      <span className="status-pill-avail">{lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}</span>
                    )}
                    {!isAvailable && (
                      <span className="level-badge">Coming soon</span>
                    )}
                  </div>
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                  <span>{isAvailable ? 'Explore Lessons →' : 'View Overview →'}</span>
                </Link>
              );
            })}
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

      {/* Recent Videos - Synchronized with All Lessons and New Arrivals */}
      <section className="section" id="recent-videos">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <PlayCircle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
                AUTOMATIC CURRICULUM SYNC
              </div>
              <h2>Recent Videos &amp; Lesson Lectures</h2>
              <p className="section-sub">
                Watch focused video explanations automatically synchronized across all pharmacology modules and newly updated lessons.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link className="btn primary" to="/videos">
                Explore Video Library ({allCurriculumVideos.length}) <ArrowRight size={16} />
              </Link>
              <a
                className="btn secondary"
                href="https://www.youtube.com/@JustPharmacology"
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeIcon size={16} /> Channel <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="video-grid">
            {recentVideos.map((v) => (
              <div key={v.id} className="video-card">
                <a
                  href={
                    v.youtubeId
                      ? `https://www.youtube.com/watch?v=${v.youtubeId}`
                      : 'https://www.youtube.com/@JustPharmacology'
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="video-thumb-link"
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
                    <div className="video-play-overlay">
                      <div className="play-btn-circle">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                    {v.isNew && (
                      <span className="video-new-pill">✨ NEW ARRIVAL</span>
                    )}
                    {v.duration && <span className="video-duration">{v.duration}</span>}
                  </div>
                </a>
                <div className="video-meta">
                  <div className="video-meta-top">
                    <span className="video-topic">{v.topic || v.categoryName || 'Pharmacology'}</span>
                    {v.isNew && <span className="badge-new-tiny">NEW</span>}
                  </div>
                  <h3>
                    <a
                      href={
                        v.youtubeId
                          ? `https://www.youtube.com/watch?v=${v.youtubeId}`
                          : 'https://www.youtube.com/@JustPharmacology'
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {v.title}
                    </a>
                  </h3>
                  {v.description && (
                    <p className="video-card-desc-clamp">{v.description}</p>
                  )}
                  <div className="video-card-actions">
                    {v.lessonId ? (
                      <Link to={`/lesson/${v.lessonId}`} className="video-lesson-quicklink">
                        <BookOpen size={13} />
                        <span>Go to Lesson Notes</span>
                        <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <a
                        href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="video-lesson-quicklink"
                      >
                        <Play size={13} />
                        <span>Watch on YouTube</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [filter, setFilter] = useState(initialCat);
  const newArrivals = useMemo(() => getNewArrivals(), []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilter(cat);
    }
  }, [searchParams]);

  const handleFilterChange = (newCat) => {
    setFilter(newCat);
    if (newCat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: newCat });
    }
  };

  const shown =
    filter === 'all'
      ? lessons
      : lessons.filter(
          (l) =>
            l.categoryId === filter ||
            (filter === 'cardio' && l.categoryId === 'cardiovascular') ||
            (filter === 'gi' && l.categoryId === 'gastrointestinal')
        );

  const topicGroups = shown.reduce((a, l) => {
    const t = l.topic || 'General Topics';
    (a[t] ??= []).push(l);
    return a;
  }, {});

  // Sort topic groups: topics with new/recent lessons appear first!
  const sortedTopicEntries = Object.entries(topicGroups).sort(([topicA, itemsA], [topicB, itemsB]) => {
    const aHasNew = itemsA.some((item) => item.isNew || item.badge === 'NEW' || item.categoryId === 'healthcare_psychology');
    const bHasNew = itemsB.some((item) => item.isNew || item.badge === 'NEW' || item.categoryId === 'healthcare_psychology');
    if (aHasNew && !bHasNew) return -1;
    if (!aHasNew && bHasNew) return 1;
    return 0;
  });

  const currentCategory = categories.find((c) => c.id === filter);
  const completedCount = shown.filter((l) => isComplete(l.id)).length;

  return (
    <main className="container page">
      <div className="page-head">
        <div>
          <div className="eyebrow">
            {filter === 'all'
              ? 'FULL CURRICULUM'
              : currentCategory?.isNew
              ? '✨ NEW MODULE ADDED'
              : 'MODULE OVERVIEW'}
          </div>
          <h1>
            {filter === 'all'
              ? 'All Pharmacology Lessons'
              : currentCategory?.name || 'Pharmacology Lessons'}
          </h1>
          <p>
            {filter === 'all'
              ? 'Explore all active lessons, clinical empathy frameworks, and interactive pharmacology mechanisms across subfolders.'
              : currentCategory?.description ||
                'Structured lessons covering high-yield pharmacology principles and clinical applications.'}
          </p>
        </div>
      </div>

      {/* ── TOP ACCESS: Recently Added & New Topics ── */}
      {newArrivals.length > 0 && filter === 'all' && (
        <section className="learn-recent-top-banner">
          <div className="learn-recent-top-head">
            <div className="learn-recent-top-title">
              <span className="badge-new-pill">✨ RECENTLY ADDED &amp; UPDATED</span>
              <h3>Quick Access: Latest Curriculum Topics</h3>
            </div>
            <span className="learn-recent-top-sub">
              Access new topics immediately without scrolling through all categories
            </span>
          </div>

          <div className="learn-recent-chips-grid">
            {newArrivals.map((item) => (
              <Link
                key={item.id}
                to={`/lesson/${item.id}`}
                className="learn-recent-chip-card"
              >
                <div className="learn-recent-chip-icon">
                  <BookOpen size={18} />
                </div>
                <div className="learn-recent-chip-body">
                  <div className="learn-recent-chip-topic">
                    {item.topic || item.categoryId}
                    <span className="badge-new-tiny">NEW</span>
                  </div>
                  <div className="learn-recent-chip-title">{item.title}</div>
                  <div className="learn-recent-chip-meta">
                    <span>{item.level || 'Beginner'}</span>
                    <span>·</span>
                    <span>{item.time || 10} min read</span>
                    {item.video && <span>· 🎬 Video</span>}
                  </div>
                </div>
                <ArrowRight size={16} className="learn-recent-chip-arrow" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="module-strip">
        <div>
          <b>Progress</b>
          <span>
            {shown.length} {shown.length === 1 ? 'lesson' : 'lessons'} available · {completedCount} completed
          </span>
        </div>
        <Link className="btn secondary" to="/revision">
          Rapid Revision <ArrowRight />
        </Link>
      </div>

      <div className="filterbar">
        <button
          type="button"
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All ({lessons.length})
        </button>
        {categories.map((c) => {
          const catLessons = lessons.filter(
            (l) =>
              l.categoryId === c.id ||
              (c.id === 'cardio' && l.categoryId === 'cardiovascular') ||
              (c.id === 'gi' && l.categoryId === 'gastrointestinal')
          );
          return (
            <button
              type="button"
              className={filter === c.id ? 'selected' : ''}
              onClick={() => handleFilterChange(c.id)}
              key={c.id}
            >
              {c.icon} {c.name} {catLessons.length > 0 && `(${catLessons.length})`}
              {c.isNew && ' ✨'}
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <div className="empty">
          <h3>Lessons for this module are coming soon!</h3>
          <p>
            This module is part of the Just Pharmacology roadmap. When new lessons are added to
            its subfolder, they will appear here and on the Home page automatically.
          </p>
          <button
            type="button"
            className="btn primary"
            style={{ marginTop: '16px' }}
            onClick={() => handleFilterChange('all')}
          >
            View Available Lessons
          </button>
        </div>
      ) : sortedTopicEntries.length > 0 ? (
        <div className="topic-groups">
          {sortedTopicEntries.map(([topic, items]) => {
            const hasNew = items.some((i) => i.isNew || i.badge === 'NEW' || i.categoryId === 'healthcare_psychology');
            return (
              <section className="topic-group" key={topic}>
                <div className="topic-group-head">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2>{topic}</h2>
                    {hasNew && <span className="badge-new-tiny">RECENT</span>}
                  </div>
                  <span>
                    {items.length} {items.length === 1 ? 'lesson' : 'lessons'}
                  </span>
                </div>
                <div className="lesson-grid">
                  {items.map((l) => (
                    <LessonCard lesson={l} key={l.id} />
                  ))}
                </div>
              </section>
            );
          })}
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
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyNew, setOnlyNew] = useState(false);

  // Automatically gathered all videos from across all lessons/modules
  const allVideos = useMemo(() => getAllCurriculumVideos(), []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: allVideos.length };
    allVideos.forEach((v) => {
      counts[v.categoryId] = (counts[v.categoryId] || 0) + 1;
    });
    return counts;
  }, [allVideos]);

  // Filtered videos
  const filteredVideos = useMemo(() => {
    return allVideos.filter((v) => {
      if (selectedCat !== 'all' && v.categoryId !== selectedCat) return false;
      if (onlyNew && !v.isNew) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = v.title.toLowerCase().includes(q);
        const matchTopic = v.topic.toLowerCase().includes(q);
        const matchLesson = v.lessonTitle.toLowerCase().includes(q);
        const matchDesc = v.description.toLowerCase().includes(q);
        if (!matchTitle && !matchTopic && !matchLesson && !matchDesc) return false;
      }
      return true;
    });
  }, [allVideos, selectedCat, onlyNew, searchQuery]);

  const newVideosCount = useMemo(() => allVideos.filter((v) => v.isNew).length, [allVideos]);

  return (
    <main className="container page">
      <div className="video-hub-header">
        <div className="page-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">CURRICULUM VIDEO LIBRARY</div>
          <h1>Video Lectures & Tutorials</h1>
          <p>
            Watch all clinical and mechanistic video tutorials from across every pharmacology topic in one place.
            Newly arrived lectures are automatically prioritized at the top.
          </p>
        </div>

        <div className="video-stats-banner">
          <div className="video-stat-item">
            <strong>{allVideos.length}</strong>
            <span>Lectures Available</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />
          <div className="video-stat-item">
            <strong>{newVideosCount}</strong>
            <span>New Arrivals</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />
          <a
            className="btn outline"
            href="https://www.youtube.com/@JustPharmacology"
            target="_blank"
            rel="noreferrer"
            style={{ padding: '8px 12px', fontSize: '12px' }}
          >
            <ExternalLink size={14} /> YouTube Channel
          </a>
        </div>
      </div>

      <div className="video-controls-bar">
        <div className="video-search-wrap">
          <SearchIcon size={18} className="video-search-icon" />
          <input
            type="text"
            className="video-search-input"
            placeholder="Search videos by title, topic, or keyword (e.g., SPIKES, Absorption, Bioavailability)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="video-filter-chips">
          <button
            className={`video-chip ${selectedCat === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCat('all')}
          >
            <Layers size={14} /> All Modules
            <span className="video-chip-badge">{categoryCounts['all'] || 0}</span>
          </button>

          {categories.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                className={`video-chip ${selectedCat === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.name}
                <span className="video-chip-badge">{count}</span>
              </button>
            );
          })}

          {newVideosCount > 0 && (
            <button
              className={`video-chip ${onlyNew ? 'active' : ''}`}
              onClick={() => setOnlyNew(!onlyNew)}
              style={{ marginLeft: 'auto', border: onlyNew ? '1px solid #14b8a6' : '1px dashed #14b8a6' }}
            >
              <Sparkles size={14} style={{ color: onlyNew ? 'white' : '#0d9488' }} />
              New Arrivals Only
              <span className="video-chip-badge">{newVideosCount}</span>
            </button>
          )}
        </div>
      </div>

      {filteredVideos.length === 0 ? (
        <div className="empty">
          <Tv size={36} style={{ color: '#16807d', marginBottom: '12px' }} />
          <h3>No videos match your filter</h3>
          <p>Try clearing your search query or switching to All Modules.</p>
          <button
            className="btn primary"
            onClick={() => {
              setSelectedCat('all');
              setSearchQuery('');
              setOnlyNew(false);
            }}
            style={{ marginTop: '14px' }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="video-grid-layout">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              className={`video-lecture-card ${vid.isNew ? 'is-new-video' : ''}`}
            >
              <div className="video-player-container">
                <VideoEmbed video={{ youtubeId: vid.youtubeId, title: vid.title }} />
              </div>
              <div className="video-content-body">
                <div className="video-tag-row">
                  <span className="video-topic-tag">{vid.topic}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {vid.isNew && <span className="pill-new-pulse">NEW ARRIVAL</span>}
                    <span className="video-duration-tag">
                      <Clock size={12} /> {vid.time}m
                    </span>
                  </div>
                </div>

                <h3 className="video-title-heading">{vid.title}</h3>
                {vid.description && <p className="video-desc-text">{vid.description}</p>}

                <div className="video-footer-row">
                  <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 600 }}>
                    {vid.categoryName}
                  </span>
                  <Link to={`/lesson/${vid.lessonId}`} className="video-lesson-btn">
                    Lesson & Notes <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

/* ───────────────────────── Quiz Center ───────────────────────── */

function QuizPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [randomMode, setRandomMode] = useState(false);
  const [quizSessionKey, setQuizSessionKey] = useState(0);

  // Aggregate all quiz questions across all lessons
  const allAggregatedQuestions = useMemo(() => {
    const items = [];
    lessons.forEach((lesson) => {
      const qArray = safeArray(lesson.quiz);
      const catObj = categories.find((c) => c.id === lesson.categoryId);
      qArray.forEach((q, idx) => {
        items.push({
          ...q,
          uniqueKey: `${lesson.id}-q-${idx}`,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          topic: lesson.topic || 'Pharmacology',
          categoryId: lesson.categoryId,
          categoryName: catObj ? catObj.name : lesson.categoryId,
          level: lesson.level || 'Intermediate',
          isNew: Boolean(lesson.isNew || lesson.badge === 'NEW'),
        });
      });
    });
    return items;
  }, []);

  // Distinct topics and categories for filter options
  const filterOptions = useMemo(() => {
    const topicMap = new Map();
    allAggregatedQuestions.forEach((q) => {
      if (!topicMap.has(q.topic)) {
        topicMap.set(q.topic, {
          topic: q.topic,
          categoryId: q.categoryId,
          categoryName: q.categoryName,
          count: 0,
        });
      }
      topicMap.get(q.topic).count++;
    });
    return Array.from(topicMap.values());
  }, [allAggregatedQuestions]);

  const newQuestionsCount = useMemo(
    () => allAggregatedQuestions.filter((q) => q.isNew).length,
    [allAggregatedQuestions]
  );

  // Active question set based on filter / mode
  const activeQuestions = useMemo(() => {
    let list = [...allAggregatedQuestions];

    if (selectedFilter === 'new') {
      list = list.filter((q) => q.isNew);
    } else if (selectedFilter !== 'all') {
      list = list.filter((q) => q.topic === selectedFilter || q.categoryId === selectedFilter);
    }

    if (randomMode) {
      // Shuffle and take up to 10
      const shuffled = [...list].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, Math.min(10, shuffled.length));
    }

    return list;
  }, [allAggregatedQuestions, selectedFilter, randomMode, quizSessionKey]);

  const handleRestartSession = () => {
    setQuizSessionKey((prev) => prev + 1);
  };

  return (
    <main className="container page">
      <div className="video-hub-header">
        <div className="page-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">CENTRALIZED ASSESSMENT</div>
          <h1>Pharmacology Quiz Center</h1>
          <p>
            Test your understanding across all topics and modules in one place. Practice comprehensive
            curriculum exams, filter by specific topics, or test new arrivals.
          </p>
        </div>

        <div className="video-stats-banner">
          <div className="video-stat-item">
            <strong>{allAggregatedQuestions.length}</strong>
            <span>Total Questions</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />
          <div className="video-stat-item">
            <strong>{filterOptions.length}</strong>
            <span>Active Topics</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />
          <div className="video-stat-item">
            <strong>{newQuestionsCount}</strong>
            <span>New Arrivals</span>
          </div>
        </div>
      </div>

      <div className="video-controls-bar" style={{ marginBottom: '24px' }}>
        <div className="video-filter-chips">
          <button
            className={`video-chip ${selectedFilter === 'all' && !randomMode ? 'active' : ''}`}
            onClick={() => {
              setSelectedFilter('all');
              setRandomMode(false);
              handleRestartSession();
            }}
          >
            <Layers size={14} /> Full Curriculum Exam
            <span className="video-chip-badge">{allAggregatedQuestions.length}</span>
          </button>

          {newQuestionsCount > 0 && (
            <button
              className={`video-chip ${selectedFilter === 'new' ? 'active' : ''}`}
              onClick={() => {
                setSelectedFilter('new');
                setRandomMode(false);
                handleRestartSession();
              }}
              style={{ border: selectedFilter === 'new' ? '1px solid #14b8a6' : '1px dashed #14b8a6' }}
            >
              <Sparkles size={14} style={{ color: selectedFilter === 'new' ? 'white' : '#0d9488' }} />
              New Topic Questions
              <span className="video-chip-badge">{newQuestionsCount}</span>
            </button>
          )}

          <button
            className={`video-chip ${randomMode ? 'active' : ''}`}
            onClick={() => {
              setRandomMode(true);
              handleRestartSession();
            }}
          >
            <Shuffle size={14} /> 10-Question Quick Blitz
          </button>

          {filterOptions.map((opt) => (
            <button
              key={opt.topic}
              className={`video-chip ${selectedFilter === opt.topic ? 'active' : ''}`}
              onClick={() => {
                setSelectedFilter(opt.topic);
                setRandomMode(false);
                handleRestartSession();
              }}
            >
              {opt.topic}
              <span className="video-chip-badge">{opt.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <Quiz
          key={`${selectedFilter}-${randomMode ? 'random' : 'all'}-${quizSessionKey}`}
          questions={activeQuestions}
          onResetCategory={() => {
            setSelectedFilter('all');
            setRandomMode(false);
            handleRestartSession();
          }}
        />
      </div>
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
