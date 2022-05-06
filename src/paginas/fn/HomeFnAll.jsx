import React, { useState, useEffect } from "react";
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import { Link } from "react-router-dom";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { as4letraspapeis as as4letraspapeis } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import logo from "../../assets/images/pp-figure-2.png";
import eightFunctions from "../../assets/images/8functions.fw.png";

function HomeFnAll({ categoryMenu, type, onMajor, newTitle, newLabel, newType }) {
  const [category, setCategory] = useState("fn")
  const [description, setDescription] = useState(false)

  useEffect(() => {
    onMajor(true)
    newTitle("out")
    newLabel("3")
  }, [])

  return (
    <div>
      <MenuRoll categoryMenu={"fn"} newType={newType} customH={"2.6em"} customW={"3.8em"} chosen={`/fn/`+`${type}`} direct={true} stick={false} bg="#f3f2f3" shadow="#d7d7d7" />
      {/* <Subtitle categoryMenu={"fn"} type={type} /> */}

      <div className="subtitle-container-onall">
            <div className="sub-window-onall">
              <img style={{margin: '0 auto', width: '6rem', padding: '0.7rem 0 0.7rem 0'}} src={eightFunctions} alt="4 letras"/>
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
          <h1 style={{marginBottom: "0.5em"}}>FUNÇÕES COGNITIVAS</h1>
            <div className="as4letrasall-desktop-cards-hybrid">
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[1].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card1 ${fn[1].name}`}>{fn[1].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[2].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card2 ${fn[2].name}`}>{fn[2].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[3].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card3 ${fn[3].name}`}>{fn[3].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[4].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card4 ${fn[4].name}`}>{fn[4].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[5].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card5 ${fn[5].name}`}>{fn[5].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[6].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card6 ${fn[6].name}`}>{fn[6].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[7].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card7 ${fn[7].name}`}>{fn[7].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[8].name}`} ><div style={{height: '2.7em', border: '1px outset #ffffff2d'}} className={`card8 ${fn[8].name}`}>{fn[8].name}</div></Link>
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

export default HomeFnAll;
