# 👨‍💻 Ayush Kumar Mahato | Software Engineer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge" alt="Portfolio Live" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Enabled-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Powered-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <b>A modern, responsive, and interactive personal portfolio showcasing my professional journey, technical expertise, projects, and passion for software engineering.</b>
</p>

<p align="center">
  <a href="https://ayushkumarmahato.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Visit_Live_Portfolio-000000?style=for-the-badge" alt="Live Portfolio" />
  </a>
  <a href="https://github.com/ayushirl/Ayush_Portfolio" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
</p>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Environment Configuration](#-environment-configuration)
- [Available Commands](#-available-commands)
- [Deployment](#-deployment)
- [Performance and Optimization](#-performance-and-optimization)
- [Project Goals](#-project-goals)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 Overview

**Ayush Kumar Mahato Portfolio** is a personal developer portfolio designed to establish a professional online presence and showcase technical capabilities, development experience, projects, and achievements.

The website serves as a centralized platform where visitors, recruiters, developers, and potential collaborators can explore my work, understand my technical interests, and connect with me.

Built with a modern frontend technology stack, the application focuses on clean architecture, responsive presentation, maintainable code, and interactive user experiences.

### Project Information

| Attribute | Details |
|---|---|
| Project Name | Ayush Kumar Mahato Portfolio |
| Category | Personal Portfolio / Developer Website |
| Developer | Ayush Kumar Mahato |
| Application Type | Web Application |
| Frontend | React.js |
| Programming Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icon Library | Lucide React |
| Deployment | Netlify |
| Repository | GitHub |

---

## 🌐 Live Demo

Explore the deployed application:

**Live Website:**  
https://ayushkumarmahato.netlify.app/

**GitHub Repository:**  
https://github.com/ayushirl/Ayush_Portfolio

The live deployment allows visitors to explore the portfolio without installing or configuring anything locally.

---

## 💡 About the Project

In today's competitive software development industry, having a strong digital presence is important.

A traditional resume provides a summary of qualifications, but a personal portfolio provides an opportunity to demonstrate practical work, technical abilities, creativity, and development experience.

This project aims to bridge that gap by providing a dedicated digital identity.

The portfolio is developed with the following objectives:

- Present professional information in an organized manner.
- Showcase technical skills and development expertise.
- Highlight projects and practical implementations.
- Provide an accessible way to explore professional achievements.
- Establish a direct communication channel.
- Create a scalable platform that can evolve alongside my career.

---

## ✨ Key Features

The portfolio is designed around the following presentation and development capabilities. Refer to the live implementation for the currently available sections.

### 1. Professional Introduction

A dedicated introduction to establish my identity as a software developer and provide visitors with an overview of my professional interests.

### 2. About Me

A professional overview covering personal background, development interests, technical journey, and career aspirations.

### 3. Technical Skills

An organized presentation of programming languages, frameworks, development tools, and technologies.

### 4. Project Showcase

A centralized space for presenting development projects, including relevant descriptions, technologies, and repository or demonstration links.

### 5. Experience and Achievements

A place to communicate professional experience, accomplishments, certifications, and other relevant milestones.

### 6. Responsive User Interface

A modern web interface designed to provide a consistent experience across desktop, tablet, and mobile devices.

### 7. Interactive Animations

Motion effects powered by Framer Motion to support engaging transitions and interactive visual elements.

### 8. Modern Iconography

Lucide React provides scalable and consistent icons throughout the application.

### 9. AI Integration Support

The project includes Google Gemini SDK dependencies and environment configuration for AI-powered functionality where implemented.

---

## 🛠️ Technology Stack

The project uses a modern JavaScript and TypeScript ecosystem.

| Technology | Purpose |
|---|---|
| React 19 | Component-based frontend development |
| TypeScript | Type safety and maintainable code |
| Vite 8 | Development server and production bundling |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | UI animations and transitions |
| Motion | Motion and interaction capabilities |
| Lucide React | Icon library |
| Google Gemini SDK | AI integration capabilities |
| Express.js | Backend/server framework dependency |
| Node.js | JavaScript runtime |
| npm | Dependency management |
| Netlify | Hosting and deployment |
| Git & GitHub | Version control and source management |

---

## 🏗️ Project Architecture

The application follows a modern frontend architecture built around React and Vite.

### High-Level Architecture

```text
                  ┌──────────────────────┐
                  │       Visitor        │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │     Web Browser     │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │      React UI       │
                  │                      │
                  │  Components & Views  │
                  └──────────┬───────────┘
                             │
               ┌─────────────┼─────────────┐
               │             │             │
               ▼             ▼             ▼
         ┌──────────┐  ┌──────────┐  ┌──────────┐
         │  Styling │  │Animation │  │   Icons  │
         │ Tailwind │  │  Motion  │  │  Lucide  │
         └──────────┘  └──────────┘  └──────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │     Vite Build      │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │    Production Build  │
                  │        /dist         │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │       Netlify        │
                  └──────────────────────┘
```

### Architecture Explanation

1. **Presentation Layer:** React provides the component-based user interface.
2. **Styling Layer:** Tailwind CSS handles utility-based styling and visual consistency.
3. **Animation Layer:** Framer Motion and Motion provide animation capabilities.
4. **Icon Layer:** Lucide React provides interface icons.
5. **Build Layer:** Vite compiles and bundles the application.
6. **Deployment Layer:** Netlify hosts the production-ready application.

---

## 📂 Project Structure

The repository contains the following important root-level files:

```text
Ayush_Portfolio/
│
├── .aistudio/
│
├── src/
│   └── Application source code
│
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
│
├── netlify.toml
├── package.json
├── package-lock.json
├── bun.lock
│
├── tsconfig.json
├── vite.config.ts
│
└── README.md
```

### Important Files

| File | Description |
|---|---|
| `src/` | Main application source code |
| `index.html` | HTML entry point |
| `package.json` | Dependencies and project scripts |
| `package-lock.json` | npm dependency lockfile |
| `bun.lock` | Bun dependency lockfile |
| `vite.config.ts` | Vite configuration |
| `tsconfig.json` | TypeScript configuration |
| `.env.example` | Environment variable template |
| `netlify.toml` | Netlify build and deployment configuration |
| `metadata.json` | Application metadata |
| `.gitignore` | Files excluded from version control |

---

## ⚙️ Getting Started

Follow these instructions to run the portfolio locally.

### Prerequisites

Make sure the following tools are installed:

- Node.js 22 or a compatible version.
- npm (included with Node.js).
- Git.
- A code editor such as Visual Studio Code.

Check your installed versions:

```bash
node --version
npm --version
git --version
```

---

## 📥 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/ayushirl/Ayush_Portfolio.git
```

### Step 2: Navigate to the Project Directory

```bash
cd Ayush_Portfolio
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the project root if the corresponding integrations are being used.

Refer to the [Environment Configuration](#-environment-configuration) section.

### Step 5: Start the Development Server

```bash
npm run dev
```

The development server will start at:

```text
http://localhost:3000
```

Open the URL in your browser to explore the application.

---

## 🔐 Environment Configuration

The repository includes an `.env.example` file for documenting environment variables.

Example:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
APP_URL=http://localhost:3000
```

### Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | API key used for Google Gemini integration, if enabled |
| `APP_URL` | Application URL used by supported application integrations |

### Important Security Guidelines

- Never commit your actual API keys.
- Never expose private credentials in frontend code.
- Keep sensitive environment variables on the server.
- Add `.env` to `.gitignore`.
- Use Netlify environment variables for supported deployment integrations.
- Rotate any credentials that have accidentally been exposed.

**Note:** The presence of these variables in the example configuration does not mean every feature requires them. Configure only the integrations actually used by the application.

---

## 💻 Available Commands

The following npm scripts are configured in `package.json`.

| Command | Description |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Generates the production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking |
| `npm run clean` | Removes generated build and server artifacts |

### Production Build

To generate an optimized production build:

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

To preview the production build:

```bash
npm run preview
```

---

## ☁️ Deployment

The application is configured for deployment through Netlify.

### Deployment Configuration

The repository's `netlify.toml` specifies:

| Setting | Configuration |
|---|---|
| Build Command | `npm run build` |
| Publish Directory | `dist` |
| Node.js Version | `22.12.0` |
| Routing | SPA fallback to `index.html` |

### Deploy Using Netlify

1. Push the latest project changes to GitHub.
2. Log in to Netlify.
3. Select **Add new project**.
4. Choose **Import an existing project**.
5. Connect your GitHub account.
6. Select `Ayush_Portfolio`.
7. Verify the build configuration.
8. Add required environment variables, if applicable.
9. Deploy the application.

Netlify will build and publish the application using the repository configuration.

### Live Deployment

https://ayushkumarmahato.netlify.app/

---

## ⚡ Performance and Optimization

The technology stack supports several performance-oriented development practices:

- Vite-based production bundling.
- TypeScript-based development.
- Component-driven React architecture.
- Utility-first styling through Tailwind CSS.
- Optimized production assets.
- Responsive interface development.
- Reusable UI components.
- Controlled animation and interaction patterns.

---

## 🎯 Project Goals

The long-term goals of this portfolio include:

- Building a strong professional developer identity.
- Demonstrating practical software engineering capabilities.
- Documenting development progress and achievements.
- Creating a central destination for projects and technical work.
- Providing an accessible way for recruiters and collaborators to connect.
- Continuously improving the application with modern web technologies.

---

## 🔮 Future Improvements

Potential improvements for future versions include:

- [ ] Dedicated project detail pages.
- [ ] Advanced project filtering and categorization.
- [ ] Improved accessibility and keyboard navigation.
- [ ] SEO and structured metadata improvements.
- [ ] Performance monitoring and optimization.
- [ ] Expanded professional experience and achievements.
- [ ] Blog or technical writing section.
- [ ] Additional AI-powered portfolio interactions.
- [ ] Analytics and visitor insights.
- [ ] Enhanced contact and communication functionality.

---

## 🤝 Contributing

Suggestions, feedback, and contributions are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature-name
```

3. Implement your changes.
4. Commit your changes.

```bash
git commit -m "feat: add your feature"
```

5. Push your branch.

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request describing your changes.

---

## 📄 License

This project is available for viewing and learning purposes.

Unless a separate license is added to the repository, all rights to the original project content, branding, and design remain with their respective owner.

Please obtain permission before redistributing or reusing original assets and content.

---

## 📬 Contact

**Ayush Kumar Mahato**

Interested in software engineering, technology, development, and building meaningful digital experiences.

- 🌐 **Portfolio:** https://ayushkumarmahato.netlify.app/
- 💻 **GitHub:** https://github.com/ayushirl

For professional inquiries, collaboration opportunities, or project discussions, please connect through the portfolio.

---

<p align="center">
  <b>Designed and developed with ❤️ by Ayush Kumar Mahato</b>
</p>

<p align="center">
  <i>Building, learning, experimenting, and creating one project at a time.</i>
</p>

<p align="center">
  ⭐ If you find this project interesting, consider giving the repository a star!
</p>
