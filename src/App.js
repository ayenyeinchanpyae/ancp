import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Skills from "./components/Skills.jsx";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer.jsx";
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
      <Contact />
      <Footer/>
      <SocialLinks />
    </div>
  );
}

export default App;
