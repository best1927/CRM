import React from "react";
import FileTemplate from "../Timeline/FileTemplate";
import AutoSearch from "../standard/AutoSearch";

class FilesTab extends React.Component {
  render() {
    let btitleStyle = {
      padding: "0px 0px 0px 5px"
    };
    let FileLst = [];
    FileLst.push(
      <FileTemplate
        iConEvent="fa fa-file-text-o bg-green-active"
        DateEvent="10 Jun. 2017"
        TimeEvent="16:45"
        EventName="Attach"
        textTitle="Contract Document"
        priority="!!!"
        DataContent1="Contract.pdf"
        DataContent2="Important"
        UserCreate="Somsri"
      />
    );
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">
            Files
            <a
              id="btnAttach"
              href="#"
              title="Files"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-paperclip" />
            </a>
            <a
              id="btnCamera"
              href="#"
              title="Camera"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-camera" />
            </a>
          </h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtFiles"
              placeholder="Search"
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                {FileLst}
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
export default FilesTab;
