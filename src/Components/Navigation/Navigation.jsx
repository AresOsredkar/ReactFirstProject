import '../Button/Button.scss'
import {NavLink} from 'react-router-dom'
import './Navigation.scss'
import {useState} from 'react'
import {  FaStream } from 'react-icons/fa'
import meal from '../../Assets/meal.png'

const Items = ["Home", "Categories", "Contact"];

const NavigationBar = () => {
    const [isMobileMenuExtended,setIsMobileMenuExtended] = useState(false)
    const [isSettingsMenuExtended,setIsSettingsMenuExtended] = useState(false)

    const handleDropdownClick = () => setIsMobileMenuExtended((prevState)=>!prevState)

    const handleSettingsClick = () => setIsSettingsMenuExtended((prevState)=>false)

    return (<div id="headerContainer">
                <div id="navigation">
                    <NavLink to='/Home' style={{border:'none'}}><img src={meal} height="80px" alt='MealsLogo' className='logo'/></NavLink>
                    <div id="navBar">
                        {Items.map(item => <NavLink key={item} to={`/${item}`} className='button button-primary'>{item}</NavLink>)}
                        <div className='button button-primary' onClick={handleSettingsClick}>
                            Settings
                        </div>
                        
                    </div>
                    <FaStream className='menuButton' onClick={handleDropdownClick}/>
                </div>
                <div className={`navBox${isMobileMenuExtended ? 'Shown' : 'Hidden'}`}>
                    {Items.map(item => <NavLink key={item} onClick={handleDropdownClick} to={`/${item}`} className='button button-primary button-hamburger'>{item}</NavLink>)}
                </div>
                <div id="settingsBox" style={{display: `${isSettingsMenuExtended ? 'flex' : 'none'}`}}>  
                    Placeholder
                </div>
            </div>
            );
}

export default NavigationBar;