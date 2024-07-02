import React, { useState } from 'react'

export type Theme = 'light' | 'dark'
interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const defaultValue: ThemeContextProps = {
  theme: 'dark',
  toggleTheme: () => {},
}

export const ThemeContext = React.createContext<ThemeContextProps>(defaultValue)

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
