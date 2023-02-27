import React, {useState} from "react";
import './SearchBar.css';

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
    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        <button onClick={handleClearClick}>clear</button>
    </div>
}

export default SearchBar;