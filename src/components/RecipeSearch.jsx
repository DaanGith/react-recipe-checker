import { useState } from 'react';
import { data } from '../utils/data';
import { TextInput } from './ui/TextInput';
import { RecipeListPage } from '../pages/RecipeListPage';

export const RecipeSearch = ({ onClick }) => { 
  const [searchField, setSearchField] = useState("");

  const recipes = data.hits;
  const recipe = recipes.map((recipe) => {
    return recipe;
  });

  const matchedRecipes = recipe.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleChange = (event) => {
      setSearchField(event.target.value);
  };

  
  return (
    <>
      <label>Search for recipe:</label>
      <TextInput onChange={handleChange} />  
      <RecipeListPage clickFn={onClick} recipes={matchedRecipes} />

    </>
  );
};
