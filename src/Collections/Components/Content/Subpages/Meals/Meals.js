import React from 'react';
import "./Meals.css";


const Meals = ({category,...props}) => {
    var url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category;
    const [meal, setMeals] = React.useState([]);

    fetch(url).then((res) => res.json()).then(catg => {setMeals(catg.meals);}).catch((error) => console.log("err",error));

    return (<><div><ul>
            <div>
                {meal.map(item => (
                    <li>
                        <div>{item.strMeal}<img height="50" src={item.strMealThumb}/></div>   
                    </li>
                ))}
            </div>
            
        </ul></div></>);
}

export default Meals;