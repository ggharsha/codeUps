import React, { useState } from "react";
const Dropdown = ({value,filter, options}) => {
    const [isActive, setIsActive] = useState(false);

    return (

        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => (
                setIsActive(!isActive))}>
                <span>{value}</span>
                <div className="dropdown-icon">
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>

            {isActive && (
                <div className="dropdown-options">
                    {options.map(option => (
                        <div onClick={() => {

                            setIsActive(false)
                            filter(option)

                        }}
                            className="dropdown-item" key={option}>
                            {option}

                        </div>
                    ))}

                </div>)
            }
        </div>
    )
}

export default Dropdown;