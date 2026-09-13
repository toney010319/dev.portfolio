import { useEffect } from "react";
import "./App.css";
import AboutMe from "./component/AboutMe";
import ContactUs from "./component/Contactus";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Services from "./component/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Experience />
      <Project />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
