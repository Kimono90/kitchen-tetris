import React, { ReactElement } from 'react';
import { RecipeByIngredientResponse } from '../../types/recipe-by-ingredient-response';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export type RecipeResultsSectionProps = {
  recipes: RecipeByIngredientResponse[];
};

export function RecipeResultsSection({ recipes }: RecipeResultsSectionProps): ReactElement {
  function renderRecipes(): JSX.Element[] {
    return recipes.map((recipe) => (
      <div className={'flex justify-between m-1 bg-amber-100 min-w-[40%] max-w-[40%]'} key={recipe.id}>
        <div className={'font-semibold'}>{recipe.title}</div>
        <div className={'font-semibold'}>
          {recipe.likes}
          <FontAwesomeIcon icon={faThumbsUp} className={'ml-2'} />
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className={'flex justify-center'}>
        <h2 className={'p-4 m-4 bg-amber-100 w-full drop-shadow-xl'}>Recipes you can make</h2>
      </div>
      <div className={'flex flex-wrap justify-around m-4'}>{renderRecipes()}</div>
    </>
  );
}
