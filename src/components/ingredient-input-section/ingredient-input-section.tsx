import React, { ReactElement, useState } from 'react';
import { SearchIngredientsBlock } from './search-ingredients-block';

export type IngredientInputSectionProps = {
  onSearchRecipes: (ingredients: string[]) => void;
  onEmptySelectedIngredients: () => void;
};

export function IngredientInputSection({
  onSearchRecipes,
  onEmptySelectedIngredients,
}: IngredientInputSectionProps): ReactElement {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  function handleIngredientRemove(ingredientToRemove: string) {
    const newSelectedIngredients = selectedIngredients.filter((i) => i !== ingredientToRemove);
    setSelectedIngredients(newSelectedIngredients);
  }

  return (
    <div className={'flex flex-col'}>
      <div className={'flex justify-around'}>
        <SearchIngredientsBlock
          onIngredientAdd={(ingredientToAdd) => setSelectedIngredients([...selectedIngredients, ingredientToAdd])}
          selectedIngredients={selectedIngredients}
          onDeleteAllClick={() => {
            setSelectedIngredients([]);
            onEmptySelectedIngredients();
          }}
          onDeleteSingleClick={handleIngredientRemove}
        />
      </div>
      <button
        className={
          'md:p-4 p-2 bg-amber-200 rounded font-semibold max-w-fit border-amber-300 border-2 flex place-self-center drop-shadow-xl'
        }
        onClick={() => onSearchRecipes(selectedIngredients)}
      >
        Look for recipes &#x1F50E;
      </button>
    </div>
  );
}
