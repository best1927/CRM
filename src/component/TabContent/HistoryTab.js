import React from "react";
import AutoSearch from "../standard/AutoSearch";
import TimelineModal from "../Timeline/TimelineModal";

import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppOrganizationtab } from "../../actions/crmactionOrganizationView";

class HistoryTab extends React.Component {
  constructor() {
    super();
    this.autohandleChange = this.autohandleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  autohandleChange(event) {
    this.txtHistory.value = event.target.value;
   
  }
  
  handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log("do validate");

      let mName = "GetActivityByOwner";
      let cName = "CRM_Lib.CRM_Controller,CRM_Lib";
      let parmObj = {
        ownercd: this.props.DataCat,
        ownerid: this.props.Dataid,//this.props.DataContext.OrganizeId,
        userid: "watinee.put",
        curpage: 0,
        lang: "th-TH",
        txtFilter:
          this.txtHistory.value !== undefined ? this.txtHistory.value : ""
      };
      let data = {
        h: {},
        classWithNs: cName,
        methodName: mName,
        paramStr: parmObj
      };
      this.props.fetchAppOrganizationtab(data);
    }
  }

  componentWillMount() {
    let mName = "GetActivityByOwner";
    let cName = "CRM_Lib.CRM_Controller,CRM_Lib";
    let parmObj = {
      // ownercd: "ACCATORG",
      // ownerid: this.props.DataContext.OrganizeId,
      ownercd: this.props.DataCat,
      ownerid: this.props.Dataid, 
      userid: "watinee.put",
      curpage: 0,
      lang: "th-TH",
      txtFilter:""
      
    };
    let data = {
      h: {},
      classWithNs: cName,
      methodName: mName,
      paramStr: parmObj
    };
    this.props.fetchAppOrganizationtab(data);
  }

  render() {
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">Recent Activity</h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtHistory"
              placeholder="Search"
              ref={c => (this.txtHistory = c)}
              onChange={this.autohandleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <TimelineModal TimelineObj={this.props.appContentTab} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  // Map newState from Redux Reducer
  // if (this.state.selected  === "About"){
  //    headerObj = state.dataContextObj;
  // }
  return {
    appContentTab: state.dataTabObjList
    // filterContent: state.OrgfilterObjList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchAppOrganizationtab: fetchAppOrganizationtab
      // ,
      // loadAppContent: firstfetchAppContent,
      // getFilterContent: GetFilterContent
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryTab);
//export default HistoryTab;
