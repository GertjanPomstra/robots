import React from "react";
import SearchBox from './SearchBox';

const Header = ({searchChange}) => {
    return (
        <div>
            <h1>Robots</h1>
            <SearchBox searchChange={searchChange}/>
        </div>
    );
};

export default Header