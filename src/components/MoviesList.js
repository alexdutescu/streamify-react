import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard"

export const MoviesList = () => {
    const movies = useSelector(state=>state.movies);
    console.log(`Component MoviesList.movies: ${movies}`) 
    return(
        <div>
            <h2>Movies</h2>
            <ul>
            {movies != null && movies.map((movie) => (
                    //console.log(movie) 
                    <MovieCard key={movie.imdbID} movie={movie} />
                )
            )}
            </ul>
        </div>
    )
}
