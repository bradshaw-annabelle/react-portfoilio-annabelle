import project1 from "../assets/projects/vball.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` Motivated and detail-oriented Information Systems Technology student with a concentration in FinTech at Florida State College at Jacksonville, set to graduate in May 2026. Seeking an internship to apply technical skills in software development, data analysis, cybersecurity and machine learning. Strong foundation in technology solutions, adaptable, and eager to contribute to innovative projects while enhancing professional experience in the tech industry.`  
export const ABOUT_TEXT = `IF you want about text. Type it here. `
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Volleyball Analytics Predictor",
    image: project1,
    description:
      "This project leverages machine learning to predict the outcomes of volleyball matches based on player and team performance statistics. By analyzing key metrics such as serve success percentage, hitting efficiency, and errors, the model identifies patterns that influence match results. Users can input stats from upcoming matches to receive predictions and probability estimates for a win or loss.",
    technologies: ["Python", "scikit-learn", "Django", "XGBoost", "PostgreSQL"],
  },
  {
    title: "Project 2",
    image: project2,
    description:
    "Coming soon!",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Project 3",
    image: project3,
    description:
    "Coming soon!",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Project 4",
    image: project4,
    description:
    "Coming soon!",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "4043 Gulfstream Drive, Jacksonville Beach, FL 32250 ",
  phoneNo: "817-505-7920 ",
  email: "bradshaw.annabelle@yahoo.com",
};
