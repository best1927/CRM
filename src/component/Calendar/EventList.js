import React, { Component } from "react";
class EventList extends Component {
  render() {
    return (
      <div id="external-events ">
        <div className="external-event bg-green whitecolor">Task</div>
        <div
          className="external-event bgOrange whitecolor" 
        >
          Event
        </div>
        <div
          className="external-event bglightred whitecolor" 
        >
          Milestones
        </div>
      </div>
    );
  }
}
export default EventList;
