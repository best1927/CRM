import React from "react";
import HeaderItem from "./HeaderItem";
import HeaderItemTab from "./HeaderItemTab";

class HeaderContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hType = this.props.htype;
    let HeaderShow = (
      <HeaderItem
        htype={this.props.htype}
        HeaderText={this.props.HeaderText}
        btnAddClick={this.props.btnAddClick}
      />
    );

    if (hType === "TabType") {
      HeaderShow = (
        <HeaderItemTab
          HeaderText={this.props.HeaderText}
          btnBackClick={this.props.btnBackClick}
          btnEditClick={this.props.btnEditClick}
          btnDeleteLink={this.props.btnDeleteLink}
          SalesYN ={this.props.SalesYN}
          TeamYN ={this.props.TeamYN}
        />
      );
    }

    return (
      <div>
        {HeaderShow}
      </div>
    );
  }
}
export default HeaderContainer;
