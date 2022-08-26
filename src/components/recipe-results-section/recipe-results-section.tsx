import React, { ReactElement } from 'react';
import { RecipeByIngredientResponse } from '../../types/recipe-by-ingredient-response';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { getRecipeInformation } from '../../gateways/spoonacular-gateway';

export type RecipeResultsSectionProps = {
  recipes: RecipeByIngredientResponse[];
};

export function RecipeResultsSection({ recipes }: RecipeResultsSectionProps): ReactElement {
  function renderRecipes(): JSX.Element[] {
    return recipes.map((recipe, index) => (
      <div
        className={`animate-render duration-${
          (index + 1) * 300
        } flex justify-between flex-col m-2 mb-4 bg-amber-100 w-72 relative cursor-pointer rounded drop-shadow-xl transition-all hover:scale-105`}
        key={recipe.id}
        onClick={() => getRecipeInformation(recipe.id).then((r) => window.open(r.sourceUrl, '_blank'))}
      >
        <div className={'font-semibold flex flex-row justify-between p-1 ml-2 mr-2'}>
          <p className={'break-words'}>{recipe.title}</p>
        </div>
        <div className={'font-semibold p-2 whitespace-nowrap absolute bottom-0 right-0 bg-amber-100 rounded-tl rounded-br'}>
          {recipe.likes}
          <FontAwesomeIcon icon={faThumbsUp} className={'ml-2'} />
        </div>
        <div className={'h-60 bg-cover bg-center rounded-br'} style={{ backgroundImage: `url('${recipe.image}')` }}></div>
      </div>
    ));
  }

  return (
    <>
      <div className={'flex justify-center'}>
        <h2 className={'animate-render p-4 m-4 bg-amber-100 w-full drop-shadow-xl'}>Recipes you can make</h2>
      </div>
      <div className={'flex flex-wrap justify-around m-4'}>{renderRecipes()}</div>
    </>
  );
}
