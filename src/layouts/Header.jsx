import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header id="header" className="py-2">
            <Navbar variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="logo.png" alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar" />

                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header