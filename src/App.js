import {createContext, useState} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";

import {Genres, Header, MovieInfo, MovieList} from "./components";

export const ThemeContext = createContext(null)

function App() {

    const {show} = useSelector(state => state.movieReducer);

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <Header toggleTheme={toggleTheme}/>
                {
                    show ? <Genres/> : null
                }
                <Routes>
                    <Route path={'/'} element={<MovieList/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;