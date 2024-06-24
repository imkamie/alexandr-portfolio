import './Header.css'
import { headerSection } from '../store/index'
import { Link } from 'react-router-dom'

import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function Header() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <div className='header'>
            <Link to="/" className='header__section'>Home</Link>
            {headerSection.map((item, index) => (
                <Link to="/about" className='header__section' key={index}>{item}</Link>
            ))}

            <button onClick={toggleTheme}> Switch to {theme === 'light' ? 'dark' : 'light'} mode </button>
        </div>
    )
}

export default Header