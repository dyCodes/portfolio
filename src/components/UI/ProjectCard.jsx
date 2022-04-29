import { BsInfoCircle } from "react-icons/bs";

const ProjectCard = ({ project, handleShowModal }) => {
    return (
        <div className="card" data-aos="fade-up" onClick={() => handleShowModal(project.id)}>
            <div className="_image">
                <img src={project.image} alt={project.title} />
                <div className="_overlay">
                    <BsInfoCircle className="btn" />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
            </div>
        </div>
    )
}

export default ProjectCard