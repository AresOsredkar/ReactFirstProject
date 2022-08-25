import '../Button/Button.scss'
import {NavLink} from 'react-router-dom'
import './Navigation.scss'
import {useState,useContext} from 'react'
import {  FaStream, FaTimes } from 'react-icons/fa'
import meal from '../../Assets/meal.png'
import SettingsOverlay from '../SettingsOverlay/SettingsOverlay'
import SettingsContext from '../../Context/SettingsContext'

const Items = ["Home", "Categories", "Contact"];

const NavigationBar = () => {
    const [isMobileMenuExtended,setIsMobileMenuExtended] = useState(false)
    const [isSettingsMenuExtended,setIsSettingsMenuExtended] = useState(false)

    const [theme] = useContext(SettingsContext)

    const handleDropdownClick = () => setIsMobileMenuExtended((prevState)=>!prevState)

    const handleSettingsClick = () => setIsSettingsMenuExtended((prevState)=>!prevState)

    return (<header className={`${theme}Theme`}><div id="headerContainer">
                <div className="navigation">
                    <NavLink to='/Home' style={{border:'none'}}><img src={meal} height="80px" alt='MealsLogo' className='logo'/></NavLink>
                    <div className="navBar">
                        {Items.map(item => <NavLink key={item} to={`/${item}`} className='button'>{item}</NavLink>)}
                        <div className='button' onClick={handleSettingsClick}>
                            Settings
                        </div>
                        
                    </div>
                    <FaStream className='menuButton' onClick={handleDropdownClick}/>
                </div>
                <div className={`navBox${isMobileMenuExtended ? 'Shown' : 'Hidden'} ${theme}Theme`}>
                    <FaTimes className='pointer' style={{position:'absolute',right:'10px',zIndex:'12'}} onClick={handleDropdownClick}/>
                    {Items.map(item => <NavLink key={item} onClick={handleDropdownClick} to={`/${item}`} className='button button-hamburger'>{item}</NavLink>)}
                    <div className='button button-hamburger' onClick={handleSettingsClick}>
                            Settings
                        </div>
                </div>
                <SettingsOverlay isMenuShown={isSettingsMenuExtended} handleMenu={handleSettingsClick}/>
            </div></header>
            );
}

export default NavigationBar;