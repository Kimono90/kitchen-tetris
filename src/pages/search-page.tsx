import React from 'react';
import { IngredientInputSection } from '../components/ingredient-input-section/ingredient-input-section';
import { RecipeResultsSection } from '../components/recipe-results-section/recipe-results-section';

export function SearchPage() {
  return (
    <div>
      <header className={'h-40 bg-cover flex justify-center items-center relative bg-hero-pattern'}>
        <h1 className={'font-semibold text-3xl text-center bg-white/75 p-2 rounded h-fit m-3 w-2/4 rounded'}>
          Kitchen Tetris
        </h1>
      </header>
      <IngredientInputSection />
      <RecipeResultsSection />
    </div>
  );
}
