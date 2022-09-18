import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Skills from "./components/Skills.jsx";
import Test from "./components/Test.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <About />
      <Portfolio />
      <Experience />
      <Skills />

      <Contact />
      {/* <Test /> */}

      <SocialLinks />
    </div>
  );
}

export default App;
