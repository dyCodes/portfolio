import { Container } from 'react-bootstrap'
import { BsArrowUp, BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact" className="_contact">
            <Container>
                <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
                    <BsArrowUp />
                </div>
                <h3 className="display-4 mb-5">Get In Touch</h3>

                <div className="contact_info mb-5">
                    <p className="h5 fw-light mb-4">
                        <a href="mailto:yusufdaudu75@gmail.com">yusufdaudu75@gmail.com</a>
                    </p>
                    <p className="h5 fw-light">+2349038254560</p>
                </div>

                <div className="social_media p-0">
                    <a href="https://facebook.com/yusufdaudu51" target="_blank" rel="noopener noreferrer">
                        <BsFacebook />
                    </a>
                    <a href="https://instagram.com/dyCodes" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://twitter.com/dyCodes" target="_blank" rel="noopener noreferrer">
                        <BsTwitter />
                    </a>
                    <a href="https://github.com/dyCodes" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                    <a href="https://linkedin.com/in/yusuf-daudu-tech" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Contact