import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://pure-tundra-33705.herokuapp.com";
};

const API = apiURL();

function App() {
  useEffect(() => {
    axios.get(`${API}`).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello World!</h1>
        <Route path="/hidden">
          <h2>You've found a hidden route!</h2>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
