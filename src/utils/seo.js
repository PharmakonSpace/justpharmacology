import { useEffect } from 'react';

/**
 * Default SEO configuration
 */
export const DEFAULT_SEO = {
  siteName: 'Just Pharmacology',
  siteUrl: 'https://justpharmacology.com',
  defaultTitle: 'Just Pharmacology — Interactive Pharmacology Learning & Clinical Guides',
  titleTemplate: '%s — Just Pharmacology',
  defaultDescription:
    'Interactive pharmacology learning platform featuring structured lessons, mechanism animations, quizzes, and rapid revision. Free educational initiative inspired by Dr. Manoj Goyal.',
  defaultKeywords:
    'pharmacology, pharmacokinetics, pharmacodynamics, drug receptors, drug absorption, bioavailability, clinical pharmacology, healthcare psychology, SPIKES protocol, Dr. Manoj Goyal, GPAT, USMLE, NCLEX pharmacology, pharmacy lectures',
  defaultImage: 'https://justpharmacology.com/og-image.svg',
  author: 'Dr. Manoj Goyal & Just Pharmacology Educational Initiative',
  themeColor: '#0d9488',
};

/**
 * Helper to update or create a <meta> tag by name or property
 */
function setMetaTag(attribute, attrValue, content) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content || '');
}

/**
 * Helper to update or create a <link rel="..."> tag
 */
function setLinkTag(rel, href) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * Helper to update or create structured JSON-LD schema in <head>
 */
function setJsonLd(schemaId, data) {
  if (typeof document === 'undefined') return;
  const existing = document.getElementById(schemaId);
  if (existing) {
    existing.remove();
  }
  if (!data) return;

  const script = document.createElement('script');
  script.id = schemaId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Custom React hook for dynamic route-based SEO metadata
 *
 * @param {Object} options
 * @param {string} options.title - Page title (unformatted or full)
 * @param {string} [options.description] - Meta description
 * @param {string} [options.keywords] - Comma-separated keywords
 * @param {string} [options.canonicalPath] - Relative route (e.g. '/lesson/bioavailability-first-pass')
 * @param {string} [options.ogType='website'] - Open graph type ('website', 'article', etc.)
 * @param {string} [options.ogImage] - Absolute or relative image URL
 * @param {Object} [options.jsonLd] - Schema.org JSON-LD data object
 * @param {boolean} [options.noindex=false] - Whether to prevent search indexing
 */
export function usePageSEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage,
  jsonLd,
  noindex = false,
} = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Title formatting
    let fullTitle = DEFAULT_SEO.defaultTitle;
    if (title) {
      if (title.includes('Just Pharmacology')) {
        fullTitle = title;
      } else {
        fullTitle = DEFAULT_SEO.titleTemplate.replace('%s', title);
      }
    }
    document.title = fullTitle;

    // 2. Canonical URL
    const baseUrl = window.location.origin || DEFAULT_SEO.siteUrl;
    const currentPath = canonicalPath || window.location.pathname;
    const canonicalUrl = `${baseUrl}${currentPath}`;
    setLinkTag('canonical', canonicalUrl);

    // 3. Meta Description
    const metaDesc = description || DEFAULT_SEO.defaultDescription;
    setMetaTag('name', 'description', metaDesc);

    // 4. Meta Keywords
    const metaKeywords = keywords || DEFAULT_SEO.defaultKeywords;
    setMetaTag('name', 'keywords', metaKeywords);

    // 5. Robots
    const robotsContent = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('name', 'robots', robotsContent);
    setMetaTag('name', 'googlebot', robotsContent);

    // 6. Open Graph Tags
    setMetaTag('property', 'og:site_name', DEFAULT_SEO.siteName);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDesc);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage || DEFAULT_SEO.defaultImage);
    setMetaTag('property', 'og:locale', 'en_US');

    // 7. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDesc);
    setMetaTag('name', 'twitter:image', ogImage || DEFAULT_SEO.defaultImage);
    setMetaTag('name', 'twitter:site', '@JustPharmacology');

    // 8. Dynamic JSON-LD Structured Data
    if (jsonLd) {
      setJsonLd('page-dynamic-jsonld', jsonLd);
    } else {
      setJsonLd('page-dynamic-jsonld', null);
    }

    return () => {
      // Cleanup dynamically injected page schema when unmounting
      const el = document.getElementById('page-dynamic-jsonld');
      if (el) el.remove();
    };
  }, [title, description, keywords, canonicalPath, ogType, ogImage, jsonLd, noindex]);
}

/**
 * Builds Schema.org JSON-LD for a single lesson
 */
export function buildLessonSchema(lesson, canonicalUrl) {
  if (!lesson) return null;

  const durationMin = lesson.time || 15;
  const isoDuration = `PT${durationMin}M`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LearningResource', 'MedicalWebPage'],
    name: lesson.title,
    headline: lesson.subtitle || lesson.title,
    description: lesson.description || `${lesson.title} — pharmacology lesson with interactive diagrams and clinical pearls.`,
    url: canonicalUrl,
    inLanguage: 'en',
    educationalLevel: lesson.level || 'Undergraduate Medical & Pharmacy',
    timeRequired: isoDuration,
    learningResourceType: 'Lesson',
    teaches: [lesson.topic || 'Pharmacology', ...(lesson.objectives || [])],
    author: {
      '@type': 'Person',
      name: 'Dr. Manoj Goyal',
      jobTitle: 'Professor of Pharmacology',
      alumniOf: 'Birla Institute of Technology (BIT Mesra)',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Just Pharmacology',
      url: 'https://justpharmacology.com',
    },
  };

  if (lesson.dateAdded) {
    schema.datePublished = lesson.dateAdded;
  }

  // If video exists, attach VideoObject
  if (lesson.video?.youtubeId) {
    schema.video = {
      '@type': 'VideoObject',
      name: lesson.video.title || lesson.title,
      description: lesson.video.subtitle || lesson.description,
      thumbnailUrl: `https://img.youtube.com/vi/${lesson.video.youtubeId}/hqdefault.jpg`,
      uploadDate: lesson.dateAdded || '2026-08-30',
      embedUrl: `https://www.youtube-nocookie.com/embed/${lesson.video.youtubeId}`,
    };
  }

  // If quiz exists, add Quiz schema
  if (Array.isArray(lesson.quiz) && lesson.quiz.length > 0) {
    schema.hasPart = {
      '@type': 'Quiz',
      name: `${lesson.title} Self-Assessment Quiz`,
      typicalAgeRange: '18+',
      educationalLevel: lesson.level || 'Higher Education',
      about: lesson.title,
      numberOfQuestions: lesson.quiz.length,
    };
  }

  return schema;
}
