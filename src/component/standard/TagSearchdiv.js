import React, { Component } from "react";
import TagObjLst from "../ObjTemplate/TagObjLst";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { VisiblityFiltertag } from "../../actions/crmstandardaction";


class TagSearchdiv extends React.Component {
  render() {
    return (
      <div id="divfilterTag" className="col-md-2 l ">
        <div className="row mleft0">
          <label id="lblHead" className="lb-LLabelStyle">
            <u> {this.props.Tagtext} </u> |
            <a
              href="#"
              className="n"
              id="btnNone"
              onClick={() => {
                this.props.NoneClick();
              }}
            >
              None
            </a>
          </label>
        </div>
        <TagObjLst
          spid={this.props.spid}
          TagOnClick={this.props.TagOnClick}
          ObjList={this.props.ObjList}
        />
      </div>
    );
  }
}

export default TagSearchdiv;
