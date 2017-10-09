import React from "react";
import EmailTemplate from "../Timeline/EmailTemplate";
import AutoSearch from "../standard/AutoSearch";

class EmailTab extends React.Component {
  render() {
    let btitleStyle = {
      padding: "0px 0px 0px 5px"
    };

    let EmailLst = [];
    EmailLst.push(
      <EmailTemplate
        iConEvent="fa fa-envelope-o bg-gray"
        DateEvent="10 Jun. 2017"
        TimeEvent="16:40"
        EventName="Email"
        textTitle="Asking new Promotions"
        priority=""
        Sento="Danai Chaicharean"
        DataContent1=" Dear Sales Team,  I'd like to know..."
        UserCreate="Somsri"
      />
    );

    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">
            Email
            <a
              id="btnEmail"
              href="#"
              title="Email"
              className="btn btn-circle-sm btn-danger mleft10"
              style={btitleStyle}
            >
              <i className="fa fa-envelope-o" />
            </a>
          </h4>
          <div className="pull-right">
            <AutoSearch
              inputstyle=" input-Search mbottom0 "
              id="txtEmail"
              placeholder="Search"
            />
          </div>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                {EmailLst}
                <li>
                  <i className="fa fa-clock-o bg-gray" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default EmailTab;
