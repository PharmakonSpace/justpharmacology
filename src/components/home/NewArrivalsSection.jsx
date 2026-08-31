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

  // When filtered by a specific category, newArrivals is automatically sorted newest-first for that module!
  const filteredLessons =
    activeFilter === 'all'
      ? newArrivals
      : activeFilter === 'grouped' || activeFilter === 'topics'
      ? []
      : getNewArrivals(activeFilter);

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
              Explore freshly published clinical empathy protocols, biopsychosocial models, and high-yield pharmacology principles — organized in order with the newest additions highlighted at the top.
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
                    🧠💬 Healthcare Psychology &amp; Communication Skills
                  </span>
                </div>

                <h3 className="spotlight-title">
                  {latestLesson.title}
                </h3>
                <p className="spotlight-subtitle">
                  {latestLesson.subtitle || 'The Biopsychosocial Model & Behavioral Science in Clinical Care'}
                </p>

                <p className="spotlight-desc">
                  {latestLesson.description}
                </p>

                {/* Key feature highlights */}
                <div className="spotlight-highlights-grid">
                  <div className="spotlight-highlight-item">
                    <span className="sh-dot" />
                    <div>
                      <strong>Interactive Simulation:</strong> 4-phase neuroendocrine stress cascade (Trigger → Cortisol → Arterial Constriction)
                    </div>
                  </div>
                  <div className="spotlight-highlight-item">
                    <span className="sh-dot" />
                    <div>
                      <strong>4 Psychological Subfields:</strong> Health, Behavioral (Skinnerian), Clinical &amp; Developmental Psychology
                    </div>
                  </div>
                  <div className="spotlight-highlight-item">
                    <span className="sh-dot" />
                    <div>
                      <strong>Operant Habit Lab:</strong> Clinical adherence loops, environmental cue restructuring &amp; reinforcement
                    </div>
                  </div>
                  <div className="spotlight-highlight-item">
                    <span className="sh-dot" />
                    <div>
                      <strong>Self-Assessment &amp; Quiz:</strong> 5-question clinical vignette challenge with instant explanations
                    </div>
                  </div>
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
                    to="/learn?category=healthcare_psychology"
                    className="btn outline spotlight-mod-btn"
                  >
                    <span>Explore Module Lessons (3)</span>
                  </Link>

                  <div className="spotlight-meta-pill">
                    <Clock size={14} />
                    <span>{latestLesson.time || 5} min interactive read</span>
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
                    <span className="spotlight-card-title">Interactive Module Engine</span>
                  </div>

                  <div className="spotlight-preview-body">
                    <div className="spotlight-model-chip-list">
                      <div className="sm-chip active">
                        <Activity size={13} />
                        <span>Biopsychosocial Simulator</span>
                      </div>
                      <div className="sm-chip">
                        <Brain size={13} />
                        <span>HPA Stress Pathway</span>
                      </div>
                      <div className="sm-chip">
                        <Award size={13} />
                        <span>Skinnerian Loop</span>
                      </div>
                    </div>

                    <div className="spotlight-diagram-box">
                      <div className="s-node biological">
                        <span className="s-badge">BIO</span>
                        <strong>Biological</strong>
                        <small>Genetics, HPA Axis, Neurochemistry</small>
                      </div>
                      <div className="s-connector">⇄</div>
                      <div className="s-node psychological active-pulse">
                        <span className="s-badge">PSYCH</span>
                        <strong>Psychological</strong>
                        <small>Stress, Cognition, Habit Loops</small>
                      </div>
                      <div className="s-connector">⇄</div>
                      <div className="s-node social">
                        <span className="s-badge">SOC</span>
                        <strong>Social</strong>
                        <small>Support, Culture, Environment</small>
                      </div>
                    </div>

                    <div className="spotlight-preview-foot">
                      <span>✨ Newest clinical behavioral framework</span>
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
                              <Clock size={12} /> {lesson.time} min
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
              const isLatestAddition = l.isLatest || l.id === 'introduction-to-healthcare-psychology';

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
                    {l.id === 'introduction-to-healthcare-psychology' && (
                      <span className="feat-chip accent">🧠 Biopsychosocial Model</span>
                    )}
                    {l.spikesSteps && (
                      <span className="feat-chip">📋 6-Stage SPIKES Protocol</span>
                    )}
                    {l.solerSteps && (
                      <span className="feat-chip">🧘 SOLER Posture Framework</span>
                    )}
                    {l.animation && (
                      <span className="feat-chip">🧬 Interactive Simulation</span>
                    )}
                    {l.video && (
                      <span className="feat-chip">🎥 Video Included</span>
                    )}
                    {l.quiz && l.quiz.length > 0 && (
                      <span className="feat-chip">📝 Quiz ({l.quiz.length} Qs)</span>
                    )}
                  </div>

                  <div className="new-lesson-footer">
                    <div className="time-est">
                      <Clock size={15} />
                      <span>{l.time} min read</span>
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
