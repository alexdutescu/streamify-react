import { Card } from "react-bootstrap"

export const MovieCard=({movie}) => {
    // return(
    //         <li key={movie.imdbID}>
    //             <h3>{movie.Title}</h3>
    //             <p>Year: {movie.Year}</p>
    //             <p>Type: {movie.Type}</p>
    //         </li>
    // )
    return (
            <Card className="col" style={{ maxWidth: '20em', minWidth: '10em', backgroundColor: 'rgba(105, 151, 122, .5)' }}>
                <Card.Body className="text-center">
                    <Card.Img variant="top" style={{ width: '15em', height: '20em' }} src={movie.Poster}/>
                    <Card.Title><h1>{movie.Tile}</h1></Card.Title>
                    <Card.Text>
                        <span><b>Year: </b> </span>{movie.Year}<br />
                        <span><b>Type: </b> </span>{movie.Type}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
    )
}