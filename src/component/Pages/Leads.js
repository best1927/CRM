import React, { Component } from "react";
import { Button, Dropdown, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import AutoSearch from "../standard/AutoSearch";
import Alphabetdiv from "../standard/Alphabetdiv";
import TagSearchdiv from "../standard/TagSearchdiv";
import LeadObjLst from "../ObjTemplate/LeadObjLst";

class Leads extends React.Component {
  constructor() {
    super();
    this.AlphaClick = this.AlphaClick.bind(this);
    this.TagOnClick = this.TagOnClick.bind(this);
    this.btnAddClick = this.btnAddClick.bind(this);
    this.btnDeleteClick = this.btnDeleteClick.bind(this); 
  }

  componentWillMount() {
    document.addEventListener("DOMContentLoaded", function(event) {
      let divalpha = document.getElementById("divalpha");
      let lblHead = document.getElementById("lblHead");
      let spOrganize = document.getElementById("spLeads");
      if (this.innerWidth < 850) {
        divalpha.style.visibility = "collapse";
        lblHead.style.visibility = "collapse";
        spOrganize.style.visibility = "collapse";
      } else {
        divalpha.style.visibility = "visible";
        lblHead.visibility = "visible";
        spOrganize.visibility = "visible";
      }
    });

    window.addEventListener("resize", function(event) {
      let divalpha = document.getElementById("divalpha");
      let lblHead = document.getElementById("lblHead");
      let spOrganize = document.getElementById("spLeads");
      if (this.innerWidth < 850) {
        divalpha.style.visibility = "collapse";
        lblHead.style.visibility = "collapse";
        spOrganize.style.visibility = "collapse";
      } else {
        divalpha.style.visibility = "visible";
        lblHead.visibility = "visible";
        spOrganize.visibility = "visible";
      }
    });
  }

  AlphaClick(param) {
    console.log(param);
    console.log("test Alpha Click");
  }

  TagOnClick(param){
    console.log(param);
    console.log("test Tag Click");
  }

  btnAddClick(param){
    console.log(param);
    console.log("test btnNew Click");
  }
   

  btnDeleteClick(param){
    console.log(param);
    console.log("test btnDelete Click");
  }


  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    let filterelement = (
      <div className="pull-right"> 
        <Dropdown id="dropdown-custom-1" pullRight>
          <Dropdown.Toggle className="btn">
            <i className="fa fa-filter" />
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">All Leads</MenuItem>
            <MenuItem eventKey="2">Leads Add in 24 hrs.</MenuItem>
            <MenuItem eventKey="3">Leads Open</MenuItem>
            <MenuItem eventKey="4">Leads Closed</MenuItem>
            <MenuItem eventKey="5">Leads Converted</MenuItem>
            <MenuItem eventKey="6">My Leads Open</MenuItem>  
            <MenuItem eventKey="6">My Leads Closed</MenuItem>  
            <MenuItem eventKey="6">My Leads Converted</MenuItem>  
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
 
    
    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="SearchType"
          HeaderText="Leads"
          DelYn = "Y"
          btnDeleteClick={this.btnDeleteClick}
          filiter="Y"
          filterobj={filterelement}
          btnAddClick = {this.btnAddClick}
        />
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-10 mright0 pright0">
                <div className="col-md-11 mright0 pright0">
                  <AutoSearch
                    inputstyle=" input-Search mbottom0 "
                    id="txtSearcgLeads"
                    placeholder=""
                  />
                 <LeadObjLst />
                </div>
                <Alphabetdiv onClick={this.AlphaClick}  />
              </div>
              <TagSearchdiv Tagtext="Leads Tags" spid="spLeads" TagOnClick = {this.TagOnClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Leads;
