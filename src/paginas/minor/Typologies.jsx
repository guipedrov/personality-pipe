import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import fusili from "../../assets/images/bg/fusili.png";
import logo from "../../assets/images/pp-figure-2.png";
import fourletters from "../../assets/images/4letters.fw.png";
import { Link } from "react-router-dom";

function Typologies({ newMinor }) {
  useEffect(() => {
    newMinor(true);
  }, []);

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Tipologias"}
        description={"A bla bla bla bla bla"}
        height={"20em"}
        imagebg={fusili}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box typologies">
          <div>
            A Personality Pipe foi criado em 2022 para compilar informações preciosasffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          {/* <div className="down-logo"><img src={logo} alt="personality pipe"/></div> */}
        </div>

        <div className="minor-titles">Tipologias</div>
        <div className="box-grid">
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras" >Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras" >Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras" >Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras" >Entrar</Link></div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Typologies;

