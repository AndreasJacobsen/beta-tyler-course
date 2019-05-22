import React from "react";
import logo from "./logo.svg";
import "./App.css";

function isAuthed() {
  return true;
}

function isNew() {
  return false;
}
function App() {
  const authed = isAuthed();
  const firstLogih = isNew();

  return (
    <div className="App">
      <h1>
        {authed === true ? <h1>Welcome back!</h1> : <h1>Please log inn</h1>}
      </h1>
    </div>
  );
}

export default App;
