import React, { useState, useEffect } from 'react'
import './Fn.css'

import BackMenu from "../../components/BackMenu";
import Avatar from "../../components/Avatar";
import Badges from "../../components/Badges";
import Warnings from "../../components/Warnings";
import Rodape from "../../components/Rodape";
import RelatedTypes from "../../components/RelatedTypes";

import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import { fnAsPrincipal as fnAsPrincipal } from "../../components/LongTexts.tsx";
import { fnAsAuxiliary as fnAsAuxiliary } from "../../components/LongTexts.tsx";
import { fnAs3 as fnAs3 } from "../../components/LongTexts.tsx";
import { fnAs4 as fnAs4 } from "../../components/LongTexts.tsx";
import { fnAs5 as fnAs5 } from "../../components/LongTexts.tsx";
import { fnAs6 as fnAs6 } from "../../components/LongTexts.tsx";
import { fnAs7 as fnAs7 } from "../../components/LongTexts.tsx";
import { fnAs8 as fnAs8 } from "../../components/LongTexts.tsx";
import { genericComments as genericComments } from "../../components/Arrays.tsx";
import { fourLettersRelated as fourLettersRelated } from "../../components/LongTexts.tsx";
import { fnNature as fnNature } from "../../components/LongTexts.tsx";
import { fnDefinitionsAuthors as fnDefinitionsAuthors } from "../../components/LongTexts.tsx";
import { fnDefinitions as fnDefinitions } from "../../components/LongTexts.tsx";
import { fnRoles as fnRoles } from "../../components/LongTexts.tsx";
import { fnDynamics as fnDynamics } from "../../components/LongTexts.tsx";


function Fn({ type, numCode, newTitle, newLabel, onMajor }) {
  const [the, setThe] = useState("Os") /*Provisório, pré-typescript*/

  useEffect(() => {
    onMajor(true)
    newTitle("in")
    newLabel("3")
  }, [])

  let partition1 = fnNature[numCode].main
  let part1 = partition1.split('.', 4)



  return (
        <div className="fn-wrapper">
          {/* <BackMenu type={type} /> */}
          <div className="fn-mobile">
            <div className="fn-mobile-visitcard">
              <div className="mobile-vsc-1">
                <div className="mobile-vsc-1o2"><Avatar url="fn" type={type} size={"7.85em"} /></div>
                <div className="mobile-vsc-2o2">{fn[numCode].desc}</div>
              </div>
              <div className="mobile-vsc-2">
                <div>{fn[numCode].brief}</div>
              </div>
              <div className="mobile-vsc-3">
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#natureza">1. Natureza</a></div>
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#defina">2. Definições</a></div>
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#papeis">3. "Papéis"</a></div> {/*OK*/}
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#dinamicas">4. Dinâmicas (em breve)</a></div>
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#exemplos">5. Atitudes "{type}" (em breve)</a></div>
              </div>
            </div>
          </div>
          <div className="fn-desktop">
            <div className="fn-desktop-visitcard">
              <div className="desktop-vsc-1">
                <div className="desktop-vsc-1o2"><Avatar url="fn" type={type} size={"14em"} /></div>
                <div className="desktop-vsc-2o2">{fn[numCode].desc}</div>
              </div>
              <div className="desktop-vsc-2">
                <div>{fn[numCode].brief}</div>
              </div>
              <div className="desktop-vsc-3">
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#natureza">1. Natureza</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#defina">2. Definições</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#papeis">3. "Papéis"</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#dinamicas">4. Dinâmicas (em breve)</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#exemplos">5. Atitudes "{type}" (em breve)</a></div>
              </div>
            </div>  
          </div>

          <div className="fn-desktop-textos" style={{marginTop: '0px'}}> {/*wrapper*/}

            <RelatedTypes type={type} />

            <div id="natureza" style={{paddingTop: '1rem'}} className="fn-container"> {/*container*/}
              <h1>Natureza</h1>
              <div> {/*box*/}
                <div className="box-texto">
                  <div className="foto-jung"><Badges url="photo" role="jung" size="7rem"/><div style={{lineHeight: '1rem', fontWeight: '500', color: '#888888', fontSize: '1rem'}}>texto de </div><div style={{lineHeight: '1rem', fontWeight: '600', color: '#888888', fontSize: '1.2rem'}}>C. G. Jung</div></div>
                  ”{fnNature[numCode].main}“
                </div>
              </div>
            </div>
          

              <div id="defina" className="fn-container">
                <h1>Definições</h1>
                <div> {/*box*/}
                  <div>

                    <div className="fn-definicao-titulo">
                      {fnDefinitionsAuthors[0].def1}:
                    </div>
                    <div className="a4l-texto-body" style={{marginBottom: '0.5rem'}}>{fnDefinitions[numCode].def1}</div> {/*reaproveitada*/}

                    <div className="fn-definicao-titulo" style={{padding: '0px 0px 12px 0px'}}>
                      {fnDefinitionsAuthors[0].def2}:
                    </div>
                    <div className="a4l-texto-body" style={{marginBottom: '0.5rem'}}>{fnDefinitions[numCode].def2}</div> {/*reaproveitada*/}

                    <div className="fn-definicao-titulo" style={{padding: '0px 0px 12px 0px'}}>
                      {fnDefinitionsAuthors[0].def4}:
                    </div>
                    <div className="a4l-texto-body" style={{marginBottom: '0.5rem'}}>{fnDefinitions[numCode].def4}</div> {/*reaproveitada*/}
                  
                  </div>
                </div>
              </div>
              
              <div id="papeis" className="as4letras-textos-roles">
                <h1>"Papéis" da função cognitiva</h1>
                <div> {/*box*/}
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x1" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Dominante
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAsPrincipal[numCode].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x2" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Auxiliar
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAsAuxiliary[numCode].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x3" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Terciária
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs3[numCode].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x4" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Inferior
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs4[numCode].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x5" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 5ª (Oponente)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs5[0].as}{fn[numCode].desc}{` (`}{fn[numCode].name}{`)`}{fnAs5[0].asExtra}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x6" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 6ª (Sábio/Bruxa)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs6[0].as}{fn[numCode].desc}{` (`}{fn[numCode].name}{`)`}{fnAs6[0].asExtra}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x7" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 7ª (Pregador de peças)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs7[0].as}{fn[numCode].desc}{` (`}{fn[numCode].name}{`)`}{fnAs7[0].asExtra}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x8" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 8ª (Maléfico)
                      </div>
                      <div className="a4l-texto-body body-2 last-body">
                        {fnAs8[0].as}{fn[numCode].desc}{` (`}{fn[numCode].name}{`)`}{fnAs8[0].asExtra}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="dinamicas" className="as4letras-textos-identity">
                <h1>Dinâmicas entre funções</h1>
                <div> {/*Última div*/}
                  
                  <div style={{ marginTop: "0em", marginBottom: "0em" }}> {/*Ajuste de margens*/}
                    <div style={{ display: "flex", justifyContent: "center" }}><Badges url="as4l" numCode={numCode} role="x1" size="9" /></div>
                    <div>
                      <div className="a4l-texto-start">{/* {fn[numCode].name} */}</div>
                      <div className="a4l-texto-body">{fnDynamics[numCode].wOpo.name}</div>
                      <div className="a4l-texto-body">{fnDynamics[numCode].wOpo.text}</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', fontStyle: 'italic', color: '#9a9a9a', fontSize: '2rem', padding: '0px 0px 0.4rem 0px', borderRadius: '17px', border: '1px solid #aaaaaa', margin: '0 auto', width: '10rem', marginTop: '-1rem', marginBottom: '1rem'}}><div>Em breve</div></div>
                  <div style={{ marginBottom: "0em" }}>
                    <div style={{ display: "flex", justifyContent: "center",  }}><Badges url="as4l" numCode={numCode} role="x1" size="9" /></div>
                    <div>
                      <div className="a4l-texto-start">{/* {fn[numCode].name} */}</div>
                      <div className="a4l-texto-body">{fnDynamics[numCode].w2nd1.name}</div>
                      <div className="a4l-texto-body">{fnDynamics[numCode].w2nd1.text}</div>
                      <div className="a4l-texto-body">{fnDynamics[numCode].w2nd2.name}</div>
                      <div className="a4l-texto-body last-body">{fnDynamics[numCode].w2nd2.text}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="dinamicas" className="as4letras-textos-identity">
                <h1>Exemplos de atitudes "{type}"</h1>
                <div style={{marginBottom: '2rem'}}>
                  <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', fontStyle: 'italic', color: '#9a9a9a', fontSize: '2rem', padding: '0px 0px 0.4rem 0px', borderRadius: '17px', border: '1px solid #aaaaaa', margin: '0 auto', width: '10rem', marginTop: '3.2rem', marginBottom: '2.4rem'}}><div>Em breve</div></div>
                </div>
              </div>

          </div>
        </div> 
  )
}

export default Fn;