# English Puranas

English Puranas is a React reader for exploring Purana material in English. It is
aimed at readers, researchers, and developers who want a browser-based way to
navigate Purana sections, images, sharing controls, and Firebase-backed reading
state.

## What This Repository Contains

- `englishpurana/` contains the Create React App reader. Start with
  `englishpurana/README.md` for local app commands and route notes.
- `englishpurana/src/dataClean.json` bundles 18 top-level Purana texts for the
  reader UI.
- `puranas_jsons/` contains 1,313 section-level JSON source files.
- `puranas_redesigned_demographics/` contains 1,313 demographic-adapted story
  analysis files generated from the section JSON.
- `resized_images/` contains the image assets used by the reader experience.

## Useful Entry Points

- App shell: `englishpurana/src/App.js`
- Route layout: `englishpurana/src/components/main.js`
- Index view: `englishpurana/src/components/index.js`
- Reader view: `englishpurana/src/components/puranas.js`
- Firebase setup: `englishpurana/src/config.js`

## Repository Status

The main runnable app lives in `englishpurana/`. The root-level JSON and image
folders are supporting content and generated reading assets, not separate npm
packages.
