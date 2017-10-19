import React, { Component } from "react";
//////////////////////////////////////// No Use ////////////////////////////////////////
// import "./css/font-awesome/css/font-awesome.css";
// import "./css/AdminLTE/dist/css/AdminLTE.css";
// import "./css/bootstrap/css/bootstrap.css";
// import "./css/crmcustom.css";
// import "./css/treechart.css";
// import "./css/chat.css";
// import "./css/AdminLTE/dist/css/skins/_all-skins.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";
//import HeaderContainer from "./component/Header/HeaderContainer";
//import HeaderItem from "./component/Header/HeaderItem";
//import MapContainer from './component/Map/MapContainer';
//import ComposeMail from "./component/Pages/ComposeMail";

//import CalendarFrame from "./component/Calendar/CalendarFrame";
//import TimelineModal from "./component/Timeline/TimelineModal";
//import CalendarContainer from "./component/Calendar/CalendarContainer";
//import OrganizationView from "./component/Pages/OrganizationView";
//import OrganizationNew from  "./component/Pages/OrganizationNew";
//import ContactsNew from "./component/Pages/ContactsNew";
//import LeadsNew from "./component/Pages/LeadsNew";
//import LeadView from "./component/Pages/LeadView";
//import TasksNew from "./component/Pages/TasksNew";
//import TasksView from "./component/Pages/TasksView";
//import NavObj from "./component/ObjTemplate/NavObj";
//import NewsFeed from "./component/Pages/NewsFeed";

//////////////////////////////////////// No Use ////////////////////////////////////////

import { HeaderBar, NavigationMenu } from "adminlte-reactjs";
import { Route, Switch } from "react-router-dom";
import CalendarFrame from "./component/Pages/CalendarFrame"
import MenuSideBar from "./container/SideMenuBar/menu_sidebar";
import DefaultContainer from "./component/Pages/DefaultContainer";
import Organization from "./component/Pages/Organization";
import OrganizationView from "./component/Pages/OrganizationView"; 
import OrganizationNew from "./component/Pages/OrganizationNew"; 
import NewsFeed from "./component/Pages/NewsFeed";  
import Contacts from "./component/Pages/Contacts";
import Leads from "./component/Pages/Leads";
import Tasks from "./component/Pages/Tasks";
import TeamTab from "./component/TabContent/TeamTab";

import Speciallist from "./component/Pages/Speciallist";
import Chat from "./component/Pages/Chat";
import Login from "./component/Pages/Login";

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
      <div>
        <HeaderBar />
        <MenuSideBar />
        <div className="wrapper">
          <div className="content-wrapper">
            <div style={contentStyle}>
              <div className="col-md-12" />
              {/* <OrganizationView /> */}

              <Switch>
                <Route path="/Leads" component={Leads} />
                <Route path="/Contacts" component={Contacts} />

                <Route path="/Organization" component={Organization} />    
                {/* <Route path="/OrganizationNew" component={OrganizationNew} /> */}
                <Route path="/OrganizationNew/:OrgId" component={OrganizationNew} />
            
                <Route path="/OrganizationView/:OrgId" component={OrganizationView} />

                <Route path="/Speciallist" component={Speciallist} />
                <Route path="/Tasks" component={Tasks} /> 
                <Route path="/Chat" component={Chat} />
                <Route path="/TeamTab" component={TeamTab} />
                <Route path="/NewsFeed" component={NewsFeed} /> 
               
                <Route path="/" component={DefaultContainer} />
              
              </Switch>
            </div>
          </div>
        </div>
      </div>
      // <div>
      //   <Login />
      // </div>
    );
  }
}

export default App;
