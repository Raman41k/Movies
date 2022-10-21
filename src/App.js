import {createContext, useState} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";

import {Genres, Header, MovieList} from "./components";
import {MovieInfo} from "./pages";

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
                <MovieList/>
            </div>

            <Routes>
                <Route path={'/movieInfo/:id'} element={<MovieInfo/>}/>
            </Routes>

        </ThemeContext.Provider>
    );
}

export default App;
