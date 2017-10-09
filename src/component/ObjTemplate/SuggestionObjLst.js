import React, { Component } from "react";
import SuggestionCard from "../standard/SuggestionCard";

class SuggestionObjLst extends React.Component {
  render() {
    let Speciallists = [];
    Speciallists.push({
      PicName: "Nine50.jpg",
      PersonName: "Naphat Siangsomboon ",
      Organization: "Retail : 7-11 " 
    });
    let listItems = Speciallists.map(Speciallist =>
        <div className="mleft0 pleft0 pright0">
          <SuggestionCard
            PicName={Speciallist.PicName}
            PersonName={Speciallist.PersonName}
            Organization={Speciallist.Organization} 
          />
        </div>
      );
      return(
        <div id="divfilter" className="col-md-3 l">
        <div className="row mleft0">
          <label id="lblHead" className="lb-LLabelStyle">
            <u> Suggestion </u> |
            <a href="#" className="n" id = "btnNone">
              None
            </a>
          </label>
         {listItems}
        </div>
        
      </div>
      );
  }} export default SuggestionObjLst