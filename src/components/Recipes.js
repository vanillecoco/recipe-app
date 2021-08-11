import React, { useState } from 'react';
import './Recipes.css';
import './Recipesre.css';
  
const Recipes =() => {
  const APP_ID ="7ad88b6a";
  const APP_KEY ="ec959c5a9598a2679ea86dabc3c125c2";

  const [recipes, setRecipes] =useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  let [responseObj, setResponseObj] = useState({});

  // useEffect( () =>{
  //   getRecipes();
  // }, [query]);

  //const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  
  
  function getRecipes(e) {
   e.preventDefault();

    setResponseObj({});
    fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,{
      "method" : "GET"
     
    }).then(response => response.json())
    .then(response =>{
      console.log(response.hits);
      setRecipes(response.hits);
      
    });
    // const data = await response.json();
    // console.log(data);
    // setRecipes(data.hits);
  }

  return (
     <>
        <form onSubmit={getRecipes}>
          <input type="text" maxLength="30" value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button className="button" type="submit">Search </button>
        </form>
        {recipes.map((recipe,index) =>(
           <div className="active_div">
          <div key={index} className ="div_recipe" >
            <div className ="up_div">
                <br/>
                <h1>Title: {recipe.recipe.label}</h1><br/>

                <ul>
                {/* <li>{recipe.recipe.ingredients[0].text}</li> */}
                
                {recipe.recipe.ingredients.map((results, index) =>(
                    <li key={index} >{results.text}</li>
                ))}
                
                </ul>
                
            </div>
            <div className="bottom_div">
                <p >Calories: {recipe.recipe.calories}</p>
                <img src={recipe.recipe.image} alt="recipe_image" />
            </div>
          </div>
          </div>
        ))}
        {/* {recipes.map(recipe =>(
          <h1>{recipe.recipe.label}</h1>
        ))}  */}
  </>  
  );
}

export default Recipes;