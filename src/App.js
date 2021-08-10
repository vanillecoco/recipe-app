import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
   const APP_ID="7ad88b6a";
   const APP_KEY ="0f6157c2cacf1b6d32f64e21dee4ac48";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( ()=> {
    getRecipes();
  
  }, [query]);

  const requestUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(requestUrl);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <div className="recipes">
        {recipes.map(recipe => (
          <h1>{recipe.recipe.label}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
