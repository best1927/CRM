import React, { Component } from "react";
import "../../css/chat.css";
class NavObj extends React.Component {
  render() {
    return (
      <div className="list-group-item form-group navItemList">
        <a href="#">
          <div className="pull-left">
            <img
              className="img-circle" 
              src={process.env.PUBLIC_URL + "/images/" + this.props.PicName }
            />
          </div>
          <div>
            <label className="mleft10 dimgreycolor">{this.props.Name}</label>
          </div>

          <label className="mleft10  dimgreycolor  n">
          {this.props.LastMsg}
          </label>
        </a>
      </div>
    );
  }
}
export default NavObj;
