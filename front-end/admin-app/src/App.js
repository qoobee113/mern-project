import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom' ;
import Home from './containers/Home';
import SingIn from './containers/SignIn';
import SignUp from './containers/SingUp';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin"  component={SingIn}/>
          <Route path="/signup"  component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
