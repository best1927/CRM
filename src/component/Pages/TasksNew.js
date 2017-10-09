import React, { Component } from "react";
import { Dropdown, Button, MenuItem, Checkbox } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import "react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css";
import DateTimeField from "react-bootstrap-datetimepicker";
import AutoSearch from "../standard/AutoSearch";
import ReactBootstrapSlider from "react-bootstrap-slider";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML, ContentState, convertToRaw } from "draft-js";
 import "react-bootstrap-slider/src/css/bootstrap-slider.min.css";

class TasksNew extends React.Component {
  constructor() {
    super(); 
    this.state = { status:'New',editorContent: this._getInitialHTML() };
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
  componentWillMount() {}

  render() {
    let btneventlist = [];
    btneventlist.push({
      title: "Phone Call",
      iCon: "fa-phone"
    });
    btneventlist.push({
      title: "Email",
      iCon: "fa-envelope-o"
    });
    btneventlist.push({
      title: "Meeting",
      iCon: "fa-users"
    });
    btneventlist.push({
      title: "Get Started",
      iCon: "fa-flag-o"
    });
    btneventlist.push({
      title: "Follow up",
      iCon: "fa-paper-plane-o"
    });
    btneventlist.push({
      title: "To do",
      iCon: "fa-list-ul"
    });
    btneventlist.push({
      title: "Lunch",
      iCon: "fa-coffee"
    });

    const btnitemlst = btneventlist.map(btnevent =>
      <button
        type="button"
        className="btn btn-primary whiteborder"
        title={btnevent.title}
      >
        <i className={"fa " + btnevent.iCon + " no-margin no-padding"} />
      </button>
    );

    let silderConfig = {
      value: 0,
      change: 0,
      slideStop: 0,
      step: 10,
      max: 100,
      min: 0
    };

    /* Text Editor */
    const { editorContent } = this.state;
    let EditorHeight = {
      height: "250px"
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
        /*"embedded",
        "emoji",
        "image",
        "remove",
        "history"*/
      ],
      inline: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: [
          "bold",
          "italic",
          "underline"
          //"strikethrough",
          //"monospace",
          // "superscript",
          //"subscript"
        ]
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
       htype="NewType"
       HeaderText=  {this.state.status === 'New' ? "New Task": "Edit Task"}
       savefunc=""
       btnBackLink="#" 
     /> 
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content">
                <div id="tbTask" className="tab-pane fade in active">
                  <h3 className="mtop0">Task Details</h3>
                  <div className="box box-primary mbottom5">
                    <div className="col-md-6 pleft0">
                      <div className="box-body">
                        <div className="row">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Task Name ::
                            </label>
                            <div className="col-md-9">
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Assign to ::
                            </label>
                            <div className="col-md-9">
                              <div className="col-md-4 pleft0 pright0">
                                <Dropdown id="dropdown-custom-1">
                                  <Dropdown.Toggle>No Select</Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <MenuItem eventKey="1">User</MenuItem>
                                    <MenuItem eventKey="2">Team</MenuItem>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="col-md-8 pleft0 pright0 mbutton0">
                                <AutoSearch
                                  inputstyle=" auto-Input mbottom0 "
                                  id="txtcurrName"
                                  placeholder="Type Name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Category ::
                            </label>
                            <div className="col-md-9">
                              <div className="btn-group ">
                                {btnitemlst}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="hr-format" />
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Due Date ::
                            </label>
                            <div className="removePadding-right col-md-4">
                              <DateTimeField id="dpkDueDateDt" mode="date" />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Start Date ::
                            </label>
                            <div className="removePadding-right col-md-4">
                              <DateTimeField id="dpkStartDt" mode="date" />
                            </div>
                            <div className="removePadding-right col-md-4">
                              <DateTimeField id="dpkStarttm" mode="time" />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              End Date ::
                            </label>
                            <div className="removePadding-right col-md-4">
                              <DateTimeField id="dpkEndDt" mode="date" />
                            </div>
                            <div className="removePadding-right col-md-4">
                              <DateTimeField id="dpkEndtm" mode="time" />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0 mtop18">
                              Progress ::
                            </label>
                            <div className="col-md-5 mtop0">
                              <ReactBootstrapSlider
                                value={20}
                               // change={this.changeValue}
                                //slideStop={this.changeValue}
                                step={10}
                                max={100}
                                min={0}
                                orientation="horizontal"
                                reversed={true} 
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Priority ::
                            </label>
                            <div className="col-md-9">
                              <div className="btn-group ">
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder redcolor fsize16"
                                  title="High"
                                >
                                  !!!
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder Orangecolor fsize16"
                                  title="Medium"
                                >
                                  !!
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder dodgerbluecolor fsize16"
                                  title="Low"
                                >
                                  !
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Status ::
                            </label>
                            <div className="col-md-9">
                              <div className="btn-group ">
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder no-margin"
                                  title="Not Start"
                                >
                                  <i className="fa fa-stop" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder"
                                  title="In Progess"
                                >
                                  <i className="fa fa-play" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder"
                                  title="Completed"
                                >
                                  <i className="fa fa-check" />
                                </button>
                              </div>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder"
                                  title="Pause"
                                >
                                  <i className="fa fa-pause" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default btn-inverse whiteborder"
                                  title="Waiting for Someone"
                                >
                                  <i className="fa fa-user" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="hr-format" />
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Visibility ::
                            </label>
                            <div className="col-md-9">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="radio">
                                    <label>
                                      <input
                                        type="radio"
                                        className="w18 h18"
                                        checked="checked"
                                        name="optradio"
                                      />
                                      Everyone
                                    </label>
                                  </div>
                                </div>

                                <div className="col-md-5">
                                  <div className="radio">
                                    <label>
                                      <input
                                        type="radio"
                                        className="w18 h18"
                                        checked="checked"
                                        name="optradio"
                                      />
                                      Only the record owner
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="radio col-md-6">
                                  <label>
                                    <input
                                      type="radio"
                                      className="w18 h18"
                                      name="optradio"
                                    />
                                    Select a team
                                  </label>
                                </div>
                                <div className="  col-md-5">
                                  <Dropdown id="cboTeam" dropup>
                                    <Dropdown.Toggle>
                                      No Select Team
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <MenuItem eventKey="1">
                                        Sales Team
                                      </MenuItem>
                                      <MenuItem eventKey="2">
                                        Support Team
                                      </MenuItem>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>

                              <div className="row">
                                <div className="radio col-md-6">
                                  <label>
                                    <input
                                      type="radio"
                                      className="w18 h18"
                                      name="optradio"
                                    />
                                    Select individual people
                                  </label>
                                </div>
                                <div className=" col-md-5">
                                  <Dropdown id="cbouser" dropup>
                                    <Dropdown.Toggle>No Select</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <MenuItem eventKey="1">Me</MenuItem>
                                      <MenuItem eventKey="2">
                                        Mr.Sakchai
                                      </MenuItem>
                                      <MenuItem eventKey="2">
                                        Ms.Somsri
                                      </MenuItem>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Related to ::
                          </label>
                          <div className="col-md-9 mtop7">
                            <a href="#">
                              <u>Add Related Opportunity Or Project</u>
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Add Link ::
                          </label>
                          <div className="col-md-9">
                            <AutoSearch
                              inputstyle=" auto-Input mbottom0 "
                              id="txtcurrName"
                              placeholder="Type Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <div>
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Reminder ::
                            </label>
                            <div className="removePadding-right col-md-4">
                              <input
                                id="chkReminder"
                                type="checkbox"
                                className="mtop7 w18 h18"
                                style={{ margin: "8px 0px 0px 0px" }}
                              />
                            </div>
                          </div>

                          <div className="removePadding-right col-md-4">
                            <div className="input-group pleft0 ptop0 mtop2">
                              <Dropdown id="dropdown-custom-1">
                                <Dropdown.Toggle>No Select</Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="0">One time</MenuItem>
                                  <MenuItem eventKey="1">Daily</MenuItem>
                                  <MenuItem eventKey="2">Weekly</MenuItem>
                                  <MenuItem eventKey="3">Monthly</MenuItem>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <div>
                            <label className="lb-LabelStyle col-md-3 pleft0" />
                            <div className="removePadding-right col-md-4">
                              <div className="input-group date pleft0 ptop0 mtop2">
                                <DateTimeField id="dpkDueDateDt" mode="date" />
                              </div>
                            </div>
                          </div>

                          <div className="removePadding-right col-md-4">
                            <div className="input-group pleft0 ptop0 mtop2">
                              <DateTimeField id="dpkDueDateDt" mode="time" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row mtop5">
                        <Editor
                          className="well"
                          toolbar={toolbaroption}
                          wrapperClassName="demo-wrapper"
                        />
                      </div>
                      <div className="row mtop5">
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
export default TasksNew;
