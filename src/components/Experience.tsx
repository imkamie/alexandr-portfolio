import './Experience.css'
import { useContext } from 'react'

import { ExperienceInfo } from '../store'

import TerminalIcon from './icons/TerminalIcon'
import { ThemeContext } from './ThemeContext'
import { useWindowWidth } from './useWindowWidth'

function Experience({ experience }: { experience: ExperienceInfo }) {
  const { theme } = useContext(ThemeContext)
  const { width } = useWindowWidth()

  return (
    <div className="experience-info">
      <div className="experience-info__general">
        <div className="experience-info__position">{experience.position}</div>
        <div className="experience-info__dates">{experience.dates}</div>
      </div>
      <div className="experience-info__location">{experience.locatoin}</div>
      <ul className="experience-info__contributions">
        {experience.contributions.map((item, index) => (
          <li className="experience-info__contribution" key={index}>
            <div className="experience-info__icon">
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

export default Experience
