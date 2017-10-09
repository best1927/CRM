import React, { Component } from "react";
class LeadObjLst extends React.Component {
  render() {
    let Leadobjlist = [];
    Leadobjlist.push({
      rowid: "Lead001",
      status: "open",
      LeadName:'Mr. Rakthai ',
      OrgLeadName: "Sukjai Farm ",
      Leadphone: " (626) 847-1294"
    });

    Leadobjlist.push({
      rowid: "Lead002",
      status: "closed",
      LeadName:'Mr. Somyod ',
      OrgLeadName: "Sukkaseam Farm ",
      Leadphone: " (688) 765-4776"
    });

    Leadobjlist.push({
      rowid: "Lead002",
      status: "converted",
      LeadName:'Miss Sudjai ',
      OrgLeadName: "Sabuy Farm ",
      Leadphone: " (689) 887-9076"
    });

     

    const listItems = Leadobjlist.map(Leadobj =>
      <div className="list-group-item row row-RList-Item ">
        <div className="col-md-1 mtop5">
          <input type="checkbox" name="chkObject" className="w18 h18" />
        </div>

        <div className="col-md-3 label-row">
          <span>
            <a href="LeadView.aspx" className="b">
             {Leadobj.LeadName} 
            </a>
            <label
              className={
                Leadobj.status === "open" ? " lb-LabelminiBox  bgOrange" :  Leadobj.status === "closed" ? " lb-LabelminiBox  bgred" :  Leadobj.status === "converted"? " lb-LabelminiBox  bgGreen" :""
              }
            >
               {Leadobj.status}
            </label>
          </span>
        </div>
        <div className="col-md-3 label-row">
         
            <span className="b">
              <i
                title="Organization"
                className="fa fa-building-o fa-1 no-margin"
              />
              {Leadobj.OrgLeadName}
            </span>
          
        </div>
        <div className="col-md-2 label-row">
          
            <span className="b">
              <i title="Phone Call" className="fa fa-phone fa-1 no-margin" />
              {Leadobj.Leadphone}
            </span>
          
        </div>

        <div className="col-md-3 pright0">
          <div>
            <div className=" pull-right ">
              <button
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder"
                title="Tag"
              >
                <i className="fa fa-tag fa-1" />
              </button>
              <button
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder"
                title="Change to Contact"
              >
                <i className="fa fa-book fa-1" />
              </button>
              <a
                className="mright5"
                href="CovertLead.aspx"
                title="Convert Lead"
              >
                <img
                  className="w28 h20 mtop5"
                  src= {process.env.PUBLIC_URL + "/images/mission.png"} 
                />
              </a>
              <button
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder"
                title="Edit"
              >
                <i className="fa fa-pencil fa-1" />
              </button>
              <button
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder"
                title="Deleted"
              >
                <i className="fa fa-trash-o fa-1" />
              </button>
            </div>
          </div>
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
export default LeadObjLst;
