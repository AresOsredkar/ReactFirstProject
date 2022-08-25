import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './Categories.scss'


const Categories = () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [categoryList, setCategoryList] = useState([]);
    const [isInfoSpread, setIsInfoSpread] = useState(false);

    useEffect(() => {
        fetch(apiUrl).then((result) => result.json())
        .then(category => {setCategoryList(category.categories);})
        .catch((error) => console.log("err",error));
    }, []);
    
    const handleInfoMenuClick = () => setIsInfoSpread((prevState) => !prevState)

    return (<div className="categoryList">
                {categoryList.map(item => (
                    <Card key={item.strCategory}>
                        <h2>{item.strCategory}</h2><img height="50" src={item.strCategoryThumb} alt={item.strCategory} />
                        <div className="info">{item.strCategoryDescription}</div>
                        <div className="infoMenuButton">
                        {isInfoSpread ? 
                            <FaChevronDown key={item} onClick={handleInfoMenuClick}/> : 
                            <FaChevronUp key={item} onClick={handleInfoMenuClick}/>                       
                        }
                        </div>
                        
                    </Card>
                ))}
        </div>);
}

export default Categories;