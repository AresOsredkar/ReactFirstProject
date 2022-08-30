import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../Components/Card/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component'


const Meals = () => {
    const params = useParams()
    var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + params.categoryId
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(apiUrl).then((result) => result.json())
        .then(meals => {setMeals(meals.meals);setFilteredMeals(meals.meals)})
        .catch((error) => console.log("err",error));
    }, []);
    
    const handleMealClick = (mealID) => {
        navigate(mealID + '/')
    }

    const handleSorting = (event) => {
        console.log(event.target.value)
        switch(event.target.value){
            case 'anti-alphabetical':   setFilteredMeals(meals.slice(0).reverse())
                                        break
            case 'alphabetical':    setFilteredMeals(meals.slice(0).sort())
                                    break
        }
    }

    const handleSearchBar = (event) => {
        setFilteredMeals(meals.filter(meal => meal.strMeal.includes(event.target.value)))
    }
    
    return (<div>
                <div className='filters'>
                    <form>
                        <select onChange={handleSorting}>
                            <option value='alphabetical'>Alphabetical(Ascending)</option>
                            <option value='anti-alphabetical'>Alphabetical(Descending)</option>
                        </select>
                        <input type='text' onChange={handleSearchBar}></input>
                    </form>
                </div>
                {filteredMeals.map(item => (
                    <Card key={item.idMeal} onClick={() => {handleMealClick(item.idMeal)}}>
                        <LazyLoadImage effect='blur' className='thumbnail-lg' height="50" src={item.strMealThumb} alt={item.strMeal}/>
                        <h2 className='card-title'>{item.strMeal}</h2>  
                    </Card>
                ))}
        </div>)
}

export default Meals;