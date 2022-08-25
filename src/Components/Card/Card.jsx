import React from 'react'
import './Card.scss'

function Card({children, active,...props}) {
  return (
    <div className={`card ${active && 'reverse'}`} {...props}>
        {children}
    </div>
  )
}

export default Card
