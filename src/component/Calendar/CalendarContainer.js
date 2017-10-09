import React, { Component } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import EventList from "./EventList";

import "./styles.less";
import "./prism.less";

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <strong>
        {event.title}
      </strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
}

function EventAgenda({ event }) {
  let fcolor = "black";
  if (event.title === "All Day Event") {
    fcolor = "#3174ad";
  } else {
    if (event.title === "Conference") {
      fcolor = "magenta";
    }
  }
  return (
    <span>
      <em style={{ color: fcolor }}>
        {event.title}
      </em>
      <p>
        {event.desc}
      </p>
    </span>
  );
}

function EventMonth({ event }) {
  let fcolor = "bglightred";
  if (event.title === "All Day Event") {
    fcolor = "bgdarkblue";
  } else {
    if (event.title === "Conference") {
      fcolor = "bgGreen";
    }
  }
  return (
    <div className={"rbc-event rbc-event-allday " + fcolor}>
      <div className={"rbc-event-content " + fcolor} title={event.title}>
        {event.title}
      </div>
    </div>
  );
}

function EventWeek({ event }) {
  let fcolor = "bglightred";
  if (event.title === "All Day Event") {
    fcolor = "bgdarkblue";
  } else {
    if (event.title === "Conference") {
      fcolor = "bgGreen";
    }
  }
  return (
    <div className={"rbc-event rbc-selected rbc-event-allday " + fcolor}>
      <div className={"rbc-event-content " + fcolor} title={event.title}>
        <span>
          {event.title}
        </span>
      </div>
    </div>
  );
}

class CalendarContainer extends Component {
  render() {
    return (
     
        <div className="row">
          <div className="col-md-3">
            <div className="box box-solid">
              <div className="box-header with-border">
                <h4 className="box-title"> Events</h4>
              </div>
              <div className="box-body">
                <EventList />
              </div>
            </div>

            <div className="box box-solid">
              <div className="box-header with-border">
                <h3 className="box-title">Calendar</h3>
              </div>
              <div className="box-body">
                <span id="spTag">
                  <a href="#" className="lb-TagBox">
                    Me
                  </a>
                </span>
                <span id="spTag2">
                  <a href="#" className="lb-TagBox">
                    Sales Team
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="box box-primary">
              <div className="box-body" {...this.props}>
                <BigCalendar
                  popup
                  events={events}
                  defaultDate={new Date(2017, 3, 1)}
                  defaultView="month"
                  // views={allViews}
                  views={["month", "agenda"]}
                  components={{
                    event: Event,
                    month: { event: EventMonth },
                    // week:{event: EventWeek},
                    agenda: {
                      event: EventAgenda
                    }
                  }}
                  style={{ height: 550 }}
                />
              </div>
            </div>
          </div>
        </div>
     
    );
  }
}
export default CalendarContainer;
