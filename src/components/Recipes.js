import React, { useState } from 'react';
import './Recipes.module.css';
  
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
           
          <div key={index} className ="div_recipe" style={{background:'white',float:'left',margin:'4%',width:'40%',height:"600px", border:'1px solid grey', boxShadow:'3px 3px 3px 3px #9E9E9E', borderRadius:'10px'}}>
            <div style={{height:'422px'}}>
                <br/>
                <h1>Title: {recipe.recipe.label}</h1><br/>

                <ul>
                {/* <li>{recipe.recipe.ingredients[0].text}</li> */}
                
                {recipe.recipe.ingredients.map((results, index) =>(
                    <li key={index} style={{listStyle:'none',textAlign:'left',marginLeft:'60px'}}>{results.text}</li>
                ))}
                
                </ul>
                
            </div>
            <div style={{height:'170px', marginBottom:'5px'}}>
                <p style={{fontWeight:'bold'}}>Calories: {recipe.recipe.calories}</p>
                <img src={recipe.recipe.image} alt="recipe_image" style={{width:'150px', height:'150px', borderRadius:'70%', overflow:'hidden'}}/>
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