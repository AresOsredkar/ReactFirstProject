import React from 'react';
import "./Meals.css";


const Meals = ({category}) => {
    var url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category;
    const [meal, setMeals] = React.useState([]);

    fetch(url).then((res) => res.json()).then(meal => {setMeals(meal.meals);}).catch((error) => console.log("err",error));

    return (<ul>
                {meal.map(item => (
                    <li>
                        <div>{item.strMeal}<img height="50" src={item.strMealThumb} alt={item.strMeal}/></div>   
                    </li>
                ))}
        </ul>);
}

export default Meals;