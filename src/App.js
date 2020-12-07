import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/homePage/home.js";
import Button from "./Components/state/incrementing";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/home" component={HomePage} />
        <Route path="/increment" component={Button} />
      </Router>
    </div>
  );
}

export default App;
