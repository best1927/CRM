import React, { Component } from "react";
import ChatItem from "./ChatItem";
import "../../css/chat.css";
class ChatObj extends React.Component {
  render() {
    let ChatLst = [];

    ChatLst.push({
      leftRight: "l",
      PicName: "Toey50.png",
      Name: "Jack Sparrow",
      textDate: "20 Jun. 2017",
      textTime: "13:50",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
    });

    ChatLst.push({
      leftRight: "r",
      PicName: "Cheer50.png",
      Name: "Bhaumik Patel",
      textDate: "20 Jun. 2017",
      textTime: "13:59",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
    });

    let listItem = ChatLst.map(Chat => (
      <ChatItem
        leftRight={Chat.leftRight}
        PicName={Chat.PicName}
        UserName={Chat.Name}
        textDate={Chat.textDate}
        textTime={Chat.textTime}
        text={Chat.text}
      />
    ));

    return (
      <div className="panel panel-primary">
        <div id="lblHdlabel" className="panel-heading b whitecolor bgdarkblue">
          <span className="glyphicon glyphicon-comment" />Chat
        </div>
        <div className="panel-body">
          <ul className="chat mh400">
            {listItem}
          </ul>
        </div>
        <div className="panel-footer">
          <div className="input-group">
            <input
              id="btn-input"
              type="text"
              className="form-control input-md"
              placeholder="Type your message here..."
            />
            <span className="input-group-btn">
              <button className="btn btn-success btn-md" id="btn-chat" onClick={() => this.props.btnSendClick()}>
                Send
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ChatObj;
