import { Project } from "./Project";
import LogoW from "../../assets/images/WOLF.png";
import Gnosis_Logo from "../../assets/images/Gnosis_logo.png";
import FINT_logo from "../../assets/images/FINT.png";
import LUXER_logo from "../../assets/images/Luxer.png";
import Notes_Logo from "../../assets/images/NoteTakingApp.jpeg";

//TODO refactor each project's info into an object.

export const projectsDB: Project[] = [
  {
    id: 1,
    img: Notes_Logo,
    name: 'Notes Taking App',
    stack: ['Node JS', 'Express', 'React', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'SASS'],
    description: "A classic of the Web Development. This is a fully deployed Fullstack Web Project that features a Backend server made with Node JS and its framework Express JS. Functioning over a Relational Database (PostgreSQL) connected with Prisma ORM. And the frontend UI is made with React JS.At the moment, you can find the source code in my GitHub",
    role: 'Fullstack Developer - Node JS | Express JS | React | TypeScript',
    repo: 'https://lukeslz.github.io/notes_app/',
    live: 'https://lukeslz.github.io/notes_app/'
  },
  {
    id: 2,
    img: Gnosis_Logo,
    name: 'Gnosis',
    stack: ['React JS', 'TypeScript', 'SASS', 'Tailwind'],
    description: "With the premise of 'Helping people in their paths to learn, improve and practice new skills', Gnosis starts as project to create an user-friendly and intuitive web application that works as a knowledge Host and Community Hub. The main idea was presented with a working demo.",
    role: 'Frontend Developer - React JS | TypeScript',
    repo: 'https://github.com/LukeSlz/FINT_Frontend',
  },
  {
    id: 3,
    img: FINT_logo,
    name: 'FINT FRONTEND',
    stack: ['Angular', 'TypeScript', 'SASS', 'Bootstrap', 'API Consumption'],
    description: "Developed as solution in response to a requeriment from Proteccion S.A. A leading financial company. FINT is an innovative proposal for a Web Educational Platform designed to provide comprehensive financial education to people from diverse backgrounds and contexts. FINT aims to offer valuable insights on financial literacy, investment strategies, and smart savings tips. \n The project has undergone extensive market research, paving the way for its well-structured initial proposal. Currently, the initial proposal was focused on developing the platform's frontend, ensuring a user-friendly interface and an engaging learning experience.",
    role: 'Frontend Developer - Angular | TypeScript',
    repo: 'https://github.com/LukeSlz/FINT_Frontend',
  },
  {
    id: 4,
    img: FINT_logo,
    name: 'FINT BACKEND',
    stack: ['Java', 'Spring', 'Spring Boot', 'JWT', 'Endpoints'],
    description: "Following the project's success of the Angular frontend solution, the responsibility of architecting and implementing the backend using Java Spring Boot was assumed. The backend with Java Spring Boot & MVC was developed. Integrated authentication with Spring Security, established a robust database schema, and implemented business logic to seamlessly connect the frontend with the backend.",
    role: 'FullStack Developer - Angular | Java (SDK 18) Spring Boot',
    repo: 'https://github.com/LukeSlz/FINT_Backend',
  },
  {
    id: 5,
    img: LUXER_logo,
    name: 'LuxerStudio Project',
    stack: ['React JS', 'Node JS', 'Express JS', 'JavaScript', 'MySQL', 'Sequelize', 'HTML5', 'CSS3', 'APIs'],
    description: "As Lead Full Stack Developer, I led a cross-functional team through the planning and development phases of a luxury furniture e-commerce platform within a bootcamp setting. Leveraging HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, Sequelize, and GitHub, a functional web application was developed. From crafting responsive user interfaces and ensuring data security to managing team collaboration and overseeing testing, my role was pivotal in advancing the project toward completion. This undertaking underscores my proficiency in both technical implementation and strategic project management.",
    role: 'FullStack Developer - Angular / TypeScript',
    repo: 'https://github.com/LukeSlz/Grupo_1_Luxer',
  },
  {
    id: 6,
    img: LogoW,
    name: 'MercadoLiebre',
    stack: ['Node JS', 'HTML5', 'CSS3'],
    description: "As an early step in my journey as a web developer, I undertook the task of creating a basic but responsive clone of a landing page from a prominent e-commerce website, inspired by MercadoLibre. Utilizing HTML and CSS, I meticulously reconstructed the layout, design elements, and styling cues of the original landing page. This project not only provided hands-on experience in structuring content and applying CSS for visual appeal but also marked a significant milestone in my development journey. By taking on this initiative, I showcased my determination to learn and apply new skills independently, laying the foundation for more complex projects in my portfolio.",
    role: 'Frontend Developer',
    repo: 'https://github.com/LukeSlz/MercadoLiebre_DH',
  },

]