import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Filter_Male from "./pages/Filter_Male";
import All_Employees from './pages/All_Employees';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <a href="/">All Employees</a>
        <a href="/Filter_Male">Male filter</a>

        <Router>
        <Route exact path="/" component={All_Employees} />
          <Route exact path="/Filter_Male" component={Filter_Male} />
        </Router>
        
      </header>
    </div>
  );
}

export default App;
