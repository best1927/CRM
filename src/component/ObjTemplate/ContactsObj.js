import React, { Component } from "react";

class ContactsObj extends React.Component {
  render() {
    return (
      <div className="list-group-item ptop5 pbottom5">
        <div className="row">
          <div className="col-md-1">
            <input
              type="checkbox"
              className=" w20 h20 mtop15 mright5"
              name="chkObject"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + "/images/" + this.props.PicName}
              className="img-circle w40 h40"
            />
          </div>
          <div className="col-md-9">
            <label className="mtop7"> {this.props.Name} </label>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactsObj;
