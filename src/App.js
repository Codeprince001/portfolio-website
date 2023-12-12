import './App.css';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
