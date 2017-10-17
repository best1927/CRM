import React from "react";
import EmailTemplate from "../Timeline/EmailTemplate";
import AutoSearch from "../standard/AutoSearch";

import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppOrganizationtab } from "../../actions/crmactionOrganizationView";

class EmailTab extends React.Component {
  constructor() {
    super();
    this.autohandleChange = this.autohandleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  autohandleChange(event) {
    this.txtEmail.value = event.target.value;
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log("do validate");

      let mName = "GetActivityByOwner";
      let cName = "CRM_Lib.CRM_Controller,CRM_Lib";
      let parmObj = {
        ownercd: this.props.DataCat,
        ownerid: this.props.Dataid, //this.props.DataContext.OrganizeId,
        userid: "watinee.put",
        curpage: 0,
        lang: "th-TH",
        txtFilter: this.txtEmail.value !== undefined ? this.txtEmail.value : "",
        activitiescd :"ACCATEMAILS" 
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
      txtFilter: "",
      activitiescd :"ACCATEMAILS" 
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
    let btitleStyle = {
      padding: "0px 0px 0px 5px"
    };

    let EmailLst = [];

    if (
      this.props.appContentTab !== undefined &&
      this.props.appContentTab !== null
    ) {
      EmailLst = this.props.appContentTab.TimeObjList.map(MTimeline => (
        <EmailTemplate
          iConEvent={MTimeline.IconEvent}
          DateEvent={MTimeline.ActivitiesDtStr}
          TimeEvent={MTimeline.ActivityTime}
          EventName={MTimeline.EventName}
          textTitle={MTimeline.Topic}
          priority={MTimeline.PriorityStr}
          Sento={MTimeline.SendTo}
          DataContent1={MTimeline.Descr1}
          UserCreate={MTimeline.Createuser}
        />
      ));
    }

    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">
            Email
            <a
              id="btnEmail"
              href="#"
              title="Email"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-envelope-o" />
            </a>
          </h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtEmail"
              placeholder="Search"
              ref={c => (this.txtEmail = c)}
              onChange={this.autohandleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                {EmailLst}
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
export default connect(mapStateToProps, mapDispatchToProps)(EmailTab);
// export default EmailTab;
