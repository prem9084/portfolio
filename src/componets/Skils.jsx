import React from "react";
import skils from "./data/skills.json";
const Skils = () => {
  return (
    <>
      <div className="container skills">
        <h1 className="ms-5">Skills</h1>
        <div className="items">
          {skils.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="skils/img" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skils;
