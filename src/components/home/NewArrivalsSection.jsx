import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  FolderPlus,
  Layers,
  Zap,
  Flame,
  Activity,
  Award,
  Play,
  Brain,
  CheckCircle2,
} from 'lucide-react';
import {
  getNewArrivals,
  getLatestLesson,
  getModulesWithStats,
  getAvailableTopics,
  getCurriculumStats,
  getGroupedNewArrivalsByModule,
} from '../../utils/contentUtils';

export default function NewArrivalsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const newArrivals = getNewArrivals();
  const latestLesson = getLatestLesson();
  const modulesWithStats = getModulesWithStats();
  const availableModules = modulesWithStats.filter((m) => m.lessonsCount > 0);
  const availableTopics = getAvailableTopics();
  const stats = getCurriculumStats();
  const groupedModules = getGroupedNewArrivalsByModule();

  // Helper to format read time without duplicate 'min'
  const formatReadTime = (timeStr) => {
    if (!timeStr) return '15 min read';
    const clean = String(timeStr).replace(/\s*min(utes)?\s*$/i, '').trim();
    return `${clean} min read`;
  };

  // Resolve module and category metadata dynamically for the latest lesson
  const rawCatId = latestLesson?.categoryId || 'general';
  const resolvedCatId =
    rawCatId === 'general_pharmacology' ? 'general' :
    rawCatId === 'cardiovascular' ? 'cardio' :
    rawCatId === 'gastrointestinal' ? 'gi' :
    rawCatId;

  const latestModule = modulesWithStats.find(
    (m) =>
      m.id === resolvedCatId ||
      (m.id === 'general' && (rawCatId === 'general_pharmacology' || rawCatId === 'general'))
  );

  const latestModuleName =
    latestModule?.title || latestModule?.name || latestLesson?.topic || 'Curriculum Lesson';
  const latestModuleIcon = latestModule?.icon || '📚';
  const latestModuleLessonsCount = latestModule?.lessonsCount || latestModule?.lessons?.length || 0;
  const latestModuleLink = latestModule ? `/learn?category=${latestModule.id}` : '/learn';

  // Format reading time safely (avoiding double 'min min')
  const cleanTime = latestLesson?.time
    ? String(latestLesson.time).replace(/\s*min(utes)?\s*$/i, '').trim()
    : '15';
  const formattedTime = `${cleanTime} min`;

  // Dynamic lesson steps / stages
  const lessonSteps =
    latestLesson?.pharmacologySteps ||
    latestLesson?.physiologySteps ||
    latestLesson?.steps ||
    latestLesson?.hearingSteps ||
    [];

  // Dynamic frameworks, tables, quiz
  const frameworks = Array.isArray(latestLesson?.frameworks) ? latestLesson.frameworks : [];
  const tablesCount = Array.isArray(latestLesson?.tables) ? latestLesson.tables.length : 0;
  const quizCount = Array.isArray(latestLesson?.quiz) ? latestLesson.quiz.length : 0;

  // Build 4 dynamic highlights based on actual content
  const dynamicHighlights = [];

  // 1. Simulation / Animation or Clinical Taxonomy
  if (latestLesson?.animation) {
    dynamicHighlights.push({
      title: 'Interactive Simulation:',
      desc: latestLesson.stepsTitle
        ? latestLesson.stepsTitle
        : `Dynamic interactive mechanics and visual model engine (${latestLesson.title})`,
    });
  } else if (latestLesson?.stepsTitle) {
    dynamicHighlights.push({
      title: 'Structured Sequence:',
      desc: latestLesson.stepsTitle,
    });
  } else {
    dynamicHighlights.push({
      title: 'Clinical Architecture:',
      desc: `Visual framework and structured conceptual pathways for ${latestLesson?.title || 'clinical practice'}.`,
    });
  }

  // 2. Pathway Steps or Objectives
  if (lessonSteps.length > 0) {
    const firstStepTitle = lessonSteps[0]?.title || 'Introduction';
    const lastStepTitle = lessonSteps[lessonSteps.length - 1]?.title || 'Clinical Review';
    dynamicHighlights.push({
      title: `${lessonSteps.length}-Stage Step Sequence:`,
      desc: `Progressive stages from "${firstStepTitle}" through "${lastStepTitle}".`,
    });
  } else if (latestLesson?.objectives?.length > 0) {
    dynamicHighlights.push({
      title: 'Core Learning Objectives:',
      desc: `${latestLesson.objectives.length} structured clinical competencies and learning outcomes.`,
    });
  } else {
    dynamicHighlights.push({
      title: 'High-Yield Principles:',
      desc: `Core ${latestLesson?.level || 'essential'} concepts, clinical implications, and board-yield facts.`,
    });
  }

  // 3. Frameworks or High-Yield Tables
  if (frameworks.length > 0) {
    const fwNames = frameworks.map((f) => f.name || f.id).slice(0, 2).join(' • ');
    dynamicHighlights.push({
      title: `${frameworks.length} Clinical Framework${frameworks.length > 1 ? 's' : ''}:`,
      desc: `${fwNames}${tablesCount > 0 ? ` with ${tablesCount} comparative summary table${tablesCount > 1 ? 's' : ''}` : ''}.`,
    });
  } else if (tablesCount > 0) {
    dynamicHighlights.push({
      title: 'Comparative Reference Tables:',
      desc: `${tablesCount} high-yield reference tables contrasting clinical profiles and mechanisms.`,
    });
  } else if (latestLesson?.level) {
    dynamicHighlights.push({
      title: 'Level & Comprehensiveness:',
      desc: `${latestLesson.level} level with rigorous clinical evidence and practical pearls.`,
    });
  } else {
    dynamicHighlights.push({
      title: 'Clinical Practice Pearls:',
      desc: 'High-yield evidence-based guidelines and practical diagnostic/therapeutic insights.',
    });
  }

  // 4. Quiz / Self-assessment or Video
  if (quizCount > 0) {
    dynamicHighlights.push({
      title: 'Self-Assessment Challenge:',
      desc: `${quizCount}-question clinical vignette quiz with instant rationales and score tracking.`,
    });
  } else if (latestLesson?.video?.youtubeId) {
    dynamicHighlights.push({
      title: 'Video Lecture Included:',
      desc: `Integrated multimedia clinical lecture: "${latestLesson.video.title || latestLesson.title}".`,
    });
  } else {
    dynamicHighlights.push({
      title: 'Active Learning Mode:',
      desc: 'Interactive step-through review designed for long-term clinical retention.',
    });
  }

  // Visual Preview Box dynamic chips on the right
  const dynamicChips = [];
  if (frameworks.length > 0) {
    frameworks.slice(0, 3).forEach((f) => {
      dynamicChips.push({
        label: f.name || f.id,
        icon: Activity,
      });
    });
  }
  if (dynamicChips.length < 3 && latestLesson?.animation) {
    dynamicChips.push({ label: 'Interactive Model', icon: Brain });
  }
  if (dynamicChips.length < 3 && lessonSteps.length > 0) {
    dynamicChips.push({ label: `${lessonSteps.length} Stages`, icon: Award });
  }
  if (dynamicChips.length < 3 && quizCount > 0) {
    dynamicChips.push({ label: `${quizCount} Quiz Qs`, icon: CheckCircle2 });
  }
  while (dynamicChips.length < 3) {
    dynamicChips.push({ label: 'Clinical Review', icon: BookOpen });
  }

  // Dynamic diagram nodes
  let diagramNodes = [];
  if (lessonSteps.length >= 3) {
    const midIdx = Math.floor(lessonSteps.length / 2);
    const n1 = lessonSteps[0];
    const n2 = lessonSteps[midIdx];
    const n3 = lessonSteps[lessonSteps.length - 1];
    diagramNodes = [
      { badge: `STAGE 1`, title: n1.title, desc: n1.description?.slice(0, 48) + '...' },
      { badge: `STAGE ${midIdx + 1}`, title: n2.title, desc: n2.description?.slice(0, 48) + '...', active: true },
      { badge: `STAGE ${lessonSteps.length}`, title: n3.title, desc: n3.description?.slice(0, 48) + '...' },
    ];
  } else if (frameworks[0]?.items?.length >= 3) {
    const itms = frameworks[0].items;
    diagramNodes = [
      { badge: itms[0].init || 'PART 1', title: itms[0].label?.split(':')[0] || itms[0].init || 'Initiation', desc: itms[0].label?.slice(0, 48) + '...' },
      { badge: itms[1].init || 'PART 2', title: itms[1].label?.split(':')[0] || itms[1].init || 'Mechanism', desc: itms[1].label?.slice(0, 48) + '...', active: true },
      { badge: itms[2].init || 'PART 3', title: itms[2].label?.split(':')[0] || itms[2].init || 'Outcome', desc: itms[2].label?.slice(0, 48) + '...' },
    ];
  } else {
    diagramNodes = [
      { badge: 'INPUT', title: 'Route & Dose', desc: 'Physicochemical factors & delivery site' },
      { badge: 'MECHANISM', title: 'Target Action', desc: 'Receptor binding & physiological response', active: true },
      { badge: 'OUTCOME', title: 'Clinical Effect', desc: 'Therapeutic outcome & system response' },
    ];
  }

  // When filtered by a specific category, newArrivals is automatically sorted newest-first for that module!
  const filteredLessons =
    activeFilter === 'all'
      ? newArrivals
      : activeFilter === 'grouped' || activeFilter === 'topics'
      ? []
      : getNewArrivals(activeFilter);

  // If no lessons were added within the last month (30 days), do not render the recently added section
  if (newArrivals.length === 0) {
    return null;
  }

  return (
    <section className="section new-arrivals-section" id="new-arrivals">
      <div className="container">
        {/* Section Header */}
        <div className="new-arrivals-head">
          <div className="new-arrivals-title-wrap">
            <div className="new-arrivals-badge-pulse">
              <span className="live-dot" />
              <Sparkles size={14} className="sparkle-icon" />
              <span>CURRICULUM UPDATES · RECENT RELEASES</span>
            </div>
            <h2>Recently Added Lessons &amp; Modules</h2>
            <p className="new-arrivals-sub">
              Explore freshly published clinical lessons, physiological pathways, and high-yield pharmacology principles — organized with the latest addition highlighted at the top.
            </p>
          </div>

          <Link to="/learn" className="btn secondary view-all-btn">
            View full curriculum <ArrowRight size={16} />
          </Link>
        </div>

        {/* ═══ PROMINENT FEATURED SPOTLIGHT: LATEST LESSON ═══ */}
        {latestLesson && (
          <div className="latest-lesson-spotlight-card" id="spotlight-latest-lesson">
            <div className="spotlight-glow-fx" />
            <div className="spotlight-content-grid">
              <div className="spotlight-left">
                <div className="spotlight-badge-row">
                  <span className="spotlight-badge-lead">
                    <Zap size={13} className="zap-icon" />
                    <span>JUST ADDED · #1 LATEST ADDITION</span>
                  </span>
                  <span className="spotlight-mod-tag">
                    {latestModuleIcon} {latestModuleName}
                  </span>
                </div>

                <h3 className="spotlight-title">
                  {latestLesson.title}
                </h3>
                {latestLesson.subtitle && (
                  <p className="spotlight-subtitle">
                    {latestLesson.subtitle}
                  </p>
                )}

                <p className="spotlight-desc">
                  {latestLesson.description}
                </p>

                {/* Key feature highlights */}
                <div className="spotlight-highlights-grid">
                  {dynamicHighlights.map((hl, idx) => (
                    <div key={idx} className="spotlight-highlight-item">
                      <span className="sh-dot" />
                      <div>
                        <strong>{hl.title}</strong> {hl.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="spotlight-actions-row">
                  <Link
                    to={`/lesson/${latestLesson.id}`}
                    className="btn primary spotlight-start-btn"
                  >
                    <span>Start Latest Lesson Now</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to={latestModuleLink}
                    className="btn outline spotlight-mod-btn"
                  >
                    <span>Explore Module Lessons ({latestModuleLessonsCount})</span>
                  </Link>

                  <div className="spotlight-meta-pill">
                    <Clock size={14} />
                    <span>{formattedTime} interactive read</span>
                  </div>
                </div>
              </div>

              {/* Visual Preview Box on Right */}
              <div className="spotlight-right-preview">
                <div className="spotlight-preview-card">
                  <div className="spotlight-card-topbar">
                    <div className="spotlight-traffic-lights">
                      <span className="tl-red" />
                      <span className="tl-yellow" />
                      <span className="tl-green" />
                    </div>
                    <span className="spotlight-card-title">
                      {latestLesson.title?.length > 28 ? `${latestLesson.title.slice(0, 28)}...` : latestLesson.title} Engine
                    </span>
                  </div>

                  <div className="spotlight-preview-body">
                    <div className="spotlight-model-chip-list">
                      {dynamicChips.map((chip, idx) => {
                        const IconComponent = chip.icon || Activity;
                        return (
                          <div key={idx} className={`sm-chip ${idx === 0 ? 'active' : ''}`}>
                            <IconComponent size={13} />
                            <span>{chip.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="spotlight-diagram-box">
                      {diagramNodes.map((node, idx) => (
                        <div key={idx} style={{ display: 'contents' }}>
                          <div className={`s-node ${node.active ? 'active-pulse' : ''}`}>
                            <span className="s-badge">{node.badge}</span>
                            <strong>{node.title}</strong>
                            <small>{node.desc}</small>
                          </div>
                          {idx < diagramNodes.length - 1 && (
                            <div className="s-connector">➔</div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="spotlight-preview-foot">
                      <span>✨ Latest addition in {latestModuleName}</span>
                      <Link to={`/lesson/${latestLesson.id}`} className="spotlight-quick-launch">
                        Launch <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Curriculum Metrics Strip */}
        <div className="curriculum-metrics-bar">
          <div className="metric-item">
            <div className="metric-icon-wrap">
              <BookOpen size={20} />
            </div>
            <div>
              <div className="metric-val">{stats.totalLessons} Lessons</div>
              <div className="metric-label">Available Across Modules</div>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <div className="metric-icon-wrap accent">
              <Layers size={20} />
            </div>
            <div>
              <div className="metric-val">{stats.totalTopics} Topics</div>
              <div className="metric-label">Structured Curricula</div>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <div className="metric-icon-wrap new-badge-icon">
              <FolderPlus size={20} />
            </div>
            <div>
              <div className="metric-val">{availableModules.length} Active Modules</div>
              <div className="metric-label">
                {availableModules.find((m) => m.isNew) ? 'New Module Added!' : 'Live & Expanding'}
              </div>
            </div>
          </div>
        </div>

        {/* Active Modules Showcase Banner */}
        <div className="active-modules-banner">
          <div className="active-modules-banner-head">
            <span className="module-banner-tag">ACTIVE MODULES</span>
            <h3>Explore Live Curriculum Modules</h3>
          </div>
          <div className="active-modules-grid">
            {availableModules.map((mod) => (
              <Link
                key={mod.id}
                to={`/learn?category=${mod.id}`}
                className={`active-module-card ${mod.isNew ? 'is-new-mod' : ''}`}
              >
                <div className="mod-card-top">
                  <span className="mod-icon">{mod.icon}</span>
                  {mod.isNew ? (
                    <span className="new-pill-pulse">✨ NEW MODULE</span>
                  ) : (
                    <span className="status-pill-avail">✓ AVAILABLE</span>
                  )}
                </div>
                <h4>{mod.title}</h4>
                <p>{mod.description}</p>
                <div className="mod-card-footer">
                  <span className="mod-count-pill">
                    <strong>{mod.lessonsCount}</strong> {mod.lessonsCount === 1 ? 'lesson' : 'lessons'} · <strong>{mod.topicsCount}</strong> {mod.topicsCount === 1 ? 'topic' : 'topics'}
                  </span>
                  <span className="mod-link-arrow">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters and View Switcher */}
        <div className="arrivals-filter-bar">
          <div className="arrivals-filter-header">
            <span className="arrivals-filter-kicker">CURRICULUM CHRONOLOGY</span>
            <div className="arrivals-sort-indicator">
              <span className="sort-dot" />
              <span>Sorted by Recency: <strong>Most Recent at Top</strong></span>
            </div>
          </div>

          <div className="arrivals-tabs">
            <button
              type="button"
              className={activeFilter === 'all' ? 'arrival-tab active' : 'arrival-tab'}
              onClick={() => setActiveFilter('all')}
            >
              🔥 All New &amp; Recent Arrivals ({newArrivals.length})
            </button>
            <button
              type="button"
              className={activeFilter === 'grouped' ? 'arrival-tab active' : 'arrival-tab'}
              onClick={() => setActiveFilter('grouped')}
            >
              📂 Group by Module ({groupedModules.length} Modules)
            </button>
            {availableModules.map((m) => {
              const count = getNewArrivals(m.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={m.id}
                  type="button"
                  className={activeFilter === m.id ? 'arrival-tab active' : 'arrival-tab'}
                  onClick={() => setActiveFilter(m.id)}
                >
                  {m.icon} {m.title} ({count}) {m.isNew && <span className="tab-new-dot">NEW</span>}
                </button>
              );
            })}
            <button
              type="button"
              className={activeFilter === 'topics' ? 'arrival-tab active' : 'arrival-tab'}
              onClick={() => setActiveFilter('topics')}
            >
              📌 Topics ({availableTopics.length})
            </button>
          </div>
        </div>

        {/* ═══ VIEW 1: GROUPED BY MODULE (Each Module shows its lessons newest-first) ═══ */}
        {activeFilter === 'grouped' ? (
          <div className="grouped-modules-arrivals-view">
            {groupedModules.map((grp) => (
              <div key={grp.categoryId} className="module-arrivals-group-card">
                <div className="module-group-header">
                  <div className="module-group-title-side">
                    <span className="module-group-icon">{grp.icon}</span>
                    <div>
                      <div className="module-group-eyebrow">
                        {grp.isNewModule ? '✨ RECENTLY INTRODUCED MODULE' : 'ACTIVE MODULE'}
                      </div>
                      <h3>{grp.moduleName}</h3>
                    </div>
                  </div>
                  <div className="module-group-badge-count">
                    <span>{grp.lessons.length} {grp.lessons.length === 1 ? 'New Lesson' : 'New Lessons Added'}</span>
                    <span className="order-note-pill">Most Recent First ↓</span>
                  </div>
                </div>

                <div className="module-group-lessons-list">
                  {grp.lessons.map((lesson, idx) => {
                    const isLatest = idx === 0 && (lesson.isLatest || grp.isNewModule);
                    return (
                      <div
                        key={lesson.id}
                        className={`module-group-lesson-item ${isLatest ? 'is-top-recent' : ''}`}
                      >
                        <div className="mg-rank-badge">
                          {isLatest ? (
                            <span className="rank-pill-latest">#1 LATEST</span>
                          ) : (
                            <span className="rank-pill-sub">#{idx + 1} RECENT</span>
                          )}
                        </div>

                        <div className="mg-lesson-body">
                          <div className="mg-lesson-tags">
                            <span className="mg-topic-tag">{lesson.topic}</span>
                            {isLatest && <span className="badge-new-tiny">✨ JUST ADDED</span>}
                            <span className="mg-time-tag">
                              <Clock size={12} /> {formatReadTime(lesson.time)}
                            </span>
                            {lesson.animation && <span className="mg-feat-tag">🧬 Interactive Model</span>}
                            {lesson.quiz && <span className="mg-feat-tag">📝 Quiz</span>}
                          </div>
                          <h4 className="mg-lesson-title">{lesson.title}</h4>
                          <p className="mg-lesson-desc">{lesson.description}</p>
                        </div>

                        <div className="mg-lesson-action">
                          <Link
                            to={`/lesson/${lesson.id}`}
                            className={`btn ${isLatest ? 'primary' : 'secondary'} mg-action-btn`}
                          >
                            <span>Study Lesson</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : activeFilter === 'topics' ? (
          <div className="topics-overview-grid">
            {availableTopics.map((top, idx) => (
              <div key={idx} className="topic-highlight-card">
                <div className="topic-card-top">
                  <span className="topic-mod-name">
                    {top.icon} {top.moduleName}
                  </span>
                  {top.isNew && <span className="badge-new-tiny">NEW</span>}
                </div>
                <h4>{top.topic}</h4>
                <div className="topic-lessons-list">
                  {top.lessons.map((l) => (
                    <Link key={l.id} to={`/lesson/${l.id}`} className="topic-lesson-link">
                      <span>• {l.title}</span>
                      <span className="link-arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ═══ VIEW 3: ORDERED RECENT ARRIVALS GRID (Most recent at top) ═══ */
          <div className="new-arrivals-grid">
            {filteredLessons.map((l, index) => {
              const isFirst = index === 0;
              const isLatestAddition = l.isLatest || (filteredLessons[0]?.id === l.id);

              return (
                <div
                  key={l.id}
                  className={`new-lesson-card ${isLatestAddition ? 'is-spotlight-item' : ''}`}
                >
                  <div className="new-lesson-card-header">
                    <div className="new-lesson-tags">
                      {isLatestAddition ? (
                        <span className="recency-rank-tag latest">
                          <Zap size={11} /> #1 LATEST ADDITION
                        </span>
                      ) : (
                        <span className="recency-rank-tag">
                          #{index + 1} RECENT ADDITION
                        </span>
                      )}
                      <span className="topic-tag-pill">{l.topic}</span>
                    </div>
                    <span className="level-badge">{l.level || 'Beginner'}</span>
                  </div>

                  <h3 className="new-lesson-title">{l.title}</h3>
                  {l.subtitle && <p className="new-lesson-sub">{l.subtitle}</p>}
                  <p className="new-lesson-desc">{l.description}</p>

                  {/* Feature Badges */}
                  <div className="feature-badges">
                    {l.frameworks && l.frameworks.length > 0 && (
                      <span className="feat-chip accent">
                        📐 {l.frameworks[0].name || 'Clinical Framework'}
                      </span>
                    )}
                    {l.spikesSteps && (
                      <span className="feat-chip">📋 6-Stage SPIKES Protocol</span>
                    )}
                    {l.solerSteps && (
                      <span className="feat-chip">🧘 SOLER Posture Framework</span>
                    )}
                    {l.pharmacologySteps && (
                      <span className="feat-chip">🧬 {l.pharmacologySteps.length}-Stage Pathway</span>
                    )}
                    {l.physiologySteps && (
                      <span className="feat-chip">👂 {l.physiologySteps.length}-Stage Mechanism</span>
                    )}
                    {l.animation && (
                      <span className="feat-chip">🧬 Interactive Simulation</span>
                    )}
                    {l.video && l.video.youtubeId && (
                      <span className="feat-chip">🎥 Video Included</span>
                    )}
                    {l.quiz && l.quiz.length > 0 && (
                      <span className="feat-chip">📝 Quiz ({l.quiz.length} Qs)</span>
                    )}
                  </div>

                  <div className="new-lesson-footer">
                    <div className="time-est">
                      <Clock size={15} />
                      <span>{formatReadTime(l.time)}</span>
                    </div>
                    <Link
                      to={`/lesson/${l.id}`}
                      className={`start-new-btn ${isLatestAddition ? 'primary-highlight' : ''}`}
                    >
                      <span>Start Lesson</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
