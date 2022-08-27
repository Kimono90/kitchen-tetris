import axios from 'axios';
import { RecipeByIngredientResponse } from '../types/recipe-by-ingredient-response';

const byIngredientsUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
  import.meta.env.VITE_SPOONACULAR_API_KEY
}`;

export async function getRecipeByIngredients(ingredients: string[]): Promise<RecipeByIngredientResponse[]> {
  const requestUrl = `${byIngredientsUrl}&ingredients=${ingredients.join('+')}&ignorePantry=false`;
  const response = await axios.get(requestUrl);
  return response.data;
}

export async function getRecipeInformation(id: number): Promise<{ sourceUrl: string }> {
  const requestUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
    import.meta.env.VITE_SPOONACULAR_API_KEY
  }`;
  const response = await axios.get(requestUrl);
  return response.data;
}
