import { Container } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="fixed-bottom navbar-dark bg-dark">
            <Container>
                <span className="text-light">Place sticky footer content here.</span>
            </Container> 
        </footer>
    );
}