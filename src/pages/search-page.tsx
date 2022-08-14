import React, {ReactElement} from 'react';

export function SearchPage(): ReactElement {
    return <div>
        <div style={{display: "flex"}}>
            <div>
                <h2>Search ingredients</h2>
                <div>search bar</div>
            </div>
            <div>
                <h2>Added ingredients</h2>
            </div>
        </div>
        <div><h2>Recipes you can make</h2></div>
    </div>
}