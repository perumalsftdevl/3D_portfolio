import { meta, shopify, starbucks, tesla, ai_logi } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  bootstrap,
  angular,
  springio,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  bitbucket,
  mysql,
  threads,
  typescript,
  docker,
  DtlLogo,
  sql_server_icon,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: springio,
    name: "Spring Boot",
    type: "Backend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql_server_icon,
    name: "Sql Server",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "My Sql",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: bitbucket,
    name: "Bitbucket",
    type: "Version Control",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerize",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Dataspire",
    icon: DtlLogo,
    iconBg: "#fff",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#fbc3bc",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/perumalsftdevl",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/perumal-palani-86b643232/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const projects = [
  //   {
  //     iconUrl: pricewise,
  //     theme: "btn-back-red",
  //     name: "Amazon Price Tracker",
  //     description:
  //       "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
  //     link: "https://github.com/adrianhajdin/pricewise",
  //   },
  //   {
  //     iconUrl: threads,
  //     theme: "btn-back-green",
  //     name: "Full Stack Threads Clone",
  //     description:
  //       'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //     link: "https://github.com/adrianhajdin/threads",
  //   },
  //   {
  //     iconUrl: car,
  //     theme: "btn-back-blue",
  //     name: "Car Finding App",
  //     description:
  //       "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //     link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  //   },
  {
    iconUrl: ai_logi,
    theme: "btn-back-light",
    name: "Ai-Saas",
    description:
      "Developed a web application for a SaaS product utilizing AI tools. This application facilitates conversation with AI, image generation, video generation, and code generation.",
    link: "https://ai-sass-git-dev-perumalsftdevls-projects.vercel.app/",
  },
  {
    iconUrl:
      "data:image/jpeg;base64,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",
    theme: "btn-white",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://real-estate-iupy.vercel.app/",
  },
];
