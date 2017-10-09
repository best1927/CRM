import React from "react";

import TeamtreeItem from "./TeamtreeItem";

class TeamtreeContainer extends React.Component {
   constructor(){
        super();
        this.state = {show:false}
    } 
  render() {
     let close = () => this.setState({ show: false});
    return (
      <div className="row">
        <div className="tree">
          <ul className="col-md-offset-3">
            <li onClick={() => this.setState({ show: true})}>
              <TeamtreeItem 
                position="Sponsor"
                PicName="Doc100.jpg"
                PersonName="Mr. Sukaseam"
              />
            </li>
            <li onClick={() => this.setState({ show: true})}> 
              <TeamtreeItem 
                position="Lead"
                PicName="Doc100.jpg"
                PersonName="Miss Ratsamee"
              />
              <ul>
                <li onClick={() => this.setState({ show: true})}>
                  <TeamtreeItem 
                    position="Member"
                    PicName="Doc100.jpg"
                    PersonName="Mr. Chanchai"
                  />
                </li>
                <li onClick={() => this.setState({ show: true})}>
                  <TeamtreeItem 
                    position="Member"
                    PicName="Doc100.jpg"
                    PersonName="Mr. Chanchai"
                  />
                </li>
                <li onClick={() => this.setState({ show: true})}>
                  <TeamtreeItem 
                    position="Member"
                    PicName="Doc100.jpg"
                    PersonName="Mr. Chanchai"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamtreeContainer;
