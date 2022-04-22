import React from 'react'

import { couplesCombination as  couplesCombination } from './LongTexts.tsx'
import { couplesCombinationEn as  couplesCombinationEn } from './LongTexts.tsx'

function Couples({ coupleTypeA, coupleTypeB }) {

  return (
    <>
        <div className="text-title" style={{fontWeight: '700', fontSize: '1.5em'}}>{`${coupleTypeA}`+` + `+`${coupleTypeB}`}</div>
        <div className="text-body" style={{fontSize: '1.2em'}}>
            {/*ESFP:*/}
            {(coupleTypeA === "ESFP" && coupleTypeB === "ENTP") ? <div>{couplesCombination[10].esfpWentp}</div> : "em breve."}




        </div>
    </>
  )
}

export default Couples