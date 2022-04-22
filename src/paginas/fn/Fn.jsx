import React, { useState } from 'react'
import './Fn.css'

import BackMenu from "../../components/BackMenu";
import Avatar from "../../components/Avatar";
import Badges from "../../components/Badges";
import Warnings from "../../components/Warnings";
import Rodape from "../../components/Rodape";

import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import { genericComments as genericComments } from "../../components/Arrays.tsx";
import { fourLettersRelated as fourLettersRelated } from "../../components/LongTexts.tsx";
import { fnNature as fnNature } from "../../components/LongTexts.tsx";
import { fnDefinitionsAuthors as fnDefinitionsAuthors } from "../../components/LongTexts.tsx";
import { fnDefinitions as fnDefinitions } from "../../components/LongTexts.tsx";
import { fnRoles as fnRoles } from "../../components/LongTexts.tsx";
import { fnDynamics as fnDynamics } from "../../components/LongTexts.tsx";


function Fn({ type, numCode }) {
  const [the, setThe] = useState("Os") /*Provisório, pré-typescript*/

  console.log("Fn",type)
  console.log("Fn",numCode)

  return (
        <div className="fn-wrapper">
          <BackMenu type={type} />
          {/*Acrescentar checkboxes do MUI para: Saudavel, nao saudável,  */}
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
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni1">1. Natureza</a></div>
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni2">2. Definições</a></div>
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni3">3. "Papéis"</a></div>
                <div className="mobile-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni4">4. Dinâmicas</a></div>
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
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni1">1. Natureza</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni2">2. Definições</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni3">3. "Papéis"</a></div>
                <div className="desktop-vsc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#fni4">4. Dinâmicas</a></div>
              </div>
            </div>  
          </div>

          <div className="as4letras-desktop-textos">

              <div className="as4letras-textos-summary">
                <div>
                  <div>
                    <div style={{ fontSize: "1.5em", display: "inline" }}>
                      ‟{the} {type}s{" "}
                    </div>
                    {as4letras[numCode].desc}“ <div>xx</div>
                  </div>
                  <Warnings typo="as4letras" about="summary" size="770px" />
                </div>
              </div>
              <div className="as4letras-textos-stack">
                <div>
                  <Warnings typo="as4letras" about="stack" size="770px" />
                </div>
              </div>

              <div id="fni1" className="as4letras-textos-nature">
                <h1>Natureza</h1>
                <div>
                  <div>
                    <div>
                      <div className="a4l-texto-start">
                        {fnNature[numCode].mainTitle}
                      </div>
                      <div className="a4l-texto-body">
                        {fnNature[numCode].main}
                      </div>
                      <div className="a4l-texto-start">
                        {fnNature[numCode].extraTitle}
                      </div>
                      <div className="a4l-texto-body">
                        {fnNature[numCode].extra}
                      </div>
                      <div className="a4l-texto-start">
                        {fnNature[numCode].lastTitle}
                      </div>
                      <div className="a4l-texto-body last-body">
                        {fnNature[numCode].last}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i2" className="as4letras-textos-story">
                <h1>História</h1>
                <div>
                  <div>
                    <div className="a4l-texto-start">
                      {fnDefinitionsAuthors[0].def1}
                    </div>
                    <div className="a4l-texto-body">
                      {fnDefinitions[numCode].def1}
                    </div>
                    <div className="a4l-texto-start">
                      {fnDefinitionsAuthors[0].def2}
                    </div>
                    <div className="a4l-texto-body">
                      {fnDefinitions[numCode].def2}
                    </div>
                    <div className="a4l-texto-start">
                      {fnDefinitionsAuthors[0].def3}
                    </div>
                    <div className="a4l-texto-body">
                      <div>{fnDefinitions[numCode].def3.d3i1}</div>
                      <div>{fnDefinitions[numCode].def3.d3i2}</div>
                      <div>{fnDefinitions[numCode].def3.d3i3}</div>
                      <div>{fnDefinitions[numCode].def3.d3i4}</div>
                      <div>{fnDefinitions[numCode].def3.d3i5}</div>
                    </div>
                    <div className="a4l-texto-start">
                      {fnDefinitionsAuthors[0].def4}
                    </div>
                    <div className="a4l-texto-body last-body">
                      {fnDefinitions[numCode].def4}
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i3" className="as4letras-textos-roles">
                <h1>"Papéis"</h1>
                <div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Dominante
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as1}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Auxiliar
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as2}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Terciária
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as3}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Inferior
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as4}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 5ª (Nemesis)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as5}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 6ª (Sábio/Bruxa)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as6}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 7ª (Embusteiro)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnRoles[numCode].as7}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como 8ª (Diabólico)
                      </div>
                      <div className="a4l-texto-body body-2 last-body">
                        {fnRoles[numCode].as8}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i4" className="as4letras-textos-identity">
                <h1>Dinâmicas</h1>
                <div>
                  <div style={{ marginTop: "0.6em", marginBottom: "3.1em" }}>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start">
                        {fn[numCode].name} com sua função oposta:
                      </div>
                      <div className="a4l-texto-body">
                        {fnDynamics[numCode].wOpo.name}
                      </div>
                      <div className="a4l-texto-body">
                        {fnDynamics[numCode].wOpo.text}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "0em" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start">
                        {fn[numCode].name} com as funções coexistentes:
                      </div>
                      <div className="a4l-texto-body">
                        {fnDynamics[numCode].w2nd1.name}
                      </div>
                      <div className="a4l-texto-body">
                        {fnDynamics[numCode].w2nd1.text}
                      </div>
                      <div className="a4l-texto-body">
                        {fnDynamics[numCode].w2nd2.name}
                      </div>
                      <div className="a4l-texto-body last-body">
                        {fnDynamics[numCode].w2nd2.text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div> 
  )
}

export default Fn;