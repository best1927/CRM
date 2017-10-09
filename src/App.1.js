import React, { Component } from "react"; 
import "./css/font-awesome/css/font-awesome.css";
import "./css/AdminLTE/dist/css/AdminLTE.css";
import "./css/bootstrap/css/bootstrap.css";
import "./css/crmcustom.css";
import "./css/treechart.css";
import "./css/AdminLTE/dist/css/skins/_all-skins.css"; 
import {HeaderBar, NavigationMenu } from "adminlte-reactjs";
import HeaderItem from "./component/standard/HeaderItem";
import ModelTree from "./component/ModelTree";

//import  DefaultContainer  from './component/Default/DefaultContainer';
class App extends Component {
  render() {
    let contentStyle = {
      padding: "8px 10px 8px 10px"
    };
    

    return (
      <div>
        <HeaderBar />
        <NavigationMenu />
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="row" style={contentStyle}>
              <div className="col-md-12">
                <div className="box box-primary">
                  <HeaderItem
                    Name="lblHeader"
                    HeaderText="My task"
                    iClass="fa fa-plus fa-2"
                  />
                  <div className="box-body">
                    {/*<DefaultContainer/>*/}
                    <button type="button">Launch modal</button>
                   <ModelTree />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
