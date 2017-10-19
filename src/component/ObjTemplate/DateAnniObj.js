import React, { Component } from "react";
import DateTimeField from "react-bootstrap-datetimepicker";
import Select from "react-select";
import "react-select/dist/react-select.css";
 

class DateAnniObj extends React.Component {
  constructor() {
    super();
    this.state = { selectval: null,remove:false };
    this.SelectObjHandle = this.SelectObjHandle.bind(this);
    this.DelDateClickhandler = this.DelDateClickhandler.bind(this);
  }
  SelectObjHandle(evt) {
    if (evt !== null && evt !== undefined) {
      this.setState({ selectval: evt.value });
      // this.cboDate.value = evt.value;
      // alert(evt.label);
    } else {
      this.setState({ selectval: null });
    }
  }
  
    DelDateClickhandler(eventKey) {
      this.setState({ remove: true });
  }
  componentWillReceiveProps() {
       if (this.props.defaultSelectVal !== undefined && this.props.defaultSelectVal !== ""){
       this.setState({ selectval: this.props.defaultSelectVal });
    } 
  }
  render() {
 
    //this.setState({selectval:this.props.selectvalue});
    return (
      this.state.remove !== true?
      <div id={"divDateObj"+this.props.selectId}>
        <div className="row mtop5">
          <div className="form-group pleft5">
            <label className="lb-LabelStyle col-md-3 pleft0">
              Anniversary Type ::
            </label>
            <div className="col-md-9">
              <div className="col-md-7 pleft0 pright0 "   style={{zIndex:100 - this.props.indexs}}>
                <Select
                  className="blackcolor l" 
                  placeholder="Category Date ..."
                  id={"cbo_" + this.props.selectId}
                  name={"cbo_" + this.props.selectId}
                  options={this.props.selectoptions}
                  value={this.state.selectval}
                  onChange={this.SelectObjHandle} 
                  searchable={false} 
                  disabled={this.props.disabled}
                  clearable
                />
              </div>
              <button
                id={"btnDel_" + this.props.selectId}
                type="button"
                className={"btn btn-circle-micro btn-default btn-inverse bgwhite mtop7 mleft3 fa fa-times fa-1 mright0 "+  this.props.delcollapsed}
                title="Delete"
                onClick={this.DelDateClickhandler} 
              > 
              </button>
            </div>
          </div>
        </div>
        <div className="row mtop5">
          <div className="form-group pleft5">
            <label className="lb-LabelStyle col-md-3 pleft0">Date ::</label>
            <div className="removePadding-right col-md-4 ">
              <DateTimeField
                id={"dpkDt_" + this.props.selectId}
                mode="date"
                inputFormat="DD/MM/YYYY"
                defaultText=""
              />
            </div>
            <div className=" col-md-5 pleft0 pright0">
              <div className="col-md-6 pleft0 pright0"> 
                <input
                type="checkbox"
                className="col-md-1 w20 h20 mright5 mtop7im"
                name={"chk1_" + this.props.selectId} 
              /> 
              <label className="lb-LabelStyle   pleft0">Reminder</label>
              </div>
              <div className="col-md-6 pleft0 pright0"> 
              <input
                type="checkbox"
                className="col-md-1 w20 h20 mright5 mtop7im"
                name={"chk2_" + this.props.selectId} 
              /> 
              <label className="lb-LabelStyle   pleft0">Repeat Yearly</label>
              </div>
            </div>
          </div>
        </div>
      </div>:<div></div>
    );
  }
}
export default DateAnniObj;
