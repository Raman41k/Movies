import {createContext, useState} from "react";

import {Header, MovieList} from "./components";

export const ThemeContext = createContext(null)

function App() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <Header toggleTheme={toggleTheme}/>
                <MovieList/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
