import { Project } from "./Project";
import LogoW from '../../assets/images/WOLF.png';

export const mockProjects: Project[] = [
  {
    id: 1,
    img: LogoW,
    name: 'Project 1',
    stack: ['React', 'TypeScript'],
    description: 'This is project 1.',
    role: 'Web Developer',
    repo: 'url',
  },
  {
    id: 2,
    img: LogoW,
    name: 'Project 2',
    stack: ['Angular', 'JavaScript'],
    description: 'This is project 2.',
    role: 'Frontend Developer',
    repo: 'url',
  },
]