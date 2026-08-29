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

  
{/* ─────────────────────────────────────────────────────────────
          SECTION 2: GRAND TRIBUTE & PROFILE OF PROF. (DR.) MANOJ GOYAL
      ───────────────────────────────────────────────────────────── */}
      <section id="welcome-message-dr-goyal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-6 space-y-8">
        
        {/* Grand Professor Showcase Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-amber-500/30 shadow-2xl space-y-10">
          
          {/* Subtle Royal Gold / Emerald Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

          {/* Top Dedication & Honor Ribbon */}
          <div className="relative flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-500/20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/40 text-amber-300 text-xs font-black tracking-wide shadow-inner">
              <Crown className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Dedicated with Deepest Respect & Gratitude by his Students</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-amber-200/80 font-medium hidden sm:inline">
                Associate Professor of Pharmacology
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-xs text-slate-300 font-mono">
                HNBGU Central University
              </span>
            </div>
          </div>

          {/* Master Profile Header Block */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Mentor Portrait Crest */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                {/* Outer Golden Laurel Ring */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-amber-400 via-emerald-500 to-teal-600 p-1 shadow-2xl shadow-amber-500/20">
                  <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] opacity-30"></div>
                    <GraduationCap className="w-16 h-16 text-amber-400 mb-2 relative z-10" />
                    <div className="font-serif italic font-black text-amber-300 text-lg relative z-10 tracking-wide">
                      Dr. Manoj Goyal
                    </div>
                    <div className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider relative z-10">
                      Ph.D. • M.Pharm • LL.B
                    </div>
                  </div>
                </div>

                {/* Verified Mentor Medal */}
                <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-2 rounded-2xl shadow-lg border-2 border-slate-950 flex items-center justify-center">
                  <Medal className="w-5 h-5 fill-current text-slate-950" />
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Dr. Manoj Goyal
                </h2>
                <p className="text-xs text-amber-300 font-bold tracking-wide uppercase">
                  Distinguished Pharmacologist & Master Pedagogue
                </p>
                <p className="text-xs text-slate-300 max-w-xs leading-snug pt-1">
                  Department of Pharmaceutical Sciences, Hemvati Nandan Bahuguna Garhwal University (A Central University), Srinagar (Garhwal), Uttarakhand, India
                </p>
              </div>

              {/* Direct Official Channels */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <a
                  href="https://www.youtube.com/@JustPharmacology?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Youtube className="w-4 h-4 fill-current" />
                  <span>@JustPharmacology</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="https://in.linkedin.com/in/dr-manoj-goyal-9a3b6830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Globe className="w-4 h-4" />
                  <span>Official LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Golden Quotes & Words of Wisdom Carousel */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Words of Wisdom Quote Card */}
              <div className="relative bg-slate-900/90 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl backdrop-blur-sm">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-black tracking-wider uppercase">
                    <Quote className="w-4 h-4 text-amber-400" />
                    <span>Words of Wisdom from Dr. Manoj Goyal</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span>{activeQuoteIdx + 1} of {drGoyalQuotes.length}</span>
                  </div>
                </div>

                {/* Active Quote Text */}
                <div className="min-h-[90px] flex flex-col justify-center space-y-2">
                  <p className="italic text-base sm:text-lg text-amber-100 font-serif leading-relaxed">
                    "{drGoyalQuotes[activeQuoteIdx].quote}"
                  </p>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{drGoyalQuotes[activeQuoteIdx].context}</span>
                  </div>
                </div>

                {/* Quote Controls */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    {drGoyalQuotes.map((_, qIdx) => (
                      <button
                        key={qIdx}
                        onClick={() => setActiveQuoteIdx(qIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeQuoteIdx === qIdx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                        title={`Quote ${qIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveQuoteIdx(prev => (prev === 0 ? drGoyalQuotes.length - 1 : prev - 1))}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => setActiveQuoteIdx(prev => (prev === drGoyalQuotes.length - 1 ? 0 : prev + 1))}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-colors cursor-pointer"
                    >
                      Next Quote →
                    </button>
                  </div>
                </div>

              </div>

              {/* Accolades & Highlights Quick Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl font-black text-amber-400">20+ Yrs</div>
                  <div className="text-[11px] text-slate-400 font-medium">Academic Pedagogy</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl font-black text-emerald-400">BIT Mesra</div>
                  <div className="text-[11px] text-slate-400 font-medium">Ph.D. & M.Pharm</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl font-black text-cyan-400">LL.B Law</div>
                  <div className="text-[11px] text-slate-400 font-medium">Pharma Jurisprudence</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl font-black text-red-400">196K+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Lecture Video Views</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl font-black text-purple-400">10,000+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Students Mentored</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl font-black text-amber-300">Central Univ.</div>
                  <div className="text-[11px] text-slate-400 font-medium">HNBGU Faculty</div>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Showcase Tabs Navigation */}
          <div className="relative pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Explore Dr. Goyal's Academic Profile & Teachings:
              </span>
              <span className="text-[11px] font-mono text-amber-400/80 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                Interactive Mentor Hub
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setMentorActiveTab('letter')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mentorActiveTab === 'letter'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Personal Welcome Letter</span>
              </button>

              <button
                onClick={() => setMentorActiveTab('journey')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mentorActiveTab === 'journey'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Degrees & Timeline</span>
              </button>

              <button
                onClick={() => setMentorActiveTab('pedagogy')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mentorActiveTab === 'pedagogy'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>4-Step Teaching Philosophy</span>
              </button>

              <button
                onClick={() => setMentorActiveTab('tributes')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mentorActiveTab === 'tributes'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Student Gratitude Wall ({studentTributes.length})</span>
              </button>

              <button
                onClick={() => setMentorActiveTab('videos')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mentorActiveTab === 'videos'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>Signature Video Masterclasses</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Personal Welcome Letter */}
          {mentorActiveTab === 'letter' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 text-slate-200 leading-relaxed text-sm sm:text-base">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>A Message from Dr. Manoj Goyal to Every Learner</span>
                </div>
                <span className="text-xs text-slate-400">Department of Pharmaceutical Sciences, HNBGU</span>
              </div>

              <p className="italic text-emerald-200 font-serif text-lg border-l-4 border-amber-400 pl-4 py-1">
                "Pharmacology is not an intimidating directory of chemicals to memorize—it is the fascinating science of molecular keys unlocking living cells to relieve human suffering."
              </p>

              <p>
                Dear Students, Doctors, Pharmacists, and Healthcare Aspirants,
              </p>

              <p className="text-slate-300">
                Welcome to <strong className="text-white">Just Pharmacology</strong>! Throughout my two decades of classroom teaching and pharmacological research at HNBGU Central University and BIT Mesra, I have witnessed thousands of dedicated students lose confidence when faced with endless lists of drug classifications and isolated biochemical names.
              </p>

              <p className="text-slate-300">
                My teaching philosophy has always been simple: <strong className="text-amber-300 font-semibold">understanding receptor signaling and molecular pathways makes memorization obsolete</strong>. When you understand how <strong className="text-emerald-300">Gs, Gi, and Gq</strong> GPCRs regulate intracellular secondary messengers like cAMP, IP3, and Calcium, the therapeutic actions, side effects, and contraindications of hundreds of drugs fall into place logically.
              </p>

              <p className="text-slate-300">
                Together with my students, we have organized our university classroom lectures, animated molecular mechanisms, classification trees, and high-yield revision notes into this comprehensive digital portal.
              </p>

              <p className="text-slate-300">
                Dive in, experiment with the interactive simulators, and let us transform pharmacology into your most intuitive and enjoyable subject!
              </p>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
                <div>
                  <div className="font-serif italic text-xl text-amber-300">Dr. Manoj Goyal</div>
                  <div className="text-xs text-slate-400">
                    Ph.D., M.Pharm (BIT Mesra, 2004), B.Pharm, LL.B • Associate Professor of Pharmacology
                  </div>
                </div>

                <button
                  onClick={onOpenMenuTree}
                  className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <FolderTree className="w-4 h-4" />
                  <span>Start Learning with Dr. Goyal's Curriculum</span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Academic Degrees & Journey */}
          {mentorActiveTab === 'journey' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {degreesAndQualifications.map((deg, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-amber-500/50 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                          Academic Qualification 0{idx + 1}
                        </span>
                        <h4 className="font-extrabold text-white text-base">
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
                      <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{deg.institution}</span>
                    </div>

                    <div className="text-xs text-slate-400 font-medium">
                      <strong className="text-slate-300">Specialization:</strong> {deg.field}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                      {deg.highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Accolades Showcase */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Key Academic Milestones & Contributions</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {drGoyalAccolades.map((acc, aIdx) => {
                    const AccIcon = acc.icon;
                    return (
                      <div key={aIdx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <AccIcon className="w-4 h-4 text-amber-400" />
                          <span className="text-[10px] font-mono text-amber-300/80 bg-amber-950/80 px-2 py-0.5 rounded">
                            {acc.badge}
                          </span>
                        </div>
                        <h5 className="font-bold text-white text-xs">{acc.title}</h5>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{acc.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: 4-Step Teaching Philosophy */}
          {mentorActiveTab === 'pedagogy' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                <h4 className="font-extrabold text-white text-base flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <span>Dr. Goyal's 4-Step Pedagogical Formula</span>
                </h4>
                <p className="text-xs text-slate-300">
                  The signature teaching framework developed over 20 years in university classrooms, applied across every module in this portal:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {teachingPillars.map((tp, idx) => {
                  const Icon = tp.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-black text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-800/40">
                            PHASE 0{tp.step}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h4 className="font-extrabold text-white text-sm">
                          {tp.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {tp.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-emerald-300 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Core Classroom Tenet</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 4: Student Gratitude & Tributes Wall */}
          {mentorActiveTab === 'tributes' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-white text-base flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    <span>Student Gratitude & Mentee Testimonials</span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    Real words of respect from alumni and learners whose healthcare careers were shaped by Dr. Goyal's mentorship:
                  </p>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/50">
                  Global Alumni Network
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentTributes.map((st, sIdx) => (
                  <div key={sIdx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-emerald-500 text-slate-950 flex items-center justify-center font-black text-sm">
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
                        "{st.message}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">{st.institution}</span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{st.badge}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Signature Video Masterclasses */}
          {mentorActiveTab === 'videos' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 border border-red-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-white text-base flex items-center gap-2">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span>Signature Masterclasses on YouTube (@JustPharmacology)</span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    High-definition animated lectures created by Dr. Goyal watched by students worldwide:
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/@JustPharmacology?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Visit YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {signatureLectures.map((lec, lIdx) => (
                  <div key={lIdx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-red-500/40 transition-all flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-red-300 bg-red-950/60 border border-red-800/40 px-2.5 py-0.5 rounded">
                          {lec.tag}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="font-bold text-red-400">{lec.views}</span>
                          <span>•</span>
                          <span>{lec.duration}</span>
                        </div>
                      </div>

                      <h5 className="font-bold text-white text-sm leading-snug">
                        {lec.title}
                      </h5>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {lec.desc}
                      </p>
                    </div>

                    <a
                      href={lec.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-2 py-2.5 bg-slate-950 hover:bg-red-950/60 text-slate-200 hover:text-red-200 border border-slate-800 hover:border-red-700/60 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 text-red-500 fill-current" />
                      <span>Watch Masterclass on YouTube</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official YouTube Channel Milestone Banner */}
          <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 border border-red-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Youtube className="w-6 h-6 text-red-500" />
                <span className="font-black text-white text-base">Just Pharmacology on YouTube</span>
              </div>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Created by <strong>Dr. Manoj Goyal</strong> to deliver free, high-quality, animated pharmacology video lectures for medical, pharmacy, nursing, and healthcare students across India and globally.
              </p>
              <div className="flex flex-wrap gap-4 text-xs pt-1 justify-center sm:justify-start">
                <span className="font-bold text-red-300">2.06K+ Subscribers</span>
                <span className="text-slate-500">•</span>
                <span className="font-bold text-red-300">43+ Video Lectures</span>
                <span className="text-slate-500">•</span>
                <span className="font-bold text-red-300">196,758+ Total Views</span>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@JustPharmacology?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-extrabold text-xs shrink-0 flex items-center gap-2 shadow-md transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Subscribe & Watch Lectures</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

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
            Associate Professor · Pharmacology Educator · The mind behind the clarity
            of Just Pharmacology
          </p>

          <p>
            This website exists because of <strong>Dr. Manoj Goyal</strong>.
          </p>
          <p>
            He is a distinguished academician and a rare kind of teacher — one who
            makes the difficult feel simple, the abstract feel real, and the student
            feel capable. As Associate Professor in the Department of Pharmaceutical
            Sciences at <strong>Hemvati Nandan Bahuguna Garhwal University (HNBGU)</strong>,
            a Central University in Srinagar, Uttarakhand, he has devoted years to
            shaping how pharmacy and medical students understand drugs, mechanisms,
            and clinical reasoning.
          </p>
          <p>
            Students do not only learn facts from him. They learn a way of thinking:
            start with the concept, see the mechanism, revise with purpose. That
            philosophy is the foundation of everything you see here — the lessons,
            the animations, the rapid revision cards, and the quiet belief that
            pharmacology can be understood, not just memorised.
          </p>

          <h2>Academic excellence</h2>
          <ul>
            <li>
              <strong>Doctor of Philosophy (Ph.D.)</strong> — Pharmacy,
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

          <h2>Why this site exists</h2>
          <p>
            Just Pharmacology, as a digital experience, is a student-built tribute
            to Dr. Goyal’s teaching. It tries to extend his approach — simple
            language, visual understanding, and focused revision — so that more
            learners can benefit from the same clarity that his classroom students
            have received for years.
          </p>
          <p>
            If anything on this platform helps even one student understand a
            mechanism a little better, that credit belongs first to the teacher
            who made such understanding possible.
          </p>

          <h2>Connect with his work</h2>
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
            <h3>A note of responsibility</h3>
            <p>
              This website is a student-built educational project, created with
              deep respect for Dr. Manoj Goyal and the Just Pharmacology teaching
              approach. It is meant only for learning and revision.
            </p>
            <p>
              <strong>
                Any mistake, error, or incorrect information on this platform is
                the sole responsibility of the student developer.
              </strong>{' '}
              Dr. Manoj Goyal is not responsible for the content, accuracy, or any
              outcome of using this site.
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
