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
      <Weather defaultCity="New York"/>
      <footer>
         This project was coded by Bushra Khugyani and is {" "}
         <a rel="noreferrer" href="https://github.com/bushrakhugyani/react-weather" target="_blank"> open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}  
export default App;
