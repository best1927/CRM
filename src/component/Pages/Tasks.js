import React, { Component } from "react";
import { Button, Dropdown, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import AutoSearch from "../standard/AutoSearch";
import Alphabetdiv from "../standard/Alphabetdiv";
import TagSearchdiv from "../standard/TagSearchdiv";
import TaskObjLst from "../ObjTemplate/TaskObjLst";

class Tasks extends React.Component {
  constructor() {
    super();
    this.AlphaClick = this.AlphaClick.bind(this);
    this.TagOnClick = this.TagOnClick.bind(this);
    this.btnNewClick = this.btnNewClick.bind(this);
    this.btnDeleteClick = this.btnDeleteClick.bind(this);
    this.btnCompletedClick = this.btnCompletedClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener("DOMContentLoaded", function(event) {
      let divalpha = document.getElementById("divalpha");
      let lblHead = document.getElementById("lblHead");
      let spOrganize = document.getElementById("spTasks");
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
      let spOrganize = document.getElementById("spTasks");
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

  TagOnClick(param) {
    console.log(param);
    console.log("test Tag Click");
  }

  btnNewClick(param) {
    console.log(param);
    console.log("test btnNew Click");
  }

  btnDeleteClick(param) {
    console.log(param);
    console.log("test btnDelete Click");
  }

  btnCompletedClick(param) {
    console.log(param);
    console.log("test btnCompleted Click");
  }


  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    let filterelement = (
      <div className="pull-right">
        <Dropdown id="dropdown-custom-1" pullRight className="mright5">
          <Dropdown.Toggle className="btn">
            <i className="fa fa-th" />
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">All</MenuItem>
            <MenuItem eventKey="2">Email</MenuItem>
            <MenuItem eventKey="3">Get Started</MenuItem>
            <MenuItem eventKey="4">Follow up</MenuItem>
            <MenuItem eventKey="5">Lunch</MenuItem>
            <MenuItem eventKey="6">Meeting</MenuItem>
            <MenuItem eventKey="7">Phone Call</MenuItem>
            <MenuItem eventKey="8">To do</MenuItem>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown id="dropdown-custom-2" pullRight>
          <Dropdown.Toggle className="btn">
            <i className="fa fa-filter" />
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">All Tasks</MenuItem>
            <MenuItem eventKey="2">All Tasks Open</MenuItem>
            <MenuItem eventKey="3">All Tasks Completed</MenuItem>
            <MenuItem eventKey="4">My Tasks</MenuItem>
            <MenuItem eventKey="5">My Tasks Open</MenuItem>
            <MenuItem eventKey="6">My Tasks Completed</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
 

    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="SearchType"
          HeaderText="Tasks" 
          filiter="Y"
          filterobj={filterelement}
          btnAddClick={this.btnNewClick}
          DelYn="Y"
          btnDeleteClick={this.btnDeleteClick}
          CompleteYn="Y"
          btnCompletedClick={this.btnCompletedClick}
        />
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-10 mright0 pright0">
                <div className="col-md-11 mright0 pright0">
                  <AutoSearch
                    inputstyle=" input-Search mbottom0 "
                    id="txtSearcgOrg"
                    placeholder=""
                  />
                  <TaskObjLst />
                </div>
                <Alphabetdiv onClick={this.AlphaClick} />
              </div>
              <TagSearchdiv
                Tagtext="Tasks Tags"
                spid="spTasks"
                TagOnClick={this.TagOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tasks;
