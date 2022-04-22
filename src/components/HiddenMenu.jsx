import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/css/components.css'
import logo from '../assets/images/pp-figure.png'
import CloseIcon from '@mui/icons-material/Close';

function HiddenMenu({ hiddenMenu, onHiddenMenu }) {
  
  return (
    <div className={`hidden-menu-${hiddenMenu}`} >
      <div className="hidden-menu-flex-left">
        <img style={{width: '1.4em'}} src={logo} alt="personality pipe"/>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/sobre"><div className="h-m-item">Sobre</div></Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/contato"><div className="h-m-item">Contato</div></Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/sitemap"><div className="h-m-item">Mapa do Site</div></Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/teoria"><div className="h-m-item">Teoria</div></Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/tipologias"><div className="h-m-item">Tipologias</div></Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/testes"><div className="h-m-item">Testes</div></Link></div>
        <div><Link style={{ textDecoration: 'none', color: 'inherit'}}  to="/livros"><div className="h-m-item">Livros</div></Link></div>
      </div>
      <div className="close-button" onClick={()=>{onHiddenMenu()}}><CloseIcon/></div>
    </div>
  )
}



export default HiddenMenu