import React, { Component } from "react";
import { Dropdown, Button, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import DateTimeField from "react-bootstrap-datetimepicker";
import AutoSearch from "../standard/AutoSearch"; 
class OrganizationNew extends React.Component {
  constructor(){
    super(); 
    this.state = {status:'New'}
  }
  componentWillMount() {}

  render() {
    let Headertag ;
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    let btnTasklist = [];
    
       btnTasklist.push(
         <a
           id="btnAddPic"
           data-lang="btnAddPic"
           href="#"
           title="Add Picture"
           className="btn btn-circle fa-inverse btn-default pull-left no-padding"
            
         >
           <img src={process.env.PUBLIC_URL + "/images/AddPicture30.png"} />
         </a>
       );
    
    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="NewType"
          HeaderText=   {this.state.status === 'New' ? "New Organization": "Edit Organization"} 
          savefunc=""
          btnBackLink="#"
          morebtnleft ={btnTasklist}
        /> 
       
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content mbottom5">
                <div id="ContactNew" className="tab-pane fade in active" />
                <div className="box box-primary mbottom5 ">
                  <div className="col-md-6 pleft0">
                    <div className="box-body">
                      <div className="row">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft5">
                            Organization Name ::
                          </label>
                          <div className="col-md-9">
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Date of Member ::
                          </label>
                          <div className="removePadding-right col-md-4">
                            <DateTimeField
                              id="dpkDueDateDt"
                              // className=" pull-right xs"
                              mode="date"
                            />
                          </div>
                        </div>

                        <div className="pull-right mright15">
                          <a id="lkAddDate" href="#">
                            <u>Add Others Date of Member</u>
                          </a>
                        </div>
                      </div>

                      <hr className="hr-format" />

                      <div className="row mtop5">
                        <div className="form-group">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Email ::
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mtop5">
                        <label className="lb-LabelStyle col-md-3">
                          <u>Contact Numbers</u>
                        </label>
                      </div>

                      <div className="row mtop5">
                        <div className=" col-md-12">
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone (Home)"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone (Mobile)"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mtop5">
                        <div className=" col-md-12">
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone (Office)"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone (Other)"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mtop5">
                        <div className="pull-right mright15">
                          <a href="#">
                            <u>Add Social Profiles</u>
                          </a>
                        </div>
                      </div>
                      <hr className="hr-format" />

                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Assign to ::
                          </label>
                          <div className="col-md-9">
                            <div className="col-md-4 pleft0 pright0">
                              <Dropdown id="dropdown-custom-1" dropup>
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
                            Add Link ::
                          </label>
                          <div className="col-md-9">
                            <AutoSearch
                              inputstyle=" auto-Input mbottom0 "
                              id="txtLink"
                              placeholder="Link to task (Lead, Contact, Organizations, Opportunities, Project,...)"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row mtop5">
                        <label className="lb-LLabelStyle col-md-4 mleft15">
                          <u>Additional Information</u>
                        </label>
                      </div>
                      <div className="row mbottom5">
                        <div className=" col-md-12 mleft15">
                          <textarea className="textareasty" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <label className="lb-LLabelStyle col-md-4 mleft15">
                        <u>Address (Mail)</u>
                      </label>
                    </div>
                    <div className="row mbottom5">
                      <div className=" col-md-12 mleft15">
                        <textarea className="textareasty" />
                      </div>
                    </div>
                    <div className="row mtop5">
                      <div className=" col-md-12">
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="City"
                          />
                        </div>
                        <div className="col-md-7">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="State/Province"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mtop5">
                      <div className=" col-md-12">
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Postal Code"
                          />
                        </div>
                        <div className="col-md-7">
                          <Dropdown id="cboMailCountry">
                            <Dropdown.Toggle>No Select</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <MenuItem eventKey="1">Thailand</MenuItem>
                              <MenuItem eventKey="2">United Kingdom</MenuItem>
                              <MenuItem eventKey="2">United Stated</MenuItem>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>

                    <div className="row mtop5">
                      <label className="lb-LLabelStyle col-md-4 mleft15">
                        <u>Address (Other)</u>
                      </label>
                    </div>
                    <div className="row mbottom5">
                      <div className=" col-md-12 mleft15">
                        <textarea className="textareasty" />
                      </div>
                    </div>
                    <div className="row mtop5">
                      <div className=" col-md-12">
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="City"
                          />
                        </div>
                        <div className="col-md-7">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="State/Province"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mtop5">
                      <div className=" col-md-12">
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Postal Code"
                          />
                        </div>
                        <div className="col-md-7">
                          <Dropdown id="cboOthCountry">
                            <Dropdown.Toggle>No Select</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <MenuItem eventKey="1">Thailand</MenuItem>
                              <MenuItem eventKey="2">United Kingdom</MenuItem>
                              <MenuItem eventKey="2">United Stated</MenuItem>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <hr className="hr-format" />

                    <div className="row mtop5">
                      <div className="form-group pleft5"  >
                        <label
                          className="lb-LabelStyle col-md-3 pleft0" 
                        >
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
                              <Dropdown id="cboOthCountry">
                                <Dropdown.Toggle>
                                  No Select Team
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="1">Sales Team</MenuItem>
                                  <MenuItem eventKey="2">Support Team</MenuItem>
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
                              <Dropdown id="cboOthCountry">
                                <Dropdown.Toggle>No Select</Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="1">Me</MenuItem>
                                  <MenuItem eventKey="2">Mr.Sakchai</MenuItem>
                                  <MenuItem eventKey="2">Ms.Somsri</MenuItem>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
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
export default OrganizationNew;
