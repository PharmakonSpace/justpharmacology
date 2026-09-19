import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  FileImage,
  ExternalLink,
  Layers,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';

export default function LessonInfographic({ infographic, lessonTitle }) {
  if (!infographic) return null;

  const candidateSrcs = [
    infographic.src,
    ...(infographic.fallbackSrcs || []),
    '/routes-of-drug-administration.jpg',
    '/image.png',
    '/images/routes-of-drug-administration.png',
  ].filter(Boolean);

  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('infographic'); // 'infographic' | 'hierarchy'

  const activeSrc = candidateSrcs[currentSrcIndex] || infographic.src;

  const handleImageError = () => {
    if (currentSrcIndex < candidateSrcs.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setImageError(true);
      setImageLoaded(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  };

  const handleZoomReset = (e) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <section id="sec-infographic" className="content-card infographic-section" style={{ padding: '20px' }}>
      {/* Header with Title and Mode Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                background: '#eff6ff',
                color: '#1d4ed8',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                border: '1px solid #bfdbfe',
              }}
            >
              <Sparkles size={12} /> {infographic.badge || 'Master Taxonomy Map'}
            </span>
          </div>
          <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a', fontWeight: '800' }}>
            🖼️ {infographic.title || 'Master Classification: Routes of Drug Administration'}
          </h2>
          {infographic.caption && (
            <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
              {infographic.caption}
            </p>
          )}
        </div>

        {/* View mode toggle */}
        <div style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '3px', borderRadius: '8px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('infographic')}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'infographic' ? '#ffffff' : 'transparent',
              color: activeTab === 'infographic' ? '#0f766e' : '#64748b',
              boxShadow: activeTab === 'infographic' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <FileImage size={13} />
            <span>Infographic Chart</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('hierarchy')}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'hierarchy' ? '#ffffff' : 'transparent',
              color: activeTab === 'hierarchy' ? '#0f766e' : '#64748b',
              boxShadow: activeTab === 'hierarchy' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Layers size={13} />
            <span>Interactive Hierarchy</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Infographic Image Viewer */}
      {activeTab === 'infographic' && (
        <div>
          {!imageError ? (
            <div
              style={{
                position: 'relative',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
              }}
            >
              {/* Image Toolbar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 14px',
                  background: '#ffffff',
                  borderBottom: '1px solid #e2e8f0',
                  fontSize: '12px',
                  color: '#64748b',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: '600', color: '#0f172a' }}>High-Yield Reference Chart</span>
                  <span>· Click image to enlarge &amp; inspect needle angles &amp; mucosal sites</span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setZoomLevel(1);
                      setIsModalOpen(true);
                    }}
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#334155',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Maximize2 size={12} /> Fullscreen Zoom
                  </button>
                  <a
                    href={activeSrc}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#334155',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={12} /> Open in Tab
                  </a>
                </div>
              </div>

              {/* Clickable Image Container */}
              <div
                onClick={() => {
                  setZoomLevel(1);
                  setIsModalOpen(true);
                }}
                style={{
                  cursor: 'zoom-in',
                  textAlign: 'center',
                  padding: '12px',
                  background: '#f8fafc',
                }}
              >
                <img
                  src={activeSrc}
                  alt={infographic.alt || 'Routes of Drug Administration master classification'}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'inline-block',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                />
              </div>

              <div
                style={{
                  padding: '10px 14px',
                  background: '#ffffff',
                  borderTop: '1px solid #e2e8f0',
                  fontSize: '12px',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <span>
                  💡 <strong>Study Tip:</strong> Note the 4 parenteral injection angles: Intramuscular (90°), Subcutaneous (45°), Intravenous (25°), and Intradermal (10–15°).
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                  Source: Standard Medical Curriculum Framework
                </span>
              </div>
            </div>
          ) : (
            /* Upload Instructions Box when file is not yet in public/ directory */
            <div
              style={{
                border: '2px dashed #94a3b8',
                borderRadius: '12px',
                padding: '24px',
                background: '#f8fafc',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#e0f2fe',
                  color: '#0284c7',
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0 auto 12px',
                }}
              >
                <FileImage size={24} />
              </div>
              <h3 style={{ margin: '0 0 6px', fontSize: '16px', color: '#0f172a' }}>
                How to Display Your Infographic Image
              </h3>
              <p style={{ margin: '0 auto 16px', maxWidth: '600px', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
                Your code is fully wired and ready! To have the chart display here automatically:
              </p>

              <div
                style={{
                  maxWidth: '520px',
                  margin: '0 auto 20px',
                  textAlign: 'left',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  fontSize: '13px',
                  color: '#334155',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '700', color: '#0d9488' }}>1.</span>
                  <span>In the AI Studio file explorer on the left, open the <code>public/</code> directory.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '700', color: '#0d9488' }}>2.</span>
                  <span>Drag &amp; drop your image file into <code>public/</code> and name it <strong><code>routes-of-drug-administration.png</code></strong> or <strong><code>image.png</code></strong>.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontWeight: '700', color: '#0d9488' }}>3.</span>
                  <span>The page will instantly display your high-resolution medical infographic right here!</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('hierarchy')}
                  className="btn primary"
                  style={{ fontSize: '13px', padding: '8px 16px' }}
                >
                  <Layers size={14} /> View Interactive Hierarchy Instead
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentSrcIndex(0);
                    setImageError(false);
                  }}
                  className="btn secondary"
                  style={{ fontSize: '13px', padding: '8px 16px' }}
                >
                  <RotateCcw size={14} /> Retry Loading Image
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Interactive Hierarchy Breakdown matching the Infographic */}
      {activeTab === 'hierarchy' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* 1. Local Routes Card */}
          <div
            style={{
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '12px',
              padding: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span
                style={{
                  background: '#0284c7',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontWeight: '800',
                  fontSize: '12px',
                }}
              >
                1. LOCAL ROUTES
              </span>
              <span style={{ fontSize: '13px', color: '#0369a1', fontWeight: '500' }}>
                Targeted application directly to a specific accessible body part (minimal systemic absorption)
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e0f2fe' }}>
                <strong style={{ color: '#0369a1', display: 'block', marginBottom: '6px' }}>🧴 Topical Routes</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12.5px', color: '#334155' }}>
                  <li>Skin (creams, ointments, lotions)</li>
                  <li>Eye (drops, ophthalmic ointments)</li>
                  <li>Ear (otic drops)</li>
                  <li>Nasal mucosa (local sprays, decongestants)</li>
                  <li>Oral/oropharyngeal mucosa (pastilles, paints)</li>
                  <li>Vaginal / rectal local application (suppositories)</li>
                </ul>
              </div>

              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e0f2fe' }}>
                <strong style={{ color: '#0369a1', display: 'block', marginBottom: '6px' }}>💉 Local Injections</strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12.5px', color: '#334155' }}>
                  <li>Intra-articular (joint cavities, e.g. hydrocortisone)</li>
                  <li>Perineural / local infiltration (nerve blocks, lidocaine)</li>
                  <li>Intrathecal (subarachnoid space for spinal anesthesia)</li>
                  <li>Retrobulbar (behind the eyeball)</li>
                </ul>
              </div>

              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e0f2fe' }}>
                <strong style={{ color: '#0369a1', display: 'block', marginBottom: '6px' }}>🩺 Local Arterial Delivery</strong>
                <p style={{ margin: 0, fontSize: '12.5px', color: '#334155', lineHeight: '1.4' }}>
                  Direct arterial infusion to target organs (e.g. coronary angiography, hepatic artery chemoembolization).
                </p>
              </div>
            </div>
          </div>

          {/* 2. Systemic Routes Card */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span
                style={{
                  background: '#0f766e',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontWeight: '800',
                  fontSize: '12px',
                }}
              >
                2. SYSTEMIC ROUTES
              </span>
              <span style={{ fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                Distribution via bloodstream throughout the entire body to reach target tissues
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
                <strong style={{ color: '#065f46', display: 'block', marginBottom: '4px' }}>A. Enteral / GI</strong>
                <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#047857' }}>Oral &amp; Rectal routes</p>
                <small style={{ color: '#334155', fontSize: '11px' }}>Subject to GI enzymes and first-pass hepatic clearance (partial for rectal).</small>
              </div>

              <div style={{ background: '#fffbeb', padding: '12px', borderRadius: '8px', border: '1px solid #fde68a' }}>
                <strong style={{ color: '#92400e', display: 'block', marginBottom: '4px' }}>B. Mucosal</strong>
                <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#b45309' }}>Sublingual, Buccal, Nasal</p>
                <small style={{ color: '#334155', fontSize: '11px' }}>Direct drainage into systemic veins, completely bypassing hepatic first-pass metabolism.</small>
              </div>

              <div style={{ background: '#f5f3ff', padding: '12px', borderRadius: '8px', border: '1px solid #ddd6fe' }}>
                <strong style={{ color: '#5b21b6', display: 'block', marginBottom: '4px' }}>C. Respiratory</strong>
                <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#6d28d9' }}>Inhalational aerosols &amp; gases</p>
                <small style={{ color: '#334155', fontSize: '11px' }}>Alveolar surface area ~100m² provides rapid pulmonary capillary absorption.</small>
              </div>

              <div style={{ background: '#fff7ed', padding: '12px', borderRadius: '8px', border: '1px solid #fed7aa' }}>
                <strong style={{ color: '#9a3412', display: 'block', marginBottom: '4px' }}>D. Transdermal</strong>
                <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#ea580c' }}>Transdermal Patch / Systems</p>
                <small style={{ color: '#334155', fontSize: '11px' }}>Slow, sustained systemic delivery across stratum corneum (e.g. fentanyl, nitroglycerin).</small>
              </div>

              <div style={{ background: '#fef2f2', padding: '12px', borderRadius: '8px', border: '1px solid #fecaca' }}>
                <strong style={{ color: '#991b1b', display: 'block', marginBottom: '4px' }}>E. Parenteral (Needle)</strong>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11.5px', color: '#7f1d1d' }}>
                  <li><strong>IV (25°):</strong> 100% bioavailability, instant</li>
                  <li><strong>IM (90°):</strong> Vascular muscle bed</li>
                  <li><strong>SC (45°):</strong> Subcutaneous fat layer</li>
                  <li><strong>ID (10–15°):</strong> Dermal layer for allergy tests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for High-Resolution Fullscreen Inspection */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Modal Header Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
              color: '#ffffff',
            }}
          >
            <div>
              <strong style={{ fontSize: '16px' }}>{infographic.title || lessonTitle}</strong>
              <span style={{ fontSize: '12px', opacity: 0.8, marginLeft: '12px' }}>
                Zoom: {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={handleZoomIn}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                }}
              >
                <ZoomIn size={14} /> Zoom In
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                }}
              >
                <ZoomOut size={14} /> Zoom Out
              </button>
              <button
                type="button"
                onClick={handleZoomReset}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                }}
              >
                <RotateCcw size={14} /> Reset
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: '#ef4444',
                  border: 'none',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  fontWeight: '700',
                  marginLeft: '8px',
                }}
              >
                <X size={16} /> Close
              </button>
            </div>
          </div>

          {/* Modal Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1200px',
              maxHeight: '85vh',
              overflow: 'auto',
              background: '#0f172a',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={activeSrc}
              alt={infographic.alt || 'Infographic Fullscreen'}
              style={{
                maxWidth: zoomLevel === 1 ? '100%' : 'none',
                maxHeight: zoomLevel === 1 ? '80vh' : 'none',
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: 'transform 0.15s ease-out',
                borderRadius: '6px',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
