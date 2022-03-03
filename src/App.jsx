import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'; //routing pkg
//components
import Login from './components/Login';                                   //Login component
import Header from'./components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
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
