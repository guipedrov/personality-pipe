import React from 'react'
import { relatedTypes as relatedTypes } from "./LongTexts.tsx"
import TypeRelated from "./TypeRelated.jsx"

function RelatedTypes({categoryMenu, type}) {
  
  const customH = "5rem"
  const customW= "5rem"

  const tuplaType = relatedTypes.filter((duckType) => {  
        return duckType.name === type
  })

  //fourL1: "ESFJ", fourL2: "ENFJ", fourL3: "ISFJ", fourL4: "INFJ", jung: "tipofe"
  const typesAlone = []
  typesAlone.push(tuplaType[0].fourL1)
  typesAlone.push(tuplaType[0].fourL2)
  typesAlone.push(tuplaType[0].fourL3)
  typesAlone.push(tuplaType[0].fourL4)
  typesAlone.push(tuplaType[0].jung)

  const typesAlonePaired = typesAlone.map(value =>  ({name: value}) )

  console.log(tuplaType)
  console.log(typesAlone)
  console.log(typesAlonePaired)


    return (
        <div className="related-types" style={{margin: '0 auto', maxWidth: '880px'}}>
            <div className="menu-roll-container" style={{margin: '0 auto', display: 'flex', alignItems: 'center'}}>
                <div style={{alignSelf: 'center', paddingRight: '10px', fontWeight: '600'}}>Forte em:</div>
                {typesAlonePaired.map((duckTape) => {
                    return <TypeRelated name={duckTape.name} key={duckTape.name} customH={customH} customW={customW} type={duckTape.name} />;
                })}
            </div>
        </div>
    )
}

export default RelatedTypes