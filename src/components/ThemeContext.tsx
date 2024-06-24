import React, { useState } from "react";

type Theme = "light" | "dark";
interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const defaultValue: ThemeContextProps = {
    theme: "light",
    toggleTheme: () => { },
};

export const ThemeContext = React.createContext<ThemeContextProps>(defaultValue);

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};