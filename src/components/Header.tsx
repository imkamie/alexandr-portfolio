import './Header.css'
import { headerSection } from '../store/index'
import { Link } from 'react-router-dom'

import { Theme, ThemeContext } from './ThemeContext'
import { useContext, useEffect, useState } from 'react'

import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'
import MenuIcon from './icons/MenuIcon'

import classNames from 'classnames'

function Icon({ theme }: { theme: Theme }) {
    if (theme === 'light') return <MoonIcon size={26} />
    else return <SunIcon size={30} />
}

function Header() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handler = () => {
            setOpen(false)
        }

        document.addEventListener("mousedown", handler)
    })

    return (
        <div className='header'>
            <button onClick={() => { setOpen(!open) }} className='header__menu-button'> <MenuIcon size={24} /> </button>

            <ul className={classNames('header__list', { ['active']: open, ['inactive']: !open })}>
                <Link to="/" className='header__item'>Home</Link>
                {headerSection.map((item, index) => (
                    <Link to="/about" className='header__item' key={index}>{item}</Link>
                ))}
            </ul>

            <Link to="/" className='header__section'>Home</Link>
            {headerSection.map((item, index) => (
                <Link to="/about" className='header__section' key={index}>{item}</Link>
            ))}

            <button onClick={toggleTheme} className='header__theme-button'> <Icon theme={theme} /> </button>
        </div>
    )
}

export default Header