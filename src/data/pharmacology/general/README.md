# Just Pharmacology Content

## Module 1 — General Pharmacology

This folder contains the structured content for General Pharmacology. The application renders these lesson records through the shared lesson engine.

### Structure

- `foundations.js`
- `drug-administration.js`
- `pharmacokinetics.js`
- `pharmacodynamics.js`
- `receptors.js`
- `dose-response.js`
- `drug-safety.js`
- `drug-interactions.js`
- `drug-response.js`
- `dosage-regimens.js`
- `individual-variation.js`
- `rapid-revision.js`

### Adding a lesson

Add a lesson object to the appropriate topic file using the existing schema. The application imports the topic files through `index.js`, then exposes the combined records through `src/data/lessons.js`.

### Future modules

Use the same pattern:

```text
src/data/pharmacology/
├── general/
├── autonomic/
├── cardiovascular/
├── cns/
├── endocrine/
└── ...
```
