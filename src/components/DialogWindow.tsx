import './DialogWindow.css'
import { Link } from 'react-router-dom'

import CloseIcon from './icons/CloseIcon'
import MaxIcon from './icons/MaxIcon'
import MinIcon from './icons/MinIcon'
import TerminalIcon from './icons/TerminalIcon'
import GithubIcon from './icons/GithubIcon'
import LinkedinIcon from './icons/LInkedinIcon'
import photo from '../assets/profile.webp'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function DialogWindow() {

    const { theme } = useContext(ThemeContext)

    return (
        <div className='dialog-window'>
            <div className='dialog-window__header'>
                <MinIcon size={20} fill={theme === 'light' ? "#D5CFC7" : "#D7D7D7"} />
                <MaxIcon size={20} fill={theme === 'light' ? "#D5CFC7" : "#D7D7D7"} />
                <CloseIcon size={20} fill={theme === 'light' ? "#D5CFC7" : "#D7D7D7"} />
            </div>
            <div className='dialog-window__container'>
                <div className='dialog-window__info'>
                    <img src={photo} alt="photo" />
                    <div className='dialog-window__name'>
                        <TerminalIcon size={51} fill={theme === 'light' ? "#000000" : "#FFFFFF"} />
                        <h1>Alexandr Dolgavin</h1>
                    </div>
                </div>
                <p>Master's degree in Cybersecurity. OSCP certified with a strong background in software engineering and cybersecurity. 4+ years of experience in cybersecurity, blockchain, and network security. Active participant in CTF and contributor to the security community.</p>
                <div className='dialog-window__more'>
                    <strong>Contact Information</strong>
                    <div className='dialog-window__details'>
                        <div className='dialog-window__contacts'>
                            <a href="https://www.linkedin.com/in/alexander-dolgavin-au/" target='_blank'>
                                <LinkedinIcon size={42} fill={theme === 'light' ? "#000000" : "#FFFFFF"} />
                            </a>
                            <a href="https://github.com/esuwu" target='_blank'>
                                <GithubIcon size={47} fill={theme === 'light' ? "#000000" : "#FFFFFF"} />
                            </a>
                            <strong>mail@mail.com</strong>
                        </div>
                        <Link to="/about">More Information</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogWindow