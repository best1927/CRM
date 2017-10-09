import React, { Component } from "react";
import { Dropdown, Button, MenuItem, Checkbox } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import "react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css";
import DateTimeField from "react-bootstrap-datetimepicker";
import AutoSearch from "../standard/AutoSearch";

class LeadsNew extends React.Component {
  constructor() {
    super();
    this.state = { status: "New" };
  }
  componentWillMount() {}
  render() {
    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="NewType"
          HeaderText={this.state.status === "New" ? "New Lead" : "Edit Lead"}
          savefunc=""
          btnBackLink="#"
        />

        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content">
                <div id="ContactNew" className="tab-pane fade in active">
                  <h3 className="mtop0">Lead Details</h3>
                  <div className="box box-primary mbottom5">
                    <div className="col-md-6 pleft0">
                      <div className="box-body">
                        <div className="row">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Name ::
                            </label>
                            <div className="col-md-2">
                              <Dropdown id="dropdown-custom-1">
                                <Dropdown.Toggle>Prefix</Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="1">Mr.</MenuItem>
                                  <MenuItem eventKey="2">Mrs.</MenuItem>
                                  <MenuItem eventKey="3">Miss.</MenuItem>
                                  <MenuItem eventKey="4">Dr.</MenuItem>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-md-3 pleft0 pright5">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="col-md-4 pleft0 pright0">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft3">
                              Title ::
                            </label>
                            <div className="col-md-9 pright5">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Title"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Organization ::
                            </label>
                            <div className="col-md-6 pright5">
                              <AutoSearch
                                inputstyle=" auto-Input mbottom0 "
                                id="txtcurrOrg"
                                placeholder="Type Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Lead Status ::
                            </label>
                            <div className="col-md-5">
                              <Dropdown id="dropdown-custom-2">
                                <Dropdown.Toggle> No Select</Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="1">
                                    Open - Not Contacted
                                  </MenuItem>
                                  <MenuItem eventKey="2">
                                    Open - Attempted to Contact
                                  </MenuItem>
                                  <MenuItem eventKey="3">
                                    Open - Contacted
                                  </MenuItem>
                                  <MenuItem eventKey="4">
                                    Close - Disqualify
                                  </MenuItem>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Responsible Person ::
                            </label>
                            <div className="col-md-6 pright5">
                              <AutoSearch
                                inputstyle=" auto-Input mbottom0 "
                                id="txtResponsible"
                                placeholder="Responsible Person"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Rating ::
                            </label>
                            <div className="col-md-9">
                              <div className="mtop10">
                                <a href="#" title="1">
                                  <i className="fa fa-star-o blackcolor" />
                                </a>
                                <a href="#" title="2">
                                  <i className="fa fa-star-o blackcolor" />
                                </a>
                                <a href="#" title="3">
                                  <i className="fa fa-star-o blackcolor" />
                                </a>
                                <a href="#" title="4">
                                  <i className="fa fa-star-o blackcolor" />
                                </a>
                                <a href="#" title="5">
                                  <i className="fa fa-star-o blackcolor" />
                                </a>
                              </div>
                            </div>
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
                        <hr className="hr-format" />
                        <div className="row mtop5">
                          <div className="form-group pleft5">
                            <label className="lb-LabelStyle col-md-3 pleft0">
                              Add Link ::
                            </label>
                            <div className="col-md-9">
                              <AutoSearch
                                inputstyle=" auto-Input mbottom0 "
                                id="txtResponsible"
                                placeholder="Link to task (Lead, Contact, Organizations, Opportunities, Project,...)"
                              />
                            </div>
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

                      {/*}  <div className="row mtop5">
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
                    </div>*/}
                      <hr className="hr-format" />

                      <div className="row mtop5">
                        <label className="lb-LLabelStyle col-md-4 mleft15">
                          <u>Description</u>
                        </label>
                      </div>
                      <div className="row mbottom5">
                        <div className=" col-md-12 mleft15">
                          <textarea className="textareasty" />
                        </div>
                      </div>
                      <hr className="hr-format" />
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Lead Source ::
                          </label>
                          <div className="col-md-5">
                            <Dropdown id="cboLeadEvent">
                              <Dropdown.Toggle>No Select</Dropdown.Toggle>
                              <Dropdown.Menu>
                                <MenuItem eventKey="1">Purchased List</MenuItem>
                                <MenuItem eventKey="2">Trade Event</MenuItem>
                                <MenuItem eventKey="3">Walk In</MenuItem>
                                <MenuItem eventKey="4">Phone Entry</MenuItem>
                                <MenuItem eventKey="5">Others</MenuItem>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
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
                              <Dropdown id="cboTeam">
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
                              <Dropdown id="cboUser">
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
      </div>
    );
  }
}
export default LeadsNew;
