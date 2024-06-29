import './Header.css'
import { headerSection } from '../store/index'
import { Link } from 'react-router-dom'

import { Theme, ThemeContext } from './ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'
import MenuIcon from './icons/MenuIcon'

import classNames from 'classnames'


function Header() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    const [open, setOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const menuRef = React.createRef<HTMLButtonElement>()

    useEffect(() => {
        const handler = (e: MouseEvent | TouchEvent) => {
            if (!menuRef.current?.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        window.addEventListener("mousedown", handler)
        window.addEventListener("touchstart", handler)

        return () => {
            window.removeEventListener('mousedown', handler)
            window.removeEventListener("touchstart", handler)
        }
    })

    useEffect(() => {
        const windowSizeHandler = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", windowSizeHandler)

        return () => {
            window.removeEventListener("resize", windowSizeHandler)
        }
    })

    function Icon({ theme }: { theme: Theme }) {
        if (theme === 'light') return <MoonIcon size={width < 1024 ? 18 : 26} />
        else return <SunIcon size={width < 1024 ? 20 : 30} />
    }


    return (
        <div className='header'>
            <button ref={menuRef} onClick={() => { setOpen(!open) }} className='header__menu-button'> <MenuIcon size={24} /> </button>

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