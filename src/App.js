import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      
    <Router>
    <Navbar></Navbar>
      <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
        </Router>
        </div>
  );
}

export default App;
