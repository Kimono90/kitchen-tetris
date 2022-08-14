import React, {ReactElement} from 'react';

export function SearchPage(): ReactElement {
    return <div>
        <div className={"flex"}>
            <div>
                <h2>Search ingredients</h2>
                <input className={"pl-2 pr-2 pt-1 pb-1 rounded-lg border-2 focus:outline-none focus:border-amber-200"} placeholder="add an ingredient"/>
            </div>
            <div>
                <h2>Added ingredients</h2>
            </div>
        </div>
        <div><h2>Recipes you can make</h2></div>
    </div>
}