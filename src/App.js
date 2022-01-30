import logo from './logo.svg';
import './App.css';
import EggContainer from './components/EggContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksEggConatiner from './components/HooksEggConatiner';
import HooksChickenContainer from './components/HooksChickenContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <EggContainer/>
      <HooksEggConatiner />
      <HooksChickenContainer/>
      <UserContainer/>
      </Provider>
    </div>
  );
}

export default App;
