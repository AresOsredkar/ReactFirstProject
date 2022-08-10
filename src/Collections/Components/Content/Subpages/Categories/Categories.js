import React from 'react';
import "./Category.css";


const Category = () => {
    var url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [cat, setCat] = React.useState([]);
    

    fetch(url).then((res) => res.json()).then(catg => {setCat(catg.categories);}).catch((error) => console.log("err",error));

    const swapContent = () => {

    }

    return (<><div><ul>
            <div>
                {cat.map(item => (
                    <li className="categories" key={item.strCategory} onClick={swapContent()}>
                        <div>{item.strCategory}<img height="50" src={item.strCategoryThumb}/></div>   
                        <div className="info">{item.strCategoryDescription}</div>
                    </li>
                ))}
            </div>
            
        </ul></div></>);
}

export default Category;