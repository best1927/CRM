import React, { Component } from "react";
import { Button } from "react-bootstrap";
import TimelineItem from "./TimelineItem";
import EmailTemplate from "./EmailTemplate";
import FileTemplate from "./FileTemplate";

class TimelineModal extends React.Component {
  render() {
    let itemlst = [];

    itemlst.push(
      <TimelineItem
        iConEvent="fa fa-flag-o bg-red"
        DateEvent="15 Jun. 2017"
        TimeEvent="16:45"
        EventName="Task"
        textTitle="Meeting with Mr. Sompong"
        priority="!!!"
        DataContent1=""
        DataContent2=""
        UserCreate="Somsri"
      />
    );
    itemlst.push(
      <TimelineItem
        iConEvent="fa fa-file-o bg-blue"
        DateEvent="15 Jun. 2017"
        TimeEvent="12:05"
        EventName="Notes"
        textTitle="Support Team"
        priority="!!!"
        DataContent1="Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo..."
        DataContent2=""
        UserCreate="Somsri"
      />
    );
    itemlst.push(
      <TimelineItem
        iConEvent="fa fa-flag-o bg-red"
        DateEvent="12 Jun. 2017"
        TimeEvent="09:00"
        EventName="Tasks"
        textTitle="Direct mail to Mr. Sompong"
        priority="!"
        DataContent1=""
        DataContent2=""
        UserCreate="Somsri"
      />
    );
    itemlst.push(
      <FileTemplate
        iConEvent="fa fa-file-text-o bg-green-active"
        DateEvent="10 Jun. 2017"
        TimeEvent="16:45"
        EventName="Attach"
        textTitle="Contract Document"
        priority="!!!"
        DataContent1="Contract.pdf"
        DataContent2="Important"
        UserCreate="Somsri"
      />
    );
    itemlst.push(
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
    <TimelineItem
      iConEvent="fa fa-flag-o bg-red"
      DateEvent="9 Jun. 2017"
      TimeEvent="16:45"
      EventName="Phone"
      textTitle="Phone call Mr. Sompong"
      priority="!!"
      DataContent1=""
      DataContent2=""
      UserCreate="Somsri"
    />;

    return (
   
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                  {itemlst} 
                <li>
                  <i className="fa fa-clock-o bg-gray" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      
    );
  }
}
export default TimelineModal;
