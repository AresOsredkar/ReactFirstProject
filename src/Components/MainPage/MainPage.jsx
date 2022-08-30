import {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import SettingsContext from '../../Context/SettingsContext'
import Categories from '../../Subpages/Categories/Categories'
import Contact from '../../Subpages/Contacts/Contact'
import Details from '../../Subpages/Recipe/Details'
import Home from '../../Subpages/Home/Home'
import Meals from '../../Subpages/Meals/Meals'
import './MainPage.scss'

function MainPage() {
    const [theme] = useContext(SettingsContext)
  return (
    <div className={`bodyContainer ${theme}Theme`}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Home" element={<Home />}/>
            <Route exact path="/categories" element={<Categories />}/>
            <Route path="/meals/:categoryId" element={<Meals />}/>
            <Route path="/meals/:categoryId/:mealId" element={<Details />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
  )
}

export default MainPage
