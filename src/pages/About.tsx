import { useContext } from 'react'

import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Experience from '../components/Experience'
import TerminalIcon from '../components/icons/TerminalIcon'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Reward from '../components/Rewards'
import Skills from '../components/Skills'
import Volunteering from '../components/Volunteering'
import { ThemeContext } from '../hooks/useThemeContext'
import { useWindowWidth } from '../hooks/useWindowWidth'
import {
  EducationInformation,
  ExperienceInformation,
  SkillsInformation,
  ResearchInformation,
  RewardsInformation,
  CertificationsInformation,
  ProjectsInformation,
  VolunteeringInformation,
} from '../store'

function About() {
  const { theme } = useContext(ThemeContext)
  const { width } = useWindowWidth()

  function Title({ title }: { title: string }) {
    return (
      <div className="about-page__header">
        <div className="about-page__terminal-icon">
          <TerminalIcon
            size={width < 577 ? 32 : width < 769 ? 36 : 51}
            fill={theme === 'light' ? '#000000' : '#FFFFFF'}
          />
        </div>
        <h3>{title}</h3>
      </div>
    )
  }

  return (
    <>
      <div className="about-page">
        <div id="education" className="about-page__section">
          <Title title="Education" />

          <div className="about-page__education-info">
            {EducationInformation.map((item, index) => (
              <Education education={item} key={index} />
            ))}
          </div>
        </div>

        <div id="experience" className="about-page__section">
          <Title title="Experience" />

          <div className="about-page__experience-info">
            {ExperienceInformation.map((item, index) => (
              <Experience experience={item} key={index} />
            ))}
          </div>
        </div>

        <div id="certifications" className="about-page__section">
          <Title title="Certifications" />

          <div className="about-page__certifications-info">
            {CertificationsInformation.map((item, index) => (
              <Certifications certification={item} key={index} />
            ))}
          </div>
        </div>

        <div id="skills" className="about-page__section">
          <Title title="skills" />

          <div className="about-page__skills-info">
            {SkillsInformation.map((item, index) => (
              <Skills skill={item} key={index} />
            ))}
          </div>
        </div>

        <div id="research" className="about-page__section">
          <Title title="research" />

          <div className="about-page__research-info">
            {ResearchInformation.map((item, index) => (
              <Research research={item} key={index} />
            ))}
          </div>
        </div>

        <div id="rewards" className="about-page__section">
          <Title title="honors & rewards" />

          <div className="about-page__rewards-info">
            {RewardsInformation.map((item, index) => (
              <Reward reward={item} key={index} />
            ))}
          </div>
        </div>

        <div id="projects" className="about-page__section">
          <Title title="projects" />

          <div className="about-page__projects-info">
            {ProjectsInformation.map((item, index) => (
              <Projects project={item} key={index} />
            ))}
          </div>
        </div>

        <div id="volunteering" className="about-page__section">
          <Title title="volunteer experience" />

          <div className="about-page__volunteering-info">
            {VolunteeringInformation.map((item, index) => (
              <Volunteering volunteering={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
