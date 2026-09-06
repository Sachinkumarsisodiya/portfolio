export const projectsData = [
  {
    id: 'rekha-eye-hospital',
    num: '01',
    name: 'Rekha Eye Hospital (REH)',
    category: 'Full-Stack System',
    image: '/reh_thumbnail.png',
    shortDesc: 'A production-grade, full-stack hospital website with a smart appointment booking engine and a secure admin management panel.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Node.js', 'Puppeteer', 'JWT', 'Docker'],
    github: 'https://github.com/Sachinkumarsisodiya/REH',
    live: 'https://reh-sigma.vercel.app/',
    overview: 'Rekha Eye Hospital (REH) is a production-grade, full-stack hospital management system and patient portal with a smart appointment booking engine and a secure admin management panel, built end-to-end using AI-assisted development.',
    problem: 'Hospitals and specialty eye clinics require intuitive patient self-booking with dynamic slot generation, zero double-booking prevention, automated patient communication, and a secure multi-action admin portal to manage clinical schedules in real-time.',
    solution: 'Designed and built a responsive patient portal with an interactive multi-step appointment booking wizard, backed by a RESTful Flask API with SQLAlchemy ORM and PostgreSQL. Integrated a Node.js + Puppeteer microservice for automated WhatsApp/SMS booking confirmations and real-time alerts.',
    features: [
      'Interactive multi-step appointment booking wizard with dynamic time-slot generation and zero double-booking logic',
      'Secure JWT-authenticated admin dashboard for real-time appointment approval, rejection, and rescheduling with full audit history',
      'Automated WhatsApp/SMS notification microservice (Node.js + Puppeteer) for instant booking confirmations and alert notifications',
      'RESTful Flask backend with modular blueprint architecture and SQLAlchemy ORM connected to PostgreSQL database',
      'Deployed cloud architecture: React on Vercel, Flask API & PostgreSQL on Railway, and containerized Node.js microservice with persistent volume storage',
      'Production-grade infrastructure: CORS security, Gunicorn WSGI server, environment-based configuration, and Docker containerization'
    ],
    challenges: 'Architecting real-time appointment synchronization across dynamic calendar slots while managing a persistent containerized Node.js Puppeteer microservice for WhatsApp messaging.',
    learned: 'Gained deep hands-on expertise in multi-service microservice orchestration, Docker containerization on cloud platforms (Railway/Vercel), automated headless messaging pipelines, and building robust full-stack healthcare platforms.'
  },
  {
    id: 'riyah-theme',
    num: '02',
    name: 'RIYAH Shopify Theme',
    category: 'Shopify Theme',
    image: '/riyah_thumbnail.png',
    shortDesc: 'A premium Shopify Online Store 2.0 theme. (Store Password: Sisodiyaa)',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Sachinkumarsisodiya',
    live: 'https://test-store-sachin.myshopify.com/',
    overview: 'RIYAH is a premium Shopify Online Store 2.0 theme built using AI-assisted development. It focuses on modern eCommerce design, high conversion rates, and extensive customization options for merchants. Note: The development store is password protected. Use password: Sisodiyaa',
    problem: 'Merchants need highly customizable and fast-loading themes that fully support Shopify\'s Online Store 2.0 architecture.',
    solution: 'Built a modular, section-based theme using Liquid, modern CSS, and vanilla JavaScript, leveraging AI tools to accelerate the development process.',
    features: [
      'Online Store 2.0 compatible',
      'Modular section-based design',
      'Optimized for fast loading speeds',
      'AI-assisted development workflow'
    ],
    challenges: 'Ensuring seamless compatibility with Shopify\'s dynamic sections and various third-party app block integrations.',
    learned: 'Gained deep expertise in Shopify Liquid architecture and integrating AI into theme development workflows.'
  },
  {
    id: 'wokl-studio',
    num: '03',
    name: 'Wokl Music Studio',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    shortDesc: 'A modern and responsive music studio platform built with React and Tailwind CSS.',
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Sachinkumarsisodiya/wokl--studio',
    live: 'https://wokl-studio.vercel.app/',
    overview: 'A modern and responsive music studio website designed to showcase the studio\'s services, music programs, facilities, and brand experience through an engaging and visually rich interface.',
    problem: 'Music studios often rely on outdated websites that fail to convey the premium quality of their services. A fast, highly-responsive, and visually appealing web presence was required.',
    solution: 'Developed a high-performance React application utilizing Tailwind CSS for rapid, scalable styling. The UI is designed to be immersive, reflecting the creative atmosphere of a modern music studio.',
    features: [
      'Responsive, mobile-first design',
      'Modern, immersive UI/UX',
      'Fast page loads with Vite',
      'Component-based architecture'
    ],
    challenges: 'Ensuring high performance and smooth animations while maintaining a rich media experience.',
    learned: 'Deepened expertise in Tailwind CSS utility classes and building reusable React components for media-heavy applications.'
  },
  {
    id: 'sisodiya-healthcare',
    num: '04',
    name: 'Sisodiya Healthcare Clinic',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop',
    shortDesc: 'A professional healthcare clinic website facilitating patient information and services.',
    techStack: ['React', 'Web Development'],
    github: 'https://github.com/Sachinkumarsisodiya',
    live: 'https://sisodiya-healthcare-clinic.vercel.app/',
    overview: 'A modern healthcare clinic platform featuring medical services, doctor information, patient resources, and an intuitive online appointment booking experience.',
    problem: 'Patients needed a reliable online portal to find clinic hours, services, and contact information without navigating complex menus.',
    solution: 'Built a clean, accessible, and fast-loading React application focused on user experience and crucial information delivery.',
    features: [
      'Clear service listings',
      'Responsive layout for mobile accessibility',
      'Professional, trustworthy aesthetic'
    ],
    challenges: 'Balancing a professional medical aesthetic with modern web design trends.',
    learned: 'Gained experience in designing user interfaces tailored for specific industries like healthcare.'
  },
  {
    id: 'freeship-pro',
    num: '05',
    name: 'FreeShip Pro',
    category: 'Shopify App',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    shortDesc: 'A Shopify application designed to manage and display dynamic shipping thresholds.',
    techStack: ['Shopify', 'Liquid', 'React', 'Node'],
    github: 'https://github.com/Sachinkumarsisodiya',
    live: 'https://freeshippro.norexa.online/',
    overview: 'FreeShip Pro is a custom Shopify application that empowers merchants to easily configure and display dynamic free shipping thresholds, increasing average order value (AOV).',
    problem: 'Shopify merchants struggled to prominently display dynamic "amount away from free shipping" progress bars without complex theme modifications.',
    solution: 'Engineered a scalable Shopify App that seamlessly integrates into merchant themes via App Blocks, providing a customizable, dynamic progress bar.',
    features: [
      'Dynamic cart threshold calculations',
      'Theme App Extension integration',
      'Customizable merchant dashboard',
      'Performance-optimized script injection'
    ],
    challenges: 'Navigating the Shopify API and ensuring seamless integration across various distinct Shopify themes without breaking existing functionality.',
    learned: 'Mastered Shopify App Bridge, Theme App Extensions, and complex GraphQL API mutations.'
  },
  {
    id: 'testicraft',
    num: '06',
    name: 'Testicraft',
    category: 'Shopify App',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop',
    shortDesc: 'A powerful Shopify application designed to enhance merchant capabilities and streamline e-commerce workflows.',
    techStack: ['Shopify', 'React', 'Node', 'GraphQL'],
    github: 'https://github.com/Sachinkumarsisodiya',
    live: 'https://apps.shopify.com/testicraft',
    overview: 'Testicraft is a custom Shopify app built to help merchants manage their operations more efficiently through an intuitive React-based dashboard.',
    problem: 'Merchants needed a streamlined way to handle specific operational workflows without leaving the Shopify admin panel.',
    solution: 'Developed an embedded Shopify application using React and Node.js that integrates seamlessly with the Shopify Admin API.',
    features: [
      'Embedded Shopify Admin interface',
      'Real-time data synchronization',
      'Seamless GraphQL API integration'
    ],
    challenges: 'Ensuring strict compliance with Shopify App Bridge requirements and handling complex OAuth flows.',
    learned: 'Gained advanced knowledge of Shopify App architecture, OAuth authentication, and React-based embedded app design.'
  },
  {
    id: 'ticket-tale',
    num: '07',
    name: 'Ticket-Tale',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop',
    shortDesc: 'A ticketing application interface built with React and Vite.',
    techStack: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Sachinkumarsisodiya/ticket-tale',
    live: 'https://ticket-tale.vercel.app/',
    overview: 'A BookMyShow-inspired ticket booking platform where users can discover and book movies, events, concerts, shows, and other entertainment experiences. The platform provides an interactive interface for exploring listings, viewing details, selecting dates/show timings, and booking tickets.',
    problem: 'Event platforms often suffer from cluttered interfaces, making the checkout and discovery process tedious.',
    solution: 'Designed a streamlined, intuitive interface using React and Vite to ensure fast navigation and state management.',
    features: [
      'Event discovery interface',
      'Streamlined UI components',
      'State management for cart/tickets'
    ],
    challenges: 'Managing complex UI state across multiple views efficiently.',
    learned: 'Advanced React state management techniques and Vite build optimizations.'
  },
  {
    id: 'binance-trading-bot',
    num: '08',
    name: 'Binance Futures Testnet Trading Bot',
    category: 'Python API',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop',
    shortDesc: 'An automated trading bot interacting with the Binance Futures Testnet API.',
    techStack: ['Python', 'Binance API', 'REST'],
    github: 'https://github.com/Sachinkumarsisodiya/binance_trading_bot',
    live: null,
    overview: 'A Python-based algorithmic trading bot designed to interact with the Binance Futures Testnet, executing trades based on predefined technical strategies.',
    problem: 'Manual trading is slow and emotional. An automated system was required to test strategies on the Binance futures market without risking real capital.',
    solution: 'Developed a Python application utilizing the official Binance REST APIs to fetch real-time market data, analyze technical indicators, and automatically execute orders.',
    features: [
      'Real-time market data processing',
      'Automated order execution',
      'Technical indicator analysis',
      'Risk management parameters'
    ],
    challenges: 'Handling API rate limits, maintaining stable WebSocket connections, and managing asynchronous data streams.',
    learned: 'Deepened knowledge of Python asynchronous programming, API integration, and algorithmic trading concepts.'
  }
];
