import React, { ChangeEvent, ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export type SearchIngredientsBlockProps = {
  onIngredientAdd: (newIngredient: string) => void;
  selectedIngredients: string[];
  onDeleteAllClick: () => void;
  onDeleteSingleClick: (ingredient: string) => void;
};

export function SearchIngredientsBlock({
  onIngredientAdd,
  selectedIngredients,
  onDeleteAllClick,
  onDeleteSingleClick,
}: SearchIngredientsBlockProps): ReactElement {
  const [ingredientToAdd, setIngredientToAdd] = useState<string>('');
  const [isHoveringTrash, setIsHoveringTrash] = useState<boolean>(false);

  const hoveringClass = isHoveringTrash ? 'line-through' : '';

  function renderSelectedIngredients(): JSX.Element[] {
    return selectedIngredients.map((i, index) => (
      <div
        key={index}
        className={`ml-1 ${hoveringClass} animate-slide_in hover:line-through cursor-pointer`}
        title={'Click to remove'}
        onClick={() => onDeleteSingleClick(i)}
      >
        {i}
      </div>
    ));
  }

  return (
    <div className={'md:p-4 p-2 md:w-2/4 w-full bg-amber-100 rounded md:m-6 m-2 drop-shadow-xl'}>
      <h2 className={'p-1'}>Add ingredients</h2>
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
      {selectedIngredients.length ? (
        <div className={'flex items-center justify-between mt-3'}>
          <h2 className={'p-1'}>Search for recipes with</h2>
          <FontAwesomeIcon
            icon={faTrashCan}
            title={'Remove all ingredients'}
            className={'p-0.5 cursor-pointer hover:text-red-500'}
            onClick={() => {
              onDeleteAllClick();
              setIsHoveringTrash(false);
            }}
            onMouseOver={() => setIsHoveringTrash(true)}
            onMouseLeave={() => setIsHoveringTrash(false)}
          />
        </div>
      ) : null}
      {renderSelectedIngredients()}
    </div>
  );
}
