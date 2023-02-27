import React from 'react';
import CountButton from './countButton/CountButton';
import SearchBar from './SearchBar/SearchBar';

const App = () => {  
    return (
        <div>
            <SearchBar />
        </div>
       //<div>
           // <CountButton incrementBy={1} buttonColor={'red'} />
           // <CountButton incrementBy={5} buttonColor={'green'} />
           // <CountButton incrementBy={7} buttonColor={'blue'} />
       //</div>
    )
}

export default App;