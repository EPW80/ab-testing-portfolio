type Category = 'ecommerce' | 'landing-page' | 'mobile';

type MetricResult = {
  before: number;
  after: number;
};

type TimeMetricResult = {
  before: string;
  after: string;
};

type CaseStudyResults = {
  conversionRate: MetricResult;
  bounceRate: MetricResult;
  avgTimeOnPage: TimeMetricResult;
  statisticalSignificance?: number;
};

type Variant = {
  description: string;
  image: string;
  screenshots?: string[];
};

type Implementation = {
  variantA: Variant;
  variantB: Variant;
};

type TechnicalDetails = {
  stack: string[];
  optimizations: string[];
  challenges?: string[];
};

// CaseStudy type is inferred from the caseStudies array
// Components use: type CaseStudy = typeof caseStudies[number]
export const caseStudies = [
  {
    id: 'ecommerce-product-page',
    title: 'E-commerce Product Page Optimization',
    client: 'DTC Fashion Brand',
    category: 'ecommerce',
    thumbnail: 'https://placehold.co/1200x800/3b82f6/ffffff?text=Product+Page+Optimization',
    overview: 'Redesigned product page to increase add-to-cart rate through strategic placement of trust signals and social proof above the fold.',
    challenge: 'The e-commerce site was experiencing a low add-to-cart rate of 2.3%, significantly below industry average. User research revealed trust and credibility concerns were primary friction points preventing conversions.',
    hypothesis: 'By prominently displaying trust signals (customer reviews, security badges, free shipping) above the fold, we can increase user confidence and boost add-to-cart rate by at least 30%.',
    implementation: {
      variantA: {
        description: 'Original design with trust signals below the fold, minimal social proof, and standard product imagery.',
        image: 'https://placehold.co/1200x900/cbd5e1/1e293b?text=Control+Version',
        screenshots: [
          'https://placehold.co/375x667/cbd5e1/1e293b?text=Mobile+Control',
          'https://placehold.co/1440x900/cbd5e1/1e293b?text=Desktop+Control'
        ]
      },
      variantB: {
        description: 'Optimized design featuring prominent customer reviews (4.8★ from 1,240+ reviews), security badges, and free shipping banner above the fold. Added trust micro-copy near CTA.',
        image: 'https://placehold.co/1200x900/22c55e/ffffff?text=Optimized+Version',
        screenshots: [
          'https://placehold.co/375x667/22c55e/ffffff?text=Mobile+Optimized',
          'https://placehold.co/1440x900/22c55e/ffffff?text=Desktop+Optimized'
        ]
      }
    },
    results: {
      conversionRate: {
        before: 2.3,
        after: 3.4
      },
      bounceRate: {
        before: 58.2,
        after: 51.6
      },
      avgTimeOnPage: {
        before: '1:24',
        after: '2:08'
      },
      statisticalSignificance: 99.2
    },
    technicalDetails: {
      stack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'React Query'
      ],
      optimizations: [
        'Lazy loading for below-fold images',
        'WebP image format with fallbacks',
        'Component-level code splitting',
        'Optimistic UI updates for cart actions',
        'Prefetching product data on hover'
      ],
      challenges: [
        'Maintaining sub-2s page load while adding above-fold content',
        'A/B testing framework integration with existing analytics',
        'Ensuring design consistency across 50+ product pages'
      ]
    },
    keyLearnings: [
      'Trust signals have 2.3x more impact on conversion than aesthetic improvements alone',
      'Above-the-fold placement of social proof (reviews, ratings) is critical for DTC brands',
      'Free shipping messaging increased perceived value more than percentage-off discounts',
      'Mobile users were 40% more likely to convert with simplified, trust-focused design',
      'Real customer photos in reviews boosted trust more than professional product shots'
    ],
    duration: '2 weeks',
    sampleSize: 5420
  },
  {
    id: 'checkout-flow-simplification',
    title: 'Checkout Flow Simplification',
    client: 'E-commerce Platform',
    category: 'ecommerce',
    thumbnail: 'https://placehold.co/1200x800/d946ef/ffffff?text=Checkout+Simplification',
    overview: 'Reduced cart abandonment by 23% through streamlining a multi-step checkout into a single-page experience with smart defaults and progress indicators.',
    challenge: 'The platform experienced a 68% cart abandonment rate, with analytics showing users dropping off primarily between checkout steps 2 and 3. Exit surveys revealed frustration with the lengthy process.',
    hypothesis: 'A single-page checkout with auto-save functionality and clear progress indicators will reduce friction and lower abandonment rate by at least 15%.',
    implementation: {
      variantA: {
        description: 'Traditional 3-step checkout: (1) Shipping info, (2) Payment details, (3) Order review. Each step required clicking "Continue" and waiting for page load.',
        image: 'https://placehold.co/1200x900/cbd5e1/1e293b?text=3-Step+Checkout',
        screenshots: [
          'https://placehold.co/375x667/cbd5e1/1e293b?text=Mobile+3-Step',
          'https://placehold.co/1440x900/cbd5e1/1e293b?text=Desktop+3-Step'
        ]
      },
      variantB: {
        description: 'Single-page checkout with collapsible sections, inline validation, auto-save every 2 seconds, and progress bar. Guest checkout made default option.',
        image: 'https://placehold.co/1200x900/a21caf/ffffff?text=1-Page+Checkout',
        screenshots: [
          'https://placehold.co/375x667/a21caf/ffffff?text=Mobile+1-Page',
          'https://placehold.co/1440x900/a21caf/ffffff?text=Desktop+1-Page'
        ]
      }
    },
    results: {
      conversionRate: {
        before: 32.0,
        after: 48.0
      },
      bounceRate: {
        before: 68.0,
        after: 52.0
      },
      avgTimeOnPage: {
        before: '3:45',
        after: '2:18'
      },
      statisticalSignificance: 98.7
    },
    technicalDetails: {
      stack: [
        'React',
        'Redux Toolkit',
        'Stripe SDK',
        'Formik + Yup',
        'React Hook Form'
      ],
      optimizations: [
        'Debounced auto-save to localStorage',
        'Inline form validation with immediate feedback',
        'Address autocomplete with Google Places API',
        'Prefilled shipping info for returning users',
        'Progressive enhancement for payment SDK loading'
      ],
      challenges: [
        'Handling payment SDK errors gracefully without breaking UX',
        'Managing complex form state across multiple sections',
        'Ensuring PCI compliance with client-side validation'
      ]
    },
    keyLearnings: [
      'Reducing steps does not mean sacrificing conversion quality - order values stayed consistent',
      'Auto-save functionality decreased anxiety about losing progress',
      'Guest checkout option was used by 73% of new customers',
      'Inline validation caught errors early, reducing form submission failures by 41%',
      'Progress indicators set clear expectations and reduced perceived effort'
    ],
    duration: '3 weeks',
    sampleSize: 10240
  },
  {
    id: 'mobile-landing-page-speed',
    title: 'Mobile Landing Page Speed Optimization',
    client: 'Personal Project',
    category: 'mobile',
    thumbnail: 'https://placehold.co/1200x800/f97316/ffffff?text=Mobile+Performance',
    overview: 'Achieved 57% reduction in mobile load time through aggressive performance optimization, resulting in 42% lower bounce rate and improved search rankings.',
    challenge: 'Mobile landing page had a 4.2-second load time and 75% bounce rate. Google PageSpeed Insights showed 32/100 performance score. Most users on 3G/4G connections were bouncing before page fully loaded.',
    hypothesis: 'Reducing load time to under 2 seconds through image optimization, code splitting, and lazy loading will directly decrease bounce rate and improve mobile conversions.',
    implementation: {
      variantA: {
        description: 'Original implementation with large JPG images, single JS bundle (412KB), all components loaded upfront, no lazy loading strategy.',
        image: 'https://placehold.co/1200x900/cbd5e1/1e293b?text=Slow+Loading',
        screenshots: [
          'https://placehold.co/375x667/cbd5e1/1e293b?text=Original+Mobile',
          'https://placehold.co/1440x900/cbd5e1/1e293b?text=Original+Desktop'
        ]
      },
      variantB: {
        description: 'Optimized with WebP images, code splitting, lazy loading for below-fold content, critical CSS inlined, and web workers for heavy computations.',
        image: 'https://placehold.co/1200x900/16a34a/ffffff?text=Fast+Loading',
        screenshots: [
          'https://placehold.co/375x667/16a34a/ffffff?text=Optimized+Mobile',
          'https://placehold.co/1440x900/16a34a/ffffff?text=Optimized+Desktop'
        ]
      }
    },
    results: {
      conversionRate: {
        before: 1.8,
        after: 3.2
      },
      bounceRate: {
        before: 75.0,
        after: 44.0
      },
      avgTimeOnPage: {
        before: '0:18',
        after: '1:52'
      },
      statisticalSignificance: 99.8
    },
    technicalDetails: {
      stack: [
        'Vite',
        'React',
        'TypeScript',
        'Web Workers',
        'Intersection Observer API'
      ],
      optimizations: [
        'Converted all images to WebP format (75% size reduction)',
        'Implemented route-based code splitting with React.lazy()',
        'Lazy loaded all images below fold with blur-up placeholders',
        'Inlined critical CSS for above-fold content',
        'Deferred non-critical JS with dynamic imports',
        'Implemented service worker for offline capability',
        'Reduced bundle size from 412KB to 89KB (initial load)'
      ],
      challenges: [
        'Testing on real 3G connections to validate improvements',
        'Balancing visual quality with file size for images',
        'Ensuring progressive enhancement for older browsers'
      ]
    },
    keyLearnings: [
      'Every 100ms reduction in load time correlated with 1% decrease in bounce rate',
      'WebP format was supported by 95% of users, providing massive size savings',
      'Blur-up image placeholders improved perceived performance significantly',
      'Users on slow connections converted at higher rates after optimization',
      'Performance is a feature - speed improvements led to 78% increase in conversions',
      'Google rankings improved by 12 positions after achieving 90+ Lighthouse score'
    ],
    duration: '1 week',
    sampleSize: 8640
  }
];

export const getCaseStudyById = (id: string) => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByCategory = (category: string) => {
  if (category === 'all') return caseStudies;
  return caseStudies.filter(study => study.category === category);
};
