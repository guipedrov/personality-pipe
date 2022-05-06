import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/components.css'
import logo2 from '../assets/images/logo2.fw.png'
import guipedrov from '../assets/images/guipedrov.fw.png'
import CloseIcon from '@mui/icons-material/Close';

function Rodape() {
  return (
    <div className='rodape'>

      <div> {/*1 - flex*/}
        <div> {/*Esquerda-Cima*/}
          <div><img src={logo2} style={{width: '10rem'}} alt="personality pipe"/></div>
          <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/sobre"><div className="h-m-item">Sobre</div></Link></div>
          <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/sitemap"><div className="h-m-item">Mapa do Site</div></Link></div>
          <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/contato"><div className="h-m-item">Contato</div></Link></div>
        </div>
        <div> {/*Direita-Baixo*/}
          <div style={{display: 'inline', paddingRight: '5px'}}>por</div><a style={{textDecoration: 'none', display: 'inline'}} href="https://www.linkedin.com/in/guipedrov/"><img src={guipedrov} alt="personality pipe"/></a>
        </div>
      </div>

      <div> {/*2 - block*/}
        <div>Personality Pipe 2022</div>
      </div>

    </div>
  )
}

export default Rodape