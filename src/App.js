import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true, });
    AOS.refresh();
  }, []);

  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
