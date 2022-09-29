import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path={`/rgb/:red/:green/:blue`} component={Home} ></Route>
        <Route path="*" component={NotFound} ></Route>

      </Switch>
    </div>
  );
}

export default App;
