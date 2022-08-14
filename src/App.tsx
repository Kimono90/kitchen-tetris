import './App.css'
import { getRecipeByIngredients } from "./gateways/spoonacular-gateway";
import {SearchPage} from "./pages/search-page";

function App() {
    // const recipe = getRecipeByIngredients(["eggs"]);
    //
    // console.log('RECEPTEN', recipe)

  return (
    <div className="App">
        <SearchPage />
    </div>
  )
}

export default App
