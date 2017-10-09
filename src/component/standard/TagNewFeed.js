import React, { Component } from "react";
import AutoSearch from "../standard/AutoSearch";
import TagObjLst from "../ObjTemplate/TagObjLst";
class TagNewFeed extends React.Component {
  render() {
    return (
      <div id="divfilter" className="divTagNewsFeed col-md-3 l ">
        <div className="row mleft0">
          <label id="lblHead" className="lb-LLabelStyle">
            <u> News Feed Tags </u> |
            <a href="#" className="n" id="btnNone">
              None
            </a>
          </label>
        </div>
        <TagObjLst spid={this.props.spid} TagOnClick={this.props.TagOnClick} />
        <hr className="hr-format" />
        <div className="row mleft0">
          <label id="lblHead" className="lb-LLabelStyle">
            <u> My Teams </u> |
            <a href="#" className="n" id="btnNone">
              None
            </a>
          </label>
        </div>
        <TagObjLst
          spid="spTeam"
          TagOnClick={this.props.TagOnClickTeam}
          TagTeam="Y"
        />
        <hr className="hr-format" />
        <div className="row mleft0">
          <p>
            <a
              className="btn btn-sm btn-flat btn-primary n noborder mright5"
              href="#"
            >
              Follow
            </a>

            <a
              href="#"
              className="btn btn-sm btn-flat btn-default n noborder bglightred whitecolor"
            >
              Unfollow
            </a>
          </p>
        </div>
        <div class="row mleft0">
          <AutoSearch
            inputstyle=" small-box auto-Input mbottom0 "
            id="txtSearcgLeads"
            placeholder="Search for names.."
          />
        </div>
      </div>
    );
  }
}
export default TagNewFeed;
