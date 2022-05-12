import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";
import tipos from "../../assets/images/books/tipos.jpg";
import temperamentos from "../../assets/images/books/temperamentos.jpg";
import humildade from "../../assets/images/books/humildade.jpg";
import gifts from "../../assets/images/books/gifts.jpg";

function Books({onMajor}) {

  useEffect(() => {
    onMajor(false)
  }, [])

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Livros"}
        description={"Livros recomendados para o estudo das personalidades"}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box books">

          <div>
            <div>
              Na busca por clareza sobre quem somos nós, estudiosos, psicólogos e filosofos de diferentes eras buscaram identificar características 
              humanas repetitivas e agrupá-las afim de obter classificações e medidas estudáveis. Uma jornada que remonta a antiguidade, com os "quatro humores", 
              até tipologias modernas como a de "Myers-Briggs". Boa parte dessas teorias possui material fundamental e vários outros derivados. Abaixo 
              estão alguns livros recomendados:
            </div>
          </div>
          
          <div>
          <div>Livros recomendados</div>
          <div>Títulos disponíveis para compra online:</div>
          </div>

          <div className="box-grid-books">

            <div className="box-grid-books-single a0a">
              <div><img style={{width: '100%'}} src={tipos} alt=""/></div>
                <div>
                  <div>Tipos psicológicos</div>
                  <div>por C. G. Jung</div>
                  <div>Versão em português do tradicional estudo de C.G. Jung, precursor de outras tipologias atuais.</div>
                  <div><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.amazon.com.br/Tipos-psicol%C3%B3gicos-Vol-6/dp/8532605168/ref=asc_df_8532605168/?tag=googleshopp00-20&linkCode=df0&hvadid=379699382131&hvpos=&hvnetw=g&hvrand=1528783522310314387&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001645&hvtargid=pla-422923056690&psc=1">Comprar</a></div>
                </div>
            </div>

            <div className="box-grid-books-single a0b">
                <div><img style={{width: '100%'}} src={gifts} alt=""/></div>
                <div>
                  <div>Gifts Differing: Understanding Personality Type</div>
                  <div>por Isabel Briggs Myers</div>
                  <div>Livro base da tipologia de Myers-Briggs, popular e largamente usada em processos de RH e pesquisas atuais de gestão de pessoas.</div>
                  <div><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.amazon.com.br/Gifts-Differing-Understanding-Personality-Type/dp/089106074X">Comprar</a></div>
                </div>
            </div>
            
            <div className="box-grid-books-single b0a">
              <div><img style={{width: '100%'}} src={temperamentos} alt=""/></div>
                <div>
                  <div>Temperamentos transformados</div>
                  <div>por Tim LaHaye</div>
                  <div>Estudo moderno e relevante dos 4 temperamentos, componentes básicos da constituição humana, com o chance do auto-endereçamento 
                    e a analise de personagens bíblicos possuidores de cada um dos 4 tipos.
                  </div>
                  <div><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.amazon.com.br/Temperamentos-transformados-edi%C3%A7%C3%A3o-Tim-LaHaye/dp/857325534X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=216FOU7PMC99W&keywords=temperamentos+transformados&qid=1650600542&sprefix=temperamentos+transformado%2Caps%2C260&sr=8-1">Comprar</a></div>
                </div>
            </div>

            <div className="box-grid-books-single b0b">
              <div><img style={{width: '100%'}} src={humildade} alt=""/></div>
                <div>
                  <div>O Poder da Humildade</div>
                  <div>por Steve Gallagher</div>
                  <div>Um estudo da força protetora do ego: o orgulho. O livro analisa as diferentes manifestações do orgulho, além de oferecer, no 
                    terceiro capítulo, uma interessante tipologia sobre as espécies de orgulho e qual se destaca em cada pessoa.
                  </div>
                  <div><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.amazon.com.br/Poder-Humildade-STEVE-GALLAGHER/dp/8599664069/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2U3HQRK2HCF3H&keywords=o+poder+da+humildade&qid=1650600879&sprefix=o+poder+da+humildad%2Caps%2C209&sr=8-1">Comprar</a></div>
                </div>
            </div>
            
          </div>
          <div style={{paddingBottom: '1.2rem'}} className="down-logo"><img src={logo} alt="personality pipe"/></div>

        </div>
        
        </div>
    </div>
  )
}

export default Books

