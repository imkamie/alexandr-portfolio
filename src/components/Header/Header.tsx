import './Header.css'
import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Theme, ThemeContext } from '../../hooks/useThemeContext'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { headerSection } from '../../store/index'
import MenuIcon from '../icons/MenuIcon'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const { width } = useWindowWidth()
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ''
      headerSection.forEach((section) => {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 160) {
          currentSection = section
        }
      })
      setActiveSection(currentSection)
    }

    // Set the active section based on the URL hash when the component mounts or when the location changes
    const handleHashChange = () => {
      const hash = location.hash.replace('#', '')
      if (headerSection.includes(hash)) {
        setActiveSection(hash)
      } else {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleHashChange() // Check hash on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  const menuRef = React.createRef<HTMLButtonElement>()

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    window.addEventListener('mousedown', handler)
    window.addEventListener('touchstart', handler)

    return () => {
      window.removeEventListener('mousedown', handler)
      window.removeEventListener('touchstart', handler)
    }
  })

  function Icon({ theme }: { theme: Theme }) {
    if (theme === 'light') return <MoonIcon size={width < 1024 ? 18 : 26} />
    else return <SunIcon size={width < 1024 ? 20 : 30} />
  }

  return (
    <header className="header">
      <button
        ref={menuRef}
        onClick={() => {
          setOpen(!open)
        }}
        className="header__menu-button"
      >
        {' '}
        <MenuIcon size={24} />{' '}
      </button>

      <nav>
        <ul
          className={classNames('header__list', {
            ['active']: open,
            ['inactive']: !open,
          })}
        >
          <Link
            to="/"
            className={classNames('header__item', {
              ['active-section']: location.pathname === '/',
            })}
          >
            Home
          </Link>
          {headerSection.map((item, index) => (
            <Link
              to={`/about#${item}`}
              className={classNames('header__item', {
                ['active-section']:
                  location.pathname === '/about' && activeSection === item,
              })}
              key={index}
            >
              {item}
            </Link>
          ))}
        </ul>
      </nav>

      <nav className="header__nav-desctop">
        <Link
          to="/"
          className={classNames('header__section', {
            ['active-section']: location.pathname === '/',
          })}
        >
          Home
        </Link>
        {headerSection.map((item, index) => (
          <Link
            to={`/about#${item}`}
            className={classNames('header__section', {
              ['active-section']:
                location.pathname === '/about' && activeSection === item,
            })}
            key={index}
          >
            {item}
          </Link>
        ))}
      </nav>

      <button onClick={toggleTheme} className="header__theme-button">
        {' '}
        <Icon theme={theme} />{' '}
      </button>
    </header>
  )
}

export default Header
