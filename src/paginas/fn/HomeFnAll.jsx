import React, { useState } from "react";
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import { Link } from "react-router-dom";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { as4letraspapeis as as4letraspapeis } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";

function HomeFnAll({ categoryMenu, type, newType }) {
  const [category, setCategory] = useState("fn")

  console.log(categoryMenu)
  console.log(type)

  return (
    <div>
      <MenuRoll categoryMenu={"fn"} newType={newType} customH={"2.7em"} customW={"3.87em"} chosen={`/fn/`+`${type}`} direct={true} stick={false} />
      <Subtitle categoryMenu={"fn"} type={type} />
      <div className="fn-tabela-geral">
      <div className="as4letrasall-desktop-grid">
        <div className="as4letrasall-condicional-desktop">
          <h1 style={{marginBottom: "1em"}}>FUNÇÕES COGNITIVAS</h1>
            <div className="as4letrasall-desktop-cards">
              <div style={{height: '2.7em'}} className={`card1 ${fn[1].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[1].name}`} >{fn[1].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card2 ${fn[2].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[2].name}`} >{fn[2].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card3 ${fn[3].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[3].name}`} >{fn[3].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card4 ${fn[4].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[4].name}`} >{fn[4].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card5 ${fn[5].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[5].name}`} >{fn[5].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card6 ${fn[6].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[6].name}`} >{fn[6].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card7 ${fn[7].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[7].name}`} >{fn[7].name}</Link></div>
              <div style={{height: '2.7em'}} className={`card8 ${fn[8].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} onClick={()=>{newType(fn[1].name)}} to={`/t/fn/${fn[8].name}`} >{fn[8].name}</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFnAll;
