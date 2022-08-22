import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export type AddedIngredientsBlockProps = {
  selectedIngredients: string[];
  onDeleteClick: () => void;
};

export function AddedIngredientsBlock({ selectedIngredients, onDeleteClick }: AddedIngredientsBlockProps): ReactElement {
  const [isHoveringTrash, setIsHoveringTrash] = useState(false);

  const hoveringClass = isHoveringTrash ? 'line-through' : '';

  function renderSelectedIngredients(): JSX.Element[] {
    return selectedIngredients.map((i, index) => (
      <div key={index} className={`ml-1 ${hoveringClass}`}>
        {i}
      </div>
    ));
  }

  return (
    <div className={'w-2/4 p-4 bg-amber-100 rounded m-6 drop-shadow-xl'}>
      <div className={'flex items-center justify-between'}>
        <h2 className={'p-1'}>Added ingredients</h2>
        <FontAwesomeIcon
          icon={faTrashCan}
          title={'Remove all ingredients'}
          className={'p-0.5 cursor-pointer hover:text-red-500'}
          onClick={onDeleteClick}
          onMouseOver={() => setIsHoveringTrash(true)}
          onMouseLeave={() => setIsHoveringTrash(false)}
        />
      </div>
      {renderSelectedIngredients()}
    </div>
  );
}
