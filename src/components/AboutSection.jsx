import { Container } from 'react-bootstrap'
import AboutImage from '../assets/img/about.svg'

const AboutSection = () => {
    return (
        <section id="about" className="_about">
            <Container>
                <div className="row flex-lg-row _flex_center justify-content-lg-between g-5">
                    <div className="col-lg-7">
                        <div className="section_heading mb-3">
                            <h2 className="_heading h1">Here's my story</h2>
                        </div>
                        <p className="about_me">
                            Hi, I'm Yusuf Daudu, a passionate FrontEnd developer from Lagos, Nigeria. I've been building stuff on the web since 2019, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.
                            <br />
                            <br />
                            I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.
                            <br />
                            Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.
                            I also love doing open source development, I actively maintain various notable open source projects with over,
                        </p>
                    </div>

                    <div className="col-lg-5 hero_image px-md-4">
                        <img src={AboutImage} className="img-fluid" alt='Hero' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutSection