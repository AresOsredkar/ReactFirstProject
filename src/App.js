import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavigationBar from './Components/Navigation/Navigation';
import Categories from './Subpages/Categories';
import Home from './Subpages/Home';
import Meals from './Subpages/Meals';

const App = () => {
     
  return (
      <Router>
        <header>
          <NavigationBar />
        </header>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/categories" element={<Categories />}/>
            <Route path="/categories/?" element={<Meals />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;