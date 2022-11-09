import { Container } from 'react-bootstrap'
import { BsArrowUp, BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact" className="_contact">
            <Container>
                <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
                    <BsArrowUp />
                </div>
                <h3 className="display-4 mb-5">Get In Touch</h3>

                <div className="contact_info pb-4">
                    <div className="h5 fw-light mb-4">
                        <a href="mailto:yusufdaudu75@gmail.com">yusufdaudu75@gmail.com</a>
                    </div>
                    {/* <p className="h5 fw-light">+2348129707106</p> */}
                </div>

                <div className="social_media p-0">
                    <a href="https://facebook.com/yusufdaudu51" target="_blank" rel="noopener noreferrer">
                        <BsFacebook />
                    </a>
                    <a href="https://instagram.com/dyCodes" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=2349038254560" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp />
                    </a>
                    <a href="https://twitter.com/dyCodes" target="_blank" rel="noopener noreferrer">
                        <BsTwitter />
                    </a>
                    <a href="https://linkedin.com/in/yusuf-daudu-tech" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/dyCodes" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Contact