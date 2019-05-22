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


  if (firstLogih === true) {
    return (
      <div className="App">
        <h1>Welcome to our platform first time user</h1>
      </div>
    );  }
  if (authed === true) {
    return (
      <div className="App">
        <h1>Hello Logged inn user</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Login to see your dashboard</h1>
      </div>
    );
  }
}

export default App;
