# Just Pharmacology

A modern interactive pharmacology learning platform by **Dr. Manoj Goyal**, designed around simple explanations, animation-based learning, short videos, rapid revision and quizzes.

## What is included

- React + Vite application
- Scalable category → topic → lesson architecture
- Lesson data separated from UI
- Interactive Drug → Receptor → Response animation
- Interactive ADME animation
- Agonist vs Antagonist animation
- Rapid revision cards
- MCQ quiz engine
- Search
- Lesson completion using localStorage
- Responsive mobile/desktop UI
- YouTube integration point
- About page for Dr. Manoj Goyal

## Project structure

```text
src/
├── components/
│   ├── animations/
│   ├── lessons/
│   ├── quiz/
│   └── layout/
├── data/
│   ├── categories.js
│   └── lessons.js
├── pages/                 # reserved for future page extraction
├── utils/
└── App.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Add a new lesson

Open `src/data/lessons.js` and add another lesson object using the same structure. The existing lesson page automatically renders it.

Example:

```js
{
  id: 'new-lesson',
  categoryId: 'general',
  topic: 'New Topic',
  title: 'New Pharmacology Lesson',
  level: 'Beginner',
  time: 10,
  description: 'Short description',
  objectives: ['Objective 1'],
  sections: [{ heading: 'Concept', content: 'Explanation...' }],
  keyPoints: ['Key point'],
  rapid: ['Rapid revision point'],
  animation: 'drug-receptor',
  quiz: []
}
```

## Add a video

Add a future `video` object to the lesson, for example:

```js
video: {
  youtubeId: 'REAL_YOUTUBE_ID',
  title: 'Drug Absorption Explained'
}
```

Never invent video IDs.

## Future roadmap

- 100+ lessons
- hundreds of topics/subtopics
- large drug database
- more mechanism animations
- lesson-specific YouTube videos
- larger MCQ bank
- user accounts
- cloud progress
- CMS/admin content editor
- Supabase backend
- analytics

## Educational note

This is an educational platform. Content should be reviewed against authoritative pharmacology references before publication and should not be used as individualized medical advice.


## Scalable Content Architecture

The project separates pharmacology content from the React UI. Module 1 is stored under `src/data/pharmacology/general/` and is grouped by topic. `src/data/lessons.js` acts as the compatibility registry consumed by the existing lesson engine.

To add future modules, create another module folder under `src/data/pharmacology/`, add its topic files and export them through the module registry. The lesson UI should not need to be rewritten.
