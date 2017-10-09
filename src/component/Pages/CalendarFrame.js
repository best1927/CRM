import React, { Component } from "react";
//import HeaderItem from "../Header/HeaderItem";
 import HeaderContainer from "../Header/HeaderContainer";
 import CalendarContainer from "../Calendar/CalendarContainer";
class CalendarFrame extends Component {
  render() {
    return (
      <div className="box box-primary">
        <HeaderContainer htype="nobtn" HeaderText="Calendar"/>
        <div className="box-body">
          <div className="examples">
            <div className="CalendarP">
              <CalendarContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CalendarFrame;
