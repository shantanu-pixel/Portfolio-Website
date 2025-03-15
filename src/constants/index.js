import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  transcendence1,
  Edu,
  carrent,
  Front,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Full Stack Development",
    icon: mobile,
  },
  {
    title: "Frontend Development (Html, Css, js, React)",
    icon: backend,
  },
  {
    title: "Backend Development (Node Js, Express Js)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
// ----------------------- Education -----------------------------
const education = [
  {
    title: "Master Of Computer Application",
    institute_name: "Rcc Institute Of Information Technology",
    icon: Edu,
    iconBg: "#383E56",
    date: "May 2021 - Sep 2023",
    points: [
      "Gained hands-on experience with Html, Css, Javascript, Java, and Oracle DB.",
      "Developed multiple projects showcasing problem-solving skills and technical expertise.",
      "Collaborated effectively with peers and mentors on innovative software solutions.",
      "Presented a research project on optimizing database performance in web applications.",
    ],
  },
  {
    title: "Bachelor Of Mathematics",
    institute_name: "Bolpur College (The University Of Burdwan)",
    icon: Edu,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Built a strong foundation in mathematical theories, logic, and problem-solving.",
      "Learned fundamental programming concepts and applied them in mathematical modeling.",
      "Worked on analytical projects, applying mathematics to solve real-world problems.",
      "Participated in academic seminars and contributed to collaborative learning sessions.",
    ],
  },
  {
    title: "Higher Secondary Examination",
    institute_name: "Bahiri B.S. High School",
    icon: Edu,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Feb 2019",
    points: [
      "Focused on science stream subjects, building a strong base in mathematics and physics.",
      "Developed an early interest in computer science and problem-solving techniques.",
      "Achieved excellent grades in board examinations with a focus on academic rigor.",
      "Actively participated in extracurricular activities such as debates and quizzes.",
    ],
  },
  {
    title: "Secondary Examination",
    institute_name: "Bahiri B.S. High School",
    icon: Edu,
    iconBg: "#383E56",
    date: "Jan 2016 - Jan 2017",
    points: [
      "Completed foundational education with high proficiency in core subjects.",
      "Developed an interest in logical reasoning.",
      "Participated in school-level science and mathematics fairs.",
      "Laid the groundwork for future academic achievements through consistent performance.",
    ],
  },
];

// ---------------------------------------------------------------

const experiences = [
  {
    title: "Trainee Java Developer",
    company_name: "Transcendence",
    icon: transcendence1,
    iconBg: "#383E56",
    date: "June 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using Html, Css, Javascript, Java, Oracle DB.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies like html, css, javascript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shantanu proved me wrong.",
    name: "Anamika Roy",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shantanu does.",
    name: "Abhijit Sarkar",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    testimonial:
      "After Shantanu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ananya Biswas",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const projects = [
  {
    name: "University Portal",
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "This is a university platform based on html, css, javascript for front-end, Node.js for server and my-sql for database. Users can register themself. There are mail facility also included.",
    tags: [
      {
        name: "Html, Css, Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    image: Front,
    source_code_link: "https://github.com/shantanu-pixel/University-Website",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, education, experiences, testimonials, projects };
