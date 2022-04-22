import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeContext as TypeContext } from "../App.jsx";
import "../assets/css/components.css";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CustomTheme } from "./CustomTheme";
import arrowdown from "../assets/images/arrow-down.png"
import arrowleft from "../assets/images/arrow-left.png"

//MUI processo: instalação, importação dos mui components com métodos (e.g. ThemeProvider, createTheme, styled), importação dos mui components para renderização, aplicação dos mui components para renderização, customização do tema, envolver return

function Title({ newType, all, hiddenMenu }) {
  const [titulo, setTitulo] = useState('Tipologia das "4 Letras"'); //Alterado pelo botão principal, mas só muda a exibição
  const [topico, setTopico] = useState("") //Não é alterado pelo botão principal, é exibido no lugar do título da categoria
  
  //MUI:
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TypeContext.Consumer>
      {({ onHiddenMenu }) => (
    <ThemeProvider theme={CustomTheme}>
      <div className="topico-container"></div>
      <div className="titulos-container">

        {/* <img onClick={onHiddenMenu(true)} style={{display:"inline", width:"1em", paddingRight:"0.5em", marginRight: '0.5em', borderRight: '1px solid #cccccc'}} src={arrowleft} alt="^" /> */}
        <Button
          variant='grotesque'
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div style={{display: "inline"}}>{titulo}</div>
          <img style={{display:"inline", width:"0.6em", paddingTop:"0.8em", paddingLeft:"0.35em"}} src={arrowdown} alt="^" />
        </Button>

        <Menu
          variant='menu'
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
        > 
          <Link to="/t/as4letras" style={{textTransform: 'none', textDecoration: 'none'}}>
          <MenuItem
            style={{color: '#141414', fontFamily: "'Darker Grotesque', sans-serif", fontWeight: '600', fontSize: '1.3rem', lineHeight: '1.3em', borderBottom: '1px solid #efefef'}}
            onClick={() => {
              setTitulo('Tipologia das "4 Letras"');
              newType(all);
              handleClose();
            }}
          >Tipologia das "4 Letras"</MenuItem>
          </Link>
          
          <Link to="/t/jung" style={{textTransform: 'none', textDecoration: 'none'}}>
          <MenuItem
            style={{color: '#141414', fontFamily: "'Darker Grotesque', sans-serif", fontWeight: '600', fontSize: '1.3rem', lineHeight: '1.5em', borderBottom: '1px solid #efefef'}}
            onClick={() => {
              setTitulo("Tipologia Jungiana Tradicional");
              newType(all);
              handleClose();
            }}
          >Tipologia Jungiana Tradicional</MenuItem>
          </Link>
          
          <Link to="/t/fn" style={{textTransform: 'none', textDecoration: 'none'}}>
          <MenuItem
            style={{color: '#141414', fontFamily: "'Darker Grotesque', sans-serif", fontWeight: '600', fontSize: '1.3rem', lineHeight: '1.3em',}}
            onClick={() => {
              setTitulo("As Funções Cognitivas");
              newType(all);
              handleClose();
            }}
          >As Funções Cognitivas</MenuItem>
          </Link>

        </Menu>
      </div>
    </ThemeProvider>
      )}
    </TypeContext.Consumer>
  );
}

export default Title;
