# Nicolás Calero - Portfolio Website

A visually stunning, immersive portfolio website built with React and GSAP, showcasing elegant animations and modern design principles.

## 🚀 Features

### ✨ Visual & Animation Features
- **Custom Preloader** with split-text animation and ASCII grid background
- **GSAP-powered animations** including ScrollTrigger, timelines, and hover effects
- **Interactive ASCII background** that responds to mouse movement
- **Custom cursor** with magnetic hover effects
- **Smooth scroll animations** with parallax backgrounds
- **Theme toggle** with seamless dark/light mode transitions
- **Glass morphism effects** throughout the interface

### 🎯 Sections
- **Hero Section**: Full-screen introduction with animated name reveal
- **About Section**: Two-column layout with statistics and personal info
- **Projects Section**: Interactive project cards with hover animations
- **Skills Section**: Animated skill bars and technology tags
- **Contact Section**: Contact form with social links and availability status

### 🛠️ Technical Features
- **React 18** with functional components and hooks
- **GSAP 3.12** for advanced animations
- **Tailwind CSS** for responsive styling
- **Custom cursor system** with smooth following animation
- **Responsive design** optimized for all screen sizes
- **Performance optimized** with lazy loading and efficient animations

## 🏗️ Project Structure

```
nicolas-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js          # About section with stats
│   │   ├── ASCIIBackground.js # Interactive ASCII grid
│   │   ├── Contact.js        # Contact form and social links
│   │   ├── CustomCursor.js   # Custom cursor component
│   │   ├── Hero.js           # Hero section with animations
│   │   ├── Preloader.js      # Loading screen
│   │   ├── Projects.js       # Project showcase
│   │   ├── Skills.js         # Skills and experience
│   │   └── ThemeToggle.js    # Theme switcher
│   ├── utils/
│   │   └── animations.js     # GSAP animation utilities
│   ├── App.js               # Main application component
│   ├── index.js             # React DOM entry point
│   └── index.css            # Global styles and animations
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Design System

### Colors
- **Primary**: Grayscale palette (#fafafa to #1a1a1a)
- **Accent**: Dark red (#8B0000) and light red (#DC143C) for CTAs
- **Glass Effects**: Semi-transparent overlays with backdrop blur

### Typography
- **Primary Font**: Inter (sans-serif) for body text
- **Display Font**: Sora (sans-serif) for headings and titles
- **Hierarchy**: Oversized titles, small caps labels, consistent spacing

### Animations
- **Entrance**: Fade-in with Y-translation and stagger effects
- **Hover**: Scale, glow, and shadow transformations
- **Scroll**: Parallax backgrounds and triggered section animations
- **Transitions**: Smooth page transitions with GSAP timelines

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nicolascalero/portfolio.git
   cd nicolas-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎭 Animation System

The portfolio uses a comprehensive GSAP animation system located in `src/utils/animations.js`:

### Core Animation Modules
- **Preloader**: Loading screen with text reveals
- **Split Text**: Character-by-character text animations
- **Hero**: Main section entrance animations
- **Scroll Animations**: Section triggers and parallax effects
- **Hover Effects**: Interactive element animations
- **Page Transitions**: Smooth navigation between states
- **Custom Cursor**: Mouse-following cursor with hover states

### Usage Example
```javascript
import { animationUtils } from './utils/animations';

// Initialize scroll animations
animationUtils.scrollAnimations.init();

// Add hover effect to an element
animationUtils.hover.projectCard(cardElement);

// Create custom timeline
const tl = gsap.timeline();
tl.from('.element', { y: 50, opacity: 0, duration: 1 });
```

## 🎨 Customization

### Updating Content
1. **Personal Information**: Edit the text content in each component
2. **Projects**: Update the projects array in `Projects.js`
3. **Skills**: Modify skill categories and levels in `Skills.js`
4. **Contact**: Update social links and contact information in `Contact.js`

### Styling
1. **Colors**: Modify the color palette in `tailwind.config.js`
2. **Fonts**: Update font imports in `public/index.html` and `tailwind.config.js`
3. **Animations**: Adjust timing and easing in `src/utils/animations.js`

### Adding New Sections
1. Create a new component in `src/components/`
2. Add GSAP animations using the existing pattern
3. Include the component in `App.js`
4. Add corresponding styles in `index.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Fluid typography scaling
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized animations for mobile

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support available

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build/` folder to Netlify
3. Set up continuous deployment from GitHub

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## 🔧 Performance Optimization

- **Lazy Loading**: Images and components load as needed
- **Code Splitting**: React.lazy() for route-based splitting
- **GSAP Optimization**: Efficient animation cleanup and timeline management
- **CSS Optimization**: Purged unused styles in production
- **Image Optimization**: WebP format with fallbacks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP** for incredible animation capabilities
- **Tailwind CSS** for utility-first styling
- **React** for component architecture
- **Lucide React** for beautiful icons
- **Google Fonts** for typography

## 📧 Contact

**Nicolás Calero**
- Email: nicolas@example.com
- GitHub: [@nicolascalero](https://github.com/nicolascalero)
- LinkedIn: [/in/nicolascalero](https://linkedin.com/in/nicolascalero)

---

*Built with passion in Bogotá, Colombia 🇨🇴*
