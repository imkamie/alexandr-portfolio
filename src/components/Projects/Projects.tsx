import './Projects.css'
import { useContext } from 'react'

import { ThemeContext } from '../../hooks/useThemeContext'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { ProjectsInfo } from '../../types'
import GithubIcon from '../icons/GithubIcon'
import TerminalIcon from '../icons/TerminalIcon'

function Projects({ project }: { project: ProjectsInfo }) {
  const { theme } = useContext(ThemeContext)
  const { width } = useWindowWidth()

  return (
    <div className="projects-info">
      <div className="projects-info__general">
        {project.hasLink ? (
          <div>
            <a
              className="project-info__project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.name}
              <div>
                <GithubIcon size={24} fill={theme === 'light' ? '#000000' : '#ffffff'} />
              </div>
            </a>
          </div>
        ) : (
          <span className="project-info__project">{project.name}</span>
        )}
        <div className="projects-info__dates">{project.date}</div>
      </div>
      <ul className="projects-info__contributions">
        {project.description.map((item, index) => (
          <li className="projects-info__contribution" key={index}>
            <div className="projects-info__icon">
              <TerminalIcon
                size={width < 577 ? 16 : width < 769 ? 18 : 20}
                fill={theme === 'light' ? '#4b4b4b' : '#d7d7d7'}
              />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
