import React, { Component } from "react";
import DateTimeField from "react-bootstrap-datetimepicker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { GetUserTeamContent } from "../../actions/crmstandardaction";

class VisibilityObj extends React.Component {
  constructor() {
    super();
    this.state = {
      rdselectval: null,
      CboUserdisable: true,
      CboTeamdisable: true,
      CboUsersel: null,
      CboTeamsel: null
    };
    this.RadioOnChangehandler = this.RadioOnChangehandler.bind(this);
    this.cboTeamSelecthandler = this.cboTeamSelecthandler.bind(this);
    this.cboUserSelecthandler = this.cboUserSelecthandler.bind(this);
  }

  RadioOnChangehandler(eventKey) {
    let obj = eventKey.target;
    this.setState({ rdselectval: obj.id });

    if (obj.id === "rdr_VISTY_TEAM") {
      this.setState({
        CboTeamdisable: false,
        CboUserdisable: true,
        CboUsersel: null
      });

      let CriData = {
        h: {},
        classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
        methodName: "GetUserOrTeam",
        paramStr: {
          infotype: "ASSTY_T",
          txtFilter: "",
          lang: "th-TH"
        }
      };
      this.props.getVisibleContent(CriData);

    } else if (obj.id === "rdr_VISTY_PERSON") {
      this.setState({
        CboTeamdisable: true,
        CboUserdisable: false,
        CboTeamsel: null
      });

      let CriData = {
        h: {},
        classWithNs: "CRM_Lib.CRM_Controller,CRM_Lib",
        methodName: "GetUserOrTeam",
        paramStr: {
          infotype: "ASSTY_P",
          txtFilter: "",
          lang: "th-TH"
        }
      };
      this.props.getVisibleContent(CriData);
    } else {
      this.setState({
        CboTeamdisable: true,
        CboUserdisable: true,
        CboUsersel: null,
        CboTeamsel: null
      });
    }
    // {
    //     this.state.selectval === "rdrOwner" ? "checked" : ""
    //   }
  }
  cboTeamSelecthandler(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({ CboTeamsel: evt.value }); 
    }else{
        this.setState({ CboTeamsel:null }); 
    }
  }
  cboUserSelecthandler(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({ CboUsersel: evt.value }); 
    }else{
        this.setState({ CboUsersel:null }); 
    }
  }
  render() {
    let GdTemplst = this.props.GdVisiblelist;
    let UserObjlst = [];
    if (
      this.props.filterContent !== undefined &&
      this.props.filterContent !== null
    ) {
      if (
        this.props.filterContent.UserTeamFilter != undefined &&
        this.props.filterContent.UserTeamFilter.length > 0
      ) {
        UserObjlst = this.props.filterContent.UserTeamFilter.map(Gdobj => ({
          value: Gdobj.Code,
          label: Gdobj.Name
        }));
      }
    }
 
    return GdTemplst !== undefined && GdTemplst.length > 0 ? (
      <div className="form-group pleft5">
        <label className="lb-LabelStyle col-md-2 pleft0">Visibility ::</label>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="radio">
                <label>
                  <input
                    id={"rdr_" + GdTemplst[0].value}
                    type="radio"
                    className="w18 h18"
                    checked={
                      this.state.rdselectval === "rdr_" + GdTemplst[0].value
                        ? "checked"
                        : ""
                    }
                    name="optradio"
                    onChange={this.RadioOnChangehandler}
                  />
                  {GdTemplst[0].label}
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="radio">
                <label>
                  <input
                    id={"rdr_" + GdTemplst[1].value}
                    type="radio"
                    className="w18 h18"
                    checked={
                      this.state.rdselectval === "rdr_" + GdTemplst[1].value
                        ? "checked"
                        : ""
                    }
                    name="optradio"
                    onChange={this.RadioOnChangehandler}
                  />
                  {GdTemplst[1].label}
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="radio col-md-6">
              <label>
                <input
                  id={"rdr_" + GdTemplst[2].value}
                  type="radio"
                  className="w18 h18"
                  checked={
                    this.state.rdselectval === "rdr_" + GdTemplst[2].value
                      ? "checked"
                      : ""
                  }
                  name="optradio"
                  onChange={this.RadioOnChangehandler}
                />
                {GdTemplst[2].label}
              </label>
            </div>
            <div className="  col-md-6">
              <Select
                className="blackcolor l"
                placeholder="Select Type ..."
                id="cboTeam"
                name="cboTeam"
                options={UserObjlst}
                value={this.state.CboTeamsel}
                onChange={this.cboTeamSelecthandler}
                ref={c => (this.cboTeam = c)}
                disabled={this.state.CboTeamdisable}
                searchable={true}
                clearable
              />
            </div>
          </div>
          <div className="row">
            <div className="radio col-md-6">
              <label>
                <input
                  id={"rdr_" + GdTemplst[3].value}
                  type="radio"
                  className="w18 h18"
                  checked={
                    this.state.rdselectval === "rdr_" + GdTemplst[3].value
                      ? "checked"
                      : ""
                  }
                  name="optradio"
                  onChange={this.RadioOnChangehandler}
                />
                {GdTemplst[3].label}
              </label>
            </div>
            <div className="  col-md-6">
              <Select
                className="blackcolor l"
                placeholder="Select Type ..."
                id="cboUser"
                name="cboUser"
                options={UserObjlst}
                value={this.state.CboUsersel}
                onChange={this.cboUserSelecthandler}
                ref={c => (this.cboUser = c)}
                disabled={this.state.CboUserdisable}
                searchable={true}
                clearable
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div />
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
      getVisibleContent: GetUserTeamContent
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityObj);
// export default VisibilityObj;
