import React, { ChangeEvent, ReactElement, useState } from 'react';

export type SearchIngredientsBlockProps = {
  onIngredientAdd: (newIngredient: string) => void;
};

export function SearchIngredientsBlock({ onIngredientAdd }: SearchIngredientsBlockProps): ReactElement {
  const [ingredientToAdd, setIngredientToAdd] = useState<string>('');

  return (
    <div className={'p-4 w-2/4 bg-amber-100 rounded m-6 drop-shadow-xl'}>
      <h2 className={'p-1'}>Search ingredients</h2>
      <input
        className={'p-2 rounded-lg border-2 focus:outline-none focus:border-amber-200'}
        placeholder="enter one ingredient"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setIngredientToAdd(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onIngredientAdd(ingredientToAdd);
            event.currentTarget.value = '';
          }
        }}
      />
      <button
        className={'ml-2 p-1 bg-amber-200 rounded font-semibold border-amber-300 border-2 cursor-pointer'}
        onClick={() => onIngredientAdd(ingredientToAdd)}
      >
        Add
      </button>
    </div>
  );
}
