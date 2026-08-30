import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  FolderPlus,
  Layers,
  CheckCircle,
  PlayCircle,
  HelpCircle,
} from 'lucide-react';
import { getNewArrivals, getModulesWithStats, getAvailableTopics, getCurriculumStats } from '../../utils/contentUtils';

export default function NewArrivalsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const newArrivals = getNewArrivals();
  const modulesWithStats = getModulesWithStats();
  const availableModules = modulesWithStats.filter((m) => m.lessonsCount > 0);
  const availableTopics = getAvailableTopics();
  const stats = getCurriculumStats();

  const filteredLessons = activeFilter === 'all'
    ? newArrivals
    : newArrivals.filter((l) => l.categoryId === activeFilter);

  return (
    <section className="section new-arrivals-section" id="new-arrivals">
      <div className="container">
        {/* Section Header */}
        <div className="new-arrivals-head">
          <div className="new-arrivals-title-wrap">
            <div className="new-arrivals-badge-pulse">
              <span className="live-dot" />
              <Sparkles size={14} className="sparkle-icon" />
              <span>CURRICULUM UPDATES</span>
            </div>
            <h2>New Lessons, Topics &amp; Modules</h2>
            <p className="new-arrivals-sub">
              Fresh additions to Just Pharmacology — explore newly introduced clinical empathy frameworks,
              pharmacokinetic principles, and interactive mechanism lessons.
            </p>
          </div>

          <Link to="/learn" className="btn secondary view-all-btn">
            View full curriculum <ArrowRight size={16} />
          </Link>
        </div>

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
          <div className="arrivals-tabs">
            <button
              type="button"
              className={activeFilter === 'all' ? 'arrival-tab active' : 'arrival-tab'}
              onClick={() => setActiveFilter('all')}
            >
              🔥 All New &amp; Recent Arrivals ({newArrivals.length})
            </button>
            {availableModules.map((m) => (
              <button
                key={m.id}
                type="button"
                className={activeFilter === m.id ? 'arrival-tab active' : 'arrival-tab'}
                onClick={() => setActiveFilter(m.id)}
              >
                {m.icon} {m.title} {m.isNew && <span className="tab-new-dot">NEW</span>}
              </button>
            ))}
            <button
              type="button"
              className={activeFilter === 'topics' ? 'arrival-tab active' : 'arrival-tab'}
              onClick={() => setActiveFilter('topics')}
            >
              📌 Newly Added Topics ({availableTopics.length})
            </button>
          </div>
        </div>

        {/* Content Display */}
        {activeFilter === 'topics' ? (
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
          <div className="new-arrivals-grid">
            {filteredLessons.map((l) => (
              <div key={l.id} className="new-lesson-card">
                <div className="new-lesson-card-header">
                  <div className="new-lesson-tags">
                    <span className="new-indicator-badge">✨ NEW</span>
                    <span className="topic-tag-pill">{l.topic}</span>
                  </div>
                  <span className="level-badge">{l.level}</span>
                </div>

                <h3 className="new-lesson-title">{l.title}</h3>
                <p className="new-lesson-desc">{l.description}</p>

                {/* Framework / Content Badges if present */}
                <div className="feature-badges">
                  {l.spikesSteps && (
                    <span className="feat-chip">📋 6-Stage Flow</span>
                  )}
                  {l.frameworks && (
                    <span className="feat-chip">🩺 SOLER &amp; NURSE</span>
                  )}
                  {l.animation && (
                    <span className="feat-chip">🧬 Visual Model</span>
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
                  <Link to={`/lesson/${l.id}`} className="start-new-btn">
                    <span>Start Lesson</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
