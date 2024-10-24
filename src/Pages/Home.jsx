import AboutMe from "../Component/AboutMe/AboutMe";
import Navbar from "../Component/NavBar/Navbar";
import Info from "../Component/information/Info";
import Skills from "../Component/Skills/Skills";
import Education from "../Component/Education/Education";
import Portfolio from "../Component/Portfolio/Portfolio";
import Contact from "../Component/Contact/Contact";
import Rights from "../Component/Rights/Rights";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Info />
      <AboutMe />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Rights />
    </>
  );
}
