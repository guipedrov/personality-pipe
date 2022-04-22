import React, { useState, useEffect } from "react";
import "../assets/css/components.css";
import {as4letrasx as as4letras} from "./Arrays.tsx"
import {fnx as fn} from "./Arrays.tsx"
import {jungx as jung} from "./Arrays.tsx"
import Badges from "./Badges.jsx"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { grey } from '@mui/material/colors';

function Subtitle({ categoryMenu, type }) {
  const [current, setCurrent] = useState("0")
  const [show, setShow] = useState(true)

  const local = [
    {name: "Todos", desc: "Visão geral das Funções Cognitivas"}, 
    {name: "Fe", desc: "Segue..."},
    {name: "Fi", desc: "Segue..."},
    {name: "Te", desc: "Segue..."},
    {name: "Ti", desc: "Segue..."},
    {name: "Se", desc: "Segue..."},
    {name: "Si", desc: "Segue..."},
    {name: "Ne", desc: "Segue..."},
    {name: "Ni", desc: "Segue..."},
    {name: "Todos", desc: "Visão geral das Personalidades de \"4 Letras\""},
    {name: "ENTP", desc: "Segue... Debater"},
    {name: "ENTJ", desc: "Segue..."},
    {name: "INTP", desc: "Segue..."},
    {name: "INTJ", desc: "Segue..."},
    {name: "ESTJ", desc: "Segue..."},
    {name: "ESFJ", desc: "Segue..."},
    {name: "ISTJ", desc: "Segue..."},
    {name: "ISFJ", desc: "Segue..."},
    {name: "ESTP", desc: "Segue..."},
    {name: "ESFP", desc: "Segue..."},
    {name: "ISTP", desc: "Segue..."},
    {name: "ISFP", desc: "Segue..."},
    {name: "ENFJ", desc: "Segue..."},
    {name: "ENFP", desc: "Segue..."},
    {name: "INFJ", desc: "Segue... Advocate"},
    {name: "INFP", desc: "Segue..."},
    {name: "Todos", desc: "Visão geral das Personalidades na Tipologia Jungiana"},
    {name: "Fe", desc: "Segue..."},
    {name: "Fi", desc: "Segue..."},
    {name: "Te", desc: "Segue..."},
    {name: "Ti", desc: "Segue..."},
    {name: "Se", desc: "Segue..."},
    {name: "Si", desc: "Segue..."},
    {name: "Ne", desc: "Segue..."},
    {name: "Ni", desc: "Segue..."},
  ]
  
  useEffect(() => {
    onCurrent()
    onUndefined()
  }, [])

  function onCurrent() {
    if (categoryMenu === "as4letras" && type === "Todos") { setCurrent("9") }
    else if (categoryMenu === "as4letras" && type === "ENTP") { setCurrent("10") }
    else if (categoryMenu === "as4letras" && type === "ENTJ") { setCurrent("11") }
    else if (categoryMenu === "as4letras" && type === "INTP") { setCurrent("12") }
    else if (categoryMenu === "as4letras" && type === "INTJ") { setCurrent("13") }
    else if (categoryMenu === "as4letras" && type === "ESTJ") { setCurrent("14") }
    else if (categoryMenu === "as4letras" && type === "ESFJ") { setCurrent("15") }
    else if (categoryMenu === "as4letras" && type === "ISTJ") { setCurrent("16") }
    else if (categoryMenu === "as4letras" && type === "ISFJ") { setCurrent("17") }
    else if (categoryMenu === "as4letras" && type === "ESTP") { setCurrent("18") }
    else if (categoryMenu === "as4letras" && type === "ESFP") { setCurrent("19") }
    else if (categoryMenu === "as4letras" && type === "ISTP") { setCurrent("20") }
    else if (categoryMenu === "as4letras" && type === "ISFP") { setCurrent("21") }
    else if (categoryMenu === "as4letras" && type === "ENFJ") { setCurrent("22") }
    else if (categoryMenu === "as4letras" && type === "ENFP") { setCurrent("23") }
    else if (categoryMenu === "as4letras" && type === "INFJ") { setCurrent("24") }
    else if (categoryMenu === "as4letras" && type === "INFP") { setCurrent("25") }
  }  

  function onUndefined() {
    if (type === undefined || categoryMenu === undefined) {
    setShow(false)
  }
  }

console.log("----")
console.log("categoria",categoryMenu)
console.log("type",type)
console.log("current",current)

  return (
    <div className="subtitle-wrapper">
      {show &&
      <div className="subtitle-container">
        <div className="sub-window">
          <div className="sub-name-and-text">
            <div className="sub-name">{type}</div>
            <div style={{paddingTop: '3px'}}>{local[current].desc}</div>
          </div>
          {type != "Todos" ? <div className="sub-icon"><Badges url={categoryMenu} numCode={"100"} role={type} size={"9em"} /></div> : <></>}
        </div>
        <ArrowRightAltIcon sx={{color: grey[500], fontSize: 'large'}} style={{display: "inline", gridArea: 'setadireita', alignSelf: 'center', justifySelf: 'start'}}/>
      </div>}
    </div>
  );
}

export default Subtitle;
