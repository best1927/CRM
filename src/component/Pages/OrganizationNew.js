import React, { Component } from "react";
import { Dropdown, Button, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import DateTimeField from "react-bootstrap-datetimepicker";
import AutoSearch from "../standard/AutoSearch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DateAnniObj from "../ObjTemplate/DateAnniObj";
import VisibilityObj from "../ObjTemplate/VisibilityObj";
//import validator from 'validator';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import Select from "react-select";
import "react-select/dist/react-select.css";
import {
  GetFilterContent,
  GetUserTeamContent,
  GetSubGdContent
} from "../../actions/crmstandardaction";

let AssignTypeObjlst = [];
let CountryObjlst = [];
let AssignObjlst = [];
let StateObjlst = [];
let DateCatObjlst = [];
let VisibleCatObjlst = [];
let DaterenderList = [];
let SocialList = [];
let recstate = "";


const SetDate = props => {
  let DataObj = {};
  DataObj.OrganizeId = 1;
  DataObj.ActivityCat = "ACCATORG"; 
  // DataObj.ConvOppId          =  ;
  // DataObj.OrganizeSt          =  ;
  DataObj.DescrLoc            =  props.DescrLoc.Value;
  DataObj.DescrOth            =  props.DescrOth.Value;
  // DataObj.OrganizeUrl         =  ;
  // DataObj.OrganizeType        =  ;
  // DataObj.CorporateDt         =  ;
  // DataObj.NotifyYn            =  ;
  // DataObj.Schedule             =  ;
  // DataObj.OrganizeDt          =  ;
  // DataObj.ConvertDt           =  ;
  // DataObj.AssignCat           =  ;
  // DataObj.AssignId            =  ;
  // DataObj.AnnualRevenue       =  ;
  // DataObj.NumOfEmp           =  ;
  // DataObj.Address              =  ;
  // DataObj.Subdistrict          =  ;
  // DataObj.District             =  ;
  // DataObj.City                 =  ;
  // DataObj.State                =  ;
  // DataObj.Country              =  ;
  // DataObj.Postalcode           =  ;
  // DataObj.Add_lat              =  ;
  // DataObj.Add_long             =  ;
  // DataObj.BillAddress         =  ;
  // DataObj.BillSubdistrict     =  ;
  // DataObj.BillDistrict        =  ;
  // DataObj.BillCity            =  ;
  // DataObj.BillState           =  ;
  // DataObj.BillCountry         =  ;
  // DataObj.BillPostalcode      =  ;
  // DataObj.BillLat             =  ;
  // DataObj.BillLong            =  ;
  // DataObj.PhoneHome           =  ;
  // DataObj.PhoneMobile         =  ;
  // DataObj.PhoneOffice         =  ;
  // DataObj.PhoneFax            =  ;
  // DataObj.Email                =  ;
  // DataObj.FacebookUrl         =  ;
  // DataObj.TwitterUrl          =  ;
  // DataObj.Line_acc             =  ;
  // DataObj.PhotoUrl            =  ;
  // DataObj.Rating               =  ;
  // DataObj.Descr                =  ;
  // DataObj.Isconvert            =  ;
  // DataObj.Isdeleted            =  ;
  // DataObj.AId                 =  ;
  // DataObj.VisibileType        =  ;
  // DataObj.VisibileCd          =  ;
  // DataObj.RefSapcode          =  ;
  // DataObj.RefMdm              =  ;
  // DataObj.Createuser           =  ;
  // DataObj.Createdate           =  ;
  // DataObj.Modifyuser           =  ;
  // DataObj.Modifydate           =  ;
  // DataObj.Programcode			 =	;
  return DataObj;
};




class OrganizationNew extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "New",
      active: null,
      mactive: null,
      oactive: null,
      mstateactive: null,
      ostateactive: null,
      assignAct: null,
      userdisable: true,
      mstatedisable: true,
      ostatedisable: true,
      visiblerdCheck: ""
    };
    this.btnBackClick = this.btnBackClick.bind(this);
    this.btnSaveClick = this.btnSaveClick.bind(this); 
    this.handleSelect = this.handleSelect.bind(this);
    this.cboMailhandleSelect = this.cboMailhandleSelect.bind(this);
    this.cboOthhandleSelect = this.cboOthhandleSelect.bind(this);
    this.cbocurrNameHandle = this.cbocurrNameHandle.bind(this);
    this.cboMStateHandle = this.cboMStateHandle.bind(this);
    this.cboOStateHandle = this.cboOStateHandle.bind(this);
    this.AddSocialhandler = this.AddSocialhandler.bind(this);
    this.AddAnniDateHandle = this.AddAnniDateHandle.bind(this);
    this.RadioClickhandler = this.RadioClickhandler.bind(this);
  }

  componentWillMount() {
    if (
      this.props.match.params.OrgId !== undefined &&
      this.props.match.params.OrgId !== null &&  this.props.match.params.OrgId !== "-1"
    ) {
      recstate = "Edit";
    } else {
      recstate = "New";
    }

    let Gddata = {
      h: {},
      classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
      methodName: "GetGdList",
      paramStr: {
        lang: "th_TH",
        GdList: "ASSTY,COTRY,DTCAT,VISTY"
      }
    };
    this.props.getFilterContent(Gddata);
  }

  handleSelect(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({ active: evt.value, userdisable: false });
      this.cboAssign.value = evt.value;
      let CriData = {
        h: {},
        classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
        methodName: "GetUserOrTeam",
        paramStr: {
          infotype: evt.value,
          txtFilter: "",
          lang: "th-TH"
        }
      };
      this.props.getAssignContent(CriData);
      // alert(evt.label);
    } else {
      this.setState({ active: null, userdisable: true, assignAct: null });
      this.cboAssign.value = "";
      if (this.cbocurrName !== undefined) {
        this.cbocurrName.value = "";
      }
    }
  }
  cboMailhandleSelect(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({
        mactive: evt.value,
        mstatedisable: false,
        mstateactive: null
      });
      this.cboMailCountry.value = evt.value;
      let CriData = {
        h: {},
        classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
        methodName: "GetSubGdList",
        paramStr: {
          MGdCode: evt.value,
          lang: "th-TH"
        }
      };
      this.props.getSubGdContent(CriData);
      // alert(evt.label);
    } else {
      this.setState({ mactive: null, mstatedisable: true, mstateactive: null });
      this.cboMailCountry.value = "";
      if (this.cboMailState !== undefined) {
        this.cboMailState.value = "";
      }
    }
  }
  cboOthhandleSelect(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({
        oactive: evt.value,
        ostatedisable: false,
        ostateactive: null
      });
      this.cboOthCountry.value = evt.value;
      let CriData = {
        h: {},
        classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
        methodName: "GetSubGdList",
        paramStr: {
          MGdCode: evt.value,
          lang: "th-TH"
        }
      };
      this.props.getSubGdContent(CriData);
      // alert(evt.label);
    } else {
      this.setState({ oactive: null, ostatedisable: true, ostateactive: null });
      this.cboOthCountry.value = "";
      if (this.cboOthState !== undefined) {
        this.cboOthState.value = "";
      }
    }
  }

  cbocurrNameHandle(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({ assignAct: evt.value });
      this.cbocurrName.value = evt.value;
      // alert(evt.label);
    } else {
      this.setState({ assignAct: null });
      this.cbocurrName.value = "";
    }
  }

  cboMStateHandle(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({
        mstateactive: evt.value
      });
      this.cboMailState.value = evt.value;
      // alert(evt.label);
    } else {
      this.setState({ mstateactive: null });
      this.cboMailState.value = "";
    }
  }

  cboOStateHandle(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({ ostateactive: evt.value });
      this.cboOthState.value = evt.value;
      // alert(evt.label);
    } else {
      this.setState({ ostateactive: null });
      this.cboOthState.value = "";
    }
  }

  btnBackClick(param) {
    this.props.history.push("/Organization");
  }

  btnSaveClick(param)
  {

  }

  AddSocialhandler() {
    SocialList = (
      <div>
        <div className="row mtop5">
          <div className="form-group">
            <label className="lb-LabelStyle col-md-3 pleft0">
              Facebook Url ::
            </label>
            <div className="col-md-9">
              <input
                id="txtFacebook"
                className="form-control"
                type="text"
                placeholder="Facebook Url"
                ref={c => (this.txtFacebook = c)}
              />
            </div>
          </div>
        </div>
        <div className="row mtop5">
          <div className="form-group">
            <label className="lb-LabelStyle col-md-3 pleft0">
              Twitter Url ::
            </label>
            <div className="col-md-9">
              <input
                id="txtTwitter"
                className="form-control"
                type="text"
                placeholder="Twitter Url"
                ref={c => (this.txtTwitter = c)}
              />
            </div>
          </div>
        </div>
        <div className="row mtop5">
          <div className="form-group">
            <label className="lb-LabelStyle col-md-3 pleft0">Line ::</label>
            <div className="col-md-9">
              <input
                id="txtLine"
                className="form-control"
                type="text"
                placeholder="Line"
                ref={c => (this.txtLine = c)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  AddAnniDateHandle() {
    let cnt = 1;
    if (DaterenderList !== undefined && DaterenderList !== null) {
      cnt = DaterenderList.length + 2;

      DaterenderList.push(
        <DateAnniObj
          selectId={"cboDate" + cnt}
          selectoptions={DateCatObjlst}
          //DelDateClick={this.DelDateClickhandler}
          delcollapsed=""
          indexs={cnt}
          defaultSelectVal=""
          disabled={false}
        />
      );
    }
  }

  RadioClickhandler(eventKey) {}

  render() {
    let Headertag;
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    //////////////////// Gendata to  Combo  ////////////////////

    if (
      this.props.filterContent !== null &&
      this.props.filterContent !== undefined
    ) {
      if (
        this.props.filterContent.GdFilter != undefined &&
        this.props.filterContent.GdFilter.length > 1
      ) {
        AssignTypeObjlst = this.props.filterContent.GdFilter[0].GdCodeLst.map(
          Gdobj => ({
            value: Gdobj.Gdcode,
            label: Gdobj.Descr
          })
        );

        CountryObjlst = this.props.filterContent.GdFilter[1].GdCodeLst.map(
          Gdobj => ({
            value: Gdobj.Gdcode,
            label: Gdobj.Descr
          })
        );

        DateCatObjlst = this.props.filterContent.GdFilter[2].GdCodeLst.map(
          Gdobj => ({
            value: Gdobj.Gdcode,
            label: Gdobj.Descr
          })
        );

        VisibleCatObjlst = this.props.filterContent.GdFilter[3].GdCodeLst.map(
          Gdobj => ({
            value: Gdobj.Gdcode,
            label: Gdobj.Descr
          })
        );
      }

      if (
        this.props.filterContent.UserTeamFilter != undefined &&
        this.props.filterContent.UserTeamFilter.length > 0
      ) {
        AssignObjlst = this.props.filterContent.UserTeamFilter.map(Gdobj => ({
          value: Gdobj.Code,
          label: Gdobj.Name
        }));
      }

      if (
        this.props.filterContent.SubGdFilter != undefined &&
        this.props.filterContent.SubGdFilter.length > 0
      ) {
        StateObjlst = this.props.filterContent.SubGdFilter.map(Gdobj => ({
          value: Gdobj.Code,
          label: Gdobj.Name
        }));
      }
      if (
        this.props.filterContent.SubGdFilter != undefined &&
        this.props.filterContent.SubGdFilter.length > 0
      ) {
        StateObjlst = this.props.filterContent.SubGdFilter.map(Gdobj => ({
          value: Gdobj.Code,
          label: Gdobj.Name
        }));
      }
    }

    //////////////////// Gendata to  Combo  ////////////////////

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
          HeaderText={
            recstate === "New"
              ? "New Organization"
              : "Edit Organization"
          }
          btnSaveClick={this.btnSaveClick}
          btnBackLink={this.btnBackClick}
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
                      <div className="row mtop5" >
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft5">
                            Org. Name (Local) ::
                          </label>
                          <div className="col-md-9">
                            <input className="form-control" type="text" ref={c => (this.DescrLoc = c)}/>
                          </div>
                        </div>
                      </div>
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <label className="lb-LabelStyle col-md-3 pleft5">
                            Org. Name (Other) ::
                          </label>
                          <div className="col-md-9">
                            <input className="form-control" type="text"  ref={c => (this.DescrOth = c)} />
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
                              mode="date"
                            />
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
                        <label className="lb-LabelStyle l mleft30">
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
                          <a href="#" onClick={this.AddSocialhandler}>
                            <u>Add Social Profiles</u>
                          </a>
                        </div>
                      </div>
                      {SocialList}
                      <hr className="hr-format" />
                      <div className="row mtop5">
                        <div className="form-group pleft5">
                          <div id="divDateAnniList">
                            <DateAnniObj
                              selectId="cboDate1"
                              selectoptions={DateCatObjlst}
                              DelDateClick={this.DelDateClickhandler}
                              delcollapsed="collapsed"
                              defaultSelectVal="DTCAT_EST"
                              disabled={true}
                            />
                            {DaterenderList}
                            <div className="pull-right mright15">
                              <a
                                id="lkAddDate"
                                href="#"
                                onClick={this.AddAnniDateHandle}
                              >
                                <u>Add Others Date of Member</u>
                              </a>
                            </div>
                          </div>
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
                              {/* <Dropdown id="dropdown-custom-1" dropup>
                                <Dropdown.Toggle>No Select</Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="1">User</MenuItem>
                                  <MenuItem eventKey="2">Team</MenuItem>
                                </Dropdown.Menu>
                              </Dropdown> */}
                              <Select
                                className="blackcolor l"
                                placeholder="Select Type ..."
                                id="cboAssign"
                                name="cboAssign"
                                options={AssignTypeObjlst}
                                value={this.state.active}
                                onChange={this.handleSelect}
                                ref={c => (this.cboAssign = c)}
                                searchable={false}
                                clearable
                              />
                            </div>
                            <div className="col-md-8 pleft0 pright0 mbutton0">
                              <Select
                                className="blackcolor l"
                                placeholder="Select Type ..."
                                id="cbocurrName"
                                name="cbocurrName"
                                options={AssignObjlst}
                                value={this.state.assignAct}
                                onChange={this.cbocurrNameHandle}
                                ref={c => (this.cbocurrName = c)}
                                disabled={this.state.userdisable}
                                searchable={true}
                                clearable
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
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  <hr className="hr-format" />
                    <div className="row  ">
                  
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
                          <Select
                            className="blackcolor l"
                            placeholder="Select Country ..."
                            id="cboMailCountry"
                            name="cboMailCountry"
                            options={CountryObjlst}
                            value={this.state.mactive}
                            onChange={this.cboMailhandleSelect}
                            ref={c => (this.cboMailCountry = c)}
                            searchable={true}
                            clearable
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
                          {/* <input
                            className="form-control"
                            type="text"
                            placeholder="State/Province"
                          /> */}

                          <Select
                            className="blackcolor l"
                            placeholder="Select Province/State ..."
                            id="cboMailState"
                            name="cboMailState"
                            options={StateObjlst}
                            value={this.state.mstateactive}
                            onChange={this.cboMStateHandle}
                            disabled={this.state.mstatedisable}
                            ref={c => (this.cboMailState = c)}
                            searchable={true}
                            clearable
                          />
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
                          {/* <input
                            className="form-control"
                            type="text"
                            placeholder="State/Province"
                          /> */}
                          <Select
                            className="blackcolor l"
                            placeholder="Select Country ..."
                            id="cboOthCountry"
                            name="cboOthCountry"
                            options={CountryObjlst}
                            value={this.state.oactive}
                            onChange={this.cboOthhandleSelect}
                            ref={c => (this.cboOthCountry = c)}
                            searchable={true}
                            clearable
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
                          <Select
                            className="blackcolor l"
                            placeholder="Select Province/State ..."
                            id="cboOthState"
                            name="cboOthState"
                            options={StateObjlst}
                            value={this.state.ostateactive}
                            onChange={this.cboOStateHandle}
                            disabled={this.state.ostatedisable}
                            ref={c => (this.cboOthState = c)}
                            searchable={true}
                            clearable
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="hr-format" />

                    <div className="row mtop5">
                      {/* <div className="form-group pleft5">
                        <label className="lb-LabelStyle col-md-3 pleft0">
                          Visibility ::
                        </label>
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="radio">
                                <label>
                                  <input
                                    id="rdrAll"
                                    type="radio"
                                    className="w18 h18"
                                    checked={
                                      this.state.visiblerdCheck === "rdrAll"
                                        ? "checked"
                                        : ""
                                    }
                                    name="optradio"
                                    onClick={this.RadioClickhandler}
                                    ref={c => (this.Visiblecd = c)}
                                  />
                                  Everyone
                                </label>
                              </div>
                            </div>

                            <div className="col-md-5">
                              <div className="radio">
                                <label>
                                  <input
                                    id="rdrOwner"
                                    type="radio"
                                    className="w18 h18"
                                    checked={
                                      this.state.visiblerdCheck === "rdrOwner"
                                        ? "checked"
                                        : ""
                                    }
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
                                  id="rdrTeam"
                                  type="radio"
                                  className="w18 h18"
                                  checked={
                                    this.state.visiblerdCheck === "rdrTeam"
                                      ? "checked"
                                      : ""
                                  }
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
                                  id="rdrPerson"
                                  type="radio"
                                  className="w18 h18"
                                  checked={
                                    this.state.visiblerdCheck === "rdrPerson"
                                      ? "checked"
                                      : ""
                                  }
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
                      </div> */}
                      <VisibilityObj GdVisiblelist={VisibleCatObjlst} />
                      {/* <VisibilityObj
                       /> */}
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
function mapStateToProps(state) {
  // Map newState from Redux Reducer
  return {
    filterContent: state.filterObjList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getFilterContent: GetFilterContent,
      getAssignContent: GetUserTeamContent,
      getSubGdContent: GetSubGdContent
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationNew);
// export default OrganizationNew;
