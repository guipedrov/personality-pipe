import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/components.css"

import { as4letrasx as as4letras } from "./Arrays.tsx"
import { fnx as fn } from "./Arrays.tsx"
import { jungx as jung } from "./Arrays.tsx"

import MenuItem from "./MenuItem.jsx"

function MenuRoll({ categoryMenu, type, newType, customH, customW, chosen, direct, stick }) {
  const [listagem, setListagem] = useState([{name: "Carregando", desc: ""}])
  const [all, setAll] = useState("Todos")

  console.log("######Menu Roll",type)
  
  const listagemSemTodos = listagem.filter((duckTape) => {
    return duckTape.name != ("Todos" || "All")
  })

  function onAll() {
    if (categoryMenu === "as4letrasEnglish") {
      setAll("All")
    }
  }

  useEffect(() => {
     onListagem()
   }, [])

  useEffect(() => {
    onAll()
  }, [])
  
  function onListagem() {
    if (categoryMenu === "as4letras") {
      setListagem(as4letras)
    } else if (categoryMenu === "fn") {
      setListagem(fn)
    } else if (categoryMenu === "jung") {
      setListagem(jung)
    }
  }

  const onKey = Math.random + 1

  return (
    <>
      <div className="menu-roll-container">
        <Link style={{textDecoration: 'none', color: 'inherit', margin: '0px -8px 0px -2px'}} to={`/t/`+`${categoryMenu}`+`/`}>
        <div className="pseudoitem Todos" onClick={()=>{newType("Todos")}}>{all}</div>
        </Link>
        
        {listagemSemTodos.map((duckTape) => {
          return <MenuItem name={duckTape.name} key={duckTape.name} categoryMenu={categoryMenu} newType={newType} customH={customH} customW={customW} chosen={chosen} type={type} direct={direct} stick={stick} stickname={duckTape.stickname} />;
        })}
      </div>
      <div className="strim"></div>
    </>
  );
}

export default MenuRoll;
