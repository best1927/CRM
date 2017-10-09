import React from "react";
import EventTemplate from "../Timeline/EventTemplate";
import AutoSearch from "../standard/AutoSearch";
class EventsTab extends React.Component {
  render() {
    let btitleStyle = {
      padding: "0px 0px 0px 5px"
    };
    let EventLst = [];
    EventLst.push(
      <EventTemplate
        DateEvent="15 Jun. 2017"
        TimeEvent="16:45"
        EventName="Attach"
        textTitle="Contract Document"
        priority="!!!"
        DataContent1="15 Aug. 2017"
        DataContent2="9:00 - 18:00"
        DataContent3="Important"
        UserCreate="Somsri"
      />
    );
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">
            Events
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
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtEvent"
              placeholder="Search"
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                {EventLst}
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
export default EventsTab;
