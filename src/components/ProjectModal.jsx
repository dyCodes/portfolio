import { Modal } from 'react-bootstrap'
import { BsArrowRight } from "react-icons/bs";


const ProjectModal = ({ modal, handleCloseModal, portfolioList }) => {
    let project = portfolioList[modal.id];

    return (
        <Modal show={modal.show} onHide={handleCloseModal} centered >
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p className="desc">{project.desc}</p>
                <p className="tech_stack"><b>Technologies Used: </b> {project.techStack}.</p>
            </Modal.Body>

            <Modal.Footer>
                <ProjectLinks project={project} />
            </Modal.Footer>
        </Modal>
    )
}

const ProjectLinks = ({ project }) => {
    return (
        <div className="_flex _links">
            {
                project.url && <a href={project.url} target="_blank"
                    rel="noreferrer">Visit Website <BsArrowRight /></a>
            }
            {
                project.demo && <a href={project.demo} target="_blank"
                    rel="noreferrer">Demo <BsArrowRight /></a>
            }
            {
                project.github && <a href={project.github} target="_blank"
                    rel="noreferrer">GitHub <BsArrowRight /></a>
            }
            {
                project.figma && <a href={project.figma} target="_blank"
                    rel="noreferrer">Figma <BsArrowRight /></a>
            }
        </div>
    )
}

export default ProjectModal