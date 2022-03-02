import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'; //routing pkg
import Login from './components/Login';                                              //Login component

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' >
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
