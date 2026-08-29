import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import {
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Crown,
  GraduationCap,
  Medal,
  Youtube,
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
    name: 'A dedicated student',
    role: 'Pharmacy learner',
    batch: 'Mentored',
    institution: 'Inspired by classroom teaching',
    badge: 'Gratitude',
    message:
      'Sir made receptors and pathways feel simple. This platform is our way of carrying that clarity forward.',
  },
  {
    name: 'Just Pharmacology community',
    role: 'Learners worldwide',
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
    desc: 'Foundational ideas from the Just Pharmacology approach — clarity over cramming.',
    link: 'https://www.youtube.com/@JustPharmacology',
  },
  {
    tag: 'Mechanisms',
    title: 'Drug–receptor & signaling pathways',
    desc: 'Visual, structured teaching of how drugs act — the heart of Dr. Goyal’s style.',
    link: 'https://www.youtube.com/@JustPharmacology',
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
      <section className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1120 }}>
          <div
            className="relative overflow-hidden text-white rounded-3xl p-6 sm:p-10 border-2 space-y-10"
            style={{
              background: 'linear-gradient(135deg, #020617 0%, #0f172a 45%, #022c22 100%)',
              borderColor: 'rgba(245, 158, 11, 0.3)',
              boxShadow: '0 25px 80px rgba(2, 6, 23, 0.45)',
            }}
          >
            <div
              className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full"
              style={{ background: 'rgba(245, 158, 11, 0.1)', filter: 'blur(80px)' }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full"
              style={{ background: 'rgba(16, 185, 129, 0.1)', filter: 'blur(80px)' }}
            />

            {/* Ribbon */}
            <div className="relative flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-500/20">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black tracking-wide"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(245,158,11,0.2), rgba(217,119,6,0.1))',
                  border: '1px solid rgba(251, 191, 36, 0.4)',
                  color: '#fcd34d',
                }}
              >
                <Crown className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dedicated with Deepest Respect &amp; Gratitude by his Students</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-amber-200/80 font-medium hidden sm:inline">
                  Associate Professor of Pharmacology
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-xs text-slate-300 font-mono">HNBGU Central University</span>
              </div>
            </div>

            {/* Profile + quotes */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #10b981, #0d9488)',
                      boxShadow: '0 20px 50px rgba(245, 158, 11, 0.2)',
                    }}
                  >
                    <div
                      className="w-full h-full rounded-[22px] flex flex-col items-center justify-center p-4 relative overflow-hidden"
                      style={{ background: '#020617' }}
                    >
                      <GraduationCap className="w-14 h-14 text-amber-400 mb-2 relative z-10" />
                      <div className="font-serif italic font-black text-amber-300 text-base relative z-10">
                        Dr. Manoj Goyal
                      </div>
                      <div className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider relative z-10">
                        Ph.D. · M.Pharm · LL.B
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-3 -right-2 p-2 rounded-2xl shadow-lg border-2 border-slate-950"
                    style={{
                      background: 'linear-gradient(90deg, #f59e0b, #d97706)',
                      color: '#020617',
                    }}
                  >
                    <Medal className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Dr. Manoj Goyal
                  </h2>
                  <p className="text-xs text-amber-300 font-bold tracking-wide uppercase">
                    Distinguished Pharmacologist &amp; Master Educator
                  </p>
                  <p className="text-xs text-slate-300 max-w-xs leading-snug pt-1">
                    Department of Pharmaceutical Sciences, Hemvati Nandan Bahuguna Garhwal
                    University (Central University), Srinagar, Uttarakhand, India
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <a
                    href="https://www.youtube.com/@JustPharmacology"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <Youtube className="w-4 h-4" />
                    @JustPharmacology
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manoj-goyal-327231ab/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <Globe className="w-4 h-4" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div
                  className="relative rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl"
                  style={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '2px solid rgba(245, 158, 11, 0.3)',
                  }}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-black tracking-wider uppercase">
                      <Quote className="w-4 h-4" />
                      Words of Wisdom from Dr. Manoj Goyal
                    </div>
                    <span className="text-xs text-slate-400">
                      {activeQuoteIdx + 1} of {drGoyalQuotes.length}
                    </span>
                  </div>

                  <div className="min-h-[90px] flex flex-col justify-center space-y-2">
                    <p className="italic text-base sm:text-lg text-amber-100 font-serif leading-relaxed">
                      &ldquo;{drGoyalQuotes[activeQuoteIdx].quote}&rdquo;
                    </p>
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {drGoyalQuotes[activeQuoteIdx].context}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      {drGoyalQuotes.map((_, qIdx) => (
                        <button
                          key={qIdx}
                          type="button"
                          onClick={() => setActiveQuoteIdx(qIdx)}
                          className={`h-2 rounded-full transition-all ${
                            activeQuoteIdx === qIdx
                              ? 'w-6 bg-amber-400'
                              : 'w-2 bg-slate-700 hover:bg-slate-500'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveQuoteIdx((p) =>
                            p === 0 ? drGoyalQuotes.length - 1 : p - 1
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
                      >
                        ← Previous
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveQuoteIdx((p) =>
                            p === drGoyalQuotes.length - 1 ? 0 : p + 1
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold"
                      >
                        Next Quote →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { v: '20+ Yrs', l: 'Academic Pedagogy', c: '#fbbf24' },
                    { v: 'BIT Mesra', l: 'Ph.D. & M.Pharm', c: '#34d399' },
                    { v: 'LL.B.', l: 'Pharma Jurisprudence', c: '#22d3ee' },
                    { v: 'Central Univ.', l: 'HNBGU Faculty', c: '#fcd34d' },
                    { v: 'YouTube', l: 'Just Pharmacology', c: '#f87171' },
                    { v: 'Mentor', l: 'Students worldwide', c: '#c084fc' },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="p-3.5 rounded-2xl text-center space-y-1"
                      style={{
                        background: 'rgba(15,23,42,0.8)',
                        border: '1px solid #1e293b',
                      }}
                    >
                      <div className="text-xl font-black" style={{ color: s.c }}>
                        {s.v}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs nav */}
            <div className="relative pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Explore Dr. Goyal&apos;s profile &amp; teachings
                </span>
                <span className="text-[11px] font-mono text-amber-400/80 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                  Interactive Mentor Hub
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'letter', label: 'Personal Welcome Letter', Icon: Heart },
                  { id: 'journey', label: 'Academic Degrees', Icon: GraduationCap },
                  { id: 'pedagogy', label: '4-Step Teaching Philosophy', Icon: Lightbulb },
                  { id: 'tributes', label: 'Student Gratitude', Icon: Users },
                  { id: 'videos', label: 'Signature Lectures', Icon: Youtube },
                ].map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMentorActiveTab(id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      mentorActiveTab === id
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab: Letter */}
            {mentorActiveTab === 'letter' && (
              <div
                className="rounded-3xl p-6 sm:p-8 space-y-5 text-slate-200 leading-relaxed text-sm sm:text-base"
                style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid #1e293b' }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-400" />
                    A message in the spirit of Dr. Manoj Goyal&apos;s teaching
                  </div>
                  <span className="text-xs text-slate-400">HNBGU · Pharmaceutical Sciences</span>
                </div>
                <p className="italic text-emerald-200 font-serif text-lg border-l-4 border-amber-400 pl-4 py-1">
                  &ldquo;Pharmacology is not an intimidating directory of chemicals to
                  memorize—it is the fascinating science of molecular keys unlocking living
                  cells to relieve human suffering.&rdquo;
                </p>
                <p>Dear Students, Doctors, Pharmacists, and Healthcare Aspirants,</p>
                <p className="text-slate-300">
                  Welcome to <strong className="text-white">Just Pharmacology</strong>. This
                  space is built under the inspiration of Dr. Manoj Goyal&apos;s classroom
                  approach — clarity first, mechanisms next, revision with purpose.
                </p>
                <p className="text-slate-300">
                  When receptor signaling and pathways are understood, lists of drugs stop
                  being a burden and start forming a logical map. That is the spirit we try to
                  honour here.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
                  <div>
                    <div className="font-serif italic text-xl text-amber-300">
                      Dr. Manoj Goyal
                    </div>
                    <div className="text-xs text-slate-400">
                      Ph.D., M.Pharm (BIT), B.Pharm, LL.B · Associate Professor of Pharmacology
                    </div>
                  </div>
                  <Link
                    to="/learn"
                    className="px-5 py-3 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg"
                    style={{
                      background: 'linear-gradient(90deg, #10b981, #2dd4bf)',
                      color: '#020617',
                    }}
                  >
                    <FolderTree className="w-4 h-4" />
                    Start Learning
                  </Link>
                </div>
              </div>
            )}

            {/* Tab: Journey */}
            {mentorActiveTab === 'journey' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {degreesAndQualifications.map((deg, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl space-y-3"
                    style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid #1e293b' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                          Academic Qualification 0{idx + 1}
                        </span>
                        <h4 className="font-extrabold text-white text-base mt-0.5">
                          {deg.degree}
                        </h4>
                      </div>
                      {deg.year && (
                        <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-lg">
                          {deg.year}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                      <Building2 className="w-4 h-4 shrink-0" />
                      {deg.institution}
                    </div>
                    <div className="text-xs text-slate-400">
                      <strong className="text-slate-300">Specialization:</strong> {deg.field}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                      {deg.highlight}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Pedagogy */}
            {mentorActiveTab === 'pedagogy' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {teachingPillars.map((tp) => {
                  const Icon = tp.icon;
                  return (
                    <div
                      key={tp.step}
                      className="p-6 rounded-2xl space-y-3 flex flex-col justify-between"
                      style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid #1e293b' }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-black text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-800/40">
                            PHASE 0{tp.step}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h4 className="font-extrabold text-white text-sm">{tp.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{tp.desc}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-emerald-300 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Core classroom tenet
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab: Tributes */}
            {mentorActiveTab === 'tributes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentTributes.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-6 rounded-2xl space-y-4 flex flex-col justify-between"
                    style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid #1e293b' }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-slate-950"
                            style={{
                              background: 'linear-gradient(135deg, #fbbf24, #10b981)',
                            }}
                          >
                            {st.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm">{st.name}</h5>
                            <p className="text-xs text-amber-300/90 font-medium">{st.role}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                          {st.batch}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 italic leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                        &ldquo;{st.message}&rdquo;
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">{st.institution}</span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {st.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Videos */}
            {mentorActiveTab === 'videos' && (
              <div className="space-y-6">
                <div
                  className="p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  style={{
                    background: 'linear-gradient(90deg, rgba(127,29,29,0.4), #0f172a)',
                    border: '1px solid rgba(127,29,29,0.4)',
                  }}
                >
                  <div>
                    <h4 className="font-extrabold text-white text-base flex items-center gap-2">
                      <Youtube className="w-5 h-5 text-red-500" />
                      Signature lectures · @JustPharmacology
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Animated, clear pharmacology teaching in the spirit of Dr. Goyal&apos;s
                      classroom.
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/@JustPharmacology"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Visit channel
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {signatureLectures.map((lec, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-6 rounded-2xl space-y-3 flex flex-col justify-between"
                      style={{
                        background: 'rgba(15,23,42,0.9)',
                        border: '1px solid #1e293b',
                      }}
                    >
                      <div className="space-y-2.5">
                        <span className="text-[11px] font-mono font-bold text-red-300 bg-red-950/60 border border-red-800/40 px-2.5 py-0.5 rounded">
                          {lec.tag}
                        </span>
                        <h5 className="font-bold text-white text-sm leading-snug">{lec.title}</h5>
                        <p className="text-xs text-slate-300 leading-relaxed">{lec.desc}</p>
                      </div>
                      <a
                        href={lec.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full mt-2 py-2.5 bg-slate-950 hover:bg-red-950/60 text-slate-200 border border-slate-800 hover:border-red-700/60 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5 text-red-500 fill-current" />
                        Watch on YouTube
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* YouTube banner */}
            <div
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{
                background: 'linear-gradient(90deg, #450a0a, #0f172a)',
                border: '1px solid rgba(127, 29, 29, 0.4)',
              }}
            >
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Youtube className="w-6 h-6 text-red-500" />
                  <span className="font-black text-white text-base">
                    Just Pharmacology on YouTube
                  </span>
                </div>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Free, high-quality pharmacology teaching inspired by{' '}
                  <strong>Dr. Manoj Goyal</strong> — for medical, pharmacy, nursing, and
                  healthcare students.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@JustPharmacology"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-extrabold text-xs shrink-0 flex items-center gap-2 shadow-md"
              >
                <Play className="w-4 h-4 fill-current" />
                Subscribe &amp; Watch
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
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
