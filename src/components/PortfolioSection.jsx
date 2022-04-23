import { useState } from "react";
import Container from "react-bootstrap/Container";
import { BsInfoCircle } from "react-icons/bs";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

const portfolioList = [
    {
        id: 0,
        title: "Meyyotivity",
        image: "/assets/works/meyyotivity.jpg",
        desc: "An eCommerce website for Meyyotivity (Unisex Clothing Brand). I developed a custom wordpress theme, setup wooCommerce, etc.",
        url: "https://dycodes.github.io/photo-gallery-reactjs/",
        techStack: "SCSS, Bootstrap, PHP, WordPress",
    },
    {
        id: 1,
        title: "Proto Investment",
        image: "/assets/works/proto.jpg",
        desc: "Crypto investment website created with Laravel which include admin dashboard to manage user, deposits, withdraws, etc.",
        demo: "https://dycodes.github.io/photo-gallery-reactjs/",
        techStack: "SCSS, Bootstrap, jQuery, PHP, Laravel",
        figma: "https://dycodes.github.io/photo-gallery-reactjs/",
    },
    {
        id: 2,
        title: "My Portfolio",
        image: "/assets/works/portfolio.jpg",
        desc: "My personal portfolio website created with SCSS, Bootstrap and ReactJs.",
        url: "https://dycodes.github.io/photo-gallery-reactjs/",
        techStack: "ReactJS, SCSS, Bootstrap, React Router Dom",
        github: "https://dycodes.github.io/photo-gallery-reactjs/",
    },
    {
        id: 3,
        title: "Photo Gallery",
        image: "/assets/works/photo-gallery-reactjs.jpg",
        desc: "A photo gallery web app created with ReactJs and unsplash images API.",
        demo: "https://dycodes.github.io/photo-gallery-reactjs/",
        techStack: "ReactJs, MaterialUI",
        github: "https://dycodes.github.io/photo-gallery-reactjs/",
    },
    {
        id: 4,
        title: "Florintech Computer College",
        image: "/assets/works/florintechcomputercollege.jpg",
        desc: "I designed and developed a school management system, created an API for verifing student certificate, etc.",
        url: "https://dycodes.github.io/photo-gallery-reactjs/",
        techStack: "Bootstrap, jQuery, MySQL, PHP",
    },
    {
        id: 5,
        title: "EventPlanner",
        image: "/assets/works/eventplanner.jpg",
        desc: "Website template for Wedding planner/Event management company.",
        demo: "https://dycodes.github.io/photo-gallery-reactjs/",
        techStack: "SCSS, Bootstrap, JavaScript",
        github: "https://dycodes.github.io/photo-gallery-reactjs/",
    },
];

const PortfolioSection = () => {
    const [modal, setModal] = useState({ id: 0, show: false });

    const handleShowModal = (idx) => setModal({ id: idx, show: true });
    const handleCloseModal = () => setModal({ id: 0, show: false });

    return (
        <section id="portfolio" className="_portfolio">
            <SectionHeading title={"portfolio"} sub={"Some of my previous works"} />
            <Container>
                <div className="row g-4">
                    {portfolioList.map((item) => {
                        return (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card" onClick={() => handleShowModal(item.id)}>
                                    <div className="_image">
                                        <img src={item.image} alt={item.title} />
                                        <div className="_overlay">
                                            <BsInfoCircle className="btn" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

            <ProjectModal
                modal={modal}
                handleCloseModal={handleCloseModal}
                portfolioList={portfolioList}
            />
        </section>
    );
};

export default PortfolioSection;
