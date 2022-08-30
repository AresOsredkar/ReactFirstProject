import {useContext} from 'react'
import SettingsContext from '../../Context/SettingsContext'
import './Card.scss'

function Card({children, active,className,...props}) {
  const [theme] = useContext(SettingsContext)

  return (
    <div className={`card ${active && 'reverse'} ${className} ${theme}Theme`} {...props}>
        {children}
    </div>
  )
}

export default Card
