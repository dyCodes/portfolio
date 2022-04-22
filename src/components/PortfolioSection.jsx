import { Container } from 'react-bootstrap'
import { BsInfoCircle } from "react-icons/bs";
import SectionHeading from './SectionHeading'

const portfolioList = [
    {
        id: 1,
        title: 'Meyyotivity',
        image: '/assets/works/meyyotivity.jpg',
    },
    {
        id: 2,
        title: 'Proto Investment',
        image: '/assets/works/proto.jpg',
    },
    {
        id: 3,
        title: 'My Portfolio',
        image: '/assets/works/portfolio.jpg',
    },
    {
        id: 4,
        title: 'Photo Gallery',
        image: '/assets/works/photo-gallery-reactjs.jpg',
    },
    {
        id: 5,
        title: 'Florintech Computer College',
        image: '/assets/works/florintechcomputercollege.jpg',
    },
    {
        id: 6,
        title: 'EventPlanner',
        image: '/assets/works/eventplanner.jpg',
    },
];

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="_portfolio">
            <SectionHeading title={'portfolio'} sub={'Some of my previous works'} />
            <Container>
                <div className="row g-4">
                    {
                        portfolioList.map(item => {
                            return (
                                <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <div className="_image">
                                            <img src={item.image} alt={item.title} />
                                            <div className="_overlay">
                                                <div className="btn"><BsInfoCircle /></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </Container>
        </section>
    )
}

export default PortfolioSection