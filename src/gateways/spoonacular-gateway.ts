import axios from 'axios';
import { RecipeByIngredientResponse } from '../types/recipe-by-ingredient-response';

const ingredientsBaseUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
  import.meta.env.VITE_SPOONACULAR_API_KEY
}`;

export async function getRecipeByIngredients(ingredients: string[]): Promise<RecipeByIngredientResponse[]> {
  const requestUrl = `${ingredientsBaseUrl}&ingredients=${ingredients.join('+')}&ignorePantry=false`;
  const response = await axios.get(requestUrl);
  return response.data;
}
