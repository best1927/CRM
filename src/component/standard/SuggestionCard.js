import React from "react";
import "./BusinessCard.css";
class SuggestionCard extends React.Component {
  render() {
    return (
      <div className="row no-margin no-padding">
      <a id="lkinfo1" href="#">
        <div className="col-md-3">
          <img
          src={process.env.PUBLIC_URL + "/images/" + this.props.PicName}
            alt="User Avatar"
            className="img-circle"
          />
        </div>
        <div className="col-md-8 no-margin no-padding">
          <label className="mleft0 mbottom0 fsmall dimgreycolor b">
          {this.props.PersonName}
          </label>
          <label className="mleft10 fsmall dimgreycolor n"> {this.props.Organization} </label>
        </div>
      </a>
      </div>
    );
  }
}
export default SuggestionCard;
