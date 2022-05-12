import React from 'react'

import arrowUp from "../assets/images/arrow-up.png";

function ScrollToTopButton() {

  const handleClick = () => {
  }

  let scrollbutton = document.getElementById("scrollbutton")

  var myScrollFunc = function() {
  var y = window.scrollY;
    if (y >= 800) {
      scrollbutton.className = "scrollbutton show"
    } else {
      scrollbutton.className = "scrollbutton hide"
  }
  };

  window.addEventListener("scroll", myScrollFunc);

  return (
    <a style={{textDecoration: 'none', color: 'inherit'}} href="#top">
    <div id="scrollbutton" className="scrollbutton hide">
        <img style={{width: '1.84rem', height: '1.72rem'}} src={arrowUp} alt="subir"/>
    </div>
    </a>
  )
}

export default ScrollToTopButton