import './App.css'
import {getRandomRecipe} from "./gateways/spoonacular-gateway";

function App() {
    const recipe = getRandomRecipe();

    console.log(recipe)

  return (
    <div className="App">
    </div>
  )
}

export default App
