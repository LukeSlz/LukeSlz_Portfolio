import { Project } from "./Project";
import LogoW from "../../assets/images/WOLF.png";
import FINT_logo from "../../assets/images/FINT.png";
import LUXER_logo from "../../assets/images/Luxer.png";

export const projectsDB: Project[] = [
  {
    id: 1,
    img: FINT_logo,
    name: 'FINT FRONTEND',
    stack: ['Angular', 'TypeScript', 'SASS', 'Bootstrap', 'API Consumption'],
    description: "Developed as solution in response to a requeriment from Proteccion S.A. A leading financial company. FINT is an innovative proposal for a Web Educational Platform designed to provide comprehensive financial education to people from diverse backgrounds and contexts. FINT aims to offer valuable insights on financial literacy, investment strategies, and smart savings tips. \n The project has undergone extensive market research, paving the way for its well-structured initial proposal. Currently, the initial proposal was focused on developing the platform's frontend, ensuring a user-friendly interface and an engaging learning experience.",
    role: 'Frontend Developer - Angular | TypeScript',
    repo: 'https://github.com/LukeSlz/FINT_Frontend',
  },
  {
    id: 2,
    img: FINT_logo,
    name: 'FINT BACKEND',
    stack: ['Java', 'Spring', 'Spring Boot', 'JWT', 'Endpoints'],
    description: "Following the project's success of the Angular frontend solution, the responsibility of architecting and implementing the backend using Java Spring Boot was assumed. The backend with Java Spring Boot & MVC was developed. Integrated authentication with Spring Security, established a robust database schema, and implemented business logic to seamlessly connect the frontend with the backend.",
    role: 'FullStack Developer - Angular | Java (SDK 18) Spring Boot',
    repo: 'https://github.com/LukeSlz/FINT_Backend',
  },
  {
    id: 3,
    img: LUXER_logo,
    name: 'LuxerStudio Project',
    stack: ['React JS', 'Node JS', 'Express JS', 'JavaScript', 'MySQL', 'Sequelize', 'HTML5', 'CSS3', 'APIs'],
    description: "As Lead Full Stack Developer, I led a cross-functional team through the planning and development phases of a luxury furniture e-commerce platform within a bootcamp setting. Leveraging HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, Sequelize, and GitHub, a functional web application was developed. From crafting responsive user interfaces and ensuring data security to managing team collaboration and overseeing testing, my role was pivotal in advancing the project toward completion. This undertaking underscores my proficiency in both technical implementation and strategic project management.",
    role: 'FullStack Developer - Angular / TypeScript',
    repo: 'https://github.com/LukeSlz/Grupo_1_Luxer',
  },
  {
    id: 4,
    img: LogoW,
    name: 'MercadoLiebre',
    stack: ['Node JS', 'HTML5', 'CSS3'],
    description: "As an early step in my journey as a web developer, I undertook the task of creating a basic but responsive clone of a landing page from a prominent e-commerce website, inspired by MercadoLibre. Utilizing HTML and CSS, I meticulously reconstructed the layout, design elements, and styling cues of the original landing page. This project not only provided hands-on experience in structuring content and applying CSS for visual appeal but also marked a significant milestone in my development journey. By taking on this initiative, I showcased my determination to learn and apply new skills independently, laying the foundation for more complex projects in my portfolio.",
    role: 'Frontend Developer',
    repo: 'https://github.com/LukeSlz/MercadoLiebre_DH',
  },

]