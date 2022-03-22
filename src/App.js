import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './assets/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./assets/icon/font/style.css";

import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home></Home>
    
      </Router>
    </div>
  );
}

export default App;
