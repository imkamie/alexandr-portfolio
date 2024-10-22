import './Skills.css'
import { useContext } from 'react'

import { ThemeContext } from '../../hooks/useThemeContext'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { SkillsInfo } from '../../types'
import TerminalIcon from '../icons/TerminalIcon'

function Skills({ skill }: { skill: SkillsInfo }) {
  const { theme } = useContext(ThemeContext)
  const { width } = useWindowWidth()

  return (
    <div className="skills-info">
      <div className="skills-info__group">{skill.skillsGroup}</div>

      <div className="skills-info__skills">
        {skill.skills.map((item, index) => (
          <span className="skills-info__skill" key={index}>
            <div className="skills-info__icon">
              <TerminalIcon
                size={width < 577 ? 16 : width < 769 ? 18 : 20}
                fill={theme === 'light' ? '#4b4b4b' : '#d7d7d7'}
              />
            </div>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
