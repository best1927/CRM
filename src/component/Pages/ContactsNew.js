import React, { Component } from "react";
import { Dropdown, Button, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import DateTimeField from "react-bootstrap-datetimepicker";
import AutoSearch from "../standard/AutoSearch";
import axios from "axios";
let URLPOST = "http://localhost:54842/GenericService.svc/DoWork";

const SetDate = props => {
  let DataObj = {};
  DataObj.ContactId = 1;
  DataObj.ActivityCat = "ACCATCONT";
  // DataObj.ConvOrganizeId = ;
  // DataObj.ConvOppId      = ;
  // DataObj.ContactSt       = ;
  // DataObj.Contact_type     = ;
  // DataObj.Title_code       = ;
  DataObj.FirstnameLoc = props.firstName.value;
  DataObj.LastnameLoc = props.LastName.value;
  // DataObj.FirstnameOth    = ;
  // DataObj.LastnameOth     = ;
  DataObj.NameLoc = props.firstName.value + " " + props.LastName.value;
  // DataObj.NameOth         = ;
  // DataObj.Birthdate        = ;
  // DataObj.ContactDt       = ;
  // DataObj.ConvertDt       = ;
  // DataObj.AssignCat       = ;
  // DataObj.AssignId        = ;
  // DataObj.Occupation       = ;
  // DataObj.JobDesc         = ;
  // DataObj.PositionDesc    = ;
  // DataObj.DeptDesc        = ;
  DataObj.OrganizeId = props.txtOrg.value;
  // DataObj.AnnualRevenue   = ;
  // DataObj.NumOf_emp       = ;
  // DataObj.Address          = ;
  // DataObj.Subdistrict      = ;
  // DataObj.District         = ;
  // DataObj.City             = ;
  // DataObj.State            = ;
  // DataObj.Country          = ;
  // DataObj.Postalcode       = ;
  // DataObj.AddLat          = ;
  // DataObj.AddLong         = ;
  // DataObj.BillAddress     = ;
  // DataObj.BillSubdistrict = ;
  // DataObj.BillDistrict    = ;
  // DataObj.BillCity        = ;
  // DataObj.BillState       = ;
  // DataObj.BillCountry     = ;
  // DataObj.BillPostalcode  = ;
  // DataObj.BillLat         = ;
  // DataObj.BillLong        = ;
  // DataObj.PhoneHome       = ;
  // DataObj.Phone_mobile     = ;
  // DataObj.PhoneOffice     = ;
  // DataObj.PhoneFax        = ;
  // DataObj.Email            = ;
  // DataObj.PhotoUrl        = ;
  // DataObj.Rating           = ;
  // DataObj.Descr            = ;
  // DataObj.UserId          = ;
  // DataObj.Specialist       = ;
  // DataObj.Suggestion       = ;
  // DataObj.Isconvert        = ;
  // DataObj.Isdeleted        = ;
  // DataObj.AId             = ;
  // DataObj.RefSapcode      = ;
  // DataObj.RefMdm          = ;
  // DataObj.Createuser       = ;
  // DataObj.Createdate       = ;
  // DataObj.Modifyuser       = ;
  // DataObj.Modifydate       = ;
  // DataObj.Programcode		=	;
  return DataObj;
};

class ContactsNew extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "New",
      cboPrefixlst: [],
      cboOccuplst: [],
      cboCountrylst: []
    };
    this.btnAddPicClick = this.btnAddPicClick.bind(this);
    this.btnBackClick = this.btnBackClick.bind(this);
    this.btnSaveClick = this.btnSaveClick.bind(this);
    this.autohandleChange = this.autohandleChange.bind(this);
  }
  autohandleChange(event) {
    this.txtOrg.value = event.target.value;
  }

  componentWillMount() {}
  componentDidMount() {
    let paramsv = {};
    paramsv.DataHeader = {};
    paramsv.ClassWithNs = "CRM_Lib.CRM_Controller,CRM_Lib";
    paramsv.methodName = "GetGdList";
    let pData = {};
    pData.GdList = "PRFIX,OCCUP,COTRY";

    axios({
      url: URLPOST,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      data: {
        h: {},
        classWithNs: paramsv.ClassWithNs,
        methodName: paramsv.methodName,
        paramStr: pData
      }
    })
      .then(response => {
        let ret = JSON.parse(response.data.DoWorkResult).Result;
        console.log(response);
        console.log(ret);
        let lst1,
          lst2,
          lst3 = [];
        for (var i = 0; i < ret.result.length; i++) {
          if (ret.result[i].GdType === "PRFIX") {
            lst1 = ret.result[i].GdCodeLst;
          }
          if (ret.result[i].GdType === "OCCUP") {
            lst2 = ret.result[i].GdCodeLst;
          }
          if (ret.result[i].GdType === "COTRY") {
            lst3 = ret.result[i].GdCodeLst;
          }
        }
        this.setState({
          cboPrefixlst: lst1,
          cboOccuplst: lst2,
          cboCountrylst: lst3
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  btnAddPicClick() {
    console.log();
    console.log("test btnAddPic Click");
  }

  btnSaveClick() {
    console.log();
    console.log("test btnSave Click");
    let DataObj = SetDate(this);
    console.log(this.txtOrg);
    let paramsv = {};
    paramsv.DataHeader = {};
    paramsv.ClassWithNs = "CRM_Lib.Contacts_Controller,CRM_Lib";
    paramsv.methodName = "SaveContacts";
    let pData = {};
    pData.Obj = DataObj;
    pData.user = "Watinee";
    pData.flag = "N";

    console.log(JSON.stringify(pData));

    axios({
      url: URLPOST,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      data: {
        h: {},
        classWithNs: paramsv.ClassWithNs,
        methodName: paramsv.methodName,
        paramStr: JSON.stringify(pData)
      }
    })
      .then(response => {
        let ret = JSON.parse(response.data.DoWorkResult).Result;
        console.log(response);
        console.log(ret);
      })
      .catch(error => {
        console.log(error);
      });
  }

  btnBackClick() {
    console.log();
    console.log("test btnBack Click");
  }

  render() {
    let Headertag;
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    let preList,
      OccList,
      ContryLst = [];

    if (
      this.state.cboPrefixlst !== undefined &&
      this.state.cboPrefixlst.length > 0
    ) {
      preList = this.state.cboPrefixlst.map(cboPrefix => (
        <MenuItem eventKey={cboPrefix.Gdcode}>{cboPrefix.Desc1}</MenuItem>
      ));
    }

    if (
      this.state.cboOccuplst !== undefined &&
      this.state.cboOccuplst.length > 0
    ) {
      OccList = this.state.cboOccuplst.map(cboOccup => (
        <MenuItem eventKey={cboOccup.Gdcode}>{cboOccup.Desc1}</MenuItem>
      ));
    }

    if (
      this.state.cboCountrylst !== undefined &&
      this.state.cboCountrylst.length > 0
    ) {
      ContryLst = this.state.cboCountrylst.map(cboCountry => (
        <MenuItem eventKey={cboCountry.Gdcode}>{cboCountry.Desc1}</MenuItem>
      ));
    }

    let btnTasklist = [];

    btnTasklist.push(
      <a
        id="btnAddPic"
        data-lang="btnAddPic"
        onClick="btnAddPicClick"
        title="Add Picture"
        className="btn btn-circle fa-inverse btn-default pull-left no-padding mleft3"
      >
        <img
          className="btn-img2"
          src={process.env.PUBLIC_URL + "/images/userAdd.png"}
        />
      </a>
    );

    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="NewType"
          HeaderText={
            this.state.status === "New" ? "New Contact" : "Edit Contact"
          }
          btnSaveClick={this.btnSaveClick}
          btnBackClick={this.btnBackClick}
          morebtnleft={btnTasklist}
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
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Name ::
                          </label>
                          <div className="col-md-2">
                            <Dropdown id="dropdown-custom-1">
                              <Dropdown.Toggle>Prefix</Dropdown.Toggle>
                              <Dropdown.Menu>
                                {/*<MenuItem eventKey="1">Mr.</MenuItem>
                                <MenuItem eventKey="2">Mrs.</MenuItem>
                                <MenuItem eventKey="3">Miss.</MenuItem>
                                <MenuItem eventKey="4">Dr.</MenuItem>*/}
                                {preList}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="col-md-3 pleft0 pright5">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                              ref={c => (this.firstName = c)}
                            />
                          </div>
                          <div className="col-md-4 pleft0 pright0">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Last Name"
                              ref={c => (this.LastName = c)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft0">
                            Occupation ::
                          </label>
                          <div className="col-md-9">
                            <div className="pleft0 pright0">
                              <Dropdown id="dropdown-custom-1">
                                <Dropdown.Toggle> No Select </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  {/*<MenuItem eventKey="1">Doctor</MenuItem>
                                  <MenuItem eventKey="2">IT</MenuItem>
                                  <MenuItem eventKey="3">Sales</MenuItem>
                                  <MenuItem eventKey="4">Others</MenuItem>*/}
                                  {OccList}
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
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
                              id="txtOrg"
                              placeholder="Organization"
                              ref={c => (this.txtOrg = c)}
                              onChange={this.autohandleChange}
                            />
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
                              ref={c => (this.Email = c)}
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
                              ref={c => (this.Phone = c)}
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone (Mobile)"
                              ref={c => (this.Mobile = c)}
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
                              ref={c => (this.Office = c)}
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone (Other)"
                              ref={c => (this.Other = c)}
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

                  <div className="col-md-6">
                    <div className="row">
                      <label className="lb-LLabelStyle col-md-4 mleft15">
                        <u>Address (Mail)</u>
                      </label>
                    </div>
                    <div className="row mbottom5">
                      <div className=" col-md-12 mleft15">
                        <textarea
                          className="textareasty"
                          ref={c => (this.AddressMail = c)}
                        />
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
                            ref={c => (this.PostalMail = c)}
                          />
                        </div>
                        <div className="col-md-7">
                          <Dropdown id="cboMailCountry">
                            <Dropdown.Toggle>No Select</Dropdown.Toggle>
                            <Dropdown.Menu>
                              {/*} <MenuItem eventKey="1">Thailand</MenuItem>
                              <MenuItem eventKey="2">United Kingdom</MenuItem>
                              <MenuItem eventKey="2">United Stated</MenuItem>*/}
                              {ContryLst}
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
                        <textarea
                          className="textareasty"
                          ref={c => (this.AddressOther = c)}
                        />
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
                            ref={c => (this.PostalOther = c)}
                          />
                        </div>
                        <div className="col-md-7">
                          <Dropdown id="cboOthCountry">
                            <Dropdown.Toggle>No Select</Dropdown.Toggle>
                            <Dropdown.Menu>
                              {/*} <MenuItem eventKey="1">Thailand</MenuItem>
                              <MenuItem eventKey="2">United Kingdom</MenuItem>
                              <MenuItem eventKey="2">United Stated</MenuItem>*/}
                              {ContryLst}
                            </Dropdown.Menu>
                          </Dropdown>
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
                        <textarea
                          className="textareasty"
                          ref={c => (this.Additional = c)}
                        />
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
                            id="txtLink"
                            placeholder="Link to task (Lead, Contact, Organizations, Opportunities, Project,...)"
                            ref={c => (this.txtLink = c)}
                          />
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
export default ContactsNew;
