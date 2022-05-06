import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";

function Contact() {

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Contato"}
        description={"Fale com a gente :)"}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box contact">
          <div>
            <div>O Personality Pipe está aberto a receber sugestões e apontamentos de correções no seu conteúdo. Para esses ou outros tipos de contato mande-nos um email pelo endereço abaixo.</div>
            <br/>
            <div>Contato comercial: contato@personalitypipe.com</div>
            <div className="down-logo"><img src={logo} alt="personality pipe"/></div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Contact