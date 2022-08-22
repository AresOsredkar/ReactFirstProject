import '../Button/Button.scss'
import {NavLink} from 'react-router-dom'
import './Navigation.scss'
import {useState} from 'react'
import { FaStream } from 'react-icons/fa'
import meal from '../../Assets/meal.png'

const Items = ["Home", "Categories", "Contact", "Settings"];

const NavigationBar = () => {
    const [isMenuExtended,setIsMenuExtended] = useState(false)

    const handleClick = () => setIsMenuExtended(prevState=>!prevState)

    return (<div id="navigation">
                <img src={meal} height="80px" alt='MealsLogo'/>
                <div id="navBar">
                    {Items.map(item => <NavLink to={`/${item}`} className='button button-primary'>{item}</NavLink>)}
                </div>
                <FaStream className='menuButton' onClick={handleClick}/>
                <div id="navBox">

                </div>
            </div>
            );
}

export default NavigationBar;