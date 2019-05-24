import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/HelloLogin';
import HelloLogin from './components/HelloLogin';
import Name from './components/Props';
import ArrayDoubler from './components/ArrayDoubler';
//stolen from https://stackoverflow.com/questions/43948828/how-to-pass-an-array-of-items-in-react-js
const myNums = [1, 2, 3, 4, 5, 6, 7, 128];

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
      <hr />
      <i>Arraydoubler</i>
      <ArrayDoubler items={myNums} />
    </div>
  );
}

export default App;
