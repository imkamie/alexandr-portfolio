import './DialogWindow.css'
import classNames from 'classnames'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import photo from '../../assets/profile.jpg'
import { ThemeContext } from '../../hooks/useThemeContext'
import { TypePhase, useTypedQualification } from '../../hooks/useTypedQualifications'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { qualifications, description, githubLink, linkedinLink, email } from '../../store'
import CloseIcon from '../icons/CloseIcon'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LInkedinIcon'
import MaxIcon from '../icons/MaxIcon'
import MinIcon from '../icons/MinIcon'
import TerminalIcon from '../icons/TerminalIcon'

function DialogWindow() {
  const { typedQualification, selectedQualification, phase, resume } =
    useTypedQualification(qualifications)
  const { width } = useWindowWidth()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="dialog-window">
      <div className="dialog-window__header">
        <MinIcon
          size={width < 769 ? 16 : 20}
          fill={theme === 'light' ? '#D5CFC7' : '#D7D7D7'}
        />
        <MaxIcon
          size={width < 769 ? 16 : 20}
          fill={theme === 'light' ? '#D5CFC7' : '#D7D7D7'}
        />
        <CloseIcon
          size={width < 769 ? 16 : 20}
          fill={theme === 'light' ? '#D5CFC7' : '#D7D7D7'}
        />
      </div>
      <div className="dialog-window__container">
        <div className="dialog-window__info">
          <img src={photo} alt="Alexandr Dolgavin's profile photo" />
          <div className="dialog-window__name">
            <div className="dialog-window__icon">
              <TerminalIcon
                size={width < 577 ? 28 : width < 769 ? 32 : width < 1024 ? 40 : 51}
                fill={theme === 'light' ? '#000000' : '#FFFFFF'}
              />
            </div>
            <h1
              onClick={resume}
              className={classNames('end-cursor', {
                ['blinking']: phase === TypePhase.Pausing,
              })}
              aria-label={selectedQualification}
            >
              {typedQualification}
            </h1>
          </div>
        </div>
        <p>{description}</p>
        <div className="dialog-window__more">
          <strong>Contact Information</strong>
          <div className="dialog-window__details">
            <address className="dialog-window__contacts">
              <a href={linkedinLink} target="_blank" rel="noreferrer noopener">
                <LinkedinIcon
                  size={width < 769 ? 22 : width < 1024 ? 36 : 42}
                  fill={theme === 'light' ? '#000000' : '#FFFFFF'}
                />
              </a>
              <a href={githubLink} target="_blank" rel="noreferrer noopener">
                <GithubIcon
                  size={width < 769 ? 27 : width < 1024 ? 41 : 47}
                  fill={theme === 'light' ? '#000000' : '#FFFFFF'}
                />
              </a>
              <a href={`mailto:${email}`}>{email}</a>
            </address>
            <Link className="dialog-window__about-link" to="/about#education">
              More Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogWindow
