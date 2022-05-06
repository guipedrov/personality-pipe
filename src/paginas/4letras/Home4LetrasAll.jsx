import React, { useState, useEffect } from "react";
import MenuRoll from "../../components/MenuRoll.jsx";
import Subtitle from "../../components/Subtitle.jsx";
import "../assets/MainPages.css";
import { Link } from "react-router-dom";
import { as4letrasx as as4letras } from "../../components/Arrays.tsx";
import { as4letraspapeis as as4letraspapeis } from "../../components/Arrays.tsx";
import { fnx as fn } from "../../components/Arrays.tsx";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import logo from "../../assets/images/pp-figure-2.png";
import fourletters from "../../assets/images/4letters.fw.png";

function Home4LetrasAll({ categoryMenu, type, newType, newLabel, newTitle, onMajor }) {

  const [description, setDescription] = useState(false)
  
  useEffect(() => {
    onMajor(true)
    newTitle("out")
    newLabel("1")
  }, [])

  return (
    <div className="homeas4letrasall">
      <MenuRoll categoryMenu={categoryMenu} type={type} newType={newType} chosen={"-chosen/"} direct={false} stick={false} bg="#e0e0e0" shadow="#c6c6c6c4" />

      {/* <div className="as4letrasall-mobile">
        <div className="as4letrasall-mobile-tabela">
          <div className="as4letrasall-mobile-top"></div>
          <div className="as4letrasall-mobile-down"></div>
        </div>
      </div> */}

      <div className="prime-flex-as4letrasall">

      <div className="subtitle-container-onall">
        <div className="sub-window-onall">
          <img style={{margin: '0 auto', width: '7rem', padding: '0.8rem 0 0.8rem 0'}} src={fourletters} alt="4 letras"/>
          <div>A tipologia das "4 letras" (ou tipologia Myers-Briggs) defende que toda pessoa possui <b>quatro</b> inclinações fundamentais na sua 
          personalidade, sendo cada uma delas concorrente com seu "par oposto". <br/><br/> Em linhas gerais, existiriam quatro pares/dicotomias de inclinações: 
            "E-I", "S-N", "T-F" e "J-P". Respectivamente: Extroversão(E) vs Introversão(I), Sensação(S) vs Intuição(N), Pensamento(T) vs Sentimento(F) e 
            Julgamento(J) vs Percepção(P). Dessa forma, um exemplo de pessoa com suas quatro inclinações sendo E, S, F e J (em detrimento de I, N, T e P), 
            seria uma pessoa de personalidade <em>"ESFJ"</em>.
            {description ? null : <div className="description-expand" style={{paddingTop: '1.3rem', textAlign: 'center', color: '#d9d9d9', border: '2 px #d9d9d9', borderRadius: '50%'}} onClick={()=> setDescription(!description)}><ArrowDropDownIcon/></div>}
            {description ? <div className="sub-window-onall-down">
            <br/>
            Na prática, essa tipologia é uma extrapolação mais especulativa da <em>Tipologia Jungiana</em>, já que, para Myers e Briggs, cada uma das 
            tais 16 personalidades possui um arranjo específico das 8 funções cognitivas descritas por Jung. Na tabela mais abaixo, podemos ver 
            todas as 16 "siglas" que dão nomes as 16 personalidades e quais as funções que compõe, em termos de intensidade e facilidade, a 
            psiquê daquela pessoa.
            <div className="description-expand" style={{paddingTop: '1rem', textAlign: 'center', color: '#d9d9d9'}} onClick={()=> setDescription(!description)}><ArrowDropUpIcon/></div>
            </div> : null}
          </div>
        </div>
      </div>

      </div> {/*?*/}

      <div className="as4letrasall-desktop-grid">
            <h1 className="pre-tabela h1-mobile" style={{justifySelf: 'start', maxWidth: '345px', paddingBottom: '1rem'}}>Personalidades</h1>
            <div className="as4letrasall-desktop-cards">
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ENTP" ><div className={`card1 ${as4letras[1].name}`}>{as4letras[1].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/INTP" ><div className={`card2 ${as4letras[2].name}`}>{as4letras[2].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ENTJ" ><div className={`card3 ${as4letras[3].name}`}>{as4letras[3].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/INTJ" ><div className={`card4 ${as4letras[4].name}`}>{as4letras[4].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ESTJ" ><div className={`card5 ${as4letras[5].name}`}>{as4letras[5].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ESFJ" ><div className={`card6 ${as4letras[6].name}`}>{as4letras[6].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ISTJ" ><div className={`card7 ${as4letras[7].name}`}>{as4letras[7].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ISFJ" ><div className={`card8 ${as4letras[8].name}`}>{as4letras[8].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ESTP" ><div className={`card9 ${as4letras[9].name}`}>{as4letras[9].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ESFP" ><div className={`card10 ${as4letras[10].name}`}>{as4letras[10].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ISTP" ><div className={`card11 ${as4letras[11].name}`}>{as4letras[11].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ISFP" ><div className={`card12 ${as4letras[12].name}`}>{as4letras[12].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ENFJ" ><div className={`card13 ${as4letras[13].name}`}>{as4letras[13].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/ENFP" ><div className={`card14 ${as4letras[14].name}`}>{as4letras[14].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/INFJ" ><div className={`card15 ${as4letras[15].name}`}>{as4letras[15].name}</div></Link>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to="/t/as4letras/INFP" ><div className={`card16 ${as4letras[16].name}`}>{as4letras[16].name}</div></Link>
                                
          </div>
        
        <section className="personalitypipe-home-condicional">
        <h1 className="pre-tabela h1-mobile" style={{paddingBottom: '1rem'}}>Composição</h1>
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

            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio1">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio2">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio3">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio4">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio5">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sio6">{fn[6].name}</Link>

            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo1">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo2">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo3">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo4">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo5">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne neo6">{fn[7].name}</Link>

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
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se set5">{fn[5].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[5].name}`} className="se set6">{fn[5].name}</Link>

            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sit3">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[6].name}`} className="si sit4">{fn[6].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne net1">{fn[7].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[7].name}`} className="ne net2">{fn[7].name}</Link>

            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit1">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit2">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit3">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit4">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit5">{fn[8].name}</Link>
            <Link style={{textDecoration: 'none'}} to={`/t/fn/${fn[8].name}`} className="ni nit6">{fn[8].name}</Link>
          </div>
        </div>
        </section>
        {/* <h1 className="pre-tabela">Composição</h1> */}
      </div>

      <div className="subtitle-container-onall">
        <div className="sub-window-onall">
          <div style={{display: 'grid', justifyContent: 'center'}}><img style={{width: '2rem', margin: '0 auto', textAlign: 'center', padding: '1.2rem 0 0 0'}} src={logo} alt="personality pipe"/></div>
        </div>
      </div>

    </div>
  );
}

export default Home4LetrasAll;


