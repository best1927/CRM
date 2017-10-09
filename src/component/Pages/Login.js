import React, { Component, PropTypes } from "react";
import { Button, Dropdown, MenuItem } from "react-bootstrap";
import axios from "axios";

let URLPOST = "http://localhost:54842/GenericService.svc/DoWork";
let URLGET = "http://localhost:54842/GenericService.svc/DoWorkWithWebGet";
//URL = "http://localhost:54842/GenericService.svc/TestMsg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cbolst: [] };

    this.btnLogInClick = this.btnLogInClick.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    let paramsv = {};
    paramsv.DataHeader = {};
    paramsv.ClassWithNs = "Authen_Lib.AuthenController,Authen_Lib";
    paramsv.methodName = "GetLanguage";

    axios({
      url: URLPOST,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      data: {
        h: {},
        classWithNs: paramsv.ClassWithNs,
        methodName: paramsv.methodName,
        paramStr: {}
      }
    })
      .then(response => {
        let ret = JSON.parse(response.data.DoWorkResult).Result;
        this.setState({ cbolst: ret });
      })
      .catch(error => {
        console.log(error);
      });
  }

  btnLogInClick(param) {
    var username = this.username.value;
    var pass = this.password.value;
    console.log(username);
    console.log(pass);
    console.log("test btnLogin Click");

    if (
      username !== "" &&
      username !== undefined &&
      (pass !== "" && pass !== undefined)
    ) {
      let paramsv = {};
      paramsv.DataHeader = {};
      paramsv.ClassWithNs = "Authen_Lib.AuthenController,Authen_Lib";
      paramsv.methodName = "CheckLocalUser1";

      // paramsv.DataHeader = {};
      // paramsv.ClassWithNs = "CRM_Lib.Specialist_Controller,CRM_Lib";
      // paramsv.methodName = "TestMessage";

      let pData = {};
      pData.USER_ID = username;
      pData.PASSWORD = pass;
      //pData.Name = username;

      axios({
        url: URLPOST,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8"
        },
        data: {
          h: paramsv.DataHeader,
          classWithNs: paramsv.ClassWithNs,
          methodName: paramsv.methodName,
          paramStr: JSON.stringify(pData)
        }
      })
        .then(function(response) {
          let data = JSON.parse(response.data.DoWorkResult).Result;
          console.log(response);
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else{
      if(username === "" ||
        username === undefined){ 
          console.log("No User");
      } 
      if(pass === "" ||
        pass === undefined){
          console.log("No Password");
      }
    }
  }
  

  render() {
    const wellStyles = { maxWidth: 450, margin: "150px auto 10px" };
    let LangList = [];
    let langObjLst = this.state.cbolst;

    if (langObjLst !== undefined && langObjLst.length > 0) {
      LangList = langObjLst.map(langObj => (
        <MenuItem eventKey={langObj.LANGUAGE_CODE}>{langObj.DESC_ENG}</MenuItem>
      ));
    }

    return (
      <div className="well mtop100" style={wellStyles}>
        <label className="flarge mbottom0 pbottom0"> Login</label>
        <hr className="mtop5 mbottom10 darkgreyborder" />
        <div className="form-group">
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="uLogin"
                placeholder="username"
                ref={c => (this.username = c)}
                name="username"
              />

              <label
                for="uLogin"
                className="imbgdarkblue input-group-addon fa fa-user whitecolor"
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="input-group">
              <input
                type="password"
                className="form-control "
                id="uPassword"
                placeholder="password"
               
                name="password"
              />
              <label
                for="uPassword"
                className="input-group-addon fa fa-lock imbgdarkblue whitecolor"
              />
            </div>
          </div>
          <div className="form-group ">
            <Dropdown id="dropdown-custom-1" className="pull-left mtop25">
              <Dropdown.Toggle>No Select</Dropdown.Toggle>
              <Dropdown.Menu>
                {/*} <MenuItem eventKey="1">Thai</MenuItem>
                <MenuItem eventKey="2">English</MenuItem>*/}
                {LangList}
              </Dropdown.Menu>
            </Dropdown>
            <a
              id="btnLogin"
              data-lang="btnLogin"
              //href={this.props.btnAddLink}
              onClick={() => this.btnLogInClick()}
              title="Add"
              className="btn btn-primary pull-right mtop25"
            >
              Login
            </a>
          </div>
          <div className="row form-group" />
        </div>
        <hr className="mtop5 mbottom10 darkgreyborder" />
        <div className="form-group">
          <div className="col-md-12 control pleft0">
            <div className="fsize12 dimgreycolor ">
              &copy; 2014 CPF IT Center. All rights reserved.
              <span className="pull-right fsize12 dimgreycolor">
                Power by Smart Soft.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
