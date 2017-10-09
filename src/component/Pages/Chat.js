import React, { Component } from "react";
import HeaderItem from "../Header/HeaderItem";
import ChatObj from "../Chat/ChatObj";
import NavChat from "../TabContent/NavChat";
import AutoSearch from "../standard/AutoSearch";
import NavContactList from "../TabContent/NavContactList";
import { Modal } from "react-bootstrap";
import axios from 'axios';
import jQuery from 'jquery';

import "../../css/chat.css";
class Chat extends React.Component {
  constructor() {
    super();
    this.state = { selected: "chat", show: false, contacttype: "contact" };
    this.handleClick = this.handleClick.bind(this);
    this.btnDeleteClick = this.btnDeleteClick.bind(this);
    this.btnSendClick = this.btnSendClick.bind(this);
  
  }

  handleClick(e) {
    console.log(e.target.dataset.txt, e.target.dataset.space);
    this.setState({ selected: "chat" });
  }

  btnDeleteClick(param) {
    // console.log(param);
    // console.log("test btnDelete Click");

    let paramsv = {};
    paramsv.DataHeader = { };
    paramsv.ClassWithNs = 'CRMMasLib.Controller.CRMController,CRMMasLib';
    paramsv.methodName = 'TestMessage';
    let URL;
    //URL = "http://localhost:54842/GenericService.svc/DoWork";
    URL = "http://localhost:54842/GenericService.svc/TestMsg"
    let pData = {};
    pData.Name = "Nunee";
     

    let jData = {};
    jData.h = paramsv.DataHeader;
    jData.classWithNs = paramsv.ClassWithNs;
    jData.methodName = paramsv.methodName;
    jData.paramStr = JSON.stringify(pData);


    var axiosconfig = {
      headers : { "content-type": "application/json; charset=utf-8"}
    }



    
    // axios.post(URL, pData,axiosconfig)
    // .then(function (response) {
    //   let ret = jQuery.parseJSON(response.data);

    //   console.log(ret);
    //   console.log(ret.Name);
      
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


    axios({
      url: URL,
      method: 'post',
      headers: { 
          'content-type': 'application/json'
      },
      data: {
          "Name": "Crate Workspace React" 
      }
  }).then(function (response) {
     console.log(response);
  }).catch(function (error) {
     console.log(error);
  });

  }

  btnSendClick(param){
    console.log(param);
    console.log("test btnSend Click");
  }

  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };
    let selected = this.state.selected;

    

    let Onclose = () => this.setState({ show: false });

    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="SearchType"
          HeaderText="Chat"
          DelYn = "Y"
          btnDeleteClick={this.btnDeleteClick}
          btnAddClick={() => this.setState({ show: true })}
        />
        <Modal
          id="divModal"
          show={this.state.show}
          //onShow={this.Onshow}
          onHide={Onclose}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-horizontal">
              <div className="mleft15 mright-15">
                <AutoSearch
                  inputstyle=" input-Search mbottom5 "
                  id="txtContacts"
                  placeholder="Search Contacts"
                />
              </div>
             
              <ul className="nav nav-tabs mbottom5">
                <li
                  className={
                    this.state.contacttype === "contact" ? "active nav-item" : "nav-item"
                  }
                  onClick={() => this.setState({ contacttype: "contact" })}
                >
                  <a data-toggle="tab" href="#">
                    Contacts
                  </a>
                </li>

                <li
                  className={this.state.contacttype === "team" ? "active nav-item" : "nav-item"}
                  onClick={() => this.setState({ contacttype: "team" })}
                >
                  <a data-toggle="tab" href="#">
                    Teams
                  </a>
                </li>
              </ul>
              <div className="list-group">
                {this.state.contacttype === "contact" ? (
                  <NavContactList id="tbcontact" />
                ) : (
                  <NavContactList id="tbteam" />
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-4 mright0 pright0">
                <div className="form-group full-height mleft10 mright10">
                  <div className="row navchat">
                    <ul className="nav nav-pills">
                      <li
                        className={
                          this.state.selected === "chat" ? "active" : ""
                        }
                        onClick={() => this.setState({ selected: "chat" })}
                      >
                        <a data-toggle="tab" href="#">
                          Chat
                        </a>
                      </li>

                      <li
                        className={
                          this.state.selected === "chatgroup" ? "active" : ""
                        }
                        onClick={() => this.setState({ selected: "chatgroup" })}
                      >
                        <a data-toggle="tab" href="#">
                          Chat Group
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="tab-content mbottom5">
                      {this.state.selected === "chat" ? (
                        <NavChat Tabid="tbChat" id="lstRecentChat" />
                      ) : (
                        <NavChat Tabid="tbChatGroup" id="lstRecentChatGroup" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8" id="lstChat">
                <ChatObj btnSendClick = {this.btnSendClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
