import { Container } from "react-bootstrap";
import SearchFilter from "./SearchFilter";
import { MoviesList } from "./MoviesList";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import loadingAnimation from "../lottie/loading.json";

export const Home = () => {
    const loading = useSelector(state=>state.loading);
    const error = useSelector(state => state.error);
    return (
        <Container>
            <SearchFilter />
            {loading && <Lottie animationData={loadingAnimation} loop={true} style={{width: 200, height:200}} />}
            {error && <p style={{fontSize: 12, color:"red"}}>{error}</p>}
            <MoviesList />
        </Container>
    )
}