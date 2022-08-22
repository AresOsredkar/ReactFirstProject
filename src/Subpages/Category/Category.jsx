import { useState, useEffect } from 'react';
import "./Category.css";


const Category = () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch(apiUrl).then((result) => result.json())
        .then(category => {setCategoryList(category.categories);})
        .catch((error) => console.log("err",error));
    }, []);
    

    return (<ul>
                {categoryList.map(item => (
                    <li key={item.strCategory} className="categories">
                        <div>{item.strCategory}<img height="50" src={item.strCategoryThumb} alt={item.strCategory} /></div>   
                        <div className="info">{item.strCategoryDescription}</div>
                    </li>
                ))}
        </ul>);
}

export default Category;