import React from 'react'

function Card({cardContent,children}) {
  return (
    <div className={`card card${cardContent}`}>
        {children}
    </div>
  )
}

export default Card
