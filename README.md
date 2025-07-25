# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Modern Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a clean UI optimized for both desktop and mobile.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching with user preference detection
- **Smooth Animations**: Powered by Framer Motion for delightful user experiences
- **Optimized Performance**: Fast loading times and efficient bundle size
- **SEO Friendly**: Meta tags and Open Graph support for social sharing
- **Modular Architecture**: Clean, reusable components and organized code structure

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer components
│   └── sections/        # Main page sections
├── data/               # Content data files
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── assets/             # Static assets
└── App.tsx             # Main application component
```

## 🎯 Sections

- **Hero**: Eye-catching introduction with name, title, and call-to-action
- **About**: Personal story, highlights, and key statistics
- **Projects**: Interactive project gallery with filtering and live demos
- **Skills**: Organized skill categories with proficiency levels
- **Contact**: Contact form and social media links

## 🛠️ Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

### Build Tools
- Vite
- PostCSS
- Autoprefixer

### Development
- ESLint
- TypeScript

## 📝 Customization

### Personal Information
Update your personal details in `src/data/personal.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description...",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects
Add your projects in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Title",
    description: "Project description...",
    technologies: ["React", "TypeScript"],
    // ... other project details
  }
];
```

### Skills
Update your skills in `src/data/skills.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", category: "frontend", level: "expert" },
  // ... other skills
];
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- **Mobile (320px+)**: Single column layout, touch-optimized navigation
- **Tablet (768px+)**: Optimized grid layouts and typography
- **Desktop (1024px+)**: Full-width layouts with advanced interactions
- **Large screens (1280px+)**: Maximum content width with centered layouts

## 🎨 Theme Customization

The website supports both light and dark themes. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
