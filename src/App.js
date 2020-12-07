import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/homePage/home.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/home" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
