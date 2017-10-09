import React, { Component } from "react";
class ContactObjLst extends React.Component {
  render() {
    let Contactobjlist = [];
    Contactobjlist.push({
      rowid: "Contact001",
      imgName: "building-icon-25.png",
      ContactName: " Albert Lee",
      Workat: "Clampett Oil and Gas, Singapore", 
    });

    Contactobjlist.push({
      rowid: "Contact002",
      imgName: "building-icon-25.png",
      ContactName: " Katherine Reyes",
      Workat: "Globex, Spain", 
    });



    const listItems = Contactobjlist.map(Contactobj =>
      <div className="row form-group list-group-item row row-RList-Item">
      
        <div className="col-md-5 mh45">
          <div className="row pull-left ">
            <input
              type="checkbox"
              name="chkObject"
              className="w20 h20 mtop10 mright5"
            />
            <img
              src="https://s3.amazonaws.com/insightly.userfiles/818696/2DQWC4/5c0e9293-135d-4a95-a0f9-f7ea21bd0bba.png"
              //src={process.env.PUBLIC_URL + "/images/" + Contactobj.imgName}
              className="imglist"
            />
          </div>
          <div className="col-md-1" />
          <a href="ContactView.aspx" className="blackcolor">
            <span className="col-md-9 mtop10"> 
              {Contactobj.ContactName}
            </span>
          </a>
        </div>
        <div className="col-md-6 ">
          <div className="row  ">
            <span className="title">
              Employee at
              <strong> {Contactobj.Workat}</strong>
            </span>
          </div>
          <div className="row  ">
            <span className="contact-text">sample_data</span>
          </div>
        </div>
        <div className="col-md-1 pull-right no-padding"> 
          <button
            id={"btnEdit" + Contactobj.rowid}
            type="button"
            className="btn btn-circle-micro btn-default btn-inverse whiteborder"
            title="Edit"
          >
            <i className="fa fa-pencil fa-1 mright0" />
          </button>
          <button
            id={"btntag" + Contactobj.rowid}
            type="button"
            className="btn btn-circle-micro btn-default btn-inverse whiteborder "
            title="Tag"
          >
            <i className="fa fa-tag fa-1 mright0" />
          </button>
        </div>
      </div>
    );
    return (
      <div className="list-group">
        {listItems}
      </div>
    );
  }
}
export default ContactObjLst;
