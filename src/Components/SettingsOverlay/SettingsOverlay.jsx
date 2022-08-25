import {useContext,useState} from 'react'
import './SettingsOverlay.scss'
import { FaTimes } from 'react-icons/fa'
import Card from '../Card/Card'
import SettingsContext from '../../Context/SettingsContext'
import { useEffect } from 'react'

function SettingsOverlay({isMenuShown,handleMenu}) {
    const [theme, enlargedText, setTheme, setEnlargedText] = useContext(SettingsContext)

    let settingsWidth = isMenuShown ? '50%' : '0'

    const handleThemeChange = (e) => {
        setTheme(e.currentTarget.value)
    }
    const handleEnlargeClick = () => setEnlargedText((prevState) => !prevState)


    return (
        <div className='settingsOverlay topLeft' style={{display:`${isMenuShown ? 'block' : 'none'}`}}>
            <div className="overlay topLeft" onClick={handleMenu}></div>
            <div className={`settings topRight ${theme}Theme`} style={{width:`${settingsWidth}`,transition:'width 1s'}}>
                <FaTimes onClick={handleMenu} className='pointer'/>
                <Card>
                    <form action='none'>
                        Theme:
                        <select id='themes' name='themes' defaultValue={`${theme}`} onChange={handleThemeChange}>
                            <option value='dark'>Dark</option>
                            <option value='light'>Light</option>
                            <option value='blue'>Blue</option>
                        </select>

                    </form>
                </Card>
                <Card active={enlargedText} onClick={handleEnlargeClick} style={{cursor:'pointer'}}>
                    Larger text
                </Card>
                <Card>
                    Work in progress
                </Card>
            </div>
        </div>
    )
}

export default SettingsOverlay
