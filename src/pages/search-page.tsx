import React, { useState } from 'react';
import { IngredientInputSection } from '../components/ingredient-input-section/ingredient-input-section';
import { RecipeResultsSection } from '../components/recipe-results-section/recipe-results-section';
import { getRecipeByIngredients } from '../gateways/spoonacular-gateway';
import { RecipeByIngredientResponse } from '../types/recipe-by-ingredient-response';

export function SearchPage() {
  const [recipeResultsLoading, setRecipeResultsLoading] = useState(false);
  const [recipeResults, setRecipeResults] = useState<RecipeByIngredientResponse[]>([]);

  function handleRecipeSearch(ingredients: string[]) {
    setRecipeResultsLoading(true);
    getRecipeByIngredients(ingredients)
      .then((r) => setRecipeResults(r))
      .then(() => setRecipeResultsLoading(false));
  }

  return (
    <>
      <header className={'h-40 bg-cover flex justify-center items-center relative bg-gradient'}>
        <h1 className={'font-semibold text-3xl text-center bg-white/75 p-2 rounded h-fit m-3 w-2/4 rounded'}>
          Kitchen Tetris
        </h1>
      </header>
      <IngredientInputSection onSearchRecipes={handleRecipeSearch} />
      {recipeResultsLoading && <div>Loading results</div>}
      {recipeResults.length ? <RecipeResultsSection recipes={recipeResults} /> : null}
    </>
  );
}
