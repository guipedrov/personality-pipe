import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";

function Contact({ newMinor }) {
      
  useEffect(() => {
    newMinor(true);
  }, []);

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Contato"}
        description={"A bla bla bla bla bla"}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={false}
      />
      <div className="minor-container">
        <div className="wide-box">
          <div>A Personality Pipe</div>
          <div>A Personality Pipe foi criado em 2022 para compilar informações preciosas</div>
          <div className="down-logo"><img src={logo} alt="personality pipe"/></div>
        </div>
      </div>
    </div>  )
}

export default Contact