import { Modal } from 'react-bootstrap'
import { BsArrowRight } from "react-icons/bs";


const ProjectModal = ({ modal, handleCloseModal, portfolioData }) => {
    let project = portfolioData[modal.id];

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
                project.links.map(item => <Button key={item.text} link={item.url} text={item.text} />)
            }
        </div>
    )
}

const Button = ({ link, text }) => {
    let btnClass = 'btn-success';

    // Set Button Background color
    switch (text) {
        case 'Demo':
            btnClass = 'btn-primary';
            break;
        case 'GitHub':
            btnClass = 'btn-secondary';
            break;
        // no default
    }

    return (
        <a href={link} className={'btn ' + btnClass} target="_blank" rel="noreferrer">{text} <BsArrowRight /></a>
    )
}

export default ProjectModal