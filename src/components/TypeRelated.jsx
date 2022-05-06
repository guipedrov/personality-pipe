import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/components.css";


function TypeRelated({ name, customH, customW }) {

  let slicedName = name.slice(4)
  let capsSlicedName = slicedName.charAt(0).toUpperCase() + slicedName.slice(1)

  let typeRelatedName = ("Tipo"+" "+capsSlicedName)

  return (
    <>
        {(name.length < 5) ? 
        <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/t/`+`as4letras/`+`${name}`}>
        <div style={{height: `${customH}`, minWidth: `${customW}`}} className={`item ${name} effect3`}><div className="titles">{name}</div></div></Link>
        : <></>}
        {(name.length > 5) ? 
        <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/t/`+`jung/`+`${name}`}>
        <div style={{minHeight: `${customH}`, maxHeight: `${customH}`, minWidth: `${customW}`, maxWidth: `${customW}`, fontSize: '1.4em'}} className={`item ${name}`}><div className="titles-jung">{typeRelatedName}</div></div></Link> 
        : <></>}
    </>
  )
}

//onClick={()=>{props.newType(props.name)}}

export default TypeRelated