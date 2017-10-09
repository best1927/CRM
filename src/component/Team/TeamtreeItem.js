import React from "react";
import {Modal} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import BusinessCard from "../standard/BusinessCard";

class TeamtreeItem extends React.Component {
   constructor(){
        super();
        this.state = {show:false}
    } 
  render() {


    
   // const show = this.props.show;
    let Onclose = () => this.setState({ show: false });
    return (
      <a href="#" onClick={() => this.setState({ show: true })}>
        <div>
          <h5 className="row c fsmall blackcolor b">
            {this.props.position}
          </h5>
          <img
            className="img-circle  img50"
            src={process.env.PUBLIC_URL + "/images/" + this.props.PicName}
            alt=""
          />
          <h5 className="media-heading">
            {this.props.PersonName} 
          </h5>
        </div>
         <Modal
          show={this.state.show}
          onHide={Onclose}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Person Info.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BusinessCard
              PicName={this.props.PicName}
              PersonName={this.props.PersonName}
              Position="Position Tmp"
              Department="Department tmp"
              Specialty="Specialty tmp"
              Email="Email.cpf.co.th"
              tel="0000000"
            />
          </Modal.Body>
        </Modal>
      </a>
     
    );
  }
}

export default TeamtreeItem;
