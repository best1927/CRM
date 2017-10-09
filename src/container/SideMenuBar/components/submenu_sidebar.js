import React, {Component} from 'react';
import MenuContent from '../menu_content';

// handle Event renderMenuItems for SubMenuSidebar
const renderMenuItems = (props) => {
    if (!props.childMenus) {
        return <li>Loading...</li>;
    }
    const ret = (props.childMenus.map((m) => {
        return (<MenuContent menu={m}/>);
    }));
    return ret;
};
 const SubMenuSidebar =(props) => {
    const curMenu = props.currentMenu;
            return (
                <li
                    key={curMenu.PROGRAM_CODE}
                    className={props.isExpand}
                    onClick={(e)=>{props.onLiClick(e)}}>
                    <a>
                        <i className={curMenu.PROGRAM_ICON}></i>
                        <span>{curMenu.DESC_ENG}</span>
                        <i className="fa fa-angle-left pull-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        {renderMenuItems(props)}
                    </ul>
                </li>
            );
        }
export default SubMenuSidebar;