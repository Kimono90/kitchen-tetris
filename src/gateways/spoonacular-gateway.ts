import axios from "axios";

const spoonacularIngredientsBaseUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
const randomRecipe = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`

export function getRandomRecipe() {
    console.log(randomRecipe)
    return axios.get(randomRecipe).then(result => result.data)
}