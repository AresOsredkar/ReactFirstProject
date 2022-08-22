import { useState, useEffect } from 'react';
import Card from '../Components/Card';


const Categories = () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch(apiUrl).then((result) => result.json())
        .then(category => {setCategoryList(category.categories);})
        .catch((error) => console.log("err",error));
    }, []);
    

    return (<div className="categoryList">
                {categoryList.map(item => (
                    <Card key={item.strCategory} className="categories">
                        <div>{item.strCategory}<img height="50" src={item.strCategoryThumb} alt={item.strCategory} /></div>   
                        <div className="info">{item.strCategoryDescription}</div>
                    </Card>
                ))}
        </div>);
}

export default Categories;