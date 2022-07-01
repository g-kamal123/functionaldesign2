// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Adventure from './components/Adventure';
import Console from './components/Console';
import Playground from './components/Playground';

const App =() =>{
  return (
    <div className="App">
      <Console />
      <Playground />
      <Adventure />
    </div>
  );
}

export default App;
