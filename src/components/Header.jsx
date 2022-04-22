import React from 'react'
import { deepOrange } from '@mui/material/colors';
import logo from "../assets/images/logo1.fw.png"
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/css/components.css"


function Header({onHiddenMenu}) {
  
  return (
    <header className="cabecalho">
        <div onClick={(e)=>{e.preventDefault(); onHiddenMenu()}} className="sandwich"><a href=""><MenuIcon style={{height: '45px'}} sx={{ color: deepOrange[400] }}/></a></div>
        <div className="logo"><a href=""><img className="logo" src={logo} alt="logo" /></a></div>
    </header>
  )
}

export default Header