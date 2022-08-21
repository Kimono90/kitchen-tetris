import React, { ReactElement } from 'react';

export function RecipeResultsSection(): ReactElement {
  return (
    <div className={'flex justify-center'}>
      <h2 className={'p-4 m-4 bg-amber-100 w-full drop-shadow-xl'}>Recipes you can make</h2>
    </div>
  );
}
