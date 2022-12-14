import React, { useState } from 'react';
import { IngredientInputSection } from '../components/ingredient-input-section/ingredient-input-section';
import { RecipeResultsSection } from '../components/recipe-results-section/recipe-results-section';
import { getRecipeByIngredients } from '../gateways/spoonacular-gateway';
import { RecipeByIngredientResponse } from '../types/recipe-by-ingredient-response';
import { LoadingElement } from '../components/loading-element/loading-element';

export function SearchPage() {
  const [recipeResultsLoading, setRecipeResultsLoading] = useState<boolean>(false);
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
        <h1 className={'font-semibold text-3xl text-center bg-white/75 p-2 rounded h-fit m-3 md:w-2/4 w-11/12 rounded'}>
          Kitchen Tetris
        </h1>
      </header>
      <IngredientInputSection onSearchRecipes={handleRecipeSearch} onEmptySelectedIngredients={() => setRecipeResults([])} />
      {recipeResultsLoading && <LoadingElement />}
      {recipeResults.length ? <RecipeResultsSection recipes={recipeResults} /> : null}
    </>
  );
}
