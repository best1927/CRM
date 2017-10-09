import React from "react";
import AutoSearch from "../standard/AutoSearch";
import HeaderItem from "../Header/HeaderItem";
import RowItemDefaultpg from "../Default/RowItemDefaultpg";

class DefaultContainer extends React.Component {
  render() {
    return (
      <div className="box box-primary mbottom5">
        <HeaderItem htype="SearchType" HeaderText="My Tasks" btnAddLink="#" />
        <div className="box-body">
          <div className="frame framecss">
            <div className="col-md-6">
              <div className="col-md-11">
                <AutoSearch inputstyle= "input-Search " id="txtcurrTask" placeholder="Search Task" />
                <div className="list-group">
                  <div className="time-label">
                    <label className="lb-LabelBox" id="lblTodayTask">
                      Today's Tasks{" "}
                    </label>
                    <hr className="hr-hrBox" />
                  </div>
                  <RowItemDefaultpg
                    datecolor="redcolor"
                    dateSVal="20 Jun. 2017"
                    icontitle="Email"
                    iconAct="fa fa-envelope-o fa-1"
                    titleText="Send mail to Mr. Monchai"
                    priority="!"
                    toPerson="Mr. Monchai . Rakthai Farm"
                  />
                  <RowItemDefaultpg
                    datecolor="redcolor"
                    dateSVal="22 Jun. 2017"
                    icontitle="Lunch"
                    iconAct="fa fa-coffee fa-1"
                    titleText="Luch with Mr. Supavut"
                    priority="!!"
                    toPerson="Mr. Supavut . Sandee Farm"
                  />
                  <RowItemDefaultpg
                    datecolor="redcolor"
                    dateSVal="22 Jun. 2017"
                    icontitle="Phone call"
                    iconAct="fa fa-phone fa-1"
                    titleText="Phone call to Mr. Rungroj"
                    priority="!!"
                    toPerson="Mr. Rungroj . Kanon Farm"
                  />
                  <RowItemDefaultpg
                    datecolor="redcolor"
                    dateSVal="22 Jun. 2017"
                    icontitle="Meeting"
                    iconAct="fa fa-users fa-1"
                    titleText="Meeting with Mr. Chanchai"
                    priority="!!!"
                    toPerson="Mr. Chanchai . Smile Ocean"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-11">
                <AutoSearch inputstyle= "input-Search " id="txtupTask" placeholder="Search Task" />
                <div className="list-group">
                  <div className="time-label">
                    <label className="lb-LabelBox" id="lblUpcommingTask">
                      Upcomming Tasks{" "}
                    </label>
                    <hr className="hr-hrBox" />
                  </div>
                  <RowItemDefaultpg
                    datecolor="blackcolor"
                    dateSVal="26 Jun. 2017"
                    icontitle="Email"
                    iconAct="fa fa-envelope-o fa-1"
                    titleText="Send mail to Mr. Sompong"
                    priority="!"
                    toPerson="Mr. Sompong . Sukjai Farm"
                  />
                  <RowItemDefaultpg
                    datecolor="blackcolor"
                    dateSVal="27 Jun. 2017"
                    icontitle="Meeting"
                    iconAct="fa fa-users fa-1"
                    titleText=" Meeting with Mr. Sompong"
                    priority="!!!"
                    toPerson="Mr. Sompong . Sukjai Farm"
                  />
                  <RowItemDefaultpg
                    datecolor="blackcolor"
                    dateSVal="29 Jun. 2017"
                    icontitle="Phone call"
                    iconAct="fa fa-phone fa-1"
                    titleText="Phone call to Mr. Teeradej"
                    priority="!!"
                    toPerson="Mr. Teeradej . Sales One"
                  />
                  <RowItemDefaultpg
                    datecolor="blackcolor"
                    dateSVal="1 Jul. 2017"
                    icontitle="Lunch"
                    iconAct="fa fa-coffee fa-1"
                    titleText=" Luch with Mr. Janeyong"
                    priority="!!"
                    toPerson="Mr. Janeyong . Blue Dragons"
                  />
                  <RowItemDefaultpg
                    datecolor="blackcolor"
                    dateSVal="5 Jul. 2017"
                    icontitle="Meeting"
                    iconAct="fa fa-coffee fa-1"
                    titleText=" Review Pricing Proposal"
                    priority="!!!"
                    toPerson="Sales Team . Sky Bamboo"
                  />
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DefaultContainer;
