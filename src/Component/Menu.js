import {Container,Navbar,Nav} from "react-bootstrap"
import { Link } from "react-router-dom"

function Menu() {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" heigth="20px">
        <Container>
        <Navbar.Brand as={Link} to="/Home">Series</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </>

    )
}

export default Menu