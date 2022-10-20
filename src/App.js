import {createContext, useState} from "react";

import {Genres, Header, MovieList} from "./components";
import {useSelector} from "react-redux";

export const ThemeContext = createContext(null)

function App() {

    //https://api.themoviedb.org/3/discover/movie?with_genres=id

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
        </ThemeContext.Provider>
    );
}

export default App;
