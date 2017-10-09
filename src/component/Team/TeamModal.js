import React from "react";
import { Button } from "react-bootstrap"; 
import {Modal} from 'react-bootstrap';
import TeamtreeContainer from "./TeamtreeContainer";

class TeamModal extends React.Component {
    constructor(){
        super();
        this.state = {show:false}
    } 
    render(){
         let close = () => this.setState({ show: false});
        return(
             <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Launch contained modal
        </Button>

        <Modal
          show={this.state.show} 
          bsSize="large"
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Organization</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TeamtreeContainer />
          </Modal.Body>
           
        </Modal>
      </div>
        );
    }
}

export default TeamModal