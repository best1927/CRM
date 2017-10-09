import React, { Component } from "react";
import NavObj from "../ObjTemplate/NavObj";
import "../../css/chat.css";
class NavChat extends React.Component {
  
  render() {
    //this.state.tab = this.props.Tabid;
    let NavObjLst = [];
    if (this.props.Tabid === "tbChat") {
      NavObjLst.push({
        PicName: "Toey50.png",
        Name: "Jack Sparrow",
        LastMsg: "Why not buy a new awesome theme?"
      });
    } else {
      NavObjLst.push({
        PicName: "Users_50.png",
        Name: "Sales Team",
        LastMsg: "Why not buy a new awesome theme?"
      });
    }

    let ItemList = NavObjLst.map(NavObjItem => (
      <NavObj
        PicName={NavObjItem.PicName}
        Name={NavObjItem.Name}
        LastMsg={NavObjItem.LastMsg}
      />
    ));
    return (
      <div id={this.props.Tabid} className="tab-pane fade in active">
        <div className="list-group" id={this.props.id}>
          {ItemList}
        </div>
      </div>
    );
  }
}
export default NavChat;
