# Feeble.io - iMessage Automation Platform

A modern, responsive landing page for an iMessage automation tool built with cutting-edge web technologies.

## Tech Stack

### Frontend Framework

- **React 18.3** - UI library for building interactive components
- **TypeScript 5.6** - Static typing for JavaScript
- **Vite 5.4** - Next-generation frontend build tool with lightning-fast HMR

### Styling & Design

- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Tailwind CSS Vite Plugin** - Seamless Tailwind integration with Vite

### Routing

- **React Router DOM 7.11** - Client-side routing for navigation

### Development Tools

- **ESLint 9.13** - Code quality and style linting
- **TypeScript ESLint 8.11** - TypeScript-specific linting rules
- **Vite SWC Plugin** - Fast JavaScript transpiler for development

## Project Structure

```
src/
├── pages/                 # Page components (Home, etc.)
├── modules/
│   ├── Hero/             # Hero section with animations
│   └── Navigation/       # Navigation bar with mobile drawer
├── assets/               # SVG icons and images
├── App.tsx               # Main app component with routing
├── main.tsx              # React DOM entry point
└── index.css             # Global styles and animations
```

## Key Implementation Notes

### Design System

- Custom CSS theme variables defined in `index.css` for consistent branding
- Color palette: Primary Blue (#007AFF), Gray tones, and Dark text
- Font: GeneralSans (Regular, Medium, Bold weights)
- Shadows and border radius standardized via CSS variables

### Animations

- **Hero fade-in** - Smooth entry animation for main content (1.5s)
- **Background slide-up** - Elements slide up from bottom with easing (1.5s-1.2s)
- **Bird flying** - Directional flying birds from screen edges with staggered timing (5s)
- **Drawer slide-in** - Mobile drawer animates from right with backdrop fade (0.3s)
- **Button gradient hover** - Smooth left-to-right background transition on hover

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Mobile navigation drawer that triggers on hamburger menu
- Scroll locking on mobile drawer open
- Desktop navigation hidden on mobile, full navigation on md+ screens

### Mobile Features

- Full-screen drawer menu on mobile devices
- Page scroll disabled when drawer is open
- Touch-friendly button sizes and spacing
- Backdrop click to close drawer

### Performance Optimizations

- `will-change` CSS properties for animated elements
- GPU-accelerated animations using `transform` and `opacity`
- Proper font loading with `font-display: swap`
- Image optimization with `object-contain` and lazy attributes

### Accessibility

- Semantic HTML with proper heading hierarchy
- Alt text for all images
- ARIA labels for interactive elements
- Type attribute on all buttons
- Proper focus management

## Getting Started

### Install Dependencies

```bash
bun install
```

### Development

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Lint Code

```bash
bun run lint
```

## GitHub Pages Deployment

This project is configured to deploy to GitHub Pages automatically.

### Initial Setup

1. **Push to GitHub** - Ensure your code is pushed to the `main` branch
2. **Enable GitHub Pages** - Go to repository Settings → Pages → Source → Deploy from a branch
3. **Select Branch** - Choose `gh-pages` branch (will be created automatically on first deployment)

### Automatic Deployment

The project uses GitHub Actions to automatically build and deploy on every push to the `main` branch. The workflow:

- Triggers on push to `main`
- Installs dependencies
- Builds the project with `npm run build`
- Deploys to GitHub Pages

View the workflow status in the Actions tab of your repository.

### Manual Deployment

To manually deploy locally:

```bash
# Install gh-pages globally
npm install -g gh-pages

# Deploy
bun run deploy
```

### Access Your Site

Your site will be available at: `https://yourusername.github.io/feeble.io/`

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Android)
