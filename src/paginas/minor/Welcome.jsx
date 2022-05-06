import React from 'react'

import logo2 from "../../assets/images/logo2.fw.png";
import welcome from "../../assets/images/bg/welcome.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome" >
        
        <div> {/*1 - Flex*/}
            <div> {/*Esquerdo*/}
                <div><img style={{width: '24rem'}} src={logo2} alt="" /></div><div>Descubra sobre você</div>
            </div>
            <div> {/*Direito*/}
                <div>
                    <div>ir para</div><div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/tipologias">Tipologias</Link></div>
                </div>
                <div>
                    <div>ir para</div><div><Link style={{textDecoration: 'none', color: 'inherit'}} to="/sitemap">Mapa do site</Link></div>
                </div>
            </div>
        </div>
        <div style={{textAlign: 'center', padding: '25px 0 0 0', color:'#ff7043'}}> {/*2 - Block*/}
            <br/>Personality Pipe 2022<br/>
        </div>
    </div>
  )
}

export default Welcome