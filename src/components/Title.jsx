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

function Title({ newType, all }) {
  const [titulo, setTitulo] = useState('Tipologia das "4 Letras"'); //Alterado pelo botão principal, mas só muda a exibição

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
      {({ titleStyle, newTitle, label, newLabel }) => (
    <ThemeProvider theme={CustomTheme}>
      <div className="topico-container"></div>
      <div className="titulos-container">
        <Button
          variant='grotesque'
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {/* <img style={{display:"inline", width:"0.6em", paddingTop:"0.8em", paddingLeft:"0.35em"}} src={arrowdown} alt="^" /> */}
          <div className={`selected-title-${titleStyle}`} style={{display: "inline"}}>{label ? label : titulo}</div>
          <img style={{display:"inline", width:"0.6em", paddingTop:"0.8em", paddingLeft:"0.35em"}} src={arrowdown} alt="^" />
          {titleStyle != "out" ? <div style={{display: 'block', height: '0.1rem', width: '100%', background: '#AFAFAF', paddingTop: '-1rem'}}></div> : null}
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
              setTitulo("Tipologia das \"4 Letras\"");
              newLabel("1");
              newType(all);
              newTitle("out")
              handleClose();
            }}
          >Tipologia das "4 Letras"</MenuItem>
          </Link>
          
          <Link to="/t/jung" style={{textTransform: 'none', textDecoration: 'none'}}>
          <MenuItem
            style={{color: '#141414', fontFamily: "'Darker Grotesque', sans-serif", fontWeight: '600', fontSize: '1.3rem', lineHeight: '1.5em', borderBottom: '1px solid #efefef'}}
            onClick={() => {
              setTitulo("Tipologia Jungiana Tradicional");
              newLabel("2");
              newType(all);
              newTitle("out")
              handleClose();
            }}
          >Tipologia Jungiana Tradicional</MenuItem>
          </Link>
          
          <Link to="/t/fn" style={{textTransform: 'none', textDecoration: 'none'}}>
          <MenuItem
            style={{color: '#141414', fontFamily: "'Darker Grotesque', sans-serif", fontWeight: '600', fontSize: '1.3rem', lineHeight: '1.3em',}}
            onClick={() => {
              setTitulo("As Funções Cognitivas");
              newLabel("3");
              newType(all);
              newTitle("out")
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
