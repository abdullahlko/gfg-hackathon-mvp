# NiveshSathi

Micro-Investment Platform for First-Time Investors

[Live Demo](https://niveshsathi-theta.vercel.app/) | [Demo Video](https://drive.google.com/drive/folders/15guQlNfnYDNntkjyTOwzUtfMluPbDPwQ) | [Presentation](https://drive.google.com/drive/folders/15guQlNfnYDNntkjyTOwzUtfMluPbDPwQ)

**Tech Stack:** HTML5, CSS3, JavaScript (ES6+) | **Deployment:** Vercel | **Competition:** Byte Quest 2026 (GFG)

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Disclaimer](#disclaimer)

---

## Problem Statement

> **PS 13 - Investing for Everyone**  
> Build a Micro-Investment Platform for First-Time Users

Many first-time investors face challenges when starting their investment journey:

| Challenge | Impact |
|:----------|:-------|
| Limited financial knowledge | Users are unsure where to begin |
| Complex financial terms | Investment options feel difficult to understand |
| High starting amounts | Many platforms require larger initial investments |
| Fear of losses | Beginners hesitate to take the first step |

---

## Solution

**NiveshSathi** is a beginner-focused micro-investment platform that helps users understand and explore investing with small amounts.

```
₹10 → FD (50%) + Govt. Bonds (30%) + Mutual Fund (20%)
```

Key highlights:

- English and Hindi language support
- Learning resources before investing
- Risk-based investment suggestions
- Visual portfolio tracking

---

## Features

### Smart Onboarding
A guided onboarding flow that collects user preferences, income details and risk appetite to suggest a suitable investment plan.

### Investment Simulator
Users can simulate investments from ₹10 to ₹1,00,000 and view allocation across FDs, Government Bonds and Mutual Funds.

### Portfolio Tracker
Displays investment distribution, goal progress and simulated investment history with daily streak tracking.

### Learn Hub
Explains concepts like FDs, Mutual Funds, compounding and risk through simple resources and embedded videos.

### Bilingual Support
English and Hindi language toggle implemented using a custom translation system without external dependencies.

### Responsive Design
Optimized interface for mobile, tablet and desktop screens with mobile-first approach.

---

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | JavaScript (ES6+) |
| Hosting | Vercel |

Built using vanilla HTML, CSS and JavaScript with zero external dependencies.

---

## Architecture

```
NiveshSathi/
├── index.html                 # Main application entry
├── css/
│   ├── header.css            # Navigation and branding styles
│   ├── main.css              # Core UI styles and components
│   └── footer.css            # Footer layout
├── js/
│   ├── onboarding.js         # User profiling and onboarding flow
│   ├── invest.js             # Investment simulator logic
│   ├── education.js          # Learning section interactions
│   └── language.js           # i18n translation system (EN-HI)
└── README.md
```

**Key Implementation Details:**
- Single-page application with modular JavaScript architecture
- Custom i18n engine for language switching (no external libraries)
- Responsive CSS Grid and Flexbox layouts
- LocalStorage for user session persistence
- Real-time allocation calculations and visualizations

---

## Getting Started

No installation required. The project runs directly in your browser.

### Live Demo
Visit the application: [niveshsathi-theta.vercel.app](https://niveshsathi-theta.vercel.app/)

### Run Locally

```bash
git clone https://github.com/ArshilTech/gfg-hackathon-Niveshsathi.git
cd gfg-hackathon-Niveshsathi

# Open index.html in your browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or use the Live Server extension in VS Code for development with auto-reload.

---

## About This Project

Built for **Byte Quest 2026 - GFG Hackathon**. Designed and developed user flows, investment logic, portfolio algorithms and i18n translation engine.

---

## Disclaimer

This project is a simulation prototype created for Byte Quest 2026. No real money is invested and all returns shown are only for demonstration purposes. NiveshSathi is not a registered financial advisor or investment platform.
