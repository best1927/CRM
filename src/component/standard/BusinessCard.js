import React from "react";
import "./BusinessCard.css";
class BusinessCard extends React.Component {
  render() {
    return (
      <div className="business-card">
        <div className="media">
          <div className="media-left ">
            <img
              className="media-object img-circle w85 h85"
              src={process.env.PUBLIC_URL + "/images/" + this.props.PicName}
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              {this.props.PersonName}  {/*<i className="fa fa-tag" title="tag" /> */}
            </h4>
            <div className="row">
              <p className="titlestyle col-md-4">Position ::</p>
              <p className="datastyle col-md-7">
                {this.props.Position}
              </p>
            </div>

            <div className="row pbottom0">
              <p className="titlestyle col-md-4">Department ::</p>
              <p className="datastyle col-md-7">
                {this.props.Department}
              </p>
            </div>
            <div className="row pbottom0">
              <p className="titlestyle col-md-4">Specialty ::</p>
              <p className="datastyle col-md-7">
                {this.props.Specialty}
              </p>
            </div>
            <div className="row pbottom0">
              <p className="titlestyle col-md-4">Email ::</p>
              <p className="datastyle col-md-7 mtop5">
                <a href={"mailto:" + this.props.Email}>
                  {this.props.Email}
                </a>
              </p>
            </div>

            <div className="row pbottom0">
              <p className="titlestyle col-md-4" />
              <p className="datastyle col-md-7 mright0 pright0">
                <i className="fa fa-phone" />
                <a href="#">
                  <u>
                    {this.props.tel}
                  </u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessCard;
