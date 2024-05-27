import React from 'react'

function ProjItem({name, image}) {
  return (
    <div className="projItem">
        <h1>{name}</h1>
        <div style={{backgroundImage:`url(${image})`}}></div>
    </div>
  )
}

export default ProjItem 
