
import './App.css';
import NavigationBar from './Collections/Components/Navigation/Navigation.js';
import Content from './Collections/Components/Content/Content.js';

const App = () => {
  let wrap =  <div className="App">
                <NavigationBar />
                <Content />
              </div>;
  return wrap;    
}

export default App;