# Prison Guide

A tablet-focused digital prison handbook for Estonia. The app is built as a Vite + React application with Estonian and English language support, category-based handbook navigation, quick tools, handbook search, accessibility mode, and dark mode.

## Features

- Bilingual UI with `ET` and `EN` language toggle
- Handbook categories and article overlays
- Offline-style local handbook search assistant
- Quick tools for glossary, FAQ, assistant, and calculator
- Accessibility and dark mode toggles
- Motion-rich tablet interface using Framer Motion
- Category imagery, videos, and Lottie animations

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 4
- Framer Motion
- Lucide React and React Icons
- Lottie React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx                    Main application shell and global UI state
  main.jsx                   React entry point
  index.css                  Global styles and Tailwind setup
  assets/                    Animations, category videos, and images
  components/
    Router.jsx               Dynamic page router
    layout/                  Layout components
    ui/                      Reusable UI components
  constants/
    categories.jsx           Category loader and handbook order
    categories/              Category definitions
    handbookContent.json     Searchable handbook content
    keywords.js              Search keyword data
    theme.js                 Theme constants
  context/                   Shared React context
  pages/                     Route components grouped by handbook section
  utils/
    handbookSearch.js        Local handbook search logic
```

## Content Model

Pages are loaded dynamically from `src/pages/**/*.jsx` by `src/components/Router.jsx`.

Route IDs are derived from file paths:

- `src/pages/special/home.jsx` becomes `home`
- `src/pages/daily/schedule.jsx` becomes `daily.schedule`
- `src/pages/health/doctor.jsx` becomes `health.doctor`

Category metadata lives in `src/constants/categories/*.jsx`. The handbook display order is controlled by `HANDBOOK_ORDER` in `src/constants/categories.jsx`.

## Source Documents

The repository includes source handbook material:

- `Kinnipeetavad - 21.11-1.pdf`
- `Time_in_Prison_My_Steps_Towards_Release_EN.pdf`
- `_et_pdf.txt`
- `_en_pdf.txt`

These files appear to be source/reference material for the handbook content and search data.

## Development Notes

- The Vite dev server is configured with `host: true` and `allowedHosts: true` in `vite.config.js`, so it can be accessed from external hosts or tunnel links during testing.
- The app uses CSS variables and root classes for accessibility and dark mode state.
- Built output is written to `dist/`.
- There is currently no dedicated test script in `package.json`.

## Deployment

Create a production build:

```bash
npm run build
```

Deploy the generated `dist/` directory to any static hosting provider or internal web server.
