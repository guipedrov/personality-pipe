import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";
import Rodape from "../../components/Rodape";

function Teory({ newMinor }) {
      
  useEffect(() => {
    newMinor(true);
  }, []);

  return (

    <div className="minor-wrapper">
      <Headings
        title={"Teoria"}
        description={"A bla bla bla bla bla"}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={false}
      />
      <div className="minor-container">
        <div className="wide-box books">
          <div>
            A Personality Pipe foi criado em 2022 para compilar informações preciosas 
          </div>
          <div>Livros recomendados</div>
          <div>Livros recomendados</div>
        </div>
      
        <div className="minor-titles">Os papéis arquetípicos</div>
        <div className="wide-box" style={{textAlign: 'center'}}>
          <div>Em breve</div>
        </div>
      
      </div>
      <Rodape/>
    </div>  
  )
}

export default Teory