import React from 'react';
import CountButton from './CountButton';

const App = () => {  
    return (
       <div>
            <CountButton incrementBy={1} buttonColor={'red'} />
            <CountButton incrementBy={5} buttonColor={'green'} />
            <CountButton incrementBy={7} buttonColor={'blue'} />
       </div>
    )
}

export default App;