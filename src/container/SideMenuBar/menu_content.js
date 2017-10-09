// todo Recusive Menu model to render as Submenu or menuItem and provide State
// .IsExpand for SubmenuCompoment and Provide aTagClick EventHandler to MenuItem

import React, {Component} from 'react';
import SubMenuSidebar from './components/submenu_sidebar';
import MenuItem from './components/menu_item';
import {getChild} from '../../fakeApi/menu_api';
export default class MenuContent extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            isExpand: "treeview",
            childMenus: null
        };

        this.renderSubMenuBar = this
            .renderSubMenuBar
            .bind(this);

    }
    componentDidMount(props) {
        if (this.props.menu) {
            if (this.props.menu.CHILD_COUNT > 0) {
                const childItems = getChild('CRM0001', this.props.menu.PROGRAM_CODE, 'SSCRM');
                this.setState({childMenus: childItems});
            }
        }

    }

    // handle Event renderMenuItems for SubMenuSidebar
    onAtagClick(event) {
        event.stopPropagation();
        if (this.state.isExpand === 'active treeview') {
            this.setState({isExpand: 'treeview'});
        } else {

            //  const childItems = getChild('CRM', this.props.menu.PROGRAM_CODE, 'CRM');
            this.setState({isExpand: 'active treeview'});
        }
    }

  

    renderSubMenuBar() {
        return (<SubMenuSidebar
        onLiClick={this.onAtagClick.bind(this)}
        isExpand = {this.state.isExpand}
            currentMenu={this.props.menu}
            childMenus={this.state.childMenus}/>);
    }
    renderMenuItem() {
        //if Menu item contain in the redux store then no need request
        return <MenuItem menu = {this.props.menu}/>;
    }

    renderMenuContent() {
        /* this
            .props
            .menus
            .map((m) => {
                if (m.ChildCount > 0) {
                    return renderSubMenuBar();
                } else {
                    return renderMenuItem();
                }
            });*/
        if (!this.props.menu) {
            return <li>Loading...</li>;
        }
        const m = this.props.menu;

        if (m.CHILD_COUNT > 0) {
            return this.renderSubMenuBar();
        } else {
            return this.renderMenuItem();
        }

    }
    render() {
        return this.renderMenuContent();
    }
}