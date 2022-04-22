import React, { useState, useEffect } from "react";
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import "../assets/MainPages.css";
import { Link } from "react-router-dom";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { as4letraspapeis as as4letraspapeis } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";

function Home4LetrasAll({ categoryMenu, type, newType, newMinor }) {

  console.log("----")
  console.log("categoria",categoryMenu)
  console.log("All",type)

  useEffect(() => {
    newMinor(false)
  }, [])

  return (
    <div className="homeas4letrasall">
      <MenuRoll categoryMenu={categoryMenu} type={type} newType={newType} chosen={"-chosen/"} direct={false} stick={false} />
      <Subtitle type={type} />

      <div className="as4letrasall-mobile">
        <div className="as4letrasall-mobile-tabela">
          <div className="as4letrasall-mobile-top"></div>
          <div className="as4letrasall-mobile-down"></div>
        </div>
      </div>

      <div className="as4letrasall-desktop-grid">
        {type === "Todos" ?
        <div className="as4letrasall-condicional-desktop">
          <h1>Personalidades</h1>
            <div className="as4letrasall-desktop-cards">
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/" ><div className={`card1 ${as4letras[1].name}`}>{as4letras[1].name}</div></Link>
              <div className={`card2 ${as4letras[2].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[2].name}</Link></div>
              <div className={`card3 ${as4letras[3].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[3].name}</Link></div>
              <div className={`card4 ${as4letras[4].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[4].name}</Link></div>
              <div className={`card5 ${as4letras[5].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[5].name}</Link></div>
              <div className={`card6 ${as4letras[6].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[6].name}</Link></div>
              <div className={`card7 ${as4letras[7].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[7].name}</Link></div>
              <div className={`card8 ${as4letras[8].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[8].name}</Link></div>
              <div className={`card9 ${as4letras[9].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[9].name}</Link></div>
              <div className={`card10 ${as4letras[10].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[10].name}</Link></div>
              <div className={`card11 ${as4letras[11].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[11].name}</Link></div>
              <div className={`card12 ${as4letras[12].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[12].name}</Link></div>
              <div className={`card13 ${as4letras[13].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[13].name}</Link></div>
              <div className={`card14 ${as4letras[14].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[14].name}</Link></div>
              <div className={`card15 ${as4letras[15].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[15].name}</Link></div>
              <div className={`card16 ${as4letras[16].name}`}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/" >{as4letras[16].name}</Link></div>
            </div>
          </div> : <div></div>}
        <h1 className="pre-tabela">Composição</h1>
        <div className="as4letrasall-desktop-tabela">
          <div className="as4letrasall-desktop-top">
            <div className="p0">?</div>
            <div className="p1">{as4letraspapeis[0]}</div>
            <div className="p2">{as4letraspapeis[1]}</div>
            <div className="p3">{as4letraspapeis[2]}</div>
            <div className="p4">{as4letraspapeis[3]}</div>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[1].name}`}><div onClick={()=>{newType(as4letras[1].name)}} className="za" style={{color: '#1C1816'}}>{as4letras[1].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[2].name}`}><div onClick={()=>{newType(as4letras[2].name)}} className="zb" style={{color: '#1C1816'}}>{as4letras[2].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[3].name}`}><div onClick={()=>{newType(as4letras[3].name)}} className="zc" style={{color: '#1C1816'}}>{as4letras[3].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[4].name}`}><div onClick={()=>{newType(as4letras[4].name)}} className="d" style={{color: '#1C1816'}}>{as4letras[4].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[5].name}`}><div onClick={()=>{newType(as4letras[5].name)}} className="e" style={{color: '#1C1816'}}>{as4letras[5].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[6].name}`}><div onClick={()=>{newType(as4letras[6].name)}} className="f" style={{color: '#1C1816'}}>{as4letras[6].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[7].name}`}><div onClick={()=>{newType(as4letras[7].name)}} className="g" style={{color: '#1C1816'}}>{as4letras[7].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[8].name}`}><div onClick={()=>{newType(as4letras[8].name)}} className="h" style={{color: '#1C1816'}}>{as4letras[8].name}</div></Link>     
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe feo1">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe feo2">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe feo3">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe feo4">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fio1">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fio2">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fio3">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fio4">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te teo1">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te teo2">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te teo3">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te teo4">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tio1">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tio2">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tio3">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tio4">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se seo1">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se seo2">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se seo3">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se seo4">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio1">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio2">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio3">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio4">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo1">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo2">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo3">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo4">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nio1">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nio2">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nio3">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nio4">{fn[8].name}</Link>
          </div>
          <div className="as4letrasall-desktop-down">
            <div className="p0b">~~</div>
            <div className="p1b">{as4letraspapeis[0]}</div>
            <div className="p2b">{as4letraspapeis[1]}</div>
            <div className="p3b">{as4letraspapeis[2]}</div>
            <div className="p4b">{as4letraspapeis[3]}</div>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[9].name}`}><div onClick={()=>{newType(as4letras[9].name)}} className="i" style={{color: '#1C1816'}}>{as4letras[9].name}</div></Link>    
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[10].name}`}><div onClick={()=>{newType(as4letras[10].name)}} className="j" style={{color: '#1C1816'}}>{as4letras[10].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[11].name}`}><div onClick={()=>{newType(as4letras[11].name)}} className="k" style={{color: '#1C1816'}}>{as4letras[11].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[12].name}`}><div onClick={()=>{newType(as4letras[12].name)}} className="l" style={{color: '#1C1816'}}>{as4letras[12].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[13].name}`}><div onClick={()=>{newType(as4letras[13].name)}} className="m" style={{color: '#1C1816'}}>{as4letras[13].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[14].name}`}><div onClick={()=>{newType(as4letras[14].name)}} className="n" style={{color: '#1C1816'}}>{as4letras[14].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[15].name}`}><div onClick={()=>{newType(as4letras[15].name)}} className="o" style={{color: '#1C1816'}}>{as4letras[15].name}</div></Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/t/as4letras/${as4letras[16].name}`}><div onClick={()=>{newType(as4letras[16].name)}} className="p" style={{color: '#1C1816'}}>{as4letras[16].name}</div></Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe fet1">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe fet2">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe fet3">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[1].name}`} className="fe fet4">{fn[1].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fit1">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fit2">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fit3">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[2].name}`} className="fi fit4">{fn[2].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te tet1">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te tet2">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te tet3">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[3].name}`} className="te tet4">{fn[3].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tit1">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tit2">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tit3">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[4].name}`} className="ti tit4">{fn[4].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se set1">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se set2">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se set3">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se set4">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sit1">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sit2">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sit3">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sit4">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne net1">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne net2">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne net3">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne net4">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit1">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit2">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit3">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit4">{fn[8].name}</Link>
          </div>
        </div>
      </div>
      <div className="rodape">

      </div>
    </div>
  );
}

export default Home4LetrasAll;


