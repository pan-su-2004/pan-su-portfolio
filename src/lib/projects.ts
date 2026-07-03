import maretindaImg from "@/assets/project-maretinda.jpg";
import maretindaImgWireframe from "@/assets/project-maretinda-wireframe.jpg";
import maretindaImgSolution from "@/assets/project-maretinda-wireframe-solution.jpg";
import moneyImg from "@/assets/project-money.jpg";
import moneyImgWireframe from "@/assets/project-money-wireframe.jpg";
import moneyImgSolution from "@/assets/project-money-solution.jpg";
import giyapayImg from "@/assets/project-giyapay.jpg";
import giyapayImgWireframe from "@/assets/project-giyapay-wireframe.jpg";
import giyapayImgSolution from "@/assets/project-giyapay-solution.jpg";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  role: string;
  year: string;
  summary: string;
  image: string;
  imageWireframe: string;
  imageSolution: string;
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
    title: "Maretinda",
    category: "Figma, FigJam, Canva",
    role: "UI/UX Designer",
    year: "8 Weeks",
    summary:
      "Designed a responsive multi-vendor marketplace that provides a seamless shopping experience for buyers while enabling sellers to efficiently manage their online stores.",
    image: maretindaImg,
    imageWireframe: maretindaImgWireframe,
    imageSolution: maretindaImgSolution,

    overview:
      "Maretinda is a multi-vendor e-commerce marketplace designed for the Philippine market, connecting buyers and sellers on one platform. It enables sellers to create storefronts, manage products, process orders, and receive payments, while providing shoppers with a secure and seamless purchasing experience. As the UI/UX Designer, I designed responsive user interfaces across both the buyer and seller journeys, collaborating closely with developers and stakeholders to create intuitive, scalable, and developer-friendly designs.",

    problem:
      "Designing a marketplace requires balancing the needs of two different user groups: buyers and sellers. Buyers expect a fast and trustworthy shopping experience, while sellers need efficient tools to manage their stores, products, and orders. The challenge was to create a consistent experience across multiple user flows while ensuring the designs were practical for development and adaptable to dynamic content.",

    goals: [
      "Design an intuitive shopping experience for buyers.",
      "Simplify the onboarding process for new sellers.",
      "Create reusable UI components for consistency and faster development.",
      "Support responsive layouts across desktop devices.",
      "Build scalable designs that accommodate dynamic content and future platform growth.",
    ],

    research:
      "Before designing, I researched leading e-commerce platforms such as Shopee, Lazada, Shopify, Etsy, and Amazon to understand common marketplace patterns, user onboarding experiences, checkout flows, and product browsing behavior. I also collaborated with developers and stakeholders throughout the project to understand technical constraints and business goals.",

    process:
      "To maintain consistency across the marketplace, I built a reusable design system that included color styles, typography, buttons, product cards, navigation components, email templates, icons, a logo, and reusable UI components. The component-based approach improved design consistency and simplified developer handoff.",

    wireframes:
      "Low-fidelity wireframes were created to organize complex user flows before visual design. These included product features, utility pages, user account systems, shopping experiences, checkout processes, blog pages, and a seller guide. This stage helped validate layouts, prioritize information, and identify usability improvements early in the design process.",

    decisions: [
      "Designed a clear and intuitive shopping experience from product discovery to checkout.",
      "Product filters for faster product discovery.",
      "Clear product cards for better browsing.",
      "Organized product details for easier decision-making.",
      "Seller profile section to improve trust and product exploration.",
    ],

    solution:
      "A responsive marketplace experience was designed to help users easily discover products, browse categories, complete secure purchases, and manage their orders. The interface was built with a consistent design system and reusable components to provide a seamless and intuitive shopping experience.",

    results: ["Easy Product Discovery", "Consistent User Experience", "Seamless Shopping Journey"],

    reflection:
      "Working on Maretinda strengthened my ability to design for real-world product development rather than isolated screens. I learned the importance of collaborating closely with developers, adapting designs based on technical constraints, and considering edge cases that arise during implementation. The iterative feedback process helped me create interfaces that are not only visually consistent but also practical, scalable, and ready for development.",
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
    imageWireframe: moneyImgWireframe,
    imageSolution: moneyImgSolution,
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
    title: "GiyaPay Dashboard",
    category: "Figma, Canva",
    role: "UI/UX Designer",
    year: "2 Weeks",
    summary:
      "Redesigned a merchant dashboard for a digital payment platform, improving usability, navigation, and visual consistency while creating a scalable interface for merchants and administrators.",
    image: giyapayImg,
    imageWireframe: giyapayImgWireframe,
    imageSolution: giyapayImgSolution,

    overview:
      "GiyaPay is a digital payment platform that enables merchants in the Philippines to accept digital payments, monitor transactions, generate reports, and manage their business through a centralized merchant dashboard. As the UI/UX Designer, I was responsible for redesigning the merchant dashboard to improve usability, modernize the interface, and create a more organized experience for merchants. I worked closely with stakeholders and developers, iterating on the design based on business requirements and internal feedback.",

    problem:
      "The existing merchant dashboard had an outdated interface, inconsistent layouts, and navigation that made it difficult for merchants to quickly access important information. Some features were hidden within dropdown menus, several pages lacked visual hierarchy, and the overall experience did not reflect a modern payment platform. The challenge was to redesign the dashboard while maintaining existing functionality and introducing a cleaner, more scalable interface that supports both regular merchants and administrators.",

    goals: [
      "Improve the overall user experience of the merchant dashboard.",
      "Create a cleaner and more modern interface.",
      "Simplify navigation and information hierarchy.",
      "Make frequently used features easier to access.",
      "Design reusable and consistent UI components.",
    ],

    research:
      "Since most payment providers do not publicly expose their merchant dashboards, I researched modern dashboard patterns from SaaS platforms, fintech products, banking applications, and analytics systems to understand common layouts, navigation structures, dashboard widgets, data visualization, and reporting interfaces. Throughout the project, I also collaborated with stakeholders to gather requirements and continuously refined the design based on their feedback, ensuring that the proposed solutions aligned with both business goals and merchant needs.",

    process:
      "To create a more cohesive experience, I established a consistent design language using reusable components, typography, color styles, buttons, form controls, tables, cards, navigation elements, and modal layouts. This helped improve consistency across pages while making future updates easier for both designers and developers.",

    wireframes:
      "Before creating the final interface, I explored multiple layouts for the dashboard, transactions, reports, integration, and navigation. This process helped organize information, determine feature priorities, and refine user flows before moving into high-fidelity designs.",

    decisions: [
      "Redesigned the dashboard with summary widgets for daily, weekly, and monthly sales.",
      "Improved the transaction management experience by introducing cleaner filtering and table layouts.",
      "Added support for merchant filtering for administrator accounts managing multiple merchants.",
      "Reorganized navigation by moving frequently accessed features into the main sidebar.",
    ],

    solution:
      "The redesigned merchant dashboard provides merchants with a modern and organized workspace for managing payments, monitoring business performance, reviewing transactions, generating reports, and accessing developer tools. The interface emphasizes clarity, efficient navigation, and consistent visual patterns while supporting future product growth.",

    results: [
      "Cleaner and more professional dashboard interface.",
      "Improved navigation and information hierarchy.",
      "Better visibility of business insights through dashboard widgets.",
    ],

    reflection:
      "This project strengthened my ability to redesign an existing product while balancing stakeholder feedback, business objectives, and usability. I learned the importance of designing scalable interfaces that can evolve as new features are introduced while maintaining consistency and simplicity across the overall user experience. Working closely with stakeholders also reinforced the value of iterative design and clear communication throughout the design process.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
