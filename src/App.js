import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./style.css";
// import { set } from "../server/app";

function App() {
  const [state, setState] = React.useState("");

  React.useEffect(function () {
    fetch("http://localhost:9000/testServer")
      .then((jsonData) => {
        return jsonData.text();
      })
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        console.log("Some error occured  = ", err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <p>I am data from the api call from the backend {state}</p>
    </div>
  );
}

export default App;
