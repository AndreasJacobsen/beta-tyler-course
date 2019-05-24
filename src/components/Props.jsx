import React from 'react';

function Name(props) {
  return (
    <h2>
      Hello {props.fName} {props.lName}
    </h2>
  );
}

export default Name;
