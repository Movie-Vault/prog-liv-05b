import React from "react";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu() {
    return (
        <div className="dropdown-menu">
            <div className='menu-containter'>
                <div className='menu-trigger'>
                    <img src={faChevronDown} />
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu;