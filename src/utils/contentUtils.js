import { modules, allLessons } from '../data/pharmacology/module-registry.js';
import { categories } from '../data/categories.js';

/**
 * Returns metadata and active counts for all modules in the curriculum.
 * Automatically synchronizes with any new lessons added in any subfolder.
 */
export function getModulesWithStats() {
  return modules.map((m) => {
    const lessons = Array.isArray(m.lessons) ? m.lessons : [];
    const topicsSet = new Set(lessons.map((l) => l.topic).filter(Boolean));
    const isAvailable = lessons.length > 0;
    const cat = categories.find(
      (c) => c.id === m.id || (m.id === 'cardiovascular' && c.id === 'cardio') || (m.id === 'gastrointestinal' && c.id === 'gi')
    );

    // A module is flagged as "NEW" if it has the isNew property or is the newly introduced healthcare_psychology module
    const isNew = m.isNew === true || m.id === 'healthcare_psychology';

    return {
      id: m.id,
      title: m.title || m.name || cat?.name || m.id,
      name: m.name || m.title || cat?.name || m.id,
      description: m.description || cat?.description || `Comprehensive lessons and visual mechanisms for ${m.title || m.name}.`,
      icon: m.icon || cat?.icon || '📚',
      status: isAvailable ? 'available' : (m.status || 'coming-soon'),
      lessonsCount: lessons.length,
      topicsCount: topicsSet.size,
      topics: Array.from(topicsSet),
      lessons,
      isNew,
    };
  });
}

/**
 * Returns high-level curriculum statistics dynamically based on all registered files.
 */
export function getCurriculumStats() {
  const activeModules = modules.filter((m) => Array.isArray(m.lessons) && m.lessons.length > 0);
  const allUniqueTopics = new Set(allLessons.map((l) => l.topic).filter(Boolean));
  const animationsCount = allLessons.filter((l) => l.animation).length;
  const quizzesCount = allLessons.reduce((acc, l) => acc + (Array.isArray(l.quiz) ? l.quiz.length : 0), 0);

  return {
    totalLessons: allLessons.length,
    totalTopics: allUniqueTopics.size,
    activeModulesCount: activeModules.length,
    totalModulesCount: modules.length,
    animationsCount,
    quizzesCount,
  };
}

/**
 * Returns all newly added or highlighted lessons across all subfolders.
 * Sorted in strict reverse-chronological order (most recent at the top).
 * If a categoryId is passed, returns new arrivals for that module in recency order.
 */
export function getNewArrivals(categoryId = null) {
  const newLessons = [];
  const seenIds = new Set();

  // 1. Explicitly marked new lessons or from new modules (e.g. healthcare_psychology)
  allLessons.forEach((l) => {
    const isExplicitlyNew = l.isNew === true || l.isLatest === true || l.badge === 'NEW' || l.badge === 'LATEST ADDITION' || l.categoryId === 'healthcare_psychology';
    if (isExplicitlyNew && !seenIds.has(l.id)) {
      newLessons.push({
        ...l,
        isNew: true,
        badge: l.badge || (l.isLatest ? 'LATEST ADDITION' : 'NEW'),
        dateAdded: l.dateAdded || (l.id === 'introduction-to-healthcare-psychology' ? '2026-08-31T00:00:00' : l.id === 'body-language-that-heals' ? '2026-08-30T00:00:00' : l.id === 'spikes-protocol' ? '2026-08-29T00:00:00' : '2026-08-20T00:00:00'),
        addedOrder: l.addedOrder ?? (l.id === 'introduction-to-healthcare-psychology' ? 3 : l.id === 'body-language-that-heals' ? 2 : l.id === 'spikes-protocol' ? 1 : 0),
      });
      seenIds.add(l.id);
    }
  });

  // 2. Also include recent advanced concepts or latest added topics if available (add items here when desired)
  const recentAdvancedIds = [
    // { id: 'potency-vs-efficacy', order: 5, date: '2026-08-25T00:00:00' },
    // { id: 'spare-receptors', order: 4, date: '2026-08-24T00:00:00' },
    // { id: 'bioequivalence', order: 3, date: '2026-08-23T00:00:00' },
    // { id: 'prodrugs', order: 2, date: '2026-08-22T00:00:00' },
    // { id: 'volume-of-distribution', order: 1, date: '2026-08-21T00:00:00' },
  ];

  recentAdvancedIds.forEach(({ id, order, date }) => {
    const l = allLessons.find((item) => item.id === id);
    if (l && !seenIds.has(l.id)) {
      newLessons.push({
        ...l,
        isNew: true,
        badge: 'RECENT',
        dateAdded: l.dateAdded || date,
        addedOrder: l.addedOrder ?? order,
      });
      seenIds.add(l.id);
    }
  });

  // Sort by strict recency: Most recent at the top!
  const sorted = newLessons.sort((a, b) => {
    // 1. isLatest flag always goes first
    if (a.isLatest && !b.isLatest) return -1;
    if (!a.isLatest && b.isLatest) return 1;

    // 2. Date added descending (newest timestamp first)
    const timeA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
    const timeB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
    if (timeB !== timeA) {
      return timeB - timeA;
    }

    // 3. Explicit addedOrder descending (higher order number first)
    const orderA = Number(a.addedOrder ?? 0);
    const orderB = Number(b.addedOrder ?? 0);
    if (orderB !== orderA) {
      return orderB - orderA;
    }

    return 0;
  });

  if (categoryId && categoryId !== 'all') {
    return sorted.filter((l) => l.categoryId === categoryId);
  }

  return sorted;
}

/**
 * Returns the single latest lesson added to the curriculum.
 * (e.g. "Introduction to Healthcare Psychology")
 */
export function getLatestLesson() {
  const arrivals = getNewArrivals();
  return arrivals.find((l) => l.isLatest) || arrivals[0] || null;
}

/**
 * Groups new arrivals by module/category, with lessons in each module
 * sorted in order where the most recent shows at the top.
 */
export function getGroupedNewArrivalsByModule() {
  const arrivals = getNewArrivals();
  const map = new Map();

  arrivals.forEach((lesson) => {
    const catId = lesson.categoryId || 'general';
    const cat = categories.find((c) => c.id === catId);
    const mod = modules.find((m) => m.id === catId);
    const moduleName = mod?.title || mod?.name || cat?.name || catId;
    const icon = mod?.icon || cat?.icon || '📚';
    const isNewModule = mod?.isNew || catId === 'healthcare_psychology';

    if (!map.has(catId)) {
      map.set(catId, {
        categoryId: catId,
        moduleName,
        icon,
        isNewModule,
        lessons: [],
      });
    }

    map.get(catId).lessons.push(lesson);
  });

  // Ensure lessons in each module are sorted newest first
  const grouped = Array.from(map.values()).map((group) => {
    const sortedLessons = [...group.lessons].sort((a, b) => {
      if (a.isLatest && !b.isLatest) return -1;
      if (!a.isLatest && b.isLatest) return 1;
      const timeA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
      const timeB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
      if (timeB !== timeA) return timeB - timeA;
      return (b.addedOrder || 0) - (a.addedOrder || 0);
    });

    return {
      ...group,
      lessons: sortedLessons,
      latestLesson: sortedLessons[0],
    };
  });

  // Modules with newest additions or isNewModule appear first
  return grouped.sort((a, b) => {
    if (a.isNewModule && !b.isNewModule) return -1;
    if (!a.isNewModule && b.isNewModule) return 1;
    return b.lessons.length - a.lessons.length;
  });
}

/**
 * Returns list of distinct topics with parent module info and lesson counts.
 */
export function getAvailableTopics() {
  const topicsMap = new Map();

  allLessons.forEach((l) => {
    if (!l.topic) return;
    const cat = categories.find((c) => c.id === l.categoryId);
    const mod = modules.find((m) => m.id === l.categoryId);
    const moduleName = mod?.title || mod?.name || cat?.name || l.categoryId;
    const icon = cat?.icon || '🧬';

    if (!topicsMap.has(l.topic)) {
      topicsMap.set(l.topic, {
        topic: l.topic,
        categoryId: l.categoryId,
        moduleName,
        icon,
        lessons: [],
        isNew: l.isNew === true || l.categoryId === 'healthcare_psychology' || ['Pharmacodynamics', 'Receptors', 'Breaking Bad News'].includes(l.topic),
      });
    }

    topicsMap.get(l.topic).lessons.push(l);
  });

  return Array.from(topicsMap.values());
}

/**
 * Checks if a specific lesson ID is considered a new arrival.
 */
export function isNewArrival(lessonId) {
  const newArrivals = getNewArrivals();
  return newArrivals.some((l) => l.id === lessonId);
}

/**
 * Automatically gathers all video lectures from across all lessons/modules.
 * Automatically synchronizes with any new lessons added in any subfolder.
 * Prioritizes newly added lessons (isNew / badge: 'NEW' / healthcare_psychology) at the top,
 * followed by all other lessons with videos.
 */
export function getAllCurriculumVideos() {
  const videoList = [];
  const seenVideoIds = new Set();

  allLessons.forEach((lesson) => {
    if (!lesson.video) return;

    let youtubeId = '';
    let title = lesson.title;

    if (typeof lesson.video === 'string' && lesson.video.trim() !== '') {
      youtubeId = lesson.video.trim();
    } else if (typeof lesson.video === 'object' && lesson.video.youtubeId && lesson.video.youtubeId.trim() !== '') {
      youtubeId = lesson.video.youtubeId.trim();
      title = lesson.video.title || lesson.title;
    }

    if (youtubeId && !seenVideoIds.has(youtubeId)) {
      seenVideoIds.add(youtubeId);
      const cat = categories.find((c) => c.id === lesson.categoryId);
      const isNew = Boolean(lesson.isNew || lesson.badge === 'NEW' || lesson.categoryId === 'healthcare_psychology');

      videoList.push({
        id: `${lesson.id}-vid`,
        lessonId: lesson.id,
        title,
        lessonTitle: lesson.title,
        topic: lesson.topic || 'Pharmacology',
        categoryId: lesson.categoryId,
        categoryName: cat?.name || lesson.categoryId,
        youtubeId,
        duration: `${lesson.time || 10}m`,
        level: lesson.level || 'Intermediate',
        isNew,
        badge: lesson.badge || (isNew ? 'NEW' : null),
        description: lesson.description || '',
      });
    }
  });

  // Sort so newly added / updated lesson videos appear first!
  return videoList.sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
}

/**
 * Returns recent videos for the home page.
 * Gathers all automatic lesson videos first, and complements with channel signature lectures if needed.
 */

/**
 * Returns all interactive visual animations available across all curriculum modules.
 * Automatically synchronizes with any new animations declared in any lesson file.
 */
export function getAllAnimations() {
  const baseCatalog = [
    {
      type: 'drug-receptor',
      title: 'Drug → Receptor → Response Cascade',
      subtitle: 'Molecular Target Interaction & Signal Transduction',
      categoryId: 'general',
      categoryName: 'General Pharmacology',
      icon: '💊🎯',
      badge: 'FUNDAMENTAL',
      description:
        'Interactive 3-stage model demonstrating drug approach, stereospecific receptor binding, and subsequent biological response cascade.',
    },
    {
      type: 'adme',
      title: 'ADME Pharmacokinetic Transit Journey',
      subtitle: 'Absorption, Distribution, Metabolism & Excretion',
      categoryId: 'general',
      categoryName: 'General Pharmacology',
      icon: '🔄',
      badge: 'CORE PK',
      description:
        'Interactive 4-stage exploration of Absorption, Distribution, Metabolism, and Excretion governing drug disposition in the human body.',
    },
    {
      type: 'absorption',
      title: 'Drug Absorption & Bioavailability Model',
      subtitle: 'Membrane Permeation & Systemic Circulation Transit',
      categoryId: 'general',
      categoryName: 'General Pharmacology',
      icon: '🧬🩸',
      badge: 'HIGH-YIELD',
      description:
        'Visual transit model demonstrating how drug formulations cross biological lipid barriers, enter systemic bloodstream, and achieve target bioavailability.',
    },
    {
      type: 'agonist-antagonist',
      title: 'Agonist vs Antagonist Receptor Dynamics',
      subtitle: 'Receptor Occupancy, Activation & Blockade',
      categoryId: 'general',
      categoryName: 'General Pharmacology',
      icon: '⚡⛔',
      badge: 'CORE PD',
      description:
        'Dynamic receptor simulator contrasting full receptor activation by agonists with competitive blockade and response inhibition by antagonists.',
    },
    {
      type: 'spikes',
      title: 'The SPIKES Protocol Interactive Simulation',
      subtitle: '6-Stage Clinical Empathy & Communication Simulator',
      categoryId: 'healthcare_psychology',
      categoryName: 'Healthcare Psychology & Communication Skills',
      icon: '📋🩺',
      badge: 'CLINICAL SKILL',
      isNew: true,
      description:
        'Step-by-step clinical communication simulator for delivering difficult diagnostic news (Setting, Perception, Invitation, Knowledge, Empathy, Strategy).',
    },
    {
      type: 'soler',
      title: "Gerard Egan's SOLER Posture Framework",
      subtitle: 'Nonverbal Active Listening & Somatic Coregulation',
      categoryId: 'healthcare_psychology',
      categoryName: 'Healthcare Psychology & Communication Skills',
      icon: '🧘👁️',
      badge: 'NEW MODEL',
      isNew: true,
      description:
        '5-step evidence-based physical blueprint (Square, Open, Lean, Eye Contact, Relax) for nonverbal active listening and soothing patient anxiety.',
    },
    {
      type: 'biopsychosocial',
      title: 'Neuroendocrine Cascade & Behavioral Intervention',
      subtitle: 'Stress Trigger → Cortisol Surge → Hypertension & Behavioral Reset',
      categoryId: 'healthcare_psychology',
      categoryName: 'Healthcare Psychology & Communication Skills',
      icon: '🧠⚡',
      badge: 'NEW MODEL',
      isNew: true,
      description:
        '4-stage dynamic model illustrating cognitive stress triggers, HPA axis cortisol release, sustained hypertension, and Skinnerian behavioral modification loops.',
    },
  ];

  // Dynamically find any additional animation types registered in allLessons
  const registeredTypes = new Set(baseCatalog.map((a) => a.type));
  allLessons.forEach((l) => {
    if (l.animation && !registeredTypes.has(l.animation.toLowerCase().trim())) {
      const typeKey = l.animation.toLowerCase().trim();
      const cat = categories.find((c) => c.id === l.categoryId);
      const mod = modules.find((m) => m.id === l.categoryId);
      baseCatalog.push({
        type: typeKey,
        title: `${l.title} Interactive Model`,
        subtitle: l.subtitle || l.topic || 'Visual Mechanism',
        categoryId: l.categoryId || 'general',
        categoryName: mod?.title || cat?.name || l.categoryId || 'Pharmacology',
        icon: '🧬',
        badge: l.badge || 'INTERACTIVE',
        isNew: l.isNew === true,
        description: l.description || 'Interactive visual learning model for clinical pharmacology concepts.',
      });
      registeredTypes.add(typeKey);
    }
  });

  // Attach linked lessons to each animation
  return baseCatalog.map((anim) => {
    const linkedLessons = allLessons.filter(
      (l) => l.animation && l.animation.toLowerCase().trim() === anim.type
    );
    return {
      ...anim,
      linkedLessons,
    };
  });
}

/**
 * Returns recent videos for the home page.
 * Gathers all automatic lesson videos first, and complements with channel signature lectures if needed.
 */
export function getRecentCurriculumVideos(limit = 6) {
  const curriculumVideos = getAllCurriculumVideos();
  
  // High quality signature videos from @JustPharmacology to supplement if needed
  const fallbackSignatureVideos = [
    {
      id: 'sig-1',
      title: 'Adrenergic & Cholinergic Receptors: Fast Visual Mechanisms',
      topic: 'Autonomic Nervous System',
      youtubeId: '0XbGRhGVVDY',
      duration: '12m',
      categoryName: 'Autonomic Pharmacology',
      isNew: false,
    },
    {
      id: 'sig-2',
      title: 'GPCR Signaling Pathways: Gs, Gi, Gq Cascades',
      topic: 'Pharmacodynamics',
      youtubeId: 'KRKvPxiVTmw',
      duration: '14m',
      categoryName: 'General Pharmacology',
      isNew: false,
    },
    {
      id: 'sig-3',
      title: 'Renin-Angiotensin-Aldosterone System (RAAS) Blockade',
      topic: 'Cardiovascular',
      youtubeId: '7MUrNkgzjkU',
      duration: '15m',
      categoryName: 'Cardiovascular Pharmacology',
      isNew: false,
    },
  ];

  // Combine: lesson videos first, then signature channel lectures if unique
  const combined = [...curriculumVideos];
  const seenIds = new Set(curriculumVideos.map((v) => v.youtubeId));

  fallbackSignatureVideos.forEach((sig) => {
    if (!seenIds.has(sig.youtubeId)) {
      combined.push(sig);
      seenIds.add(sig.youtubeId);
    }
  });

  return combined.slice(0, limit);
}


