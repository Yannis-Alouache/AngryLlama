import {
    Navbar,
    Container,
} from "react-bootstrap";

function MyNavbar() {
    return (
        <>
            <Navbar bg="transparent" className="pt-5" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="/">ANGRYLLAMA</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;