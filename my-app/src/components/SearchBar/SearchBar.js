import React, {useState} from "react";
import './SearchBar.css';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("the search value");

    const handleInputChange = (event) => {
        //alert("changed");
        console.log(event.target.value);
    }

    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
    </div>
}

export default SearchBar;