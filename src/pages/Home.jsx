import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <PortfolioSection />
            </main>
            <Footer />
        </div>
    )
}

export default Home