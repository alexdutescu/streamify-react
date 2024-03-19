import { Container } from "react-bootstrap"
import SearchFilter from "./SearchFilter"
import { MoviesList } from "./MoviesList"
import { Provider } from "react-redux"
import { MoviesStore } from "../store/MoviesStore"

export const Home = () => {
    return (
        <Container>
            <Provider store={MoviesStore} >
                <SearchFilter />
                <MoviesList />
            </Provider>
        </Container>
    )
}