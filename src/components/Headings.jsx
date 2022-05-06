import React from 'react'
import '../assets/css/components.css'

function Headings({ title, description, height, imagebg, colorbg, color, boxed }) {
  
  return (
    <div className="headings-wrapper" style={{backgroundImage: `url(${imagebg})`, backgroundRepeat: 'repeat', height: `${height}`, paddingLeft: '20px', paddingRight: '20px'}}>
      <div style={{color: `${color}`, fontSize: '3.85em', paddingTop: '1.25em', paddingBottom: '0.3em', fontWeight: '700'}}>{title}</div>
      {boxed ?
      <div style={{color: `${color}`, fontSize: '1.2em', background: '#0000006f', borderRadius: '17px', width: 'fit-content', margin: '0 auto', padding: '0.225em 0.66em 0.285em 0.66em'}}>{description}</div>
      :
      <div style={{color: `${color}`, fontSize: '1.2em'}}>{description}</div>}
    </div>
  )
}

export default Headings

//background: `${colorbg}`