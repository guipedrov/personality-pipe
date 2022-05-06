import React from 'react'
import { deepOrange } from '@mui/material/colors';
import logo from "../assets/images/logo1.fw.png"
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/css/components.css"
import { Link } from "react-router-dom";


function Header({onHiddenMenu}) {

  let page = "tipologias"
  
  return (
    <>
    <div className="pre-cabecalho"></div>
    <header className="cabecalho">
        <div>
          <div className="logo"><Link to=""><img src={logo} alt="logo"/></Link></div><div className="header-site-link">{page}</div>
        </div>
        <div>
          <div onClick={(e)=>{e.preventDefault(); onHiddenMenu()}} className="sandwich"><a href=""><MenuIcon style={{height: '45px'}} sx={{ color: deepOrange[400] }}/></a></div>
        </div>
    </header>
    </>
  )
}

export default Header