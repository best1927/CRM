import React from "react";
import AutoSearch from "../standard/AutoSearch";
import HeaderItem from "../Header/HeaderItem";
import TagNewFeed from "../standard/TagNewFeed";
import FeedObjlst from "../ObjTemplate/FeedObjlst";
import { Button, Dropdown, MenuItem } from "react-bootstrap";
class NewsFeed extends React.Component {
  constructor() {
    super();
    this.TagOnClick = this.TagOnClick.bind(this);
    this.TagOnClickTeam = this.TagOnClickTeam.bind(this);
  }

  TagOnClick(param) {
    console.log(param);
    console.log("test Tag Click");
  }
  TagOnClickTeam(param) {
    console.log(param);
    console.log("test TagTeam Click");
  }

  render() {
    let filterelement = (
      <div className="pull-right">
        <Dropdown id="dropdown-custom-1" pullRight>
          <Dropdown.Toggle className="btn">
            <i className="fa fa-filter" />
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">All Activities</MenuItem>
            <MenuItem eventKey="2">Emails</MenuItem>
            <MenuItem eventKey="3">Notes</MenuItem>
            <MenuItem eventKey="4">Files</MenuItem>
            <MenuItem eventKey="5">Tasks</MenuItem>
            <MenuItem eventKey="6">Events</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );

    return (
      <div className="box box-primary">
        <HeaderItem
          htype="nobtn"
          HeaderText="News Feed"
          filiter="Y"
          filterobj={filterelement}
        />
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-1 mright0 pright0" />
              <div className="col-md-8 mright0 pright0">
                <div className="col-md-12 mright15 mbottom10 pright10 pleft17">
                  <AutoSearch
                    inputstyle=" input-Search mbottom0 "
                    id="txtSearcgLeads"
                    placeholder=""
                  />
                </div>
                <div className="col-md-12 mright0 pright0">
                  <div className="form-group full-height mleft5 mright5 pleft0 pright5">
                    <FeedObjlst />
                  </div>
                </div>
              </div>
              <TagNewFeed
                spid="spFeed"
                TagOnClick={this.TagOnClick}
                TagOnClickTeam={this.TagOnClickTeam}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsFeed;
