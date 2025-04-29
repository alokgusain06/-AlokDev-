// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import prismaLogo from './assets/tech_logo/prisma.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import dockerLogo from './assets/tech_logo/docker.png';
import prometheusLogo from './assets/tech_logo/prometheus.png';
import kafkaLogo from './assets/tech_logo/Apache_Kafka_logo.png';
import grafanaLogo from './assets/tech_logo/Grafana_logo.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import awsLogo from './assets/tech_logo/aws.png';
import figmaLogo from './assets/tech_logo/figma.png';

import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import iiitaLogo from './assets/education_logo/iiita.png';
import  kvLogo from './assets/education_logo/kv.png';
import shivalikLogo from './assets/education_logo/shivalik.png';

import allenLogo from './assets/education_logo/allen.png';  

// Project Section Logo's
import eventmasteryLogo from './assets/work_logo/eventmastery.png';
import intelliformsLogo from './assets/work_logo/intelliforms.png';
import careernowLow from './assets/work_logo/careernow.png';
import memegeneratorLogo from './assets/work_logo/memegenerator.png';
import trackingLogo from './assets/work_logo/tracking.png';
import noteLogo from './assets/work_logo/note.png';
import cicdLogo from './assets/work_logo/cicd.png';
import BDALogo from './assets/work_logo/bda.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Prisma', logo: prismaLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Apache Kafka', logo: kafkaLogo },
      { name: 'Prometheus', logo: prometheusLogo },
      { name: 'Grafana', logo: grafanaLogo },
      { name: 'AWS', logo: awsLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
img: iiitaLogo,  // Replace with your IIITA logo image
school: "Indian Institute of Information Technology Allahabad",
date: "Nov 2022 - Present",
grade: "7.83",  // You can replace this with your current CGPA or expected grade
desc: "Currently pursuing my Bachelor's degree in Electronics and Communication from the prestigious Indian Institute of Information Technology Allahabad (IIITA). Throughout my time here, I have been exposed to core concepts in programming, algorithms, data structures, networking, and systems design. I have actively engaged in various academic projects, hackathons, and internships, which have helped me strengthen my technical problem-solving and software development skills. IIITA has not only enhanced my theoretical knowledge but also provided valuable hands-on experience in cutting-edge technologies.",
degree: "Bachelor of Technology(BTech)"

    },
    {
      id: 1,
img: allenLogo, 
school: "Allen Institute for JEE Main Coaching",
date: " june 2021 - August 2022",
grade: "N/A",
desc: "During my time at Allen Institute for JEE Main coaching, I honed my understanding of key concepts in Physics, Chemistry, and Mathematics (PCM). The coaching program helped me sharpen my problem-solving skills and develop a strong foundation, preparing me for one of the most competitive entrance exams in India.",
degree: "JEE Main Coaching",

    },
    {
      id: 2,
img: kvLogo,  // Replace with your KV logo image
school: "Kendriya Vidyalaya Kashipur",
date: "April 2019 - May 2021",
grade: "91.5%",
desc: "During my time at Kendriya Vidyalaya Kashipur, I developed a keen interest in Physics, which deepened my understanding of scientific concepts. I focused on mastering core principles, which not only strengthened my foundation but also prepared me for competitive exams like JEE. My active participation in competitions further honed my problem-solving skills and sparked a relentless drive for academic excellence.",
degree: "Senior Secondary (12th Grade)",


    },
   
    {
      id: 3,
      img: shivalikLogo,  // Replace with the appropriate logo image for Shivalik Holy Mount Academy
      school: "Shivalik Holy Mount Academy",
      date: "March 2018 - April 2019",
      grade: "90.2%",
      desc: "I completed my high school education under the CBSE board at Shivalik Holy Mount Academy. This period marked the foundation of my academic journey, where I developed a keen interest in Science and Computer Applications, which led to my further exploration of technology.",
      degree: "Secondary School(10th)",
    },
    
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "EventMastery.com",
      description:
        "EventMastery.com is a Simple event management platform designed to simplify the process of organizing and managing events.",
      image: eventmasteryLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "NodeJS", "Express", "MongoDB"],
      github: "https://github.com/alokgusain06/EventMastery.com",
      webapp: "https://event-mastery-com.vercel.app/",
    },
    {
      id: 1,
      title: "NoteNestPro",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: noteLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Ejs", "CSS", "JavaScript"],
      github: "https://github.com/alokgusain06/NoteNestPro",
      webapp: "",
    },
    {
      id: 2,
      title: "Meme-Generator",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: memegeneratorLogo,
      tags: ["React JS", "API", "Nodejs", "CSS", "JavaScript"],
      github: "https://github.com/alokgusain06/Meme_Generator",
      webapp: "",
    },
    {
      id: 3,
      title: "Tracksphere",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: trackingLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation", "Leafletjs"],
      github: "",
      webapp: "",
    },
    {
      id: 4,
      title: "CareerNow",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: careernowLow,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/alokgusain06/CareerNow",
      webapp: "https://careenow-1.onrender.com",
    },
    {
      id: 5,
      title: "Labify_DA",
      description:
        "This project is about development of a website for use of members of BDA Lab. When the viewer enters, an initial Lab Index page is shown.",
      image: BDALogo,
      tags: ["React JS", "Node.js", "mySQL", "Express", "CSS", "EJS"],
      github: "https://github.com/SubhamPanda2003/BDA_LAB",
      webapp: "",
    },
    {
      id: 6,
      title: "PipeCraftX-Sync W",
      description:
        "Configured Jenkins (v2.289), GitHub & AWS EC2 for automated CI/CD pipeline with Node.js(v16) set up Jenkins on EC2, automating builds, dependency management, and app deployment with Shell Scripts.",
      image: cicdLogo,
      tags: ["Jenkins", "Node.js", "AWS EC2", "Docker", "Shell scripts"],
      github: "https://github.com/alokgusain06/TodoFlow-CI-CD",
      webapp: "",
    },
    {
      id: 7,
      title: "intelliforms",
      description:
        "IntelliForms is a smart SaaS platform that lets users create dynamic, multi-step forms using AI. ",
      image: intelliformsLogo,
      tags: ["Next JS", "Node.js", "Prisma", "PostgresSQL", "Stripe", "TypeScript"],
      github: "https://github.com/alokgusain06/IntelliForms.com",
      webapp: "",
    }
  ];
