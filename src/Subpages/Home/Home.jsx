import {useState,useEffect,useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import Card from '../../Components/Card/Card'
import './Home.scss'

function Home() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const [meal, setMeal] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(apiUrl).then((result) => result.json())
        .then(meal => {setMeal(meal.meals[0]);})
        .catch((error) => console.log("err",error));
    }, []);

    const handleMealClick = (mealID,categoryID) => {
      navigate('/meals/'+ categoryID+ '/'+ mealID)
    }

    const handleCategoryClick = (categoryID) => {
        var destination = '/meals/' + categoryID
        navigate(destination)
    }

  return (
    <Card className='homepage-meal'>
      <h3>Random meal of the day</h3>
      <h3 onClick={() => handleMealClick(meal.idMeal,meal.strCategory)} className='pointer'>{meal.strMeal}</h3>
      <div className='category pointer' onClick={() => handleCategoryClick(meal.strCategory)}>{meal.strCategory}</div>
      <div className='area'>Area: {meal.strArea}</div>
      <img src={meal.strMealThumb} className='preview-image'/>
      <iframe src={`https://www.youtube.com/embed/${meal.strYoutube && meal.strYoutube.replace('https://www.youtube.com/watch?v=','')}`} 
      width='500px'
      height='400px'
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"/>
    </Card>
  )
}

export default Home
