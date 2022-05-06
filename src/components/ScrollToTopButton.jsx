import React from 'react'

import arrowUp from "../assets/images/arrow-up.png";

function ScrollToTopButton() {

  const handleClick = () => {
  }

  return (
    <a style={{textDecoration: 'none', color: 'inherit'}} href="#top">
    <div className="scroll-button"
    style={{
        width: '4rem',
        height: '4rem',
        // background: '#f0f0f0',
        border: '4px solid #FF7043',
        borderRadius: '50%',
        /*posição:*/
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: '25px',
        zIndex: 1,
        /*texto:*/
        fontSize: '1.2',
        fontWeight: '600',
        color: '#FF7043',
    }}>
        <img style={{width: '1.84rem', height: '1.72rem'}} src={arrowUp} alt="subir"/>
    </div>
    </a>
  )
}

export default ScrollToTopButton