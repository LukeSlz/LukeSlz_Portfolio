import { useEffect, useState } from 'react';
import './projects.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { Project } from './Project';
import { mockProjects } from './mockData';

interface ProjectProps {
  projects: Project[];
}

const Projects: React.FC<ProjectProps | any> = ({ projects }) => {


  const [letterClass, setLetterClass] = useState('text-animate');
  const projectsText: string = "Projects";
  const projectsArr: string[] = projectsText.split('');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);



  return (
    <>
      <div className="container projects-page">
        <div className="text-zone projects-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={projectsArr}
              idx={10}
            />
          </h1>
          <p>
            Here is a concise compilation of key projects I have contributed to as a web developer. Each project includes descriptions, the tech stack utilized, <span>the source code repository</span>, my main role and functions, insights, obstacles, learnings, work process, comments, and more.
          </p>
          <p id='note'>
            ***Please note that this section of the portfolio is a work in progress, and certain projects may not be deployed due to project scope.
          </p>
        </div>
        <div className="projects-container">
          <p>{mockProjects[1].name}</p>
        </div>
      </div>
    </>
  )


}

export default Projects;