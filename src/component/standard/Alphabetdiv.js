import React, { Component } from "react";
import AlphabetObjLst from '../ObjTemplate/AlphabetObjLst';

class Alphabetdiv extends React.Component {
  render() {
let alphalink =  this.props.onClick ;
    let Alphabetlst =[]; 
    Alphabetlst.push({ onClick: alphalink, text: "#" }); 
    Alphabetlst.push({ onClick: alphalink, text: "A" }); 
    Alphabetlst.push({ onClick: alphalink, text: "B" }); 
    Alphabetlst.push({ onClick: alphalink, text: "C" }); 
    Alphabetlst.push({ onClick: alphalink, text: "D" }); 
    Alphabetlst.push({ onClick: alphalink, text: "E" }); 
    Alphabetlst.push({ onClick: alphalink, text: "F" }); 
    Alphabetlst.push({ onClick: alphalink, text: "G" }); 
    Alphabetlst.push({ onClick: alphalink, text: "H" }); 
    Alphabetlst.push({ onClick: alphalink, text: "I" }); 
    Alphabetlst.push({ onClick: alphalink, text: "J" }); 
    Alphabetlst.push({ onClick: alphalink, text: "K" }); 
    Alphabetlst.push({ onClick: alphalink, text: "L" }); 
    Alphabetlst.push({ onClick: alphalink, text: "M" }); 
    Alphabetlst.push({ onClick: alphalink, text: "N" }); 
    Alphabetlst.push({ onClick: alphalink, text: "O" }); 
    Alphabetlst.push({ onClick: alphalink, text: "P" }); 
    Alphabetlst.push({ onClick: alphalink, text: "Q" }); 
    Alphabetlst.push({ onClick: alphalink, text: "R" }); 
    Alphabetlst.push({ onClick: alphalink, text: "S" }); 
    Alphabetlst.push({ onClick: alphalink, text: "T" }); 
    Alphabetlst.push({ onClick: alphalink, text: "U" }); 
    Alphabetlst.push({ onClick: alphalink, text: "V" }); 
    Alphabetlst.push({ onClick: alphalink, text: "W" }); 
    Alphabetlst.push({ onClick: alphalink, text: "X" }); 
    Alphabetlst.push({ onClick: alphalink, text: "Y" }); 
    Alphabetlst.push({ onClick: alphalink, text: "Z" });  

    const listItems = Alphabetlst.map(AlphabetObj =>
      <AlphabetObjLst
      onClick = {AlphabetObj.onClick}
      text = {AlphabetObj.text}
      />
    );

   
    return (
      <div id="divalpha"  className="col-md-1 divalpha ">
        <ul className="alpha-box pleft10 c" id="Ulalpha">
          {listItems}
        </ul>
      </div>
    );
  }
}
export default Alphabetdiv;
