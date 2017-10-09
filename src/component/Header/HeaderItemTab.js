import React from "react";

class HeaderItemTab extends React.Component {
  constructor() {
    super();
  }
  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };
    let HeaderLabel = (
      <h3 className="box-title">
        <label className ="mtop10" id="lblHeader" data-lang="lblHeader">
          {this.props.HeaderText}
        </label>
      </h3>
    );

    let SalesYn = this.props.SalesYN;
    let TeamYn = this.props.TeamYn;

    let tabli = [];
    tabli.push(
      <li class="active"  >
        <a data-toggle="tab" href="#About">
          About
        </a>
      </li>
    );
    tabli.push(
      <li >
        <a data-toggle="tab" href="#History" >
          History
        </a>
      </li>
    );
    tabli.push(
      <li>
        <a data-toggle="tab" href="#Email">
          Email
        </a>
      </li>
    );
    tabli.push(
      <li>
        <a data-toggle="tab" href="#Notes">
          Notes
        </a>
      </li>
    );
    tabli.push(
      <li>
        <a data-toggle="tab" href="#Files">
          Files
        </a>
      </li>
    );
    tabli.push(
      <li>
        <a data-toggle="tab" href="#Tasks">
          Tasks
        </a>
      </li>
    );
    tabli.push(
      <li>
        <a data-toggle="tab" href="#Events">
          Events
        </a>
      </li>
    );
    if (SalesYn === "Y") {
      tabli.push(
        <li>
          <a data-toggle="tab" href="#Sales">
            Sales
          </a>
        </li>
      );
    }
    if (TeamYn === "Y") {
      tabli.push(
        <li>
          <a data-toggle="tab" href="#Team">
            Team Support
          </a>
        </li>
      );
    }

    

    return (
        <div className="box-header with-border">
        {HeaderLabel}
        <div className="pull-left mright10">
          <a
            id="btnBack"
            data-lang="btnBack"
            href={this.props.btnBackLink}
            title="Back"
            className="btn btn-circle btn-default"
            style={btitleStyle}
          >
            <i className=" fa fa-arrow-circle-left fa-2" />
          </a>
          <a
            id="btnEdit"
            data-lang="btnEdit"
            href={this.props.btnEditLink}
            title="Edit"
            className="btn btn-circle btn-success"
            style={btitleStyle}
          >
            <i className="fa fa-pencil fa-2" />
          </a>
          <a
            id="btnDelete"
            data-lang="btnDelete"
            href={this.props.btnDeleteLink}
            title="Delete"
            className="btn btn-circle btn-default"
            style={btitleStyle}
          >
            <i className="fa fa-trash-o fa-2" />
          </a>
        </div>
        <ul className="nav nav-pills pull-right">
          {tabli}
        </ul>
      </div>
    );
  }
}
export default HeaderItemTab;
