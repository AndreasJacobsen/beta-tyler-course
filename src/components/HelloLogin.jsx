import React from 'react';
import '../App.css';

function showWarning() {
  return true;
}
function isAuthed() {
  return false;
}

function HelloLogin() {
  const authed = isAuthed();
  const warning = showWarning();

  return (
    <div className="App">
      {/*Turnary operator*/}
      {authed === true ? <h1>Welcome back!</h1> : <h1>Please log inn</h1>}
      {warning === true ? (
        <h1>Warning er sann!</h1>
      ) : null /* returner null så komponent bare viser noe om conditonen er rett*/}
    </div>
  );
}
export default HelloLogin;
