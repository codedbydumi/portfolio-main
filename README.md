# 🚀 Dumindu Thushan - Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fduminduthushan.com&style=for-the-badge)](https://duminduthushan.com)
[![GitHub last commit](https://img.shields.io/github/last-commit/duminduthushan/portfolio?style=for-the-badge)](https://github.com/duminduthushan/portfolio)
[![GitHub](https://img.shields.io/github/license/duminduthushan/portfolio?style=for-the-badge)](LICENSE)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=for-the-badge)](https://duminduthushan.com)

> **Modern, high-performance portfolio showcasing data science expertise and full-stack development skills.**

![Portfolio Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Portfolio+Preview)

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- ⚡ **High Performance** - 0.8s LCP, 95+ Lighthouse score, optimized for speed
- 📱 **Fully Responsive** - Perfect experience across all devices
- 🌙 **Dark/Light Mode** - Dynamic theme switching
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 📧 **Contact Form** - Functional contact form with EmailJS integration
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data
- ♿ **Accessible** - WCAG 2.1 compliant, screen reader friendly

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

### Build Tools
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📊 Performance Metrics

| Metric | Score | Status |
|--------|-------|--------|
| **Performance** | 95+ | 🟢 Excellent |
| **Accessibility** | 100 | 🟢 Perfect |
| **Best Practices** | 100 | 🟢 Perfect |
| **SEO** | 100 | 🟢 Perfect |
| **LCP** | 0.8s | 🟢 Excellent |
| **FCP** | 0.4s | 🟢 Excellent |
| **CLS** | 0.015 | 🟢 Excellent |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/duminduthushan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Production Deployment
```bash
# Build optimized version
npm run build

# Deploy to Vercel (recommended)
vercel --prod

# Or deploy dist/ folder to your hosting provider
```

## 📁 Project Structure

```
portfolio/
├── 📁 public/                 # Static assets
│   ├── 📄 favicon.ico
│   ├── 🖼️ profile-hero.jpg
│   └── 🖼️ project-images/
├── 📁 src/
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 🧩 Navigation.tsx
│   │   ├── 🧩 HeroSection.tsx
│   │   └── 🧩 LoadingScreen.tsx
│   ├── 📁 pages/             # Page components
│   │   ├── 📄 Home.tsx
│   │   ├── 📄 About.tsx
│   │   ├── 📄 Projects.tsx
│   │   └── 📄 Contact.tsx
│   ├── 📁 data/              # Static data
│   │   ├── 📄 projects.ts
│   │   └── 📄 experience.ts
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 utils/             # Utility functions
│   ├── 🎨 index.css          # Global styles
│   └── ⚛️ main.tsx           # App entry point
├── 📄 package.json
├── 📄 vite.config.ts         # Vite configuration
├── 📄 tailwind.config.js     # Tailwind CSS config
└── 📄 tsconfig.json          # TypeScript config
```

## 🎨 Design System

### Color Palette
- **Primary**: `#3B82F6` (Blue) - Main brand color
- **Secondary**: `#8B5CF6` (Purple) - Accent color
- **Accent**: `#06B6D4` (Cyan) - Highlight color
- **Background**: `#FFFFFF` / `#0F172A` (Light/Dark)

### Typography
- **Headings**: Inter (600-700 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono

### Components
- **Glass morphism** effects for modern UI
- **Gradient backgrounds** for visual appeal
- **Smooth transitions** with Framer Motion
- **Responsive grid** layouts with Tailwind CSS

## 📈 Optimization Features

### Performance
- ⚡ **Code splitting** - Lazy loaded routes and components
- 🖼️ **Image optimization** - WebP format, lazy loading, preloading
- 📦 **Bundle optimization** - Tree shaking, minification
- 🚀 **Preloading** - Critical resources and fonts
- 💾 **Caching** - Optimized browser caching headers

### SEO & Accessibility
- 🔍 **Meta tags** - Complete Open Graph and Twitter Card setup
- 📱 **PWA ready** - Manifest and service worker support
- ♿ **ARIA labels** - Screen reader optimized
- 🎯 **Semantic HTML** - Proper heading hierarchy
- 🌐 **Structured data** - JSON-LD schema markup

## 🔧 Configuration

### Environment Variables
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (Optional)
VITE_GA_TRACKING_ID=your_ga_id
```

### Customization
- **Colors**: Update `tailwind.config.js` and CSS variables
- **Content**: Modify data files in `src/data/`
- **Components**: Customize components in `src/components/`
- **Animations**: Adjust Framer Motion settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Dumindu Thushan** - Data Science Student & Full-Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-duminduthushan.com-blue?style=for-the-badge)](https://duminduthushan.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/duminduthushan)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/duminduthushan)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:duminduthushan@example.com)

---

## 🌟 Acknowledgments

- [React](https://reactjs.org/) - For the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Lucide React](https://lucide.dev/) - For beautiful icons
- [Vercel](https://vercel.com/) - For seamless deployment

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Built with ❤️ by [Dumindu Thushan](https://duminduthushan.com)**

</div>

