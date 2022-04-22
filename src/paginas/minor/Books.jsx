import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";
import tipos from "../../assets/images/books/tipos.jpg";
import temperamentos from "../../assets/images/books/temperamentos.jpg";
import humildade from "../../assets/images/books/humildade.jpg";
import gifts from "../../assets/images/books/gifts.jpg";

function Books({ newMinor }) {
  
  useEffect(() => {
    newMinor(true);
  }, []);

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Livros"}
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
          <div className="box-grid-books">
            <div className="box-grid-books-single a0a">
              <div><img style={{width: '7em'}} src={tipos} alt=""/></div>
              <div>
                <div>Tipos psicológicos</div>
                <div>por C. G. Jung</div>
                <div>aaa aaa aaa aaa</div>
                <div>Comprar</div>
              </div>
            </div>
            <div className="box-grid-books-single a0b">
              <div><img style={{width: '7em'}} src={gifts} alt=""/></div>
              <div>
                <div>Gifts Differing: Understanding Personality Type</div>
                <div>por Isabel Briggs Myers</div>
                <div>bbb bbb bbb bbb</div>
                <div>Comprar</div>
              </div>
            </div>
            <div className="box-grid-books-single b0a">
              <div><img style={{width: '7em'}} src={temperamentos} alt=""/></div>
              <div>
                <div>Temperamentos transformados</div>
                <div>por Tim LaHaye</div>
                <div>ccc ccc ccc ccc</div>
                <div>Comprar</div>
              </div>
            </div>
            <div className="box-grid-books-single b0b">
              <div><img style={{width: '7em'}} src={humildade} alt=""/></div>
              <div>
                <div>O Poder da Humildade</div>
                <div>por Steve Gallagher</div>
                <div>ddd ddd ddd ddd</div>
                <div>Comprar</div>
              </div>
            </div>
          </div>
          <div className="down-logo"><img src={logo} alt="personality pipe"/></div>
        </div>
      </div>
    </div>
  )
}

export default Books

