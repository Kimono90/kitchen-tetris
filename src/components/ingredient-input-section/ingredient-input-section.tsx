import React, { ReactElement, useState } from 'react';
import { SearchIngredientsBlock } from './search-ingredients-block';
import { AddedIngredientsBlock } from './added-ingredients-block';

export function IngredientInputSection(): ReactElement {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  return (
    <div className={'flex flex-col'}>
      <div className={'flex justify-around'}>
        <SearchIngredientsBlock
          onIngredientAdd={(ingredientToAdd) => setSelectedIngredients([...selectedIngredients, ingredientToAdd])}
        />
        <AddedIngredientsBlock selectedIngredients={selectedIngredients} onDeleteClick={() => setSelectedIngredients([])} />
      </div>
      <button
        className={
          'p-4 bg-amber-200 rounded font-semibold max-w-fit border-amber-300 border-2 flex place-self-center drop-shadow-xl'
        }
      >
        Look for recipes &#x1F50E;
      </button>
    </div>
  );
}
