import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";
import Rodape from "../../components/Rodape";

function Teory({onMajor}) {

  useEffect(() => {
    onMajor(false)
  }, [])

  return (

    <div className="minor-wrapper">
      <Headings
        title={"Teoria"}
        description={"Fundamentos da teoria da personalidade e outras teorias psicológicas"}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />

      <div className="minor-container">

        <div className="wide-box teory">
          <div>
            <div>O Personality Pipe reúne as mais populares teorias e correntes de estudo sobre personalidade e traços da psiquê humana. Dado a profundidade do assunto e a multiplicidade de teorias, muitas vezes mutuamente excludentes, é natural que surjam dúvidas ou contradições entre correntes ou mesmo dentro de uma mesma corrente. Para tornar os estudos mais fáceis, o portal sugere leituras mais aprofundadas sobre cada assunto e a adoção de livros basilares. Você pode iniciar esse aprofundamento conferindo alguns dos tópicos abaixo:</div>
            <br/>
            <div style={{textAlign: 'center'}}>Mais em breve</div>
          </div>
        </div>

        <div className="minor-titles">Arquétipos</div>
        <div className="wide-box-w-title teory">
          <div>
            <h2>Os Arquétipos na personalidade humana</h2>
            <div>Em breve</div>
          </div>
        </div>

        <div className="minor-titles">Tipologias tradicionais</div>
        <div className="wide-box-w-title teory">
          <div>
            <h2>Os 4 temperamentos</h2>
            <div>Em breve</div>
            <br/><br/>
            <h2>Os 5 pontos</h2>
            <div>Em breve</div>
          </div>
        </div>

        <div className="minor-titles">Tipologias modernas</div>
        <div className="wide-box-w-title teory">
          <div>
            <h2>Tipologia das "4 Letras" (Myers-Briggs)</h2>
            <div>Em breve</div>
          </div>
        </div>

      </div>
    </div>  
  )
}

export default Teory