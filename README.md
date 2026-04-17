# Interactive Card Details Form

A responsive credit-card details form that previews the card in real time as the user types, validates inputs on submit, and shows a success confirmation — built as a [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw) challenge using only HTML, CSS, and vanilla JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents

- [Motivation](#motivation)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [What I Learned](#what-i-learned)
- [Roadmap](#roadmap)
- [License](#license)
- [Credits](#credits)
- [Author](#author)

## Motivation

Most card-entry UIs feel mechanical — this challenge focuses on making the form **feel alive**: the card visual updates as you type, inputs reformat themselves (spaces in the card number, slash in the expiry), and validation errors explain exactly what went wrong. The goal was to build all of that without reaching for a framework or form library — just clean HTML, CSS custom properties, and vanilla JS modules.

## Live Demo

[fsdev-interactive-card-details-form.vercel.app](https://fsdev-interactive-card-details-form.vercel.app)

## Screenshots

**Desktop (1440px)**

<img src="./screenshots/desktop-1440.png" alt="Desktop view at 1440px" width="720" />

**Mobile (375px)**

<img src="./screenshots/mobile-375.png" alt="Mobile view at 375px" width="280" />

## Features

- Live card preview that updates on every keystroke
- Auto-formatting: card number grouped in 4-digit blocks, `MM/YY` expiry
- Client-side validation with inline error messages (empty fields, wrong format, digits-only rules)
- Hover, focus, and error states with gradient-bordered focus rings
- Success screen after a valid submission, with a "Continue" action to reset the form
- Fully responsive: tuned at 375px (mobile) and 1440px (desktop), fluid in between
- Zero runtime dependencies — ships as static HTML/CSS/JS

## Tech Stack

- Semantic HTML5
- CSS3 with custom properties (design tokens for colors, gradients, typography, spacing)
- Flexbox & CSS Grid, mobile-first responsive design
- Vanilla JavaScript (ES modules)
- [Vite](https://vitejs.dev/) — dev server and build tool
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts

## Installation

**Prerequisites:** Node.js >= 18

```bash
git clone https://github.com/gusanchefullstack/fsdev-interactive-card-details-form.git
cd fsdev-interactive-card-details-form
npm install
```

## Usage

```bash
npm run dev        # Start Vite dev server at http://localhost:5173
npm run build      # Build static assets into dist/
npm run preview    # Serve the production build locally
```

Open the dev server, fill in the form, and watch the card update in real time. Submit with invalid values to see error states; submit with valid values to see the success screen.

## Project Structure

```
src/
├── index.html         # Markup and semantic structure
├── main.js            # Entry point — wires formatters, validators, and UI
├── js/
│   ├── formatters.js  # Card number and expiry formatting helpers
│   ├── validators.js  # Per-field validation rules and error messages
│   └── ui.js          # DOM bindings, preview updates, success flow
└── styles/
    ├── tokens.css     # Colors, gradients, typography, spacing tokens
    ├── base.css       # Reset, typography base, body background
    ├── layout.css     # Page layout (card panel + form panel)
    ├── card.css       # Front and back card visuals
    ├── form.css       # Inputs, labels, buttons, error states
    └── success.css    # Success confirmation screen
screenshots/           # Desktop and mobile reference captures
```

## What I Learned

Key takeaways from building this project:

- **Gradient borders on focused inputs** using the CSS double-background trick — `background-origin: border-box` combined with `background-clip: padding-box, border-box` to paint a gradient only on the border area without an extra wrapper element.
- **Absolutely positioned card overflow** — the card visual overlaps into the form panel on desktop and sits above it on mobile. The trick is *not* clipping the ancestors: no `overflow: hidden` on the panel, and using `position: absolute` anchored to a relative container that spans the full viewport height.
- **Colocated input handlers** — keeping the formatter, the DOM update, and the preview binding in the same `input` listener makes the data flow trivial to follow, and removes the need for a state store.

  ```js
  cardnumber.addEventListener('input', (e) => {
    const formatted = formatCardNumber(e.target.value);
    e.target.value = formatted;
    preview('number').textContent = formatted || DEFAULTS.number;
  });
  ```

- **Design tokens in plain CSS** — `:root { --color-...; --gradient-...; --font-...; }` is enough to parameterize an entire small app without a preprocessor.
- **One `<main>` per page** — keeping the semantic structure disciplined (one `<main>`, a proper `<footer>`, no role duplication) makes the form more accessible by default without extra ARIA.

**References:**
- [MDN: `background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
- [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Vite Guide](https://vitejs.dev/guide/)
- [Frontend Mentor challenge brief](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw)

## Roadmap

- [x] Front/back card visuals matching the Figma design
- [x] Real-time preview and input formatters
- [x] Inline validation and error messages
- [x] Success confirmation flow
- [x] Responsive layout (mobile, tablet, desktop)
- [x] Deploy to Vercel
- [ ] Unit tests for `formatters.js` and `validators.js`
- [ ] Move focus to the success heading when the confirmation appears
- [ ] `prefers-reduced-motion` and `prefers-color-scheme` variants

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.

## Credits

- Challenge and design by [Frontend Mentor](https://www.frontendmentor.io/).
- Typography: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) by Florian Karsten.
- Built with [Vite](https://vitejs.dev/) and deployed on [Vercel](https://vercel.com/).

## Author

**Gustavo Sanchez Galarza**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavosanchezgalarza/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/gusanchefullstack) [![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?style=flat&logo=hashnode&logoColor=white)](https://hashnode.com/@gusanchedev) [![X](https://img.shields.io/badge/X-000000?style=flat&logo=x&logoColor=white)](https://x.com/gusanchedev) [![Bluesky](https://img.shields.io/badge/Bluesky-0085FF?style=flat&logo=bluesky&logoColor=white)](https://bsky.app/profile/gusanchedev.bsky.social) [![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-0A0A23?style=flat&logo=freecodecamp&logoColor=white)](https://www.freecodecamp.org/gusanchedev) [![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?style=flat&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/gusanchefullstack)
