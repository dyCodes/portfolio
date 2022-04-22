import { Container } from 'react-bootstrap'
import { BsArrowUp, BsFacebook, BsInstagram, BsTwitter, BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div id="contact" className="text-center">
                    <a href="#top" className="backToTop">
                        <BsArrowUp />
                    </a>
                    <h3 className="display-4 mb-5">Get In Touch</h3>

                    <div className="contact_info mb-5">
                        <p className="h5 fw-light mb-4">
                            <a href="mailto:yusufdaudu75@gmail.com">yusufdaudu75@gmail.com</a>
                        </p>
                        <p className="h5 fw-light">+2349038254560</p>
                    </div>

                    <div className="social_media p-0">
                        <a href="https://facebook.com/yusufdaudu51" target="_blank" rel="noreferrer">
                            <BsFacebook />
                        </a>
                        <a href="https://instagram.com/dyCodes" target="_blank" rel="noreferrer">
                            <BsInstagram />
                        </a>
                        <a href="https://twitter.com/dyCodes" target="_blank" rel="noreferrer">
                            <BsTwitter />
                        </a>
                        <a href="https://wa.me/2349038254560" target="_blank" rel="noreferrer">
                            <BsWhatsapp />
                        </a>
                        <a href="https://linkedin.com/in/yusuf-daudu-tech" target="_blank" rel="noreferrer">
                            <BsLinkedin />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer