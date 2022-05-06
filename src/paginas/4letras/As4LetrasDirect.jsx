import React, { useState, useEffect, useRef } from "react";
import "../assets/MainPages.css";

import { TypeContext as TypeContext } from "../../App.jsx";
import BackMenu from "../../components/BackMenu";
import Avatar from "../../components/Avatar";
import Badges from "../../components/Badges";
import Warnings from "../../components/Warnings";
import As4LetrasTabela from "./components/As4LetrasTabela.jsx";
import Rodape from "../../components/Rodape";
import Couples from "../../components/Couples";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper'; /*Kinda OK*/
import MenuItem from '@mui/material/MenuItem'; /*OK*/
import MenuList from '@mui/material/MenuList'; 
import Stack from '@mui/material/Stack';

import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import { genericComments as genericComments } from "../../components/Arrays.tsx";
import { as4LetrasTraitsEn as as4LetrasTraitsEn } from "../../components/LongTexts.tsx";
import { as4LetrasTraits as as4LetrasTraits } from "../../components/LongTexts.tsx";
import { as4LetrasDevelopment as as4LetrasDevelopment }  from "../../components/LongTexts.tsx";
import { as4LetrasRoles as as4LetrasRoles }  from "../../components/LongTexts.tsx";
import { as4LetrasIdentity as as4LetrasIdentity }  from "../../components/LongTexts.tsx";
import { as4LetrasCouples as as4LetrasCouples }  from "../../components/LongTexts.tsx";
import { as4LetrasStory as as4LetrasStory } from "../../components/LongTexts.tsx"
import { fnAsPrincipalEn as fnAsPrincipalEn } from "../../components/LongTexts.tsx"; 
import { fnAsAuxiliaryEn as fnAsAuxiliaryEn } from "../../components/LongTexts.tsx";
import { fnAsPrincipal as fnAsPrincipal } from "../../components/LongTexts.tsx";
import { fnAsAuxiliary as fnAsAuxiliary } from "../../components/LongTexts.tsx";
import { fnAs3 as fnAs3 } from "../../components/LongTexts.tsx";
import { fnAs3En as fnAs3En } from "../../components/LongTexts.tsx";
import { fnAs4 as fnAs4 } from "../../components/LongTexts.tsx";
import { fnAs4En as fnAs4En } from "../../components/LongTexts.tsx";
import { fnAs5 as fnAs5 } from "../../components/LongTexts.tsx";
import { fnAs5En as fnAs5En } from "../../components/LongTexts.tsx";
import { fnAs6 as fnAs6 } from "../../components/LongTexts.tsx";
import { fnAs6En as fnAs6En } from "../../components/LongTexts.tsx";
import { fnAs7 as fnAs7 } from "../../components/LongTexts.tsx";
import { fnAs7En as fnAs7En } from "../../components/LongTexts.tsx";
import { fnAs8 as fnAs8 } from "../../components/LongTexts.tsx";
import { fnAs8En as fnAs8En } from "../../components/LongTexts.tsx";

function As4Letras({ type, numCode, onMajor, newTitle, newLabel, chosenfns2, index2 }) {
  /*On behalf of Menu*/
  const [openA, setOpenA] = useState(false)
  const [openB, setOpenB] = useState(false)
  const anchorRefA = useRef(null)  /*Check*/
  const anchorRefB = useRef(null)

  const handleToggleA = () => {
    setOpenA((prevOpen) => !prevOpen);
  }
  const handleToggleB = () => {
    setOpenB((prevOpen) => !prevOpen);
  }
  const handleCloseA = (event) => {
    if (anchorRefA.current || anchorRefA.current.contains(event.target)) {
      return;
    }
    setOpenA(false);
  }
  const handleCloseB = (event) => {
    if (anchorRefB.current || anchorRefB.current.contains(event.target)) {
      return;
    }
    setOpenB(false);
  }
  const handleCloseAll = (event) => {
    setOpenB(false); setOpenA(false)
  }
  function handleListKeyDownA(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenA(false);
    } else if (event.key === 'Escape') {
      setOpenA(false);
    }
  }
  function handleListKeyDownB(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenB(false);
    } else if (event.key === 'Escape') {
      setOpenB(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpenA = useRef(openA)
  const prevOpenB = useRef(openB)

  useEffect(() => {
    if (prevOpenA.current === true && openA === false) {
      anchorRefA.current.focus();
    }
    prevOpenA.current = openA;
  }, [openA])
  useEffect(() => {
    if (prevOpenB.current === true && openB === false) {
      anchorRefB.current.focus();
    }
    prevOpenB.current = openB;
  }, [openB])

  /*Tipos e etc:*/
  const [the, setThe] = useState("Os") /*Provisório, pré-typescript*/
  /*x*/
  const [colorSide, setColorSide] = useState("#888888")
  const [coupleTypeA, setCoupleTypeA] = useState(type)
  const [coupleTypeB, setCoupleTypeB] = useState(type)
  const [colorA, setColorA] = useState('#fffcec')
  const [colorB, setColorB] = useState('#fffcec')

  const as4letras1 = as4letras[1].name; 
  const as4letras2 = as4letras[2].name;
  const as4letras3 = as4letras[3].name;
  const as4letras4 = as4letras[4].name;
  const as4letras5 = as4letras[5].name;
  const as4letras6 = as4letras[6].name;
  const as4letras7 = as4letras[7].name;
  const as4letras8 = as4letras[8].name;
  const as4letras9 = as4letras[9].name;
  const as4letras10 = as4letras[10].name;
  const as4letras11 = as4letras[11].name;
  const as4letras12 = as4letras[12].name;
  const as4letras13 = as4letras[13].name;
  const as4letras14 = as4letras[14].name;
  const as4letras15 = as4letras[15].name;
  const as4letras16 = as4letras[16].name;
  let nt = "#E25866"
  let sj = "#28BEF0"
  let sp = "#F7D724"
  let nf = "#39DF5A"

  useEffect(() => {
    if (numCode === 9 || 10 || 11 || 12) { 
      setColorSide(sp)
    } else if (numCode === 13 || 14 || 15 || 16) {
      setColorSide(nf)
    } else if (numCode === 1 || 2 || 3 || 4) {
      setColorSide(nt)
    } else if (numCode === 5 || 6 || 7 || 8) {
      setColorSide(sj)
    }
  }, [])
  
  useEffect(() => {
    onMajor(true)
    newTitle("in")
    newLabel("1")
  }, [])

  /*type: a personalidade | numCode: a personalidade em forma de numero | chosenfns: a lista literal de funções | index: essa lista em numeros */
  
  return (
    <>
        <div className="as4letras-wrapper">
          {/* <BackMenu type={type} /> */}
          <div className="as4letras-mobile">
            <div className="as4letras-mobile-visitcard">
                <div className="mobile-vc-1"></div>
                <div className="mobile-vc-2">
                  <Avatar url="as4letras" type={type} size="23rem" />
                  <div>{type}</div>
                  <div>{as4letras[numCode].catch}</div> {/*Frase de efeito*/}
                </div>
                <div className="mobile-vc-3">
                  <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i1">1. Traços</a></div>
                  <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i2">2. História (em breve)</a></div>
                  <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i3">3. "Papéis" na personalidade</a></div>
                  <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i4">4. Identidade e diferenciação</a></div>
                  <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i5">5. Desenvolvimento pessoal</a></div>
                  <div className="mobile-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i6">6. Casais (em breve)</a></div>
                </div>
            </div>
          </div>
          
          <div className="as4letras-desktop">
            <div className="as4letras-desktop-visitcard">
              <div className="desktop-vc-1"></div>
              <div className="desktop-vc-2">
                <Avatar url="as4letras" type={type} size="21rem" />
                <div>{type}</div>
                <div>{as4letras[numCode].catch}</div> {/*Frase de efeito*/}
              </div>
              <div className="desktop-vc-3">
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i1">1. Traços</a></div> {/*OK*/}
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i2">2. História (em breve)</a></div> {/*OK*/}
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i3">3. "Papéis" na personalidade</a></div> 
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i4">4. Identidade e diferenciação</a></div>  
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i5">5. Desenvolvimento pessoal</a></div> 
                <div className="desktop-vc-3-indice"><a style={{ textDecoration: "none", color: "inherit" }} href="#a4i6">6. Casais (em breve)</a></div> {/*OK*/}
              </div>
            </div>

            <div className="as4letras-desktop-textos">
              <div className="as4letras-textos-summary" style={{paddingTop: '0.3rem'}}>
                <div>
                  <div style={{borderLeft: `4px solid ${colorSide}` }}>
                    <div style={{ fontSize: "1.5em", display: "inline" }}>
                      ‟{the} {type}s{" "}
                    </div>
                    {as4letras[numCode].desc}“ <div>xx</div> {/*Descrição*/}
                  </div>
                  <Warnings typo="as4letras" about="summary" size="770px" />
                </div>
              </div>

              <As4LetrasTabela 
                type={type}
                as4letraschosenfunctions={chosenfns2}
                as4letraschosenfunctionsindex={index2}
                pagina={false}
              />
              <div className="as4letras-textos-stack">
                <div>
                  <Warnings typo="as4letras" about="stack" size="770px" />
                </div>
              </div>

              <div id="a4i1" className="as4letras-textos-traits"> {/*Traços*/}
                <h1>Traços</h1>
                <div>
                  <div>
                    <div>
                      <div className="a4l-texto-start">
                        {as4LetrasTraits[numCode].trait1}
                      </div>
                      <div className="a4l-texto-body">
                        {as4LetrasTraits[numCode].traittext1}
                      </div>
                      <div className="a4l-texto-start">
                        {as4LetrasTraits[numCode].trait2}
                      </div>
                      <div className="a4l-texto-body">
                        {as4LetrasTraits[numCode].traittext2}
                      </div>
                      <div className="a4l-texto-start">
                        {as4LetrasTraits[numCode].trait3}
                      </div>
                      <div className="a4l-texto-body last-body">
                        {as4LetrasTraits[numCode].traittext3}
                      </div>
                      <div>Fonte: Personality Junkie</div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i2" className="as4letras-textos-story">
                <h1>História</h1>
                <div>
                  <div>
                    <div className="a4l-texto-start">
                      {as4LetrasStory[numCode].phase1}
                    </div>
                    <div className="a4l-texto-body">
                      {as4LetrasStory[numCode].phasetext1}
                    </div>
                    <div className="a4l-texto-start">
                      {as4LetrasStory[numCode].phase1}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', fontStyle: 'italic', color: '#9a9a9a', fontSize: '2rem', padding: '0px 0px 0.4rem 0px', borderRadius: '17px', border: '1px solid #aaaaaa', margin: '0 auto', width: '10rem', marginTop: '3.2rem', marginBottom: '2.4rem'}}><div>Em breve</div></div>
                    <div className="a4l-texto-body">
                      {as4LetrasStory[numCode].phasetext1}
                    </div>
                    <div className="a4l-texto-start">
                      {as4LetrasStory[numCode].phase1}
                    </div>
                    <div className="a4l-texto-body last-body">
                      {as4LetrasStory[numCode].phasetext1}
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i3" className="as4letras-textos-roles">
                <h1>"Papéis" na personalidade</h1>
                <div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[0]} role="x1" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[0]].name} como Dominante
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAsPrincipal[index2[0]].as}
                      </div>
                    </div>
                  </div>

                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[1]} role="x2" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[1]].name} como Auxiliar
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAsAuxiliary[index2[1]].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[2]} role="x3" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[2]].name} como Terciária
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs3[index2[2]].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[3]} role="x4" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[3]].name} como Inferior
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs4[index2[3]].as}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[4]} role="x5" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[4]].name} como 5ª (Oponente)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs5[0].as}{fn[index2[4]].desc}{` (`}{fn[index2[4]].name}{`)`}{fnAs5[0].asExtra}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[5]} role="x6" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[5]].name} como 6ª (Sábio/Bruxa)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs6[0].as}{fn[index2[5]].desc}{` (`}{fn[index2[5]].name}{`)`}{fnAs6[0].asExtra}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[6]} role="x7" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[6]].name} como 7ª (Pregador de peças)
                      </div>
                      <div className="a4l-texto-body body-2">
                        {fnAs7[0].as}{fn[index2[6]].desc}{` (`}{fn[index2[6]].name}{`)`}{fnAs7[0].asExtra}
                      </div>
                    </div>
                  </div>
                  <div className="a4-texto-flexbox">
                    <div>
                      <Badges url="as4l" index={index2[7]} role="x8" size="9rem" />
                    </div>
                    <div>
                      <div className="a4l-texto-start start-2">
                        {fn[index2[7]].name} como 8ª (Maléfico)
                      </div>
                      <div className="a4l-texto-body body-3 last-body">
                        {fnAs8[0].as}{fn[index2[7]].desc}{` (`}{fn[index2[7]].name}{`)`}{fnAs8[0].asExtra}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i4" className="as4letras-textos-identity">
                <h1>Identidade e diferenciação</h1>
                <div>
                  <div style={{ marginTop: "0.6em", marginBottom: "3.1em" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start">
                        {/* {as4LetrasIdentity[numCode].pair} */}
                      </div>
                      <div className="a4l-texto-body">
                        {/* {as4LetrasIdentity[numCode].pairdesc} */}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "0em" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Badges url="as4l" numCode={numCode} role="x1" size="9" />
                    </div>
                    <div>
                      <div className="a4l-texto-start">
                        {/* {as4LetrasIdentity[numCode].pair} */}
                      </div>
                      <div className="a4l-texto-body last-body">
                        {/* {as4LetrasIdentity[numCode].pairdesc} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i5" className="as4letras-textos-development">
                <h1>Desenvolvimento Pessoal</h1>
                <div>
                  <div>
                    <div>
                      <div className="a4l-texto-start start-3">
                        Torne-se mais consciente da sua função {fn[index2[0]].name}{` (`}{fn[index2[0]].desc}{`)`}
                      </div>
                      <div className="a4l-texto-body">
                        {fnAsPrincipal[index2[0]].as1}
                      </div>
                    </div>
                    <div>
                      <div className="a4l-texto-start start-3">
                        Fique atento para <em>loops</em> {`“`}{fn[index2[0]].name}{`-`}{fn[index2[2]].name}{`”`}
                      </div>
                      <div className="a4l-texto-body last-body">
                        {fnAsPrincipal[index2[0]].as1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="a4i6" className="as4letras-textos-couples">
                <h1>Casais</h1>
                <div>
                  <div className="a4-texto-couples">
                    <div className="a4-texto-couples-1" style={{background: colorA }}>
                      <Button
                        style={{textDecoration: 'none'}}
                        color="primary"
                        ref={anchorRefA}
                        id="composition-button"
                        aria-controls={openA ? "composition-menu" : undefined}
                        aria-expanded={openA ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggleA}
                      >
                        {coupleTypeA}
                        <ArrowDropDownIcon style={{height: "1.2em", width: "1.2em", alignSelf: "center"}} sx={{ color: grey[400] }}/>
                      </Button>
                      <Popper
                        open={openA}
                        anchorEl={anchorRefA.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === "bottom-start" ? "left top" : "left bottom", }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleCloseAll}>
                                <MenuList
                                  autoFocusItem={openA}
                                  id="composition-menu"
                                  aria-labelledby="composition-button"
                                  onKeyDown={handleListKeyDownA}
                                >
                                  <MenuItem variant='clean' onClick={() => {handleCloseA(); setCoupleTypeA(as4letras1); handleCloseAll(); setColorA(nt)}}>{as4letras[1].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras2); handleCloseAll()}}>{as4letras[2].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras3); handleCloseAll()}}>{as4letras[3].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras4); handleCloseAll()}}>{as4letras[4].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras5); handleCloseAll()}}>{as4letras[5].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras6); handleCloseAll()}}>{as4letras[6].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras7); handleCloseAll()}}>{as4letras[7].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras8); handleCloseAll()}}>{as4letras[8].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras9); handleCloseAll()}}>{as4letras[9].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras10); handleCloseAll()}}>{as4letras[10].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras11); handleCloseAll()}}>{as4letras[11].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras12); handleCloseAll()}}>{as4letras[12].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras13); handleCloseAll()}}>{as4letras[13].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras14); handleCloseAll()}}>{as4letras[14].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras15); handleCloseAll()}}>{as4letras[15].name}</MenuItem>
                                  <MenuItem onClick={() => {handleCloseA(); setCoupleTypeA(as4letras16); handleCloseAll(); setColorA(nf)}}>{as4letras[16].name}</MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                    <div className="a4-texto-couples-2">
                      <FavoriteBorderIcon style={{width: "2rem" }} sx={{ color: grey[400] }}/>
                    </div>
                    <div className="a4-texto-couples-3" style={{background: {colorB},}}>
                      <Button
                          ref={anchorRefB}
                          id="composition-button"
                          aria-controls={openB ? "composition-menu" : undefined}
                          aria-expanded={openB ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleToggleB}
                        >
                          {coupleTypeB}
                          <ArrowDropDownIcon style={{height: "1.3em", width: "1.3em", alignSelf: "center"}} sx={{ color: grey[400] }}/>
                        </Button>
                        <Popper
                          open={openB}
                          anchorEl={anchorRefB.current}
                          role={undefined}
                          placement="bottom-start"
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin:
                                  placement === "bottom-start"
                                    ? "left top"
                                    : "left bottom",
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleCloseAll}>
                                  <MenuList
                                    autoFocusItem={openB}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDownB}
                                  >
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras1); handleCloseAll()}}>{as4letras[1].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras2); handleCloseAll()}}>{as4letras[2].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras3); handleCloseAll()}}>{as4letras[3].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras4); handleCloseAll()}}>{as4letras[4].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras5); handleCloseAll()}}>{as4letras[5].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras6); handleCloseAll()}}>{as4letras[6].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras7); handleCloseAll()}}>{as4letras[7].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras8); handleCloseAll()}}>{as4letras[8].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras9); handleCloseAll()}}>{as4letras[9].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras10); handleCloseAll()}}>{as4letras[10].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras11); handleCloseAll()}}>{as4letras[11].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras12); handleCloseAll()}}>{as4letras[12].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras13); handleCloseAll()}}>{as4letras[13].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras14); handleCloseAll()}}>{as4letras[14].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras15); handleCloseAll()}}>{as4letras[15].name}</MenuItem>
                                    <MenuItem onClick={() => {handleCloseB(); setCoupleTypeB(as4letras16); handleCloseAll()}}>{as4letras[16].name}</MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                    </div>
                  </div>
                  <div className="a4l-texto-body last-body">
                    <Couples coupleTypeA={coupleTypeA} coupleTypeB={coupleTypeB} />
                  </div>
                </div>
              </div>
            </div>
            <div className="ad-horizontal">AD</div>
          </div>
        </div>
    </>
  );
}

export default As4Letras;