import React from 'react';


const App = () => {  
    const myItem = 'item3';
    return (
        (
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>{myItem.toUpperCase()}</li>
            </ul>
        )
    )
}

export default App;