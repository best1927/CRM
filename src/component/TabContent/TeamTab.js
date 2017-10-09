import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AutoSearch from "../standard/AutoSearch";
import TeamtreeContainer from "../Team/TeamtreeContainer";
class TeamTab extends React.Component {
  render() {
    let btitleStyle = {
        padding: "0px 0px 0px 5px"
      };
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">
            Team
            <a
              id="btnEvent"
              href="#"
              title="Event"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-plus" />
            </a>
          </h4>
          
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
            <TeamtreeContainer />
        </section >
      </div>
    );
  }
} export default TeamTab;
