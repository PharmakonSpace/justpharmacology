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
 * Developers can mark any lesson with `isNew: true` or `badge: 'NEW'` or `dateAdded`,
 * or any lesson from newly added modules (e.g. Healthcare Psychology) is automatically included.
 */
export function getNewArrivals() {
  const newLessons = [];
  const seenIds = new Set();

  // 1. Explicitly marked new lessons or from new modules (e.g. healthcare_psychology)
  allLessons.forEach((l) => {
    const isExplicitlyNew = l.isNew === true || l.badge === 'NEW' || l.categoryId === 'healthcare_psychology';
    if (isExplicitlyNew && !seenIds.has(l.id)) {
      newLessons.push({ ...l, isNew: true, badge: l.badge || 'NEW' });
      seenIds.add(l.id);
    }
  });

  // 2. Also include recent advanced concepts or latest added topics if available
  const recentAdvancedIds = ['potency-vs-efficacy', 'spare-receptors', 'bioequivalence', 'prodrugs', 'volume-of-distribution'];
  allLessons.forEach((l) => {
    if (recentAdvancedIds.includes(l.id) && !seenIds.has(l.id)) {
      newLessons.push({ ...l, isNew: true, badge: 'RECENT' });
      seenIds.add(l.id);
    }
  });

  return newLessons;
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
