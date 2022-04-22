import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.css";

function MenuItem(props) {

  return (
    <>
      {props.direct === true && props.stick === false ? 
      <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/t/`+`${props.categoryMenu}/`+`${props.name}`}> 
      <div style={{height: `${props.customH}`, minWidth: `${props.customW}`}} onClick={()=>{props.newType(props.name)}} className={`item ${props.name}`}>
      <div className="titles">{props.name}</div>
      </div> </Link> 
      : <></>}
      {props.direct === false && props.stick === true ?
      <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/t/`+`${props.categoryMenu}/`+`${props.stickname}`}> 
      <div style={{minHeight: `${props.customH}`, maxHeight: `${props.customH}`, minWidth: `${props.customW}`, maxWidth: `${props.customW}`, fontSize: '1.4em'}} onClick={()=>{props.newType(props.name)}} className={`item ${props.stickname}`}>
      <div className="titles-jung">{props.name}</div>
      </div> </Link> 
      : <></>}
      {props.direct === false && props.stick === false ?
      <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/t/`+`${props.categoryMenu}`+`${props.chosen}`}>
      <div style={{height: `${props.customH}`, minWidth: `${props.customW}`}} onClick={()=>{props.newType(props.name)}} className={`item ${props.name} effect3`}>
      <div className="titles">{props.name}</div>
      </div> </Link>
      : <></>}
    </>
  )
}

export default MenuItem;
