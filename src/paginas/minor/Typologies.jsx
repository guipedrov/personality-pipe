import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import fusili from "../../assets/images/bg/fusili.png";
import logo from "../../assets/images/pp-figure-2.png";
import fourletters from "../../assets/images/4letters.fw.png";
import jungian from "../../assets/images/jungian.fw.png";
import enneagram from "../../assets/images/enneagram.fw.png";
import temperaments from "../../assets/images/temperaments.fw.png";
import { Link } from "react-router-dom";

function Typologies({onMajor}) {

  useEffect(() => {
    onMajor(false)
  }, [])

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Tipologias"}
        description={"Seleção de Tipologias de personalidades"}
        height={"20em"}
        imagebg={fusili}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box typologies">
          <div>
            <div>
              As Tipologias das personalidades, ou como poderíamos chamar, "Conjuntos de categorias" das personalidades são as classificações das quais
              essa página trata. Cada "tipologia" pretende, antes de tudo, categorizar de diferentes (e finitas) formas o objeto do seu estudo. 
              Já por "personalidade" podemos entender a soma dos padrões de pensar, sentir e agir de uma pessoa, sua individualidade pessoal e social, nas 
              camadas abrangentes e genéricas o suficiente para observarmos. Não é uma tarefa fácil, rotular pessoas, tampouco deveria ser essa a intenção. 
              As tipologias aqui apresentadas servem sim para analisar, isolar e explorar cada característica de personalidade exibida por um indivíduo, 
              identificá-las assertivamente, entendê-las melhor, e como efeito final, produzir conhecimento e mudança para e nas pessoas.
            </div>
          </div>
        </div>

        <div className="minor-titles">Tipologias</div>
        
        <div className="box-grid typologies">
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>Tipologia popular que divide-se em 16 tipos</div>
            <div style={{fontWeight: '600', color: '#ff7043', fontSize: '1.2em', maxWidth:'80px', margin: '0 auto'}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras">Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={jungian} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia Jungiana</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>Tipologia tradicional da psicologia analítica de autoria do Dr. C. G. Jung</div>
            <div style={{fontWeight: '600', color: '#ff7043', fontSize: '1.2em', maxWidth:'80px', margin: '0 auto'}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/jung">Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={enneagram} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Eneagrama</div>
            <div style={{fontStyle: 'italic', color: '#aaaaaa', padding: '1px 2px 3px 2px', borderRadius: '12px', border: '1px solid #aaaaaa', margin: '0 auto', width: '80px', height: '25px'}}>Em breve</div>
            <div></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={temperaments} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Os 4 temperamentos</div>
            <div style={{fontStyle: 'italic', color: '#aaaaaa', padding: '1px 2px 3px 2px', borderRadius: '12px', border: '1px solid #aaaaaa', margin: '0 auto', width: '80px', height: '25px'}}>Em breve</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typologies;

