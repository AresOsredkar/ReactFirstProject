import {createContext,useState,useEffect} from 'react'

const MealsContext = createContext()

function MealsProvider({children}) {
    const [meals,setMeals] = useState([])
  return (
    <MealsContext.Provider value={{
        meals
    }}>
        {children}
    </MealsContext.Provider>      
  )
}

export default MealsProvider
