import React, { useState, useEffect, createContext } from "react";
import "./assets/css/style.css";
import { BrowserRouter as PersonalityPipe, Route, Routes, Switch, useParams } from "react-router-dom";
import { as4letrasx as as4letrasx } from "./components/Arrays.tsx";
import { fnx } from "./components/Arrays.tsx";
import { jungx } from "./components/Arrays.tsx";

import Header from "./components/Header";
import Title from "./components/Title";
import Headings from "./components/Headings";
import HiddenMenu from "./components/HiddenMenu";
import Rodape from "./components/Rodape";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home4LetrasAll from "./paginas/4letras/Home4LetrasAll";
import Home4LetrasChosen from "./paginas/4letras/Home4LetrasChosen"
// import Home4LetrasChosenDirect from "./paginas/4letras/Home4LetrasChosenDirect"
import As4Letras from "./paginas/4letras/As4Letras";
import As4LetrasDirect from "./paginas/4letras/As4LetrasDirect";
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
import RelatedTypes from "./components/RelatedTypes";
import Welcome from "./paginas/minor/Welcome";

export const TypeContext = createContext()

function App() {
  const [all, setAll] = useState("Todos")
  const [label, setLabel] = useState()
  const [welcome, setWelcome] = useState(false)
  /*States dos/para componentes:*/
  const [type, setType] = useState()
  const [index, setIndex] = useState([])
  const [chosenfns, setChosenfns] = useState([])
  const [numCode, setNumCode] = useState()
  const [titleStyle, setTitleStyle] = useState("out")
  /*Elementos perpétuos da páginas:*/
  const [empty, setEmpty] = useState(true)
  const [navigation, setNavigation] = useState(false) //Manual no momento
  const [major, setMajor] = useState(true)
  const [hiddenMenu, setHiddenMenu] = useState(false)
  
  function onHiddenMenu() { //Booleano
    if (hiddenMenu === false) {
      setHiddenMenu(true)
    }
    else {
      setHiddenMenu(false)
    }
  }
  function onMenuState(value) {
    setHiddenMenu(value)
  }
  function onEmpty() {
    setEmpty(false)
  }
  function onMajor(value) {
    setMajor(value)
  }
  const newChosenfns = (newChosenfns) => { //Gerado no filho
    setChosenfns(newChosenfns)
  }
  const newIndex = (newIndex) => { //Gerado no filho
    setIndex(newIndex)
  }
  const newType = (newType) => { //Gerado aqui
    if (newType != undefined) {
    setType(newType) }
    else if (newType === undefined) {
    setType("Todos")
    }
  }
  const newTitle = (value) => {
    setTitleStyle(value)
  }
  const newLabel = (value) => {
    if (value === "1") { setLabel("Tipologia das \"4 Letras\"") }
    else if (value === "2") { setLabel("Tipologia Jungiana Tradicional") }
    else if (value === "3") { setLabel("As Funções Cognitivas") }
  }
  const typeTranslator = (type) => { //Gerado aqui
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
  if (welcome) {
    return (
      <PersonalityPipe>
        <Welcome/>
      </PersonalityPipe>
    )
  }

  return (
    <TypeContext.Provider value={{type, index, label, newLabel, titleStyle, newTitle, chosenfns, numCode, onHiddenMenu}}>
    <PersonalityPipe>
      <ScrollToTop/>
      <ScrollToTopButton/>
      <HiddenMenu hiddenMenu={hiddenMenu} onHiddenMenu={onHiddenMenu} onMenuState={onMenuState} />
      <Header onHiddenMenu={onHiddenMenu} />
      {major ? <Title all={all} newType={newType}/> : null}
      <Routes>
        {/*Home:*/}
        <Route index element={<Home4LetrasAll categoryMenu={"as4letras"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} type={type} newType={newType} />} />
        <Route path="/" element={<Home4LetrasAll categoryMenu={"as4letras"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} type={type} newType={newType} />} />
        {/*Acessíveis pelo menu lateral:*/}
        <Route path="/y" element={<Page404 onMajor={onMajor} />} />
        <Route path="/sobre"  element={<About onMajor={onMajor} />} />
        <Route path="/livros" element={<Books onMajor={onMajor} />} />
        <Route path="/teoria" element={<Teory onMajor={onMajor} />} />
        <Route path="/testes" element={<Tests onMajor={onMajor} />} />
        <Route path="/contato" element={<Contact onMajor={onMajor} />} />
        <Route path="/sitemap" element={<SiteMap onMajor={onMajor} />} />
        {/*x*/}
        {/*4 Letras:*/}
        <Route path="/t" element={<Typologies onHiddenMenu={onHiddenMenu} onMajor={onMajor} />} />
        <Route path="/typologies" element={<Typologies onHiddenMenu={onHiddenMenu} onMajor={onMajor} />} />
        <Route path="/tipologias" element={<Typologies onHiddenMenu={onHiddenMenu} onMajor={onMajor} />} />
        <Route path="/t/as4letras" element={<Home4LetrasAll categoryMenu={"as4letras"} onMajor={onMajor} newLabel={newLabel} newTitle={newTitle} type={type} newType={newType} />} />
        <Route path="/t/as4letras-chosen" element={<Home4LetrasChosen categoryMenu={"as4letras"} onMajor={onMajor} newLabel={newLabel} newTitle={newTitle} type={type} onEmpty={onEmpty} newType={newType} newIndex={newIndex} newChosenfns={newChosenfns} typeTranslator={typeTranslator} />} />
        {navigation === true ? 
        <Route path="/t/as4letras">
          <Route path="ENTP" element={<As4Letras categoryMenu={"as4letras"} type={"ENTP"} newType={newType} numCode={1} />} />
          <Route path="ENTJ" element={<As4Letras categoryMenu={"as4letras"} type={"ENTJ"} newType={newType} numCode={2} />} />
          <Route path="INTP" element={<As4Letras categoryMenu={"as4letras"} type={"INTP"} newType={newType} numCode={3} />} />
          <Route path="INTJ" element={<As4Letras categoryMenu={"as4letras"} type={"INTJ"} newType={newType} numCode={4} />} />
          <Route path="ESTJ" element={<As4Letras categoryMenu={"as4letras"} type={"ESTJ"} newType={newType} numCode={5} />} />
          <Route path="ESFJ" element={<As4Letras categoryMenu={"as4letras"} type={"ESFJ"} newType={newType} numCode={6} />} />
          <Route path="ISTJ" element={<As4Letras categoryMenu={"as4letras"} type={"ISTJ"} newType={newType} numCode={7} />} />
          <Route path="ISFJ" element={<As4Letras categoryMenu={"as4letras"} type={"ISFJ"} newType={newType} numCode={8} />} />
          <Route path="ESTP" element={<As4Letras categoryMenu={"as4letras"} type={"ESTP"} newType={newType} numCode={9} />} />
          <Route path="ESFP" element={<As4Letras categoryMenu={"as4letras"} type={"ESFP"} newType={newType} numCode={10} />} />
          <Route path="ISTP" element={<As4Letras categoryMenu={"as4letras"} type={"ISTP"} newType={newType} numCode={11} />} />
          <Route path="ISFP" element={<As4Letras categoryMenu={"as4letras"} type={"ISFP"} newType={newType} numCode={12} />} />
          <Route path="ENFJ" element={<As4Letras categoryMenu={"as4letras"} type={"ENFJ"} newType={newType} numCode={13} />} />
          <Route path="ENFP" element={<As4Letras categoryMenu={"as4letras"} type={"ENFP"} newType={newType} numCode={14} />} />
          <Route path="INFJ" element={<As4Letras categoryMenu={"as4letras"} type={"INFJ"} newType={newType} numCode={15} />} />
          <Route path="INFP" element={<As4Letras categoryMenu={"as4letras"} type={"INFP"} newType={newType} numCode={16} />} />
        </Route> : null}
        {/*Renderização direta:*/}
        {navigation === false ? 
        <>
        <Route path="/t/as4letras/ENTP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ENTP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={1} chosenfns2={[{f1: "Ne", f2: "Ti", f3: "Fe", f4: "Si", f5: "Ni", f6: "Te", f7: "Fi", f8: "Se"}]} index2={[7, 4, 1, 6, 8, 3, 2, 5]} />} />
        <Route path="/t/as4letras/INTP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"INTP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={3} chosenfns2={[{f1: "Ti", f2: "Ne", f3: "Si", f4: "Fe", f5: "Te", f6: "Ni", f7: "Se", f8: "Fi"}]} index2={[4, 7, 6, 1, 3, 8, 5, 2]} />} />
        <Route path="/t/as4letras/ENTJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ENTJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={2} chosenfns2={[{f1: "Te", f2: "Ni", f3: "Se", f4: "Fi", f5: "Ti", f6: "Ne", f7: "Si", f8: "Fe"}]} index2={[3, 8, 5, 2, 4, 7, 6, 1]} />} />
        <Route path="/t/as4letras/INTJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"INTJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={4} chosenfns2={[{f1: "Ni", f2: "Te", f3: "Fi", f4: "Se", f5: "Ne", f6: "Ti", f7: "Fe", f8: "Si"}]} index2={[8, 3, 2, 5, 7, 4, 1, 6]} />} />
        <Route path="/t/as4letras/ESTJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ESTJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={5} chosenfns2={[{f1: "Te", f2: "Si", f3: "Ne", f4: "Fi", f5: "Ti", f6: "Se", f7: "Ni", f8: "Fe"}]} index2={[3, 6, 7, 2, 4, 5, 8, 1]} />} />
        <Route path="/t/as4letras/ESFJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ESFJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={6} chosenfns2={[{f1: "Fe", f2: "Si", f3: "Ne", f4: "Ti", f5: "Fi", f6: "Se", f7: "Ni", f8: "Te"}]} index2={[1, 6, 7, 4, 2, 5, 8, 3]} />} />
        <Route path="/t/as4letras/ISTJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ISTJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={7} chosenfns2={[{f1: "Si", f2: "Te", f3: "Fi", f4: "Ne", f5: "Se", f6: "Ti", f7: "Fe", f8: "Ni"}]} index2={[6, 3, 2, 7, 5, 4, 1, 8]} />} />
        <Route path="/t/as4letras/ISFJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ISFJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={8} chosenfns2={[{f1: "Si", f2: "Fe", f3: "Ti", f4: "Ne", f5: "Se", f6: "Fi", f7: "Te", f8: "Ni"}]} index2={[6, 1, 4, 7, 5, 2, 3, 8]} />} />
        <Route path="/t/as4letras/ESTP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ESTP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={9} chosenfns2={[{f1: "Se", f2: "Ti", f3: "Fe", f4: "Ni", f5: "Si", f6: "Te", f7: "Fi", f8: "Ne"}]} index2={[5, 4, 1, 8, 6, 3, 2, 7]} />} />
        <Route path="/t/as4letras/ESFP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ESFP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={10} chosenfns2={[{f1: "Se", f2: "Fi", f3: "Te", f4: "Ni", f5: "Si", f6: "Fe", f7: "Ti", f8: "Ne"}]} index2={[5, 2, 3, 8, 6, 1, 4, 7]} />} />
        <Route path="/t/as4letras/ISTP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ISTP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={11} chosenfns2={[{f1: "Ti", f2: "Se", f3: "Ni", f4: "Fe", f5: "Te", f6: "Si", f7: "Ne", f8: "Fi"}]} index2={[4, 5, 8, 1, 3, 6, 7, 2]} />} />
        <Route path="/t/as4letras/ISFP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ISFP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={12} chosenfns2={[{f1: "Fi", f2: "Se", f3: "Ni", f4: "Te", f5: "Fe", f6: "Si", f7: "Ne", f8: "Ti"}]} index2={[2, 5, 8, 3, 1, 6, 7, 4]} />} />
        <Route path="/t/as4letras/ENFJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ENFJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={13} chosenfns2={[{f1: "Fe", f2: "Ni", f3: "Se", f4: "Ti", f5: "Fi", f6: "Ne", f7: "Si", f8: "Te"}]} index2={[1, 8, 5, 4, 2, 7, 6, 3]} />} />
        <Route path="/t/as4letras/ENFP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"ENFP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={14} chosenfns2={[{f1: "Ne", f2: "Fi", f3: "Te", f4: "Si", f5: "Ni", f6: "Fe", f7: "Ti", f8: "Se"}]} index2={[7, 2, 3, 6, 8, 1, 4, 5]} />} />
        <Route path="/t/as4letras/INFJ" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"INFJ"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={15} chosenfns2={[{f1: "Ni", f2: "Fe", f3: "Ti", f4: "Se", f5: "Ne", f6: "Fi", f7: "Te", f8: "Si"}]} index2={[8, 1, 4, 5, 7, 2, 3, 6]} />} />
        <Route path="/t/as4letras/INFP" element={<As4LetrasDirect categoryMenu={"as4letras"} type={"INFP"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} newType={newType} numCode={16} chosenfns2={[{f1: "Fi", f2: "Ne", f3: "Si", f4: "Te", f5: "Fe", f6: "Ni", f7: "Se", f8: "Ti"}]} index2={[2, 7, 6, 3, 1, 8, 5, 4]} />} />
        </> : null}
        {/*x*/}
        {/*Funções Cognintivas:*/}
        <Route path="/t/fn" element={<HomeFnAll categoryMenu={"fn"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} type={type} newType={newType} />} />
        <Route path="/t/fn">
          <Route path="Fe" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Fe"} newTitle={newTitle} newLabel={newLabel} numCode={"1"} />} />
          <Route path="Fi" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Fi"} newTitle={newTitle} newLabel={newLabel} numCode={"2"} />} />
          <Route path="Te" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Te"} newTitle={newTitle} newLabel={newLabel} numCode={"3"} />} />
          <Route path="Ti" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Ti"} newTitle={newTitle} newLabel={newLabel} numCode={"4"} />} />
          <Route path="Se" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Se"} newTitle={newTitle} newLabel={newLabel} numCode={"5"} />} />
          <Route path="Si" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Si"} newTitle={newTitle} newLabel={newLabel} numCode={"6"} />} />
          <Route path="Ne" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Ne"} newTitle={newTitle} newLabel={newLabel} numCode={"7"} />} />
          <Route path="Ni" element={<Fn categoryMenu={"fn"} onMajor={onMajor} type={"Ni"} newTitle={newTitle} newLabel={newLabel} numCode={"8"} />} />
        </Route>
        {/*Jung:*/}
        <Route path="/t/jung" element={<HomeJungAll categoryMenu={"jung"} onMajor={onMajor} newTitle={newTitle} newLabel={newLabel} />} />
        <Route path="/t/jung/TipoFe" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Fe"} newTitle={newTitle} newLabel={newLabel} numCode={"1"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoFi" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Fi"} newTitle={newTitle} newLabel={newLabel} numCode={"2"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoTe" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Te"} newTitle={newTitle} newLabel={newLabel} numCode={"3"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoTi" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Ti"} newTitle={newTitle} newLabel={newLabel} numCode={"4"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoSe" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Se"} newTitle={newTitle} newLabel={newLabel} numCode={"5"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoSi" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Si"} newTitle={newTitle} newLabel={newLabel} numCode={"6"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoNe" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Ne"} newTitle={newTitle} newLabel={newLabel} numCode={"7"} />} /> {/*O tipo em detalhes*/}
        <Route path="/t/jung/TipoNi" element={<Jung categoryMenu={"jung"} onMajor={onMajor} type={"Ni"} newTitle={newTitle} newLabel={newLabel} numCode={"8"} />} /> {/*O tipo em detalhes*/}
        {/*404:*/}
        <Route path="*" element={<Page404 onMajor={onMajor} />} />
      </Routes>
      <Rodape />
    </PersonalityPipe>
    </TypeContext.Provider>
  );
}

export default App;

/* ./ Same folder
../../          Out of 2 folders
../../../       Out of 3 folders
../../../../    Out of 4 folders */