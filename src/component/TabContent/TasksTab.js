import React from "react";
import TimelineItem from "../Timeline/TimelineItem";
import AutoSearch from "../standard/AutoSearch";

class TasksTab extends React.Component {
  render() {
    let btitleStyle = {
      padding: "0px 0px 0px 5px"
    };
    let Tasklst = [];
    Tasklst.push(
      <TimelineItem
        iConEvent="fa fa-flag-o bg-red"
        DateEvent="15 Jun. 2017"
        TimeEvent="16:45"
        EventName="Task"
        textTitle="Meeting with Mr. Sompong"
        priority="!!!"
        DataContent1=""
        DataContent2=""
        UserCreate="Somsri"
      />
    );
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">
            Notes
            <a
              id="btnTask"
              href="#"
              title="Task"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-plus" />
            </a>
          </h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtTask"
              placeholder="Search" 
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                {Tasklst}
                <li>
                  <i className="fa fa-clock-o bg-gray" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default TasksTab;
