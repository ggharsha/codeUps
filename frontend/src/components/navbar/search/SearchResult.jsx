import React, { useState } from "react";
import {Link} from 'react-router-dom'
const SearchResult = ({search})=>{
    const [isActive, setIsActive] = useState(true);
    const items = search.map(result => result)
    console.log(items)

    return( isActive && ( 
            <div className='searchResult-container'>
               <ul>
                    {items.map((list, idx)=>{
                        const name = list.username ? list.username : list.title
                        return (
                            <Link to={`/user/${list._id}`} key={idx} >
                                <li >{name}</li>
                            </Link>
                        )    
                    })}
                </ul> 
            </div>
        )
    )

}

export default SearchResult