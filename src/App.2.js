import React, { Component } from "react"; 
import "./css/font-awesome/css/font-awesome.css";
import "./css/AdminLTE/dist/css/AdminLTE.css";
import "./css/bootstrap/css/bootstrap.css";
import "./css/crmcustom.css";
import "./css/treechart.css";
import "./css/AdminLTE/dist/css/skins/_all-skins.css"; 
import "react-big-calendar/lib/css/react-big-calendar.css";
import { HeaderBar, NavigationMenu } from "adminlte-reactjs";
//import HeaderContainer from "./component/Header/HeaderContainer";
//import HeaderItem from "./component/Header/HeaderItem"; 

//import MapContainer from './component/Map/MapContainer';

import OrganizationView from "./component/TabContent/OrganizationView";  

//import ComposeMail from "./component/Email/ComposeMail";  
//
//import CalendarFrame from "./component/Calendar/CalendarFrame";

//import TimelineModal from "./component/Timeline/TimelineModal";
//import CalendarContainer from "./component/Calendar/CalendarContainer";

//import  DefaultContainer  from './component/Default/DefaultContainer';
 

class App extends Component {
  constructor() {
    super();
    this.state = { selected: "basic" };
  }

  render() {
    let contentStyle = {
      padding: "8px 10px 8px 10px"
    };
   
    return (
      <div  id="map" className="mtop10 h250"></div>
    );
  }
}

export default App;
