import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import './Details.scss'

function Details() {
    const params = useParams()
    const [meal, setMeal] = useState([])
    const [mealIngredients, setMealIngredients] = useState([])
    
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + params.mealId

    useEffect(() => {
        fetch(apiUrl)
        .then((result) => result.json())
        .then(meals => setMeal(meals.meals[0]))
        .catch((error) => console.log("err",error))
    }, []);

    useEffect(()=>{
        for(let i = 1; i <= 20; i++){
            ingredientList.push([`${eval('meal.strIngredient'+i)}`,`${eval('meal.strMeasure'+i)}`])
        }
        setMealIngredients(ingredientList.filter(ingredient => ingredient[0] !== '')) 
    },[meal])

    var ingredientList = [];

    return (
        <Card className='meal-card'>
            <div className='description'>
                <img src={meal.strMealThumb} className='previewImage' alt={meal.strMeal} />
                <h2 className="card-title">{meal.strMeal}</h2>
            </div>
            <div className="cardText mealContent">
                <h3 key='ingredients' className='instructionTitle'>Ingredients</h3>
                <div className='mealIngredients'>
                    {mealIngredients.map((item) => <div key={item.ingredient} className="composition">
                        <p className='ingredient'>{item[0]}</p>
                        <p className='ammount'>{item[1]}</p>
                    </div> )}
                </div>
                <h3 key='prep' className='instructionTitle'>Preparation process</h3>
                <p className='mealInstructions'>{meal.strInstructions}</p>
            </div>
        </Card>
    )
}

export default Details
