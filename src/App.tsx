import "./App.css";
import "./index.css";
import AboutMe from "./component/AboutMe";
import ContactUs from "./component/Contactus";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import GitHubActivity from "./component/GitHubActivity";
import MousePointer from "./component/MousePointer";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Services from "./component/Services";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <MousePointer />
      <main id="main-content">
        <Hero />
        <Project />
        <GitHubActivity username="toney010319" />
        <Services />
        <Experience />
        <AboutMe />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
