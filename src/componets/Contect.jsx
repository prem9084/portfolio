import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";

const Contect = () => {
  return (
    <>
      <div className="container contect mb-5">
        <h1 className="ms-5">CONTECT ME</h1>
        <div
          className="contect-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/premshaky231/" className="items">
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100090583686527&mibextid=ZbWKwL"
            className="items"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/prem-shakya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://x.com/ps9084185637?t=NTua5XSBvhxMxqQ2IDLoCA&s=08"
            className="items"
          >
            <BsTwitterX />
          </a>
          <a href="https://github.com/dashboard" className="items">
            <VscGithub className="icons" />
          </a>
          <a href="mailto:tinkushakya501@gmail.com" className="items">
            <CiMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contect;
