// eslint-disable-next-line
import React , {useState, useEffect} from 'react';
import './App.css';
import Recipes from './components/Recipes';

function App() {

  

  return (
    <div className="App">
      <div className="recipes">
      <Recipes />
      </div>
    </div>
  );
}

export default App;
