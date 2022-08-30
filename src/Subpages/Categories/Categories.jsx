import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './Categories.scss'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


const Categories = () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [categoryList, setCategoryList] = useState([]);
    const [filteredCategoryList, setFilteredCategoryList] = useState([]);
    const [isInfoSpread, setIsInfoSpread] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(apiUrl).then((result) => result.json())
        .then(category => {setCategoryList(category.categories);setFilteredCategoryList(category.categories);})
        .catch((error) => console.log("err",error));
    }, []);
    
    const handleInfoMenuClick = () => setIsInfoSpread((prevState) => !prevState)

    const handleCategoryClick = useCallback((categoryID) => {
        var destination = '/meals/' + categoryID
        navigate(destination)
    },[navigate])

    const handleSorting = (event) => {
        switch(event.target.value){
            case 'anti-alphabetical':   setFilteredCategoryList(categoryList.slice(0).reverse())
                                        break
            case 'alphabetical':    setFilteredCategoryList(categoryList.slice(0).sort())
                                    break
        }
    }
    const handleSearchBar = (event) => {
        setFilteredCategoryList(categoryList.filter(category => category.strCategory.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (<div className="categoryList">
                <div className='filters'>
                            <form>
                                <select onChange={handleSorting}>
                                    <option value='alphabetical'>Alphabetical(Ascending)</option>
                                    <option value='anti-alphabetical'>Alphabetical(Descending)</option>
                                </select>
                                <input type='text' onChange={handleSearchBar}></input>
                            </form>
                        </div>
                {filteredCategoryList.map(item => (
                        <Card key={item.strCategory} className='categoryCard' onClick={() => handleCategoryClick(item.strCategory)}>
                            <div className="title">
                                <img height="50" src={item.strCategoryThumb} alt={item.strCategory} />
                                <h2>{item.strCategory}</h2>
                            </div>
                            <div className="info">{item.strCategoryDescription}</div>
                            <div className="infoMenuButton">
                            {isInfoSpread ? 
                                <FaChevronDown key={item} onClick={() => handleInfoMenuClick}/> : 
                                <FaChevronUp key={item} onClick={() => handleInfoMenuClick}/>                       
                            }
                            </div>
                            
                        </Card>
                ))}
        </div>);
}

export default Categories;