import React from 'react';
import logo from './logo.svg';
import './App.css';

//utenfor 'react' så her er det ren JS
// denne isLoading er ikke ekte, men virker
function isAuthed() {
  return true;
}

function App() {
const authed = isAuthed()
// får hele function App til å returnere null om er sann
// som gjør at ingenting i funksjonen App vises
if(isAuthed() === true) {
  return null
}

  return (
    <div className="App">
      <header className="App-header">
       
          
          <h1>Hei verden, jeg er skrevet av {name}</h1>
          <p>Idag er det {new Date().toLocaleDateString()}</p>
          <p> 2 ganger to er {2*2}</p>
        
   
      </header>
    </div>
  );
}

export default App;
