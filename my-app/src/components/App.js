import React from 'react';
import CountButton from './CountButton';

const App = () => {  
    return (
       <div>
            <CountButton incrementBy={1} />
            <CountButton incrementBy={5} />
            <CountButton incrementBy={7} />
       </div>
    )
}

export default App;