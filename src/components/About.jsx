import { Container } from 'react-bootstrap'
import AboutImage from '../assets/img/yusuf-photo.jpg'

const About = () => {
    return (
        <section id="about" className="_about">
            <Container>
                <div className="row flex-lg-row mt-1 mb-4 _flex_center justify-content-lg-between g-5" >
                    <div data-aos="fade-up" className="col-lg-7">
                        <div className="section_heading mb-3">
                            <h2 className="_heading h1">About Me</h2>
                        </div>
                        <p className="about_me pe-lg-4">
                            <p>
                                I'm a full-stack web developer with a passion for programming and solving technical problems. I am currently pursuing a degree in Computer Science at Lagos State University.
                            </p>

                            <p className='mt-3'>
                                {/* I have a good understanding of the fundamentals of web development and I am always eager to learn new technologies and improve my skills. */}
                                I enjoy both the creative process of transforming UI designs into accessible web apps and the logical thinking behind creating the functionality of a web application.
                            </p>

                            <p className='mt-3'>
                                <b>I'm Skilled</b> in HTML, CSS, SCSS, Bootstrap, JavaScript, ReactJS, jQuery, MySQL, PHP, WordPress Development and proficient with tools like Figma, Git and PhotoShop.
                            </p>
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-md-8 col-lg-5 px-5 px-md-4">
                        <div className="about_image">
                            <img src={AboutImage} className="img-fluid" alt='Yusuf Daudu' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About