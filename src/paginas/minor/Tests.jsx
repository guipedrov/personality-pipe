import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";
import { Link } from "react-router-dom";
import fourletters from "../../assets/images/4letters.fw.png";

function Tests({ newMinor }) {
    
  useEffect(() => {
    newMinor(true);
  }, []);

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Testes"}
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
        </div>

        <div className="minor-titles">Testes</div>

        <div className="wide-box tests">
          <div>A Personality Pipe foi criado em 2022 para compilar informações preciosas</div>
        </div>

        <div className="box-grid">
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >Entrar</Link></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={fourletters} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Tipologia das "4 Letras"</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"bbbbb"</div>
            <div onHover={{}} style={{color: '#454545', }}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >Entrar</Link></div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>  
  )
}

export default Tests