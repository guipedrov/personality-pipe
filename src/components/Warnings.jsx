import React from "react";
import "../assets/css/components.css";

import { genericComments as genericComments } from "./Arrays.tsx";

function Warnings({ typo, about, size }) {
  return (
    <>
      {typo === "as4letras" && about === "summary" ? 
        <div
          style={{
            maxWidth: `${size}`,
            display: 'flex',
            marginTop: '1.8em',
            padding: '0.5em 0.7em 0.6em 0.7em',
            borderRadius: '17px',
            color: '#110f0e',
            fontSize: '1.1em',
            fontWeight: '500',
            background: '#fbf497',
            border: 'none',
          }}
        >
          <div style={{margin: '0.4em'}}>XXX</div>
          <div style={{margin: '0.4em'}}>{genericComments[0].personalityWarning}</div>
        </div>
       : null}
      {typo === "as4letras" && about === "stack" ? 
        <div
          style={{
            maxWidth: `${size}`,
            display: 'flex',
            marginTop: '0.1em',
            padding: '0.5em 0.7em 0.6em 0.7em',
            borderRadius: '17px',
            color: '#110f0e',
            fontSize: '1.1em',
            fontWeight: '500',
            background: '#97fbb8',
            border: 'none',
          }}
        >
          <div style={{margin: '0.4em'}}>Oo0</div>
          <div style={{margin: '0.4em'}}>{genericComments[0].stackWarning}</div>
        </div>
      : null}
      {typo === "as4letras" && about === "other" ?
        <div>

        </div>
      : null}
      {typo === "jung" && about === "summary" ?
        <div>

        </div>
      : null}
      {typo === "fn" && about === "summary" ?
        <div>

        </div>
      : null}
    </>
  );
}

export default Warnings;
