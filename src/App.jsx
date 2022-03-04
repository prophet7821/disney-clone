import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'; //routing pkg
//components
import Login from './components/Login';                                   //Login component
import Header from'./components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' >
            <Login/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
