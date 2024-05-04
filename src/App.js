import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <h1>Weather Search Engine </h1>
      </header>
      <Weather />
      <footer>
         This project was coded by Bushra Khugyani and is {" "}
        <a href="https://github.com/bushrakhugyani/react-weather" target="_blank"> open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}  
export default App;
