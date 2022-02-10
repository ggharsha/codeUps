import React from 'react'


const SearchBar = (props)=>{

    return(
        <div className='searchbar-container'>
            <div className='dropdown'>
                <div className='all'>All</div>
                <i className="fa-solid fa-caret-down"></i>
                {/* <RiArrowDropDownFill className='dropdownicon' /> */}
            </div>
            <input className='searchinput' type="text" />
            <i className="fa-solid fa-magnifying-glass fa-1x"></i>
            {/* <GoSearch className='searchicon' /> */}
        </div>
    )
}

export default SearchBar