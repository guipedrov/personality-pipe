import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";

function About({onMajor}) {

  useEffect(() => {
    onMajor(false)
  }, [])

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Sobre"}
        description={<em>Um portal de informações sobre personalidades</em>}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box-w-title about">
          <div>
            <div>O Personality Pipe:</div>
            <div>O portal foi criado em 2022 por entusiastas da psicologia com o objetivo de compilar informações preciosas sobre os tipos de personalidade e outras classificações/teorias concernentes a psiquê humana. Com novas atualizações periódicas e uma escrita acessível, nosso desejo é popularizar e simplificar conteúdos relevantes para pesquisa e ajudar pessoas em busca de auto-conhecimento. Compartilhe as páginas do Personality Pipe com o máximo de amigos e conhecidos e ajude o projeto a se manter ativo e crescendo.</div>
            <div className="down-logo"><img src={logo} alt="personality pipe"/></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
