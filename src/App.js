import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Route } from "react-router-dom";
import HomePage from "./Components/homePage/home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/home" component={HomePage} />
    </div>
  );
}

export default App;
