import {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import SettingsContext from '../../Context/SettingsContext'
import Categories from '../../Subpages/Categories/Categories'
import Home from '../../Subpages/Home'
import Meals from '../../Subpages/Meals'
import './MainPage.scss'

function MainPage() {
    const [theme] = useContext(SettingsContext)
  return (
    <div className={`bodyContainer ${theme}Theme`}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/categories" element={<Categories />}/>
            <Route path="/categories/?" element={<Meals />}/>
          </Routes>
        </div>
  )
}

export default MainPage
