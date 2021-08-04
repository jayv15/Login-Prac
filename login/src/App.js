import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import Cookies from "js-cookie";
import {Redirect} from 'react-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={(props) => <Login />} />
          <Route path="/register" component={(props) => <Register {...props} />} />
          <Route path="/login" component={(props) => <Login {...props} />} />
          <Route path="/:main" component={(props) => Cookies.get('jwt') ? <MainScreen {...props} /> : <Redirect to='/login' />}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
