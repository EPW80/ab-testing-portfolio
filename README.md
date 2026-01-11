# ConversionLab - A/B Testing Portfolio

A modern, high-performance portfolio website showcasing A/B testing and conversion optimization expertise through real case studies with measurable results.

![ConversionLab](https://via.placeholder.com/1200x600/3b82f6/ffffff?text=ConversionLab)

## Overview

This portfolio demonstrates expertise in:
- A/B testing methodology and execution
- Conversion rate optimization (CRO)
- E-commerce and DTC optimization
- Data-driven decision making
- Modern frontend development

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Fonts:** Inter & Poppins (Google Fonts)

## Features

### Current Features (MVP)
- ✅ Responsive design (mobile-first approach)
- ✅ 3 comprehensive case studies with placeholder data
- ✅ Filterable case study grid by category
- ✅ Interactive animations and transitions
- ✅ Detailed case study pages with:
  - Problem statement and hypothesis
  - Results dashboard with animated metrics
  - Before/after comparisons
  - Technical implementation details
  - Key learnings and insights
- ✅ Smooth page transitions
- ✅ SEO-optimized meta tags
- ✅ Accessible design (WCAG AA compliant)
- ✅ Performance optimized

### Planned Features
- [ ] Interactive before/after comparison slider
- [ ] Dark mode toggle
- [ ] Real case study content and screenshots
- [ ] About page
- [ ] Blog section for CRO insights
- [ ] Analytics integration (Google Analytics 4)
- [ ] Contact form
- [ ] Downloadable PDF case studies

## Case Studies

### 1. E-commerce Product Page Optimization
- **Impact:** +47% conversion rate improvement
- **Category:** E-commerce
- **Focus:** Trust signals and social proof optimization

### 2. Checkout Flow Simplification
- **Impact:** -23% cart abandonment reduction
- **Category:** E-commerce
- **Focus:** UX friction reduction

### 3. Mobile Landing Page Speed Optimization
- **Impact:** -42% bounce rate reduction
- **Category:** Mobile
- **Focus:** Performance optimization

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ab-testing-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ab-testing-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky header with navigation
│   │   │   ├── Footer.tsx          # Footer with links
│   │   │   └── Navigation.tsx      # Responsive navigation
│   │   ├── shared/
│   │   │   ├── Button.tsx          # Reusable button component
│   │   │   ├── Card.tsx            # Reusable card component
│   │   │   └── MetricCard.tsx      # Animated metric display
│   │   ├── case-studies/
│   │   │   ├── CaseStudyGrid.tsx   # Filterable grid
│   │   │   ├── CaseStudyCard.tsx   # Case study preview card
│   │   │   └── MetricsDashboard.tsx # Results visualization
│   │   └── home/
│   │       └── Hero.tsx            # Homepage hero section
│   ├── pages/
│   │   ├── Home.tsx                # Homepage
│   │   └── CaseStudyDetail.tsx     # Case study detail page
│   ├── data/
│   │   └── caseStudies.ts          # Case study data
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Main app component
│   └── main.tsx                    # Entry point
├── public/                          # Static assets
├── index.html                       # HTML template
├── tailwind.config.js              # Tailwind configuration
├── vite.config.ts                  # Vite configuration
└── package.json
```

## Design System

### Color Palette
- **Primary:** Blue (#3b82f6) - Trust, professionalism
- **Secondary:** Slate gray - Text and UI elements
- **Accent:** Purple (#d946ef) - Highlights and CTAs
- **Success:** Green (#22c55e) - Positive metrics

### Typography
- **Headings:** Poppins (600, 700, 800)
- **Body:** Inter (400, 500, 600, 700)

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: <1.8s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1

## Deployment

### Recommended Platforms
- **Vercel** (easiest for Vite + React)
- Netlify
- Cloudflare Pages

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Configure:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy

## Contributing

This is a portfolio project, but suggestions and feedback are welcome! Please open an issue to discuss proposed changes.

## Roadmap

### Phase 1: MVP (Completed ✅)
- [x] Project setup and configuration
- [x] Core component library
- [x] Homepage with hero and case study grid
- [x] Case study detail pages
- [x] Responsive design
- [x] Basic animations

### Phase 2: Content & Polish
- [ ] Add real case study content and screenshots
- [ ] Implement interactive before/after slider
- [ ] Add About page
- [ ] Improve animations and micro-interactions
- [ ] Add testimonials section

### Phase 3: Advanced Features
- [ ] Dark mode support
- [ ] Blog section
- [ ] Analytics integration
- [ ] Contact form
- [ ] Performance monitoring widget
- [ ] Downloadable PDFs

### Phase 4: Optimization
- [ ] Lighthouse score optimization (95+)
- [ ] Advanced SEO improvements
- [ ] Enhanced accessibility features
- [ ] Progressive Web App (PWA) features

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Erik Williams
- GitHub: [@epw80](https://github.com/epw80)
- LinkedIn: [erikpwilliams](https://linkedin.com/in/erikpwilliams)
- Portfolio: [epw80.github.io/Erik-Williams](https://epw80.github.io/Erik-Williams)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
