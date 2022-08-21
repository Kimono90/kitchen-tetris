import React, { ChangeEvent, ReactElement, useState } from 'react';

export function SearchPage() {
  const [ingredientToAdd, setIngredientToAdd] = useState<string>('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  function renderSelectedIngredients(): JSX.Element[] {
    return selectedIngredients.map((i) => <div>{i}</div>);
  }

  return (
    <div>
      <div className={'h-40 bg-cover flex justify-center items-center relative bg-hero-pattern'}>
        <h1 className={'font-semibold text-3xl text-center bg-white/75 p-2 rounded h-fit m-3 w-2/4 rounded'}>
          Kitchen Tetris
        </h1>
      </div>
      <div className={'flex flex-col'}>
        <div className={'flex justify-around'}>
          <div className={'p-4 w-2/4 bg-amber-100 rounded m-6 drop-shadow-xl'}>
            <h2 className={'pb-2.5'}>Search ingredients</h2>
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
          <div className={'w-2/4 p-4 bg-amber-100 rounded m-6 drop-shadow-xl'}>
            <h2 className={'pb-2.5'}>Added ingredients</h2>
            {renderSelectedIngredients()}
          </div>
        </div>
        <button
          className={
            'p-4 bg-amber-200 rounded font-semibold max-w-fit border-amber-300 border-2 flex place-self-center drop-shadow-xl'
          }
        >
          Look for recipes &#x1F50E;
        </button>
      </div>
      <div className={'flex justify-center'}>
        <h2 className={'p-4 m-4 bg-amber-100 w-full drop-shadow-xl'}>Recipes you can make</h2>
      </div>
    </div>
  );
}
