import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
class OrganizationObjLst extends React.Component {
  render() {
   
    let listItems;
    if (this.props.ObjectList !== undefined && this.props.ObjectList !== null) {
      listItems = this.props.ObjectList.MOrganizationList.map(Orgobj => (
        <div className="row form-group divOrganizeRtmp" id={Orgobj.OrganizeId}>
          <div className="col-md-5 mh45">
            <div className="row pull-left ptop0 mright20">
              <div className="mtop7">
                <input
                  type="checkbox"
                  className=" w20 h20 mtop15 mright5"
                  name="chkObject"
                />
              </div>
            </div>
            <span>
              <img
                src={process.env.PUBLIC_URL + "/images/" + Orgobj.OrganizeUrl}
                className="imglist"
              /> 
              <Link className="blackcolor" to={"/OrganizationView/" + Orgobj.OrganizeId}>
              <span className="OrgNamelist ">{Orgobj.OrganizeName}</span>
              </Link>
              {/* <a href="#" className="blackcolor">
                <span className="OrgNamelist">{Orgobj.OrganizeName}</span>
              </a> */}
            </span>
          </div>
          <div className="col-md-6 mh45">
            <div className="row  ">
              <span className="title">{Orgobj.FullAddress}</span>
            </div>
            <div className="row  ">
              <span className="contact-text">{Orgobj.Phone}</span>
            </div>
            <div className="row  ">
              <span className="contact-text fsmall dimgreycolor i">{Orgobj.tagstr}</span>
            </div>
          </div>
          <div className="col-md-1 pull-right  mh45 no-padding">
          <Link  to={"/OrganizationNew/" + Orgobj.OrganizeId}>
            <button
              id={"btnEdit" + Orgobj.OrganizeId}
              type="button"
              className="btn btn-circle-micro btn-default btn-inverse bgwhite"
              title="Edit"
            >
              <i className="fa fa-pencil fa-1 mright0" />
            </button>
            </Link>
            <button
              id={"btnTag" + Orgobj.OrganizeId}
              type="button"
              className="btn btn-circle-micro btn-default btn-inverse bgwhite "
              title="Tag"
            >
              <i className="fa fa-tag fa-1 mright0" />
            </button>
          </div>
        </div>
      ));
    }

    return <div className="list-group">{listItems}</div>;
  }
}
 
export default OrganizationObjLst;
