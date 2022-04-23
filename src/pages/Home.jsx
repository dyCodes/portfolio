import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <HeroSection />
                <PortfolioSection />
            </main>
            <Footer />
        </div>
    )
}

export default Home