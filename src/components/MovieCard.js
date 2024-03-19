export const MovieCard=({movie}) => {
    return(
            <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
            </li>
    )
}