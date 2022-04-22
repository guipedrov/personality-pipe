import React, { useState, useEffect, createContext } from "react";
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import Rodape from "../../components/Rodape.jsx";
import "../assets/MainPages.css";
import { Link } from "react-router-dom";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import { as4letraspapeis as as4letraspapeis } from "../../components/Arrays.tsx";
import { as4letrasChosenBotao as as4letrasChosenBotao } from "../../components/Arrays.tsx"
import As4LetrasTabela from "./components/As4LetrasTabela.jsx";

function Home4LetrasChosen({categoryMenu, type, newType, newIndex, newChosenfns, typeTranslator}) {
  const [tabela4th, setTabela4th] = useState(true);
  const [tabelaFull, setTabelaFull] = useState(false)

  useEffect(() => {
    newIndex(as4letraschosenfunctionsindex)
    newChosenfns(as4letraschosenfunctions)
    newType(type)
    typeTranslator(type)
  }, [])
  
  //self:
  const as4letraschosen = as4letras.filter((duckType) => {  
    return duckType.name === type
  }) 
  const as4letraschosenfunctions = as4letraschosen.map(duckType => { 
    return {
      f1: duckType.f1, f2: duckType.f2, f3: duckType.f3, f4: duckType.f4, f5: duckType.f5, f6: duckType.f6, f7: duckType.f7, f8: duckType.f8
    }
  }) 
  const as4letraschosenfunctionsvalues = [] 
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f1))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f2))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f3))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f4))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f5))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f6))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f7))
  as4letraschosenfunctionsvalues.push(as4letraschosenfunctions.map(d => d.f8))

  const originalfunctions = fn.map(d => { return d.name }) 

  //custom:
  const originalfunctionsindex = Object.fromEntries(originalfunctions.map((k, i) => [k, i]))  //cria um objeto com os valores das fn na ordem certa
  const as4letraschosenfunctionsindex = as4letraschosenfunctionsvalues.map(k => originalfunctionsindex[k]); //cria um novo array com valores que representam indices do
  //console.log(originalfunctionsindex)
  //console.log(as4letraschosenfunctionsindex)

  console.log("----")
  console.log("categoria",categoryMenu)
  console.log("%%%%No Chosen",type)
  
  return (
      <div className="home4letraschosen">
        <MenuRoll categoryMenu={categoryMenu} newType={newType} type={type} chosen={"-chosen/"} direct={false} stick={false} />
        <Subtitle categoryMenu={categoryMenu} type={type} />
        <As4LetrasTabela type={type} as4letraschosenfunctions={as4letraschosenfunctions} as4letraschosenfunctionsindex={as4letraschosenfunctionsindex} />
        <Link style={{textDecoration: 'none', color: '#ffffff'}} to={`/t/as4letras/${type}`} ><div className="as4letraschosen-desktop-botao">{`${as4letrasChosenBotao[0].pt}`+` `+`${type}`}</div></Link>
        <div></div>
        <Rodape />
      </div>
  );
}

export default Home4LetrasChosen;