import React from 'react';
import "./Meals.css";


const Meals = () => {
    var url = 'https://www.themealdb.com/api/json/v1/1/randomselection.php';
    const [meal, setMeals] = React.useState([]);

    fetch(url).then((res) => res.json()).then(catg => {setMeals(catg.categories);}).catch((error) => console.log("err",error));

    return (<><div><ul>
            <div>
                {meal.map(item => (
                    <li>
                        <div>{item.strCategory}<img height="50" src={item.strCategoryThumb}/></div>   
                    </li>
                ))}
            </div>
            
        </ul></div></>);
}

export default Meals;