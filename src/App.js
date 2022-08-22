import {Routes,Route} from 'react-router-dom'
import './App.css';
import NavigationBar from './Components/Navigation/Navigation';
import Category from './Subpages/Category/Category';

const App = () => {
  return (<div className="App">
            <NavigationBar />
            <Category />
          </div>);   
}

export default App;