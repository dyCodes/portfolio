import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AOS from "aos";
import Home from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 600 });
    AOS.refresh();
  }, []);

  return (
    <Home />
  );
}

export default App;
