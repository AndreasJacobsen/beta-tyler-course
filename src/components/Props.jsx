import React from 'react';
import '../App.css';

function Name(props) {
  return (
    <h2>
      Hello {props.fName} {props.lName}
    </h2>
  );
}

export default Name;
