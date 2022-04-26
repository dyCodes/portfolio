import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { BsList } from "react-icons/bs";

const Header = () => {
    return (
        <header id="header">
            <Navbar variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="logo.png" alt="DY Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar" children={<BsList />} />

                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Link className='nav-link'
                                activeClass="active"
                                duration={200}
                                spy={true}
                                smooth='easeInQuint'
                                to="hero">Home</Link>

                            <Link className="nav-link"
                                activeClass="active"
                                hashSpy={true}
                                duration={200}
                                spy={true}
                                smooth='easeInQuint'
                                to="about">About</Link>

                            <Link className="nav-link"
                                activeClass="active"
                                hashSpy={true}
                                duration={400}
                                spy={true}
                                smooth='easeInQuint'
                                to="portfolio">Portfolio</Link>

                            <Link className="nav-link"
                                activeClass="active"
                                hashSpy={true}
                                duration={500}
                                spy={true}
                                smooth='easeInQuint'
                                to="contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header