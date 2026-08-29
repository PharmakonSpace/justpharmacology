# Just Pharmacology — Content Guide

The application is intentionally **content-driven**. Do not create a React page for every lesson.

## Add a lesson

1. Choose a module folder under `src/data/pharmacology/`.
2. Add or edit a `.js` content file.
3. Export `lessons` as an array.
4. Import that file from the module's `index.js`.
5. The existing lesson engine renders the page automatically.

Example lesson:

```js
{
  id: 'drug-absorption',
  categoryId: 'general',
  topic: 'Pharmacokinetics',
  title: 'Drug Absorption',
  level: 'Beginner',
  time: 10,
  description: '...',
  objectives: ['...', '...'],
  sections: [{ heading: 'What is absorption?', content: '...' }],
  animation: 'adme',
  video: { youtubeId: '', title: 'Drug Absorption' },
  drugs: [{ name: 'Example', className: 'Example class', mechanism: '...' }],
  clinicalPearls: ['...'],
  mnemonics: ['...'],
  keyPoints: ['...'],
  rapid: ['...'],
  quiz: [{
    question: '...',
    options: ['A', 'B', 'C', 'D'],
    answer: 1,
    explanation: '...'
  }]
}
```

## Add a new module

Create `src/data/pharmacology/<module>/` and an `index.js`, then register the module in `src/data/pharmacology/module-registry.js`.

The UI should not need a new lesson page.
