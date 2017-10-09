import React from "react";
import { Modal } from "react-bootstrap";

class AboutLead extends React.Component {
  constructor() {
    super();
  }

  render() {
    let LeadName = "Mr. Rakthai";
    let Title = "Sales";
    let OrgName = "Sukjai Farm";
    let LeadStatus = "open";
    let LeadStatusDesc = " - Not Contacted";
    let LeadEmail = "aaron.lang@clampett.com";
    let LeadHome = "(662)6256656";
    let LeadMobile = "";
    let LeadOffice = "(662)6256656";
    let LeadAddress =
      "313 CP Tower Silom Khwang Silom Khet Bang Rak Province Bangkok 10500";
    let LeadSource = "Phone Entry";
    let LeadDesc = "";
    let LeadreateDt = "25 May 2017";
    let LeadreateTm = "16:45";
    let LeadCreateUser = "Somsri";
    let Visibility = "Public";
    let ConvConDt = "";
    let ConvOrgDt = "";
    let ConvOppDt = "";

    let lkContactLst = [];
    lkContactLst.push(
      <span className="lb-dataStyle">
        <a href="#">Katherine Reyes</a> Friend
      </span>
    );
    let lkOrgLst = [];
    lkOrgLst.push(
      <span className="lb-dataStyle">
        <img src={process.env.PUBLIC_URL + "/images/menu-organization.png"} />
        <a href="#">Clampett Oil and Gas, Singapore</a> Employee
      </span>
    );

    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">Lead Details</h4>
        </div>
        <div className="row">
          <div className="box-body">
            <div className="col-md-6">
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">Name :: </label>
                  <label className="lb-dataStyle">
                    {LeadName}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">Title :: </label>
                  <label className="lb-dataStyle">
                    {Title}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Organization ::
                  </label>
                  <label className="lb-dataStyle">
                    {OrgName}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Lead Status ::
                  </label>
                  <p className="mbottom0">
                    <label
                      className={
                        LeadStatus === "open"
                          ? " imwhitecolor lb-LabelBox  bgOrange"
                          : LeadStatus === "closed"
                            ? " imwhitecolor lb-LabelBox bgred"
                            : LeadStatus === "converted"
                              ? " imwhitecolor lb-LabelBox bgGreen"
                              : ""
                      }
                    >
                      {LeadStatus}
                    </label>
                    <label className="lb-dataStyle">
                      {LeadStatusDesc}
                    </label>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Responsible Person ::
                  </label>
                  <div className="mtop10">
                    <a href="#">Somsri</a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="lb-LabelStyle col-md-4">Rating :: </label>
                  <div className="col-md-8 mtop10 pleft0">
                    <a href="#" title="1" className="starcolor">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#" title="2" className="starcolor">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#" title="3" className="starcolor">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#" title="4" className="starcolor">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#" title="5" className="blackcolor">
                      <i className="fa fa-star-o" />
                    </a>
                  </div>
                </div>
              </div>

              <hr className="hr-format" />
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">Email :: </label>
                  <label className="lb-dataStyle">
                    {LeadEmail}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Phone (Home) ::
                  </label>
                  <label className="lb-dataStyle">
                    {LeadHome}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Phone (Mobile) ::
                  </label>
                  <label className="lb-dataStyle">
                    {LeadMobile}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Phone (Office) ::
                  </label>
                  <label className="lb-dataStyle">
                    {LeadOffice}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Phone (Other) ::
                  </label>
                  <label className="lb-dataStyle" />
                </div>
              </div>
              <hr className="hr-format" />
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Visibility ::
                  </label>
                  <label className="lb-dataStyle">
                    {Visibility}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">Address :: </label>
                  <span className="lb-dataStyle">
                    {LeadAddress}
                  </span>
                </div>
              </div>

              <hr className="hr-format" />
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Description ::
                  </label>
                  <span className="lb-dataStyle">
                    {LeadDesc}
                  </span>
                </div>
              </div>
              <hr className="hr-format" />

              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Lead Source ::
                  </label>
                  <label className="lb-dataStyle">
                    {LeadSource}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Lead Created ::
                  </label>
                  <label className="lb-dataStyle">
                    {LeadreateDt} <i className="fa fa-clock-o" />
                    {LeadreateTm}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">By :: </label>
                  <label className="lb-dataStyle">
                    {LeadCreateUser}
                  </label>
                </div>
              </div>

              <hr className="hr-format" />
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Converted Contact ::
                  </label>
                  <label className="lb-dataStyle">
                    {ConvConDt}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Converted Organization ::
                  </label>
                  <label className="lb-dataStyle">
                    {ConvOrgDt}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mbottom0">
                  <label className="col-md-4 lb-LabelStyle">
                    Converted Opportunity ::
                  </label>
                  <label className="lb-dataStyle">
                    {ConvOppDt}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutLead;
