import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard"

export const MoviesList = () => {
    const movies = useSelector(state=>state.movies);
    console.log(`Component MoviesList.movies: ${movies}`) 
    return(
        <div>
            <h2>Movies</h2>
            <div className="row row-cols-2">
                {movies != null && movies.length > 1 && movies.map((movie) => (
                        //console.log(movie) 
                        <MovieCard className="col" key={movie.imdbID} movie={movie} />
                    )
                )}
            </div>
        </div>
    )
}
