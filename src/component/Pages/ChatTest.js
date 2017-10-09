import React, { Component } from "react";
import HeaderItem from "../Header/HeaderItem";
import NavChat from "../TabContent/NavChat";
import "../../css/chat.css";
class ChatTest extends React.Component {
  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };
    let btnChatslist = [];
    btnChatslist.push(
      <a
        id="btnDel"
        data-lang="btnDel"
        onclick={() => this.btnDeleteClick()}
        title="Delete"
        className="btn btn-circle btn-default"
        style={btitleStyle}
      >
        <i className="fa fa-trash-o fa-2" />
      </a>
    );
    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="SearchType"
          HeaderText="Chat"
          morebtnleft={btnChatslist}
          btnAddClick={this.btnAddClick}
        />
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-4 mright0 pright0">
                <div className="form-group full-height  mleft10 mright10">
                  <div className="row navchat">
                    <ul className="nav nav-pills">
                      <li className="active">
                        <a data-toggle="tab" href="#Chat">
                          Chat
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#ChatRoom">
                          Chat Room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="tab-content mbottom5">
                      <NavChat Tabid="Chat" id="lstRecentChat" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8" id="lstChat">
                <div className="panel panel-primary">
                  <div
                    id="lblHdlabel"
                    className="panel-heading b whitecolor bgdarkblue"
                  >
                    <span className="glyphicon glyphicon-comment" />Chat
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
export default ChatTest;
