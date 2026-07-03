import maretindaImg from "@/assets/project-maretinda.jpg";
import moneyImg from "@/assets/project-money.jpg";
import giyapayImg from "@/assets/project-giyapay.jpg";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  role: string;
  year: string;
  summary: string;
  image: string;
  overview: string;
  problem: string;
  goals: string[];
  research: string;
  process: string;
  wireframes: string;
  decisions: string[];
  solution: string;
  results: string[];
  reflection: string;
};

export const projects: Project[] = [
  {
    slug: "maretinda",
    index: "01",
    title: "Maretinda E-Commerce Website",
    category: "E-Commerce · Web Design",
    role: "UI/UX Designer",
    year: "2025",
    summary:
      "Designed a modern e-commerce experience focused on usability, product discovery and conversion.",
    image: maretindaImg,
    overview:
      "Maretinda is an emerging lifestyle brand selling curated apparel and accessories. The team needed a digital storefront that communicated the brand's editorial identity while making products easy to browse, compare and purchase across devices.",
    problem:
      "The legacy site buried products under heavy banners, lacked clear filtering and made checkout feel transactional rather than considered. Conversion suffered most on mobile, where information density and tap targets were misaligned.",
    goals: [
      "Reduce time-to-product on the homepage",
      "Make filtering feel native to mobile, not a desktop port",
      "Treat product photography as the brand voice",
      "Streamline cart and checkout to three intentional steps",
    ],
    research:
      "I audited five competitors, ran six unmoderated usability sessions on the existing site, and mapped the full purchase journey from discovery to post-purchase. Heatmaps showed users scrolling past the hero in under two seconds — products needed to surface immediately.",
    process:
      "I moved from low-fidelity sitemap and user flows to greyscale wireframes, then layered visual design on top in close collaboration with the brand designer. Every screen was prototyped in Figma and tested with five users before development handoff.",
    wireframes:
      "Wireframes prioritised a flexible editorial grid, persistent filters and a simplified product page hierarchy. The cart was reimagined as a slide-over rather than a separate route to keep shopping momentum intact.",
    decisions: [
      "Editorial grid with mixed-aspect product tiles to break catalog monotony",
      "Sticky filter rail on desktop, full-screen sheet on mobile",
      "Inline size guidance to reduce returns",
      "Three-step checkout with persistent cart summary",
    ],
    solution:
      "The launched site leads with curated collections, surfaces products within the first viewport on every device, and replaces a four-step checkout with a focused three-step flow. Typography and pacing reflect the brand's editorial voice without slowing the path to purchase.",
    results: [
      "+38% increase in mobile add-to-cart rate",
      "-22% reduction in checkout abandonment",
      "Average session duration up by 1m 12s",
    ],
    reflection:
      "The biggest unlock wasn't a single screen — it was treating the entire purchase journey as one continuous narrative. Working closely with developers from week one meant motion, spacing and states shipped as designed.",
  },
  {
    slug: "money-tracker",
    index: "02",
    title: "Money Tracker App",
    category: "Figma, FigJam, Canva",
    role: "UI/UX Designer",
    year: "4 Weeks",
    summary:
      "Designed a mobile finance application that helps users track income, expenses, and achieve budgeting goals through a simple and intuitive experience.",
    image: moneyImg,

    overview:
      "Money Tracker is a mobile application designed to help users manage their finances by tracking income and expenses, setting financial goals, and analyzing spending habits. The goal was to create a simple and intuitive experience that helps users stay financially organized without feeling overwhelmed.",

    problem:
      "Many people struggle to track their daily spending and often forget small purchases, making it difficult to understand their financial habits. Existing solutions can feel complicated or fail to support budgeting goals, leading to impulsive spending and poor financial awareness.",

    goals: [
      "Enable users to record income and expenses quickly and efficiently.",
      "Provide clear visual comparisons of income versus expenses for the current month.",
      "Allow users to set financial goals and limits for better budgeting.",
      "Offer a detailed transaction history categorized by months for better insights.",
      "Ensure an intuitive and user-friendly experience to cater to a wide audience.",
    ],

    research:
      "To better understand users' financial habits and challenges, I conducted interviews and research to explore spending behaviors, budgeting practices, and financial goals. The findings helped identify key user needs and pain points. Based on these insights, I created Information Architecture (IA) and User Flows to organize the app structure and ensure a smooth and intuitive user experience before moving into wireframing and visual design.",

    process:
      "To maintain consistency and scalability throughout the application, I created a design system that included color styles, typography, buttons, icons, vectors, logos, and reusable UI components. This helped establish a cohesive visual language and ensured a consistent user experience across all screens.",

    wireframes:
      "Low-fidelity wireframes were created to define the app structure, explore screen layouts, organize content, prioritize key information, and validate user flows before moving into high-fidelity designs.",

    decisions: [
      "Quick Add for faster expense entry",
      "Clear visual charts for financial insights",
      "Goal tracking to encourage saving habits",
      "Simple navigation for accessibility",
    ],

    solution:
      "A mobile-friendly solution was designed to help users easily track income and expenses, monitor financial performance through visual charts, set budgeting goals, and review transaction history for better financial decision-making.",

    results: [
      "Clear overview of income and expenses.",
      "Faster transaction recording and management.",
      "Goal setting and spending monitoring.",
    ],

    reflection:
      "This project taught me the importance of balancing financial data with simplicity. Through research, wireframing, and iterative design, I learned how thoughtful UX decisions can make personal finance management feel approachable and less intimidating.",
  },
  {
    slug: "giyapay",
    index: "03",
    title: "Giyapay Merchant Dashboard",
    category: "SaaS · Dashboard",
    role: "UI/UX Designer",
    year: "2024",
    summary:
      "Designed a dashboard experience that simplifies merchant operations, monitoring and business insights.",
    image: giyapayImg,
    overview:
      "Giyapay is a payment processing platform serving small and mid-size merchants across Southeast Asia. The merchant dashboard had grown organically, and operators struggled to find the data they needed during a working day.",
    problem:
      "The legacy dashboard buried critical actions behind multiple clicks, mixed monitoring with configuration, and offered no clear answer to the merchant's first question every morning: did anything break overnight?",
    goals: [
      "Surface daily health in a single glance",
      "Separate operational tasks from configuration",
      "Make complex transaction data scannable",
      "Establish a scalable design system for future modules",
    ],
    research:
      "I shadowed three merchants for a full working day, interviewed their support teams, and mapped every entry point into the dashboard. Most sessions started with the same question — was yesterday OK? — but the answer required five screens.",
    process:
      "From journey mapping I defined an Operations / Insights / Settings split, then built a component library to keep new modules consistent. Design reviews ran twice weekly with engineering during build.",
    wireframes:
      "Wireframes restructured the IA around tasks, not features. The home screen became a true status surface, with deep dives one click away.",
    decisions: [
      "Status-first home with health summary above the fold",
      "Dense, scannable tables with progressive disclosure",
      "Component library covering 40+ patterns",
      "Clear hierarchy between monitoring and configuration",
    ],
    solution:
      "The new dashboard answers the merchant's first question instantly, lets support teams jump from alert to transaction in two clicks, and ships with a documented design system used by three engineering squads.",
    results: [
      "Time-to-insight reduced by 64% in user testing",
      "Support tickets about navigation dropped by 41%",
      "Design system adopted by 3 squads",
    ],
    reflection:
      "Dashboards live or die by hierarchy. Slowing down to argue about what truly matters on the home screen paid off for every screen that followed.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
