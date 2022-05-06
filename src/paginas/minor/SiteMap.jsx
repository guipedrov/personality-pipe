import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import circles from "../../assets/images/bg/circles.png";
import logo from "../../assets/images/pp-figure-2.png";

import mapbook from "../../assets/images/map-book.png";
import mapcontact from "../../assets/images/map-contact.png";
import mappp from "../../assets/images/map-pp.png";
import maptests from "../../assets/images/map-tests.png";
import maptheory from "../../assets/images/map-theory.png";
import maptypo from "../../assets/images/map-typo.png";
import { Link } from "react-router-dom";


function SiteMap() {
    
  return (
    <div className="minor-wrapper">
      <Headings
        title={"Mapa do Site"}
        description={"Todo conteúdo disponível nesse portal"}
        height={"20em"}
        imagebg={circles}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box sitemap">
          <div>
            <div>O Personality Pipe disponibiliza conteúdos didáticos e links úteis para os estudos complementares sobre teoria da personalidade e psicologia em geral. Conheça abaixo os segmentos do portal:</div>

            <div className="box-flex sitemap">
              <div className="box-grid-sitemap-single">
                <div><img style={{height: '3em'}} src={mappp} alt=""/></div>
                <div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/sobre">Sobre a Personality Pipe</Link></div>
                <div>Sobre o portal</div>
              </div>
              <div className="box-grid-sitemap-single">
                <div><img style={{height: '3em'}} src={mapcontact} alt=""/></div>
                <div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/contato">Contato</Link></div>
                <div>Fale com o Personality Pipe</div>
              </div>
              <div className="box-grid-sitemap-single">
                <div><img style={{height: '3em'}} src={maptheory} alt=""/></div>
                <div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/teoria">Teoria</Link></div>
                <div>Recursos da teoria da psicologia</div>
              </div>
              <div className="box-grid-sitemap-single">
                <div><img style={{height: '3em'}} src={maptypo} alt=""/></div>
                <div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/tipologias">Tipologias</Link></div>
                <div>A tipologias da personalidade mais populares</div>
              </div>
              <div className="box-grid-sitemap-single">
                <div><img style={{height: '3em'}} src={maptests} alt=""/></div>
                <div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/testes">Testes</Link></div>
                <div>Testes gratuitos sugeridos</div>
              </div>
              <div className="box-grid-sitemap-single">
                <div><img style={{height: '3em'}} src={mapbook} alt=""/></div>
                <div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/livros">Livros</Link></div>
                <div>Livros recomendados</div>
              </div>
            </div>
            <div className="down-logo"><img src={logo} alt="personality pipe"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteMap