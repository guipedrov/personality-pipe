import React, { useState } from "react";
import '../../assets/css/components.css';
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import { Link } from "react-router-dom";
import { fnx as fn } from "../../components/Arrays.tsx";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { jungx as jung } from "../../components/Arrays.tsx";

function HomeJungAll({ categoryMenu, type, newType }) {
  const [category, setCategory] = useState("jung")

  console.log("Jung_All",categoryMenu)
  console.log("Jung_All",type)

  return (
        <div>
          <MenuRoll categoryMenu={"jung"} newType={newType} customH={"3.4em"} customW={"3.4em"} chosen={`/fn/`+`${type}`} direct={false} stick={true} />
          <Subtitle categoryMenu={"jung"} type={type} />
          <div className="fn-tabela-geral">
          <div className="as4letrasall-desktop-grid">
            <div className="as4letrasall-condicional-desktop">
              <h1 style={{marginBottom: "1em"}}>FUNÇÕES COGNITIVAS</h1>
                <div className="as4letrasall-desktop-cards">
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[1].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[1].name)}} to={`/t/fn/${jung[1].stickname}`} >{jung[1].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[2].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[2].name)}} to={`/t/fn/${jung[2].stickname}`} >{jung[2].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[3].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[3].name)}} to={`/t/fn/${jung[3].stickname}`} >{jung[3].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[4].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[4].name)}} to={`/t/fn/${jung[4].stickname}`} >{jung[4].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[5].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[5].name)}} to={`/t/fn/${jung[5].stickname}`} >{jung[5].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[6].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[6].name)}} to={`/t/fn/${jung[6].stickname}`} >{jung[6].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[7].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[7].name)}} to={`/t/fn/${jung[7].stickname}`} >{jung[7].name}</Link></div>
                  <div style={{height: '2.7em'}} className={`flipcard ${jung[8].stickname}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(jung[8].name)}} to={`/t/fn/${jung[8].stickname}`} >{jung[8].name}</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default HomeJungAll