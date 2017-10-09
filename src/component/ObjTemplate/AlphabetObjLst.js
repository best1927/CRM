import React, { Component } from "react";
class AlphabetObjLst extends React.Component {
   
  render() {
   
    return (
      <li>
        <a href= "#" onClick={()=>{this.props.onClick(this.props.text)}}>{this.props.text}</a>
      </li>
    );
  }
}export default AlphabetObjLst;
