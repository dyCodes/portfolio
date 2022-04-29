import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { BsList } from "react-icons/bs";
import Logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header id="header">
            <Navbar variant="dark" collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand href={process.env.PUBLIC_URL}>
                        <img src={Logo} alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar" children={<BsList />} />

                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto" activeKey="">
                            <Nav.Link as={Link} eventKey={1}
                                activeClass="active"
                                duration={200}
                                spy={true}
                                smooth='easeInQuint'
                                to="hero">Home
                            </Nav.Link>

                            <Nav.Link as={Link} eventKey={2}
                                activeClass="active"
                                hashSpy={true}
                                duration={200}
                                spy={true}
                                smooth='easeInQuint'
                                to="about">About
                            </Nav.Link>

                            <Nav.Link as={Link} eventKey={3}
                                activeClass="active"
                                hashSpy={true}
                                duration={400}
                                spy={true}
                                smooth='easeInQuint'
                                to="portfolio">Portfolio
                            </Nav.Link>

                            <Nav.Link as={Link} eventKey={4}
                                activeClass="active"
                                hashSpy={true}
                                duration={500}
                                spy={true}
                                smooth='easeInQuint'
                                to="contact">Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header