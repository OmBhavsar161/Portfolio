import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Whatido from "./Whatido";
import Education from "./Education";
import Arrowup from "./assets/arrowup.svg"
import Skills from "./Skills";
import Home from "./Home";
import Certifications from "./Certifications";
import Projects from "./Projects";


function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // Show button when scrolled 300px down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Home />
      <Whatido />
      <Skills />
      <Education />
      {/* <Projects /> */}
      <Certifications />
      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full"
        >
          <img src={Arrowup} alt="ArrowUp" />
        </button>
      )}
    </>
  );
}

export default App;
