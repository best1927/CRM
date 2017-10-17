import React from "react";

import { Button } from "react-bootstrap";
import HeaderContainer from "../Header/HeaderContainer";
import AboutTab from "../TabContent/AboutTab";
import HistoryTab from "../TabContent/HistoryTab";
import EmailTab from "../TabContent/EmailTab";
import NotesTab from "../TabContent/NotesTab";
import FilesTab from "../TabContent/FilesTab";
import TasksTab from "../TabContent/TasksTab";
import EventsTab from "../TabContent/EventsTab";
import SalesTab from "../TabContent/SalesTab";
import TeamTab from "../TabContent/TeamTab";
//import { Route, Switch } from "react-router-dom";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppOrganizationview } from "../../actions/crmactionOrganizationView";
let OrgIdparam;
let ActCode = "";
let headerObj = {};
let ClassCenter = "CRM_Lib.CRM_Controller,CRM_Lib";
let ClassOrg = "CRM_Lib.Organizations_Controller,CRM_Lib";

class OrganizationView extends React.Component {
  constructor() {
    super();
    this.state = { selected: "About" };

    this.handleClick = this.handleClick.bind(this);
    this.btnBackClick = this.btnBackClick.bind(this);
    this.btnEditClick = this.btnEditClick.bind(this);
    this.btnDeleteClick = this.btnDeleteClick.bind(this);
    this.btnTabClick = this.btnTabClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.dataset.txt, e.target.dataset.space);
    this.setState({ selected: "About" });
  }

  btnDeleteClick(param) {
    console.log(param);
    console.log("test btnDelete Click");
  }

  btnEditClick(param) {
    console.log(param);
    console.log("test btnEdit Click");
  }
  btnBackClick(param) { 
    this.props.history.push("/Organization");
  }
  btnTabClick(param) {
    this.setState({ selected: param });
    let mName = "GetActivityByOwner";
    let cName = ClassCenter;
    let parmObj = {};
    
    switch (param) {
      case "About":
        cName = ClassOrg;
        mName = "Organization_FindByCode";
        parmObj = {
          OrgId: OrgIdparam,
          lang: "th-TH"
        };
        let data = {
          h: {},
          classWithNs: cName,
          methodName: mName,
          paramStr: parmObj
        };
        this.props.fetchAppOrganizationview(data);
        break; 
    }
  }

  componentWillMount() {
    OrgIdparam = this.props.match.params.OrgId;
    let mName = "Organization_FindByCode";
    let cName = ClassOrg;
    let parmObj = {
      OrgId: OrgIdparam,
      lang: "th-TH"
    };
    let data = {
      h: {},
      classWithNs: cName,
      methodName: mName,
      paramStr: parmObj
    };
    this.props.fetchAppOrganizationview(data);
  }

  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };
    const boxmargin = {
      margin: "0px 0px 5px 0px"
    };

    let selected = this.state.selected;
    let CurrentTab = {
      About: AboutTab,
      History: HistoryTab,
      Email: EmailTab,
      Notes: NotesTab,
      Files: FilesTab,
      Tasks: TasksTab,
      Events: EventsTab,
      Sales: SalesTab,
      Team: TeamTab
    }[selected];

    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h3 className="box-title">
            <label className="mtop10" id="lblHeader" data-lang="lblHeader">
              Organization
            </label>
          </h3>
          <div className="pull-left mright10">
            <a
              id="btnBack"
              data-lang="btnBack"
              href="#"
              onClick={this.btnBackClick}
              title="Back"
              className="btn btn-circle btn-default"
              style={btitleStyle}
            >
              <i className=" fa fa-arrow-circle-left fa-2" />
            </a>
            <a
              id="btnEdit"
              data-lang="btnEdit"
              href="#"
              title="Edit"
              className="btn btn-circle btn-success"
              onClick={() => this.btnEditClick()}
              style={btitleStyle}
            >
              <i className="fa fa-pencil fa-2" />
            </a>
            <a
              id="btnDelete"
              data-lang="btnDelete"
              href="#"
              title="Delete"
              className="btn btn-circle btn-default"
              onClick={() => this.btnDeleteClick()}
              style={btitleStyle}
            >
              <i className="fa fa-trash-o fa-2" />
            </a>
          </div>
          <ul id="tbToolbar" className="nav nav-pills pull-right">
            <li
              className={this.state.selected === "About" ? "active" : ""}
              onClick={() => this.btnTabClick("About")}
            >
              <a data-toggle="tab" href="#">
                About
              </a>
            </li>
            <li
              className={this.state.selected === "History" ? "active" : ""}
              onClick={() => this.btnTabClick("History")}
            >
              <a data-toggle="tab" href="#">
                History
              </a>
            </li>
            <li
              className={this.state.selected === "Email" ? "active" : ""}
              onClick={() => this.btnTabClick("Email")}
            >
              <a data-toggle="tab" href="#">
                Email
              </a>
            </li>
            <li
              className={this.state.selected === "Notes" ? "active" : ""}
              onClick={() => this.btnTabClick("Notes")}
            >
              <a data-toggle="tab" href="#">
                Notes
              </a>
            </li>
            <li
              className={this.state.selected === "Files" ? "active" : ""}
              onClick={() => this.btnTabClick("Files")}
            >
              <a data-toggle="tab" href="#">
                Files
              </a>
            </li>
            <li
              className={this.state.selected === "Tasks" ? "active" : ""}
              onClick={() => this.btnTabClick("Tasks")}
            >
              <a data-toggle="tab" href="#">
                Tasks
              </a>
            </li>
            <li
              className={this.state.selected === "Events" ? "active" : ""}
              onClick={() => this.btnTabClick("Events")}
            >
              <a data-toggle="tab" href="#">
                Events
              </a>
            </li>
            <li
              className={this.state.selected === "Sales" ? "active" : ""}
              onClick={() => this.btnTabClick("Sales")}
            >
              <a data-toggle="tab" href="#">
                Sales
              </a>
            </li>
            <li
              className={this.state.selected === "Team" ? "active" : ""}
              onClick={() => this.btnTabClick("Team")}
            >
              <a data-toggle="tab" href="#">
                Team Support
              </a>
            </li>
          </ul>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content mbottom5">
                {/* <CurrentTab /> */}
                <CurrentTab
                  DataContext={this.props.appContent}
                  Dataid={(this.props.appContent !== null && this.props.appContent !== undefined)?this.props.appContent.OrganizeId:""}
                  DataCat={(this.props.appContent !== null && this.props.appContent !== undefined)?this.props.appContent.ActivityCat:""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // Map newState from Redux Reducer
  // if (this.state.selected  === "About"){
  //    headerObj = state.dataContextObj;
  // }
  return {
    appContent: state.dataContextObj
    // filterContent: state.OrgfilterObjList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchAppOrganizationview: fetchAppOrganizationview
      // ,
      // loadAppContent: firstfetchAppContent,
      // getFilterContent: GetFilterContent
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationView);
// export default OrganizationView;
