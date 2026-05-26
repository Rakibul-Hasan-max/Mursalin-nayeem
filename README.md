# Mursalin Nayeem - Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS**.

## ✨ Features

- **Modern UI/UX**: Clean, minimalist design inspired by premium web aesthetics.
- **Component-Driven Architecture**: Modular code structure (`src/components/`) for easy maintenance.
- **Dynamic Active Navigation**: Sidebar links dynamically highlight based on the current active route using Next.js `usePathname`.
- **Custom SVGs**: Integrated, pixel-perfect solid custom SVG icons for branding and social links.
- **Responsive Layout**: Designed to adapt perfectly across different screen sizes.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS 
- **Icons:** Lucide React & Custom SVGs
- **Language:** TypeScript

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── about/            # About Me page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles & Tailwind configuration
│   ├── layout.tsx        # Root layout wrapper
│   └── page.tsx          # Home page
└── components/           # Reusable UI Components
    ├── about/            # About page specific components (Intro, Skills, Timeline)
    ├── contact/          # Contact page specific components (Form, Info)
    ├── layout/           # Global layout components (Sidebar)
    └── shared/           # Shared components (SocialLinks)
```

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

- **Profile Picture**: Replace `public/images/pic1.jpeg` with your own photo.
- **Details**: Edit text in `src/components/about/PersonalDetails.tsx` and `src/components/about/Timeline.tsx` to update your CV and experience.
- **Colors**: The primary accent color is `#EE2A3B` (Crimson Red). To rebrand, do a global search and replace for this hex code.

## 📄 License

This project is open-source and available under the MIT License.
