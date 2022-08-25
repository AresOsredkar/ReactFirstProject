import {BrowserRouter as Router} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage';
import NavigationBar from './Components/Navigation/Navigation';
import {SettingsProvider} from './Context/SettingsContext';

const App = () => {
  return (
    <SettingsProvider>
      <Router>   
          <NavigationBar />
          <MainPage />
      </Router>
   </SettingsProvider>
  );
}

export default App;