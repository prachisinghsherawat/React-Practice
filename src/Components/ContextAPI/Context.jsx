import { createContext, useState } from "react"

const themeContext = createContext()

export const Context = ({children}) => {

    const [theme,setTheme] = useState("light")

    const ToggleTheme = () => {
        theme == "light" ? setTheme("dark") : setTheme("light")
    }

    return(
        
        <themeContext.Provider value={[{theme, ToggleTheme}]}>{children}</themeContext.Provider>
    )
}