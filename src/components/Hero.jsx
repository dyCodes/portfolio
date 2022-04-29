import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import HeroImage from '../assets/img/hero.svg'

const Hero = () => {
    return (
        <section id="hero" className="_hero">
            <Container>
                <div className="row flex-lg-row-reverse _flex_center justify-content-lg-between g-5">
                    <div data-aos="fade-left" data-aos-delay="400"
                        className="hero_image col-10 col-md-6 col-lg-5 p-lg-5 mb-lg-4">
                        <img src={HeroImage} className="img-fluid" alt='Hero' />
                    </div>

                    <div data-aos="fade-right" data-aos-delay="400"
                        data-aos-offset="100" className="hero_text col-lg-6 mb-5 mb-lg-2 pt-lg-3">
                        <HeroText />
                    </div>
                </div>
            </Container>
        </section>
    )
}

const HeroText = () => {
    return (
        <>
            <div className="_header">
                <h1 className="_heading mb-2">
                    Hi, I'm Yusuf Daudu
                </h1>
                <h3 className="_sub_heading fw-normal">Full-Stack Developer</h3>
            </div>

            <p className="desc_text mb-4 fw-light">
                I'm a passionate individual with 2+ years experience developing high quality web applications using SCSS, BOOTSTRAP, jQuery, JavaScript, PHP & WordPress. I am highly motivated and always striving to improve.
            </p>

            <div className="_flex cta">
                <a href="assets/Resume-Yusuf-Daudu.pdf" download
                    className="btn btn-light me-4">Download CV
                </a>
                <Link to="contact" duration={400} smooth={true}
                    className="btn btn-outline-light d-none d-md-block">Contact Me
                </Link>
            </div>
        </>
    )
}

export default Hero