import React, { useEffect, useState } from 'react';
import CountButton from './countButton/CountButton';
import SearchBar from './SearchBar/SearchBar';




const App = () => {  

    const [productsState, setProductsState] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setProductsState([
                'el. guitar' , 
                'bass' , 
                'drums' , 
                'mic', 
            ])       
        }, 2000)
    }, []);


    const hasProducts = productsState.length > 0;

    return (

        //<CountButton incrementBy={5} buttonColor="blue" />

        <div>

            {hasProducts ? <SearchBar products = {productsState} /> : 'loading'}
            
        </div>

       //<div>
           // <CountButton incrementBy={1} buttonColor={'red'} />
           // <CountButton incrementBy={5} buttonColor={'green'} />
           // <CountButton incrementBy={7} buttonColor={'blue'} />
       //</div>
    )
}

export default App;