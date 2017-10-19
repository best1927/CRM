import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Button, Dropdown, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import AutoSearch from "../standard/AutoSearch";
import Alphabetdiv from "../standard/Alphabetdiv";
import TagSearchdiv from "../standard/TagSearchdiv";
import OrganizationObjLst from "../ObjTemplate/OrganizationObjLst"; 
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchAppContent,
  firstfetchAppContent
} from "../../actions/crmactionOrganization";
import { GetFilterContent } from "../../actions/crmstandardaction";
import Select from "react-select";
import "react-select/dist/react-select.css";

class Organization extends React.Component {
  constructor() {
    super();
    this.AlphaClick = this.AlphaClick.bind(this);
    this.TagOnClick = this.TagOnClick.bind(this);
    this.NoneClick = this.NoneClick.bind(this);
    this.btnNewClick = this.btnNewClick.bind(this);
    this.btnDeleteClick = this.btnDeleteClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.autohandleChange = this.autohandleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = { active: null };
  }

  AlphaClick(param) {
    let data = {
      h: {},
      classWithNs: "CRM_Lib.Organizations_Controller,CRM_Lib",
      methodName: "SearchOrganization",
      paramStr: {
        Alphabetfilter: param,
        Combofilter: this.FilterCombo.value !== undefined ? this.FilterCombo.value : "", 
        txtFilter:
          this.txtSearchOrg.value !== undefined ? this.txtSearchOrg.value : "",
        userid: "watinee.put",
        lang: "en-US",
        tagstr: "",
        curpage: 0
      }
    };
    this.props.loadAppContent(data);
    console.log(param);
    console.log("test Alpha Click");
  }

  TagOnClick(param) {
    console.log(param);
    console.log("test Tag Click");
    let data = {
      h: {},
      classWithNs: "CRM_Lib.Organizations_Controller,CRM_Lib",
      methodName: "SearchOrganization",
      paramStr: {
        Alphabetfilter: "",
        Combofilter: this.FilterCombo.value !== undefined ? this.FilterCombo.value : "", 
        txtFilter:
          this.txtSearchOrg.value !== undefined ? this.txtSearchOrg.value : "",
          userid: "watinee.put",
          lang: "en-US",
          tagstr: param,
          curpage: 0
      }
    };

    this.props.loadAppContent(data);
  }

  NoneClick() {
    let data = {
      h: {},
      classWithNs: "CRM_Lib.Organizations_Controller,CRM_Lib",
      methodName: "SearchOrganization",
      paramStr: {
        Alphabetfilter: "",
        Combofilter: "",
        txtFilter: "",
        userid: "watinee.put",
        lang: "en-US",
        tagstr: "",
        curpage: 0
      }
    };
    this.props.loadAppContent(data);
    console.log("test None Click");
  }
  btnNewClick(param) {
    console.log(param);
    console.log("test btnNew Click");
    this.props.history.push("/OrganizationNew/-1");
  }
  handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log("do validate");

      let data = {
        h: {},
        classWithNs: "CRM_Lib.Organizations_Controller,CRM_Lib",
        methodName: "SearchOrganization",
        paramStr: {
          Alphabetfilter: "",
          Combofilter: this.FilterCombo.value,
          txtFilter:
            this.txtSearchOrg.value !== undefined
              ? this.txtSearchOrg.value
              : "",
          userid: "watinee.put",
          lang: "en-US",
          tagstr: "",
          curpage: 0
        }
      };

      this.props.loadAppContent(data);
    }
  }
  autohandleChange(event) {
    this.txtSearchOrg.value = event.target.value;
    // if (event.target.charCode == 13) {
    //   alert("Enter clicked!!!");
    // }
  }

  btnDeleteClick(param) {
    console.log(param);
    console.log("test btnDelete Click");
  }

  handleSelect(evt) {
    if (evt !== null) {
      this.setState({ active: evt.value });
      this.FilterCombo.value = evt.value;
      // alert(evt.label);
    } else {
      this.setState({ active: null });
      this.FilterCombo.value = "";
    }

    let data = {
      h: {},
      classWithNs: "CRM_Lib.Organizations_Controller,CRM_Lib",
      methodName: "SearchOrganization",
      paramStr: {
        Alphabetfilter: "",
        Combofilter: this.FilterCombo.value,
        txtFilter:
          this.txtSearchOrg.value !== undefined ? this.txtSearchOrg.value : "",
        userid: "watinee.put",
        lang: "en-US",
        tagstr: "",
        curpage: 0,
        maxRec: 20
      }
    };

    this.props.loadAppContent(data);
  }

  componentDidMount() {

    // document.getElementById("body").addClass('sidebar-collapse');

    window.addEventListener("resize", function(event) {
      if (document.getElementById("divalpha") !== null) {
        let divalpha = document.getElementById("divalpha");
        let divfilterTag = document.getElementById("divfilterTag");
        if (this.innerWidth < 850) {
          divalpha.style.visibility = "collapse";
          divfilterTag.style.visibility = "collapse";
        } else {
          divalpha.style.visibility = "visible";
          divfilterTag.style.visibility = "visible";
        }
      }
    });

    let Gddata = {
      h: {},
      classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
      methodName: "GetGdList",
      paramStr: {
        lang: "th-TH",
        GdList: "FTORG"
      }
    };
    this.props.getFilterContent(Gddata);
  }

  componentWillMount() {
    let data = {
      h: {},
      classWithNs: "CRM_Lib.Organizations_Controller,CRM_Lib",
      methodName: "SearchOrganization",
      paramStr: {
        Alphabetfilter: "",
        Combofilter: "",
        txtFilter: "",
        userid: "watinee.put",
        lang: "en-US",
        tagstr: "",
        curpage: 0 
      }
    };

    this.props.loadAppContent(data);
  }

  render() {
    let filterObjlst = [];
    if (
      this.props.filterContent !== null &&
      this.props.filterContent !== undefined
    ) {
      filterObjlst = this.props.filterContent.GdFilter[0].GdCodeLst.map(Gdobj => ({
        value: Gdobj.Gdcode,
        label: Gdobj.Descr
      }));
    }

   

    {
      /* placeholder="Filter..." */
    }
    let filterelement = (
      <Select
        className="col-md-3 pull-right blackcolor l"
        placeholder="Filter ..."
        name="form-field-name"
        options={filterObjlst}
        value={this.state.active}
        onChange={this.handleSelect}
        ref={c => (this.FilterCombo = c)}
        searchable={false}
        clearable
      />
    );
    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="SearchType"
          HeaderText="Organization"
          filiter="Y"
          DelYn="Y"
          btnAddClick={this.btnNewClick}
          btnDeleteClick={this.btnDeleteClick}
          filterobj={filterelement}
        />
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-10 mright0 pright0">
                <div className="col-md-11 mright0 pright0">
                  <AutoSearch
                    inputstyle=" input-Search mbottom0 "
                    id="txtSearchOrg"
                    placeholder=""
                    ref={c => (this.txtSearchOrg = c)}
                    onChange={this.autohandleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                  <OrganizationObjLst ObjectList={this.props.appContent} />
                </div>
                <Alphabetdiv onClick={this.AlphaClick} />
              </div>
              <TagSearchdiv
                Tagtext="Organization Tags"
                spid="spOrganize"
                TagOnClick={this.TagOnClick}
                ObjList={this.props.appContent}
                NoneClick={this.NoneClick}
              />
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
    appContent: state.Orgobjlist,
    filterContent: state.filterObjList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAppContent: fetchAppContent,
      loadAppContent: firstfetchAppContent,
      getFilterContent: GetFilterContent
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Organization);
//export default Organization;
