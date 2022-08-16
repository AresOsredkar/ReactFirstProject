
import './App.css';
import NavigationBar from './Collections/Components/Navigation/Navigation.js';
import Category from './Subpages/Category/Category.js';

const App = () => {
  return (<div className="App">
            <NavigationBar />
            <Category />
          </div>);   
}

export default App;