// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import galLogo from './assets/education_logo/2.jpg.jpeg';
import collegeLogo from './assets/education_logo/3.jpg.png';
import schoolLogo from './assets/education_logo/1.jpg.jpeg';

// Project Section Logo's
import imgsLogo from './assets/work_logo/imgs.jpeg';
import ldrbLogo from './assets/work_logo/ldrb.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
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
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
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
        " Next Js",
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
      img: galLogo,
      school: "Galgotia College, Noida",
      date: "Sept 2022 - July 2024",
      grade: "7.5 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Galgotia College of Enginneering and Technology, Noida. During my time at College, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Galgotia College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: collegeLogo,
      school: "S.A.k.N.D. College, Madhepura",
      date: "Sept 2016 - Aug 2020",
      grade: "61.73%",
      desc: "I completed my Bachelor's degree in Account Honour's (B.com.) from  College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Accounts. From exploring that course i gained a various kind of knowledge in accountancy and during the graduation i also preared for charterd accountant course which help me to gain practical knowledge of Gst,Income Tax, Financial Reporting ",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: collegeLogo,
      school: "S.L.Y. College, Madhepura",
      grade: "60%",
      desc: "I completed my class 12 education from S.L.Y. College, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: schoolLogo,
      school: "Tejendra High School, Supaul",
      grade: "57%",
      desc: "I completed my class 10 education from Tejendra High School, Supaul, under the BSEB board, where I studied Science with Computer.",
      degree: "BSEB(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Image Search App",
      description:
        "The Image Search App is a responsive, modern web application that allows users to search and browse high-quality images based on keywords. The app fetches images from an external API (like Unsplash or Pixabay) and displays them in a visually appealing gallery with features like infinite scroll, search suggestions, and image previews.",
      image: imgsLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/utu1234/ImageSearching-App.git",
      webapp: "https://app.netlify.com/projects/imga/overview",
    },
    {
      id: 1,
      title: "Leaderboard App",
      description:  "The Leaderboard App is a full-stack web application that allows users to claim points and get ranked on a dynamic leaderboard. The app showcases real-time updates, clean UI design, and smooth interaction between frontend and backend.",
      image: ldrbLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", " Tailwind CSS", "CSS", "JavaScript"],
      github: "https://github.com/utu1234/taskapp.git",
      webapp: "https://vercel.com/utkarshs-projects-caf0d82f/taskapp",
    },];
  //   {
  //     id: 2,
  //     title: "Movie Recommendation App",
  //     description:
  //       "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //     image: movierecLogo,
  //     tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //     github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //     webapp: "https://movie-recommendation-app-jet.vercel.app/",
  //   },
  //   {
  //     id: 3,
  //     title: "Email Validator NPM Package",
  //     description:
  //       "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //     image: npmLogo,
  //     tags: ["React JS", "Node.js", "NPM", "Validation"],
  //     github: "https://github.com/codingmastr/cmtk-email-validator",
  //     webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  //   },
  //   {
  //     id: 4,
  //     title: "Task Reminder Chrome Extension Tool",
  //     description:
  //       "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //     image: taskremLogo,
  //     tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //     github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //     webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  //   },
  //   {
  //     id: 5,
  //     title: "Webverse Digital",
  //     description:
  //       "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //     image: webverLogo,
  //     tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //     github: "https://github.com/codingmastr/Webverse-Digital",
  //     webapp: "https://webversedigital.com/",
  //   },
  //   {
  //     id: 6,
  //     title: "Coding Master",
  //     description:
  //       "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //     image: cmLogo,
  //     tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //     github: "https://codingmasterweb.in/",
  //     webapp: "https://codingmasterweb.in/",
  //   },
  //   {
  //     id: 7,
  //     title: "Image Search App",
  //     description:
  //       "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //     image: imagesearchLogo,
  //     tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Search-App",
  //     webapp: "https://imagsearch.netlify.app/",
  //   },
  //   {
  //     id: 8,
  //     title: "Image Background Remover",
  //     description:
  //       "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //     image: removebgLogo,
  //     tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //     github: "https://github.com/codingmastr/Image-Background-Remover",
  //     webapp: "https://removeyourbg.netlify.app/",
  //   },
  // ];  