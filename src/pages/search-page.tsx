import React, { ChangeEvent, ReactElement, useState } from 'react';

export function SearchPage() {
  const [ingredientToAdd, setIngredientToAdd] = useState<string>('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  function renderSelectedIngredients(): JSX.Element[] {
    return selectedIngredients.map((i) => <div>{i}</div>);
  }

  return (
    <div>
      <h1 className={'font-semibold text-center'}>Kitchen Tetris</h1>
      <div className={'bg-amber-100 flex flex-col'}>
        <div className={'flex justify-around'}>
          <div>
            <h2>Search ingredients</h2>
            <input
              className={'pl-2 pr-2 pt-1 pb-1 rounded-lg border-2 focus:outline-none focus:border-amber-200'}
              placeholder="add an ingredient"
              onChange={(event: ChangeEvent<HTMLInputElement>) => setIngredientToAdd(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  console.log('adding');
                  setSelectedIngredients([...selectedIngredients, ingredientToAdd]);
                  event.currentTarget.value = '';
                }
              }}
            />
          </div>
          <div>
            <h2>Added ingredients</h2>
            {renderSelectedIngredients()}
          </div>
        </div>
        <button className={'p-2'}>Look for recipes</button>
      </div>
      <div className={'flex justify-center'}>
        <h2>Recipes you can make</h2>
      </div>
    </div>
  );
}
