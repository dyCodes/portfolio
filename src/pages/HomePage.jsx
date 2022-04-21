import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <HeroSection />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage