const SectionHeading = ({ title, sub }) => {
    return (
        <div className="section_heading">
            <h2 className="title_">{title}</h2>
            {sub && <h3 className="heading_sub">{sub}</h3>}
        </div>
    )
}

export default SectionHeading