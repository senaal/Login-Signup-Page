import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './style.css';
import Login from './components/login';
import Register from './components/register';
function App() {
  return (
    <>
      {}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Login/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/Signup" element={<Register/>} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;
 