import React from 'react';
import CountButton from './countButton/CountButton';
import SearchBar from './SearchBar/SearchBar';




const App = () => {  
    return (

        <CountButton incrementBy={5} buttonColor="blue" />

        //<div>
           // <SearchBar products = {
             //   [
              //      'el. guitar' , 'bass' , 'drums' , 'mic', 
              //  ]
              //  } 
           // />
            // <SearchBar products = {
             //   [
              //      'guitar pick' , 'bass pick' , 'drums stick' , 'mic stand', 
             //   ]
              //  } 
            ///>
        //</div>
       //<div>
           // <CountButton incrementBy={1} buttonColor={'red'} />
           // <CountButton incrementBy={5} buttonColor={'green'} />
           // <CountButton incrementBy={7} buttonColor={'blue'} />
       //</div>
    )
}

export default App;