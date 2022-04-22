import React, { useState, useEffect, createContext } from "react";
import "./assets/css/style.css";
import { BrowserRouter as PersonalityPipe, Route, Routes, Switch } from "react-router-dom";
import { as4letrasx as as4letrasx } from "./components/Arrays.tsx";
import { fnx } from "./components/Arrays.tsx";
import { jungx } from "./components/Arrays.tsx";

import Header from "./components/Header";
import Title from "./components/Title";
import Headings from "./components/Headings";
import HiddenMenu from "./components/HiddenMenu";

import Home4LetrasAll from "./paginas/4letras/Home4LetrasAll";
import Home4LetrasChosen from "./paginas/4letras/Home4LetrasChosen"
import As4Letras from "./paginas/4letras/As4Letras";
import HomeJungAll from "./paginas/jung/HomeJungAll";
import Jung from "./paginas/jung/Jung";
import HomeFnAll from "./paginas/fn/HomeFnAll";
import Fn from "./paginas/fn/Fn";

/*Menores:*/
import Page404 from "./paginas/minor/Page404";
import About from "./paginas/minor/About";
import Books from "./paginas/minor/Books";
import Contact from "./paginas/minor/Contact";
import SiteMap from "./paginas/minor/SiteMap";
import Teory from "./paginas/minor/Teory";
import Tests from "./paginas/minor/Tests";
import Typologies from "./paginas/minor/Typologies";

/*
BrowserRouter: Envolve todos os componentes a serem renderizados via React Router DOM | ...
Routes: ...
Route: Elemento onde consta o caminho no nevegador necessário para que a rota seja formada, o seja, para que o componente seja renderizado
--path:
--exact:
--element: component a ser renderizado (no caso do Route atender aos critérios)
Link:
--to:
*/
export const TypeContext = createContext()

function App() {
  const [all, setAll] = useState("Todos")
  const [type, setType] = useState("Todos")
  const [index, setIndex] = useState([])
  const [chosenfns, setChosenfns] = useState([])
  const [numCode, setNumCode] = useState()
  const [minor, setMinor] = useState(false)
  const [hiddenMenu, setHiddenMenu] = useState(false)

  function onHiddenMenu() {
    if (hiddenMenu === false) {
      setHiddenMenu(true)
    }
    else {
      setHiddenMenu(false)
    }
  }
  const newMinor = (stateOf) => {
    setMinor(stateOf)
  }
  const newChosenfns = (newChosenfns) => {
    setChosenfns(newChosenfns)
  }
  const newIndex = (newIndex) => {
    setIndex(newIndex)
  }
  const newType = (newType) => {
    if (newType != undefined) {
    setType(newType) }
    else if (newType === undefined) {
    setType("Todos")
    }
  }
  const typeTranslator = (type) => {
    if (type === undefined) { 
      setNumCode("0")
    }
    else if (type === "Fe" || "Fi" || "Te" || "Ti" || "Se" || "Si" || "Ne" || "Ni") {
      for (var i=0; i<=8; i++) {
        if (type === fnx[i].name) { setNumCode(i) }
      }
    }
    else {
      for (var i=0; i<=16; i++) {
        if (type === as4letrasx[i].name) { setNumCode(i) }
      }
    }
  }

  console.log("App",type)

  return (
    <TypeContext.Provider value={{type, index, chosenfns, numCode, onHiddenMenu}}>
    <PersonalityPipe>
      <HiddenMenu hiddenMenu={hiddenMenu} onHiddenMenu={onHiddenMenu} />
      <Header onHiddenMenu={onHiddenMenu} />
      { minor ? null : <Title all={all} newType={newType} /> }
      <Routes>
        {/*Home:*/}
        <Route path="/" element={<Home4LetrasAll categoryMenu={"as4letras"} type={type} newType={newType} />} /> {/*Excluir linha*/}
        {/*Encontradas no menu lateral:*/}
        <Route path="/y" element={<Page404 />} />
        <Route path="/sobre" element={<About newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/livros" element={<Books newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/teoria" element={<Teory newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/testes" element={<Tests newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/contato" element={<Contact newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/sitemap" element={<SiteMap newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/typologies" element={<Typologies newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        <Route path="/tipologias" element={<Typologies newMinor={newMinor} onHiddenMenu={onHiddenMenu} />} />
        {/*4 Letras:*/}
        <Route path="/t/as4letras" element={<Home4LetrasAll categoryMenu={"as4letras"} type={type} newType={newType} newMinor={newMinor} />} /> {/*Home com panorama*/}
        <Route path="/t/as4letras-chosen" element={<Home4LetrasChosen categoryMenu={"as4letras"} type={type} newType={newType} newIndex={newIndex} newChosenfns={newChosenfns} typeTranslator={typeTranslator} />} /> {/*Home com 1 tipo*/}
        <Route path="/t/as4letras/ENTP" element={<As4Letras categoryMenu={"as4letras"} type={"ENTP"} newType={newType} numCode={1} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ENTJ" element={<As4Letras categoryMenu={"as4letras"} type={"ENTJ"} newType={newType} numCode={2} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/INTP" element={<As4Letras categoryMenu={"as4letras"} type={"INTP"} newType={newType} numCode={3} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/INTJ" element={<As4Letras categoryMenu={"as4letras"} type={"INTJ"} newType={newType} numCode={4} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ESTJ" element={<As4Letras categoryMenu={"as4letras"} type={"ESTJ"} newType={newType} numCode={5} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ESFJ" element={<As4Letras categoryMenu={"as4letras"} type={"ESFJ"} newType={newType} numCode={6} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ISTJ" element={<As4Letras categoryMenu={"as4letras"} type={"ISTJ"} newType={newType} numCode={7} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ISFJ" element={<As4Letras categoryMenu={"as4letras"} type={"ISFJ"} newType={newType} numCode={8} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ESTP" element={<As4Letras categoryMenu={"as4letras"} type={"ESTP"} newType={newType} numCode={9} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ESFP" element={<As4Letras categoryMenu={"as4letras"} type={"ESFP"} newType={newType} numCode={10} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ISTP" element={<As4Letras categoryMenu={"as4letras"} type={"ISTP"} newType={newType} numCode={11} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ISFP" element={<As4Letras categoryMenu={"as4letras"} type={"ISFP"} newType={newType} numCode={12} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ENFJ" element={<As4Letras categoryMenu={"as4letras"} type={"ENFJ"} newType={newType} numCode={13} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/ENFP" element={<As4Letras categoryMenu={"as4letras"} type={"ENFP"} newType={newType} numCode={14} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/INFJ" element={<As4Letras categoryMenu={"as4letras"} type={"INFJ"} newType={newType} numCode={15} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/as4letras/INFP" element={<As4Letras categoryMenu={"as4letras"} type={"INFP"} newType={newType} numCode={16} />} /> {/*O tipo em detalhes*/}
        {/*Funções Cognintivas:*/}
        <Route path="/t/fn" element={<HomeFnAll categoryMenu={"fn"} type={type} newType={newType} />} /> {/*Home com panorama*/}
        <Route path="/t/fn/Fe" element={<Fn categoryMenu={"fn"} type={"Fe"} numCode={"1"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Fi" element={<Fn categoryMenu={"fn"} type={"Fi"} numCode={"2"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Te" element={<Fn categoryMenu={"fn"} type={"Te"} numCode={"3"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Ti" element={<Fn categoryMenu={"fn"} type={"Ti"} numCode={"4"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Se" element={<Fn categoryMenu={"fn"} type={"Se"} numCode={"5"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Si" element={<Fn categoryMenu={"fn"} type={"Si"} numCode={"6"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Ne" element={<Fn categoryMenu={"fn"} type={"Ne"} numCode={"7"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/fn/Ni" element={<Fn categoryMenu={"fn"} type={"Ni"} numCode={"8"} />} /> {/*O tipo em detalhes*/}
        {/*Jung:*/}
        <Route path="/t/jung" element={<HomeJungAll categoryMenu={"jung"} />} /> {/*Home com panorama*/}
        <Route path="/t/jung/TipoFe" element={<Jung categoryMenu={"jung"} type={"Fe"} numCode={"1"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoFi" element={<Jung categoryMenu={"jung"} type={"Fi"} numCode={"2"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoTe" element={<Jung categoryMenu={"jung"} type={"Te"} numCode={"3"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoTi" element={<Jung categoryMenu={"jung"} type={"Ti"} numCode={"4"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoSe" element={<Jung categoryMenu={"jung"} type={"Se"} numCode={"5"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoSi" element={<Jung categoryMenu={"jung"} type={"Si"} numCode={"6"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoNe" element={<Jung categoryMenu={"jung"} type={"Ne"} numCode={"7"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoNi" element={<Jung categoryMenu={"jung"} type={"Ni"} numCode={"8"} />} /> {/*O tipo em detalhes*/}
      </Routes>
    </PersonalityPipe>
    </TypeContext.Provider>
  );
}

export default App;

/* ./ Same folder
../../          Out of 2 folders
../../../       Out of 3 folders
../../../../    Out of 4 folders */