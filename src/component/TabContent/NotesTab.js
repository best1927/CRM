import React from "react";
import TimelineItem from "../Timeline/TimelineItem";
import AutoSearch from "../standard/AutoSearch";

class NotesTab extends React.Component {
  render() {
    let btitleStyle = {
      padding: "0px 0px 0px 5px"
    };
    let NoteLst = [];
    NoteLst.push(
      <TimelineItem
        iConEvent="fa fa-file-o bg-blue"
        DateEvent="15 Jun. 2017"
        TimeEvent="12:05"
        EventName="Notes"
        textTitle="Support Team"
        priority="!!!"
        DataContent1="Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo..."
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
              id="btnNote"
              href="#"
              title="Note"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-file-o" />
            </a>
          </h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtNote"
              placeholder="Search"
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                {NoteLst}
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
export default NotesTab;
