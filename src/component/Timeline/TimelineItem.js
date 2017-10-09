import React, { Component } from "react";
import { Button } from "react-bootstrap"; 
class TimelineItem extends React.Component {
  render() {
     let txtpriority = null;
       
      if (this.props.priority  === "!" ) {
            txtpriority = <strong className="b dodgerbluecolor" >{this.props.priority}</strong>
        } else{
              if (this.props.priority  === "!!" ) {
            txtpriority = <strong className="b orangedcolor" >{this.props.priority}</strong>
              }else{ 
                   txtpriority = <strong className="b redcolor" >{this.props.priority}</strong>
              }
        } 
    return (
      <li>
        <i className={this.props.iConEvent} />
        <div className="timeline-item">
          <span className="time">
            {this.props.DateEvent}
            <i className="fa fa-clock-o" /> {this.props.TimeEvent}
          </span>

          <h4 className="timeline-header">
            {this.props.EventName} :: <a href="#">{this.props.textTitle}  </a> 
              {txtpriority}
          </h4> 
          <div className="timeline-body">
            <div className=" form-group mbottom0">
              <span>
                {this.props.DataContent1}
              </span>
            </div>
            <div className=" form-group mbottom0">
              <span>
                {this.props.DataContent2}
              </span>
            </div>
          </div>
          <div className="timeline-footer">
            <span>
              By ::
              <a href="#" className="mright5">
                {this.props.UserCreate} 
              </a>
              <a className="btn btn-primary btn-xs">Read more</a>
            </span>
          </div>
        </div>
      </li>
    );
  }
}
export default TimelineItem;




