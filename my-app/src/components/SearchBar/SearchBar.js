import React, {useState} from "react";
import './SearchBar.css';


const products = [
    'el. guitar' , 'bass' , 'drums' , 'mic', 
];

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        //alert("changed");
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue("");
    }

    console.log(
        products.map((products) =>{
            return products.toUpperCase()
        })
    )

    const shouldDisplayButton = searchValue.length > 0; // this is conditional rendering!!! Boolean expresion (true or false).

    return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
         { shouldDisplayButton && <button onClick={handleClearClick}> clear </button> }

    </div>
    )
}

export default SearchBar;