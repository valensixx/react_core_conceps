import React, { useEffect, useState } from 'react';
import CountButton from './countButton/CountButton';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';



const App = () => {  

    const [productsState, setProductsState] = useState([]);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((productsArray) => {
            const newProductsState = productsArray.map((product)=>{
                return product.title
            });
            setProductsState(newProductsState);
        });


        //setTimeout(()=>{
           // setProductsState([
               // 'el. guitar' , 
               // 'bass' , 
               // 'drums' , 
              //  'mic', 
           // ])       
       // }, 2000)
    }, []);


    const hasProducts = productsState.length > 0;

    return (

        //<CountButton incrementBy={5} buttonColor="blue" />

        <div>

            <Button>Button1</Button>
            <Button>Button2</Button>
            <Button>Button3</Button>

           {/*{hasProducts ? <SearchBar products = {productsState} /> : 'loading'}*/} 
            
        </div>

       //<div>
           // <CountButton incrementBy={1} buttonColor={'red'} />
           // <CountButton incrementBy={5} buttonColor={'green'} />
           // <CountButton incrementBy={7} buttonColor={'blue'} />
       //</div>
    )
}

export default App;