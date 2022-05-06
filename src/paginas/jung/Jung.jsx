import React, { useState, useEffect } from 'react'
import './Jung.css'

import BackMenu from "../../components/BackMenu";
import Avatar from "../../components/Avatar";
import Badges from "../../components/Badges";
import Warnings from "../../components/Warnings";
import Rodape from "../../components/Rodape";

import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import { jungx as jung } from "../../components/Arrays.tsx";
import { genericComments as genericComments } from "../../components/Arrays.tsx";
import { fourLettersRelated as fourLettersRelated } from "../../components/LongTexts.tsx";
import { jungQuote as jungQuote } from "../../components/LongTexts.tsx";
import { fnNature as fnNature } from "../../components/LongTexts.tsx";
import { fnDefinitionsAuthors as fnDefinitionsAuthors } from "../../components/LongTexts.tsx";
import { fnDefinitions as fnDefinitions } from "../../components/LongTexts.tsx";
import { fnRoles as fnRoles } from "../../components/LongTexts.tsx";
import { fnDynamics as fnDynamics } from "../../components/LongTexts.tsx";
import { fnAsPrincipal as fnAsPrincipal } from '../../components/LongTexts.tsx';
import { jungByJung as jungByJung } from '../../components/LongTexts.tsx';
import { jungSyntax as jungSyntax } from '../../components/LongTexts.tsx';


function Jung({ type, numCode, newTitle, newLabel, onMajor }) {
  const [the, setThe] = useState("Os") /*Provisório, pré-typescript*/

  useEffect(() => {
    onMajor(true)
    newTitle("in")
    newLabel("2")
  }, [])

  return (
    <div>
    <div className="fn-wrapper">
      
          {/* <BackMenu type={type} /> */}
          <div className="fn-mobile">
            <div className="jung-mobile-visitcard" style={{paddingTop: '0.2rem'}}> {/*Mobile*/}
                  <div className="mobile-vc-1"></div>
                  <div className="j-mobile-vc-2">
                    <div><Avatar url="jung" type={type} size="12rem" /></div>
                    <div>{jung[numCode].fullname}</div>
                    <div>{jung[numCode].exte}</div>
                  </div>
                  <div className="mobile-vc-3">
                    <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#sintese">1. Síntese</a></div> 
                    <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#papel">2. O "Papel" do {type}</a></div> {/*OK*/}
                    <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#desc">3. Descrições de Carl Jung</a></div>
                  </div>
              </div>
            </div>

          <div className="fn-desktop">
          <div className="as4letras-desktop-visitcard" style={{paddingTop: '0.8rem'}}> {/**/}
              <div className="desktop-vc-1"></div>
              <div className="desktop-v-2 jung">
                <Avatar url="jung" type={type} size="19rem" />
                <div>{jung[numCode].fullname}</div>
                <div>{jung[numCode].exte}</div>
              </div>
              <div className="desktop-vc-3">
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#sintese">1. Síntese</a></div>
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#papel">2. O "Papel" do {type}</a></div>
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#desc">3. Descrições de Carl Jung</a></div>
              </div>
            </div>
          </div>

          <div className="as4letras-desktop-textos">

              <div className="as4letras-textos-summary">
                <div>
                  <div>
                    <div style={{ fontSize: "1.3em", display: "inline" }}>‟<em>{jungQuote[numCode].quote}“</em></div> 
                    <div style={{ fontSize: "0.9em"}}>C.G. Jung</div>
                  </div>
                  <Warnings typo="as4letras" about="summary" size="770px" />
                </div>
              </div>

              <div id="sintese" style={{marginBottom: '1.3rem'}}>
                <h1>Síntese</h1>
                <div>
                  <div className="a4l-texto-body">
                    <div className="avatar-jungian-type"><Badges url="jung" numCode="100" role={type}/></div>{jungSyntax[numCode].summary}
                  </div>
                </div>    
              </div>

              <div id="papel" className="as4letras-textos-roles" style={{marginBottom: '1.3rem'}}>
                <h1>"Papel" do "{type}"</h1>
                <div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={numCode} role="x1" size={"9rem"} />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[numCode].name} como Dominante
                      </div>
                      <div className="a4l-texto-body body-3 last-body">
                        {fnAsPrincipal[numCode].as}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div id="desc" style={{marginBottom: '2rem'}}>
                <h1>Descrições de C.G. Jung</h1>
                <div>
                  <div className="a4l-texto-body">
                    <div className="foto-jung"><Badges url="photo" role="jung" size="7rem"/><div style={{lineHeight: '1rem', fontWeight: '500', color: '#888888', fontSize: '1rem'}}>texto de </div><div style={{lineHeight: '1rem', fontWeight: '600', color: '#888888', fontSize: '1.2rem'}}>C. G. Jung</div></div>{jungByJung[numCode].text}
                  </div>
                </div>
              </div>

          </div>
        </div> 


    </div>
  )
}

export default Jung