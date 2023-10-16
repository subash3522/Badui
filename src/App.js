import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserForm from "./Components/UserForm";
import Auth from "./Components/Auth";
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  
  return (
    <>
   
      
      <Router>
      <Routes>
        <Route path="/" element = {<Signup/>}/>
        <Route path="/Components/Login" element = {<Login/>}></Route> 

        
      </Routes>
      </Router>
      <Auth/>
      
    </>
  );
}

export default App;
