import NavBar from "./componets/NavBar";
import Home from "./componets/Home";
import Experience from "./componets/Experience";
import Skils from "./componets/Skils";
import Projects from "./componets/Projects";
import Contect from "./componets/Contect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <Home />
        <Experience />
        <Skils />
        <Projects />
        <Contect />
      </div>
    </>
  );
}

export default App;
