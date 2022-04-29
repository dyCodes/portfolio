import { Container } from 'react-bootstrap'
import AboutImage from '../assets/img/about.svg'

const About = () => {
    return (
        <section id="about" className="_about">
            <Container>
                <div className="row flex-lg-row _flex_center justify-content-lg-between g-5" >
                    <div data-aos="fade-up" className="col-lg-7">
                        <div className="section_heading mb-3">
                            <h2 className="_heading h1">About Me</h2>
                        </div>
                        <p className="about_me">
                            I'm a 19-year old web developer from Lagos, Nigeria. I am currently pursuing a degree in Computer Science at Lagos State University. I have a strong passion for programming and writing clean, well organized code.
                            <br /> <br />
                            I enjoy both the creative process of transforming UI designs into accessible web apps and the logical thinking behind creating the functionality of a web application.

                            <b> Skilled</b> in SCSS, Bootstrap, JavaScript, ReactJS, jQuery, MySQL, PHP, WordPress Development and proficient with tools like Figma, Git and PhotoShop.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-md-8 col-lg-5 hero_image px-md-4">
                        <img src={AboutImage} className="img-fluid" alt='About' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About