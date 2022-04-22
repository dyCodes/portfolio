import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsList } from "react-icons/bs";


const Header = () => {
    return (
        <header id="header">
            <Navbar variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="logo.png" alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar"
                        children={<BsList />} />

                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className='active'>Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header