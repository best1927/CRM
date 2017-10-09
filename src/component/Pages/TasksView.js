import React from "react";
import { Button } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML, ContentState, convertToRaw } from "draft-js";

class TasksView extends React.Component {
  constructor() {
    super();
    this.state = { editorContent: this._getInitialHTML() };
  }

  _getInitialHTML() {
    const contentBlocks = convertFromHTML("<p>Hello world</p>");
    const contentState = ContentState.createFromBlockArray(contentBlocks);
    return convertToRaw(contentState);
  }

  onEditorChange(editorContent) {
    //console.log(draftToHtml(editorContent))
    this.setState({ editorContent });
  }

  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    let content = {
      TaskName: "Send mail to Mr. Sompong",
      Assignto: "Somsri",
      Duedate: "14 Jun. 2017",
      Startdate: "14 Jun. 2017",
      Starttime: "9:00",
      Enddate: "14 Jun. 2017",
      Endtime: "18:00",
      Progress: "30%",
      tkPriority: "!",
      StatusDesc: "In Progess",
      iconstatus: "fa fa-play",
      Visibility: "Public",
      CreateUser: "Somsri",
      CreateDate: "12 Jun. 2017",
      CreateTime: "16:45",
      RelatedTo: "KaseamSuk Farm",
      Links: "Sales Team",
      ReminderType: "One time",
      ReminderStdt: "13 Jun. 2017",
      ReminderSttm: "18:30",
      TaskDesc: " Send mail to Mr. Sompong foe keep in touch"
    };

    let btnTasklist = [];
 
    btnTasklist.push(
      <a
        id="btnEdit"
        data-lang="btnEdit"
        href="#"
        title="Edit"
        className="btn btn-circle btn-success pull-left"
        style={btitleStyle}
      >
        <i className="fa fa-pencil fa-2" />
      </a>
    );
    btnTasklist.push(
        <a
          id="btnDel"
          data-lang="btnDel"
          href="#"
          title="Delete"
          className="btn btn-circle btn-default pull-left"
          style={btitleStyle}
        >
          <i className="fa fa-trash-o fa-2" />
        </a>
      );
    btnTasklist.push(
      <a
        id="btnCom"
        data-lang="btnCom"
        href="#"
        title="Complete"
        className="btn btn-circle btn-primary pull-left"
        style={btitleStyle}
      >
        <i className="fa fa-check fa-2" />
      </a>
    );

    /* Text Editor */
    const { editorContent } = this.state;
    let EditorHeight = {
      height: "100px"
    };

    let toolbaroption = {
      options: [
        "inline",
        "blockType",
        "fontSize",
        "fontFamily",
        "list",
        "textAlign",
        "colorPicker",
        "link"
      ],
      inline: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["bold", "italic", "underline"]
      },
      blockType: {
        inDropdown: true,
        options: [
          "Normal",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "Blockquote",
          "Code"
        ],
        className: undefined,
        component: undefined,
        dropdownClassName: undefined
      },

      list: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["unordered", "ordered", "indent", "outdent"]
      },
      textAlign: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["left", "center", "right", "justify"]
      },

      link: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        dropdownClassName: undefined,
        showOpenOptionOnHover: true,
        defaultTargetOption: "_self",
        options: ["link", "unlink"]
      },

      history: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["undo", "redo"]
      }
    };

    /* Text Editor */

    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="EditType"
          HeaderText="Tasks"
          morebtnleft={btnTasklist}
        />

        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content mbottom5">
                <div id="tbTask" className="tab-pane fade in active">
                  <div className="box box-primary mbottom5">
                    <div className="box-header with-border">
                      <h4 className="box-title">Task Details</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Task Name ::
                          </label>
                          <label className="lb-dataStyle">
                            {content.TaskName}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Assign to ::
                          </label>
                          <label className="lb-dataStyle">
                            {content.Assignto}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Category ::
                          </label>
                          <label className="lb-dataStyle">
                            <i className="fa fa-envelope-o fa-1" />Email
                          </label>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Due Date ::
                          </label>
                          <label className="redcolor ptop7">
                            {content.Duedate}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Start Date ::
                          </label>
                          <label className="lb-dataStyle b">
                            {content.Startdate}
                            <i className="fa fa-clock-o fa-1" />
                            {content.Starttime}
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            End Date ::
                          </label>
                          <label className="lb-dataStyle b">
                            {content.Enddate}
                            <i className="fa fa-clock-o fa-1" />
                            {content.Endtime}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Progress ::
                          </label>
                          <label className="lb-dataStyle b">
                            <u>
                              {content.Progress}
                            </u>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Priority ::
                          </label>

                          <label
                            className={
                              content.Priority === "!"
                                ? "lb-dataStyle b dodgerbluecolor"
                                : content.Progress === "!!"
                                  ? "lb-dataStyle b orangedcolor"
                                  : content.Progress === "!!!"
                                    ? "lb-dataStyle b redcolor"
                                    : ""
                            }
                          >
                            {content.Priority}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Status ::
                          </label>
                          <label className="lb-dataStyle b">
                            <i
                              className={content.iconstatus}
                              title={content.StatusDesc}
                            />
                          </label>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Visibility ::
                          </label>
                          <label className="lb-dataStyle">
                            {content.Visibility}
                          </label>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Crate By ::
                          </label>
                          <label className="lb-dataStyle">
                            {content.CreateUser}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Crate Date ::
                          </label>
                          <label className="lb-dataStyle">
                            {content.CreateDate}
                            <i className="fa fa-clock-o fa-1" />
                            {content.CreateTime}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Related to ::
                          </label>
                          <label className="lb-dataStyle b">
                            {content.RelatedTo}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Link ::
                          </label>
                          <label className="lb-dataStyle b">
                            {content.Links}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Reminder ::
                          </label>
                          <label className="lb-dataStyle b">
                            {content.ReminderType}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle" />
                          <label className="lb-dataStyle b">
                            {content.ReminderStdt}
                            <i className="fa fa-clock-o fa-1" />
                            {content.ReminderSttm}
                          </label>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row">
                        <div className="form-group col-md-12 mbottom0">
                          <label className="col-md-4 lb-LabelStyle">
                            Task Description ::
                          </label>
                          <label className="lb-dataStyle">
                            {content.TaskDesc}
                          </label>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row">
                        <Editor
                          className="well"
                          toolbar={toolbaroption}
                          wrapperClassName="demo-wrapper"
                        />
                      </div>
                      <div className="row">
                        <div className="btn btn-default btn-file">
                          <i className="fa fa-paperclip" />Attachment
                          <input type="file" name="attachment" />
                        </div>
                        <p className="help-block">Max. 32MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TasksView;
