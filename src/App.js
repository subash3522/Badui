import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
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
      <Signup />
      
      <Router>
      <Routes>
        <Route path="/Components/Login" element = {<Login/>}></Route> 

        
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
