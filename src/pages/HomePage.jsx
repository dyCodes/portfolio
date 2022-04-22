import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'

const HomePage = () => {
    return (
        <div id='top' className="home">
            <Header />
            <main>
                <HeroSection />
                <PortfolioSection />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage