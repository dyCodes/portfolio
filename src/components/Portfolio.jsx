import { useState } from "react";
import Container from "react-bootstrap/Container";
import portfolioData from "../portfolioData";

import ProjectModal from "./UI/ProjectModal";
import SectionHeading from "./UI/SectionHeading";
import ProjectCard from "./UI/ProjectCard";

const Portfolio = () => {
    const [modal, setModal] = useState({ id: 0, show: false });
    const handleShowModal = (idx) => setModal({ id: idx, show: true });
    const handleCloseModal = () => setModal({ id: 0, show: false });

    return (
        <section id="portfolio" className="_portfolio">
            <SectionHeading title={"portfolio"} sub={"Some of my previous works"} />
            <Container>
                <div className="row g-4">
                    {portfolioData.map((item) => {
                        return (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                <ProjectCard project={item} handleShowModal={handleShowModal} />
                            </div>
                        );
                    })}
                </div>
            </Container>

            <ProjectModal
                modal={modal}
                handleCloseModal={handleCloseModal}
                portfolioData={portfolioData}
            />
        </section>
    );
};

export default Portfolio;
