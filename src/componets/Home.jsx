import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Prem's resume.pdf";
import hero from "./data/hero.json";
import typed from "typed.js";
import Typed from "typed.js";
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const opctions = {
      strings: [
        "Welcome to My Profile",
        "My Name is Prem",
        "I'm FullStack Developer",
        "and I'm MERN Satck Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, opctions);
    return () => {
      typed.destroy();
    };
  });

  return (
    <>
      <div className="container home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Prem's resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
