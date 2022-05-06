import React, { useState, useEffect } from 'react'
import "../../assets/MainPages.css";
import { Link } from "react-router-dom";
import { as4letrasx as as4letras } from "../../../components/Arrays.tsx";
import { fnx as fn } from "../../../components/Arrays.tsx";
import { as4letraspapeis as as4letraspapeis } from "../../../components/Arrays.tsx";
import well from "../../../assets/images/well.png"
import worst from "../../../assets/images/worst.png"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function As4LetrasTabela({type, as4letraschosenfunctions, as4letraschosenfunctionsindex, pagina}) {
  const [tabela4th, setTabela4th] = useState(true);
  const [tabelaFull, setTabelaFull] = useState(false)
  const [tabelaButton, setTabelaButton] = useState(false)
  const [noLine, setNoLine] = useState("")
  
  return (
      <div className="as4letraschosen-desktop-grid">
        {pagina ? <h1 className='titulo-chosen'>Composição</h1> : null}
          <div className="as4letraschosen-desktop-tabela">
             <div className="as4letraschosen-desktop-table-up">
                    <div className="fr1">{type}</div>
                    <div className="fr2">Funções<HelpOutlineIcon style={{height: '0.7em', paddingLeft: '0.1em'}}/></div>
                    <div className="fr3">Resumo</div>
                    <div className="r1">{as4letraspapeis[0]}<img style={{height: "0.7em", display: 'flex'}} src={well} alt="1" /></div>
                    <div className="r2">{as4letraspapeis[1]}</div>
                    <div className="r3">{as4letraspapeis[2]}</div>
                    <div className="r4">{as4letraspapeis[3]}<img style={{height: "0.7em", display: 'flex'}} src={worst} alt="1" /></div>
                    



                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f1}`}><div className={`f1`+` `+`${as4letraschosenfunctions[0].f1}`}>{as4letraschosenfunctions[0].f1}</div></Link>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f2}`}><div className={`f2`+` `+`${as4letraschosenfunctions[0].f2}`}>{as4letraschosenfunctions[0].f2}</div></Link>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f3}`}><div className={`f3`+` `+`${as4letraschosenfunctions[0].f3}`}>{as4letraschosenfunctions[0].f3}</div></Link>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f4}`}><div className={`f4`+` `+`${as4letraschosenfunctions[0].f4}`}>{as4letraschosenfunctions[0].f4}</div></Link>
                    <div className="cmm1">{fn[as4letraschosenfunctionsindex[0]].brief}</div>
                    <div className="cmm2">{fn[as4letraschosenfunctionsindex[1]].brief}</div>
                    <div className="cmm3">{fn[as4letraschosenfunctionsindex[2]].brief}</div>
                    <div className="cmm4">{fn[as4letraschosenfunctionsindex[3]].brief}</div>
                  </div>
                {tabela4th ? <div onClick={()=>{setTabela4th(!tabela4th); setTabelaFull(!tabelaFull); setTabelaButton(!tabelaButton); setNoLine("-noline")}} className="mostrarmais">Mostrar mais</div> : ""}
                {tabelaFull ? <div className={`as4letraschosen-desktop-table-down`+`${noLine}`}>
                <div className="r5">{as4letraspapeis[4]}</div>
                <div className="r6">{as4letraspapeis[5]}</div>
                <div className="r7">{as4letraspapeis[6]}</div>
                <div className="r8">{as4letraspapeis[7]}</div>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f5}`}><div className={`f5`+` `+`${as4letraschosenfunctions[0].f5}`}>{as4letraschosenfunctions[0].f5}</div></Link>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f6}`}><div className={`f6`+` `+`${as4letraschosenfunctions[0].f6}`}>{as4letraschosenfunctions[0].f6}</div></Link>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f7}`}><div className={`f7`+` `+`${as4letraschosenfunctions[0].f7}`}>{as4letraschosenfunctions[0].f7}</div></Link>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/fn/${as4letraschosenfunctions[0].f8}`}><div className={`f8`+` `+`${as4letraschosenfunctions[0].f8}`}>{as4letraschosenfunctions[0].f8}</div></Link>
                <div className="cmm5">{fn[as4letraschosenfunctionsindex[4]].brief}</div>
                <div className="cmm6">{fn[as4letraschosenfunctionsindex[5]].brief}</div>
                <div className="cmm7">{fn[as4letraschosenfunctionsindex[6]].brief}</div>
                <div className="cmm8">{fn[as4letraschosenfunctionsindex[7]].brief}</div>
                </div>: ""}
                {tabelaButton ? <div onClick={()=>{setTabela4th(!tabela4th); setTabelaFull(!tabelaFull); setTabelaButton(!tabelaButton); setNoLine("")}} className="mostrarmenos">Mostrar menos</div> : ""}
            </div> 
      </div>
  )
}

export default As4LetrasTabela