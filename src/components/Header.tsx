import './Header.css'
import { headerSection } from '../store/index'
import { Link } from 'react-router-dom'

import { Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'

function Icon({ theme }: { theme: Theme }) {
    if (theme === 'light') return <MoonIcon size={26} />
    else return <SunIcon size={30} />
}

function Header() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <div className='header'>
            <Link to="/" className='header__section'>Home</Link>
            {headerSection.map((item, index) => (
                <Link to="/about" className='header__section' key={index}>{item}</Link>
            ))}

            <button onClick={toggleTheme} className='header__button'> <Icon theme={theme} /></button>
        </div>
    )
}

export default Header