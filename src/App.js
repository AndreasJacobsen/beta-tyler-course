import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/HelloLogin';
import HelloLogin from './components/HelloLogin';
import Name from './components/Props';

function App() {
  return (
    <div>
      <h1>
        <i>Introduction to JSX</i>
      </h1>
      <HelloLogin />
      <hr />
      <h1>
        <i>Introduction to props</i>
      </h1>
      <Name fName="Andreas" lName="Jacobsen" />
    </div>
  );
}

export default App;
