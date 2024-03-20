import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience/Experience.jsx";
import Skills from "./components/Skills.jsx";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects/Projects.jsx"

function App() {
  return (
    <div>
      <Helmet>
        <title>Aye Nyein Chan Pyae</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <NavBar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
