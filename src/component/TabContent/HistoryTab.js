import React from "react";
import AutoSearch from "../standard/AutoSearch";
import TimelineModal from "../Timeline/TimelineModal";

class HistoryTab extends React.Component {
  render() {
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">Recent Activity</h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtHistory"
              placeholder="Search"
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <TimelineModal />
      </div>
    );
  }
}
export default HistoryTab;
