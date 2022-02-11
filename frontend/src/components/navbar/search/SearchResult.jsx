import React, { useState } from "react";
import {Link} from 'react-router-dom'
import TutorSearchItem from "./TutorSearchItem";
import VideoSearchItem from "./VideoSearchItem";

const SearchResult = ({search, fetchUser, getVideo})=>{
    const [isActive, setIsActive] = useState(true);
    const items = search.map(result => result)
    console.log(items)

    return( isActive && ( 
            <div className='searchResult-container'>
                <ul>
                    {items.map((list, idx)=>{
                        const name = list.username ? list.username : list.title
                        // return (
                        //     <Link to={`/user/${list._id}`} key={idx} >
                        //         <li key={idx} className="search-result-item">
                        //             <p>{name}</p>
                        //         </li>
                        //     </Link>
                        // )    
                        return list.username ? 
                        <TutorSearchItem 
                            tutor={list}
                            key={idx}
                            fetchUser={fetchUser}
                        /> : <VideoSearchItem 
                            video={list}
                            key={idx}
                            getVideo={getVideo}
                        /> 
                    })}
                </ul> 
            </div>
        )
    )

}

export default SearchResult