import React from 'react';
import {Link} from 'react-router-dom';
const MenuItem = (props) => {
    
    if (!props.menu) {
        return <li>Loading...</li>;
    }
    const menu = props.menu
    return (
        <li>
           <Link to={menu.PROGRAM_PATH}>
                <i className={menu.PROGRAM_ICON}></i>
                {menu.DESC_ENG}
            </Link>
        </li>
    );
};

export default MenuItem;