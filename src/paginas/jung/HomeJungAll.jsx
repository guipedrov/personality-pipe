import React, { useState, useEffect } from "react";
import '../../assets/css/components.css';
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import { Link } from "react-router-dom";
import { fnx as fn } from "../../components/Arrays.tsx";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { jungx as jung } from "../../components/Arrays.tsx";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import logo from "../../assets/images/pp-figure-2.png";
import jungian from "../../assets/images/jungian.fw.png";

function HomeJungAll({ categoryMenu, type, newType, newLabel, newTitle, onMajor }) {
  const [category, setCategory] = useState("jung")
  const [description, setDescription] = useState(false)

  useEffect(() => {
    onMajor(true)
    newTitle("out")
    newLabel("2")
  }, [])

  return (
        <div>
          <MenuRoll categoryMenu={"jung"} newType={newType} customH={"3.4em"} customW={"3.4em"} chosen={`/fn/`+`${type}`} direct={false} stick={true} bg="#ebebeb" shadow="#c6c6c6c4" />
          {/* <Subtitle categoryMenu={"jung"} type={type} />
          <div style={{borderBottom: '1px solid #dddddd'}}></div> */}

          <div className="subtitle-container-onall">
            <div className="sub-window-onall">
              <img style={{margin: '0 auto', width: '6rem', padding: '0.7rem 0 0.7rem 0'}} src={jungian} alt="4 letras"/>
              <div>Tipos psicológicos na psicologia de Carl Gustav Jung referem-se à identificação e à descrição de um certo número de processos psicológicos básicos. Jung mostrou de que maneira esses processos se ligam em várias combinações para determinar o caráter de um indivíduo. Cada combinação particular atende por um "Tipo Psicológico Jungiano".
              {description ? null : <div className="description-expand" style={{paddingTop: '1.3rem', textAlign: 'center', color: '#d9d9d9', border: '2 px #d9d9d9', borderRadius: '50%'}} onClick={()=> setDescription(!description)}><ArrowDropDownIcon/></div>}
              {description ? <div className="sub-window-onall-down">
              <br/>
              Jung inicialmente definiu duas atitudes de personalidade (introversão e a extroversão) e somente mais tarde conceituou as funções psíquicas (pensamento, sentimento, sensação e intuição) e as funções (principal, auxiliar e inferior). As atitudes de personalidade, extroversão e introversão, são as formas psicológicas de adaptação do indivíduo ao mundo, quer seja exterior ou interior.
              <br/><br/>
              Como resultado, Jung apontou 8 tipos psicológicos: Sentimental Extrovertido, Sentimental Introvertido, Pensador Extrovertido, Pensador Introvertido, Sensor Extrovertido, Sensor Introvertido, Intuitivo Extrovertido e Intuitivo Introvertido. Eles também são grafados, altenativamente, como: Tipo Fe, Tipo Fi, Tipo Te, Tipo Ti, Tipo Tipo Se, Tipo Si, Tipo Ne e Tipo Ni.

              <br/><br/>
              <div style={{color: '#999999', fontWeight: '500'}}>Saiba mais a respeito na sessão "Teoria" (em breve)</div>
              <div className="description-expand" style={{paddingTop: '1rem', textAlign: 'center', color: '#d9d9d9'}} onClick={()=> setDescription(!description)}><ArrowDropUpIcon/></div>
            </div> : null}
            </div>
          </div>

          </div>

          <div className="fn-tabela-geral">
          <div className="as4letrasall-desktop-grid">
            <div className="as4letrasall-condicional-desktop">
              <h1>Personalidades</h1>
                <div className="as4letrasall-desktop-cards-hybrid">
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[1].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[1].name)}} to={`/t/jung/${jung[1].stickname}`} >{jung[1].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[2].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[2].name)}} to={`/t/jung/${jung[2].stickname}`} >{jung[2].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[3].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[3].name)}} to={`/t/jung/${jung[3].stickname}`} >{jung[3].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[4].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[4].name)}} to={`/t/jung/${jung[4].stickname}`} >{jung[4].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[5].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[5].name)}} to={`/t/jung/${jung[5].stickname}`} >{jung[5].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[6].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[6].name)}} to={`/t/jung/${jung[6].stickname}`} >{jung[6].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[7].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[7].name)}} to={`/t/jung/${jung[7].stickname}`} >{jung[7].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[8].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[8].name)}} to={`/t/jung/${jung[8].stickname}`} >{jung[8].name}</Link></div>
                </div>
              </div>
            </div>
          </div>

          <div className="subtitle-container-onall">
            <div className="sub-window-onall">
              <div style={{display: 'grid', justifyContent: 'center'}}><img style={{width: '2rem', margin: '0 auto', textAlign: 'center', padding: '1.2rem 0 0 0'}} src={logo} alt="personality pipe"/></div>
            </div>
          </div>



        </div>
      );
    }

export default HomeJungAll