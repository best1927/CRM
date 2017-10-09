import React, { Component } from "react";
//import "../../css/chat.css";
class ChatItem extends React.Component {

    render(){
    let ContLR;
    let liLR = '';
    let fixpos = '';
    if (this.props.leftRight === 'l'){
        ContLR = "pull-left";
        liLR = 'left'
    }else{
        ContLR = "pull-right";
        liLR = 'right'; 
        fixpos = " col-md-offset-5 ";
    } 
        return( 
            <li className={liLR + " clearfix col-md-7 " + fixpos}><span className= {"chat-img " + ContLR}>
            <img src= {process.env.PUBLIC_URL + "/images/" + this.props.PicName }  className="img-circle" />
        </span>
            <div className="chat-body clearfix">
            {this.props.leftRight === 'l'?
            <div className="header"> 
                    <strong className="primary-font">{this.props.UserName}</strong>
                    <small className="pull-right text-muted">{this.props.textDate} <i className="fa fa-clock-o"></i>{this.props.textTime}</small>
                </div>  :  <div className="header">  
                    <small className="text-muted">{this.props.textDate} <i className="fa fa-clock-o"></i>{this.props.textTime}</small>
                    <strong className={"pull-right primary-font " }>{this.props.UserName}</strong> 
                </div> }
               
                <p className="chattext">
                    {this.props.text}
                </p>
            </div>
        </li>
        );
    }
}
export default ChatItem;