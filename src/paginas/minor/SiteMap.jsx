import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import circles from "../../assets/images/bg/circles.png";
import logo from "../../assets/images/pp-figure-2.png";
import tipos from "../../assets/images/books/tipos.jpg";
import temperamentos from "../../assets/images/books/temperamentos.jpg";
import humildade from "../../assets/images/books/humildade.jpg";
import gifts from "../../assets/images/books/gifts.jpg";

function SiteMap({ newMinor }) {
    
  useEffect(() => {
    newMinor(true);
  }, []);

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Mapa do Site"}
        description={"A bla bla bla bla bla"}
        height={"20em"}
        imagebg={circles}
        colorbg=""
        color={"#ffffff"}
        boxed={false}
      />
      <div className="minor-container">
        <div className="wide-box sitemap">
          <div>A Personality Pipe</div>
          <div>A Personality Pipe foi criado em 2022 para compilar informações preciosas</div>

          <div className="box-grid-books">
            <div className="box-grid-sitemap-single">
              <div><img style={{width: '3em'}} src={tipos} alt=""/></div>
              <div>Sobre a Personality Pipe</div>
              <div>por C. G. Jung</div>
            </div>
            <div className="box-grid-sitemap-single">
              <div><img style={{width: '3em'}} src={gifts} alt=""/></div>
              <div>Contato</div>
              <div>por Isabel Briggs Myers</div>
            </div>
            <div className="box-grid-sitemap-single">
              <div><img style={{width: '3em'}} src={temperamentos} alt=""/></div>
              <div>Teoria</div>
              <div>por Tim LaHaye</div>
            </div>
            <div className="box-grid-sitemap-single">
              <div><img style={{width: '3em'}} src={humildade} alt=""/></div>
              <div>Tipologias</div>
              <div>por Steve Gallagher</div>
            </div>
            <div className="box-grid-sitemap-single">
              <div><img style={{width: '3em'}} src={humildade} alt=""/></div>
              <div>Testes</div>
              <div>por Steve Gallagher</div>
            </div>
            <div className="box-grid-sitemap-single">
              <div><img style={{width: '3em'}} src={humildade} alt=""/></div>
              <div>Livros recomendados</div>
              <div>por Steve Gallagher</div>
            </div>
          </div>
          <div className="down-logo"><img src={logo} alt="personality pipe"/></div>
        </div>
      </div>
    </div>  )
}

export default SiteMap