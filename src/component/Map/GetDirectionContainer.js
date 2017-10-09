/* global google */

import React, { Component } from "react";
import { Modal } from "react-bootstrap"; 

export class GetDirectionContainer extends Component {
  componentDidMount() {
  

    var source = new google.maps.LatLng(13.734233, 100.531479);
    var destination = new google.maps.LatLng(13.826515, 100.748794);
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    var bound = new google.maps.LatLngBounds();
    var listPoint = [];
    var Dimap;
    var maptmp;
    
    function initialize() {
        var mapOptions = {
            zoom: 8,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        };
        Dimap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var bangkok = new google.maps.LatLng(13.723419, 100.476232);
        Dimap.setCenter(bangkok);
        directionsDisplay.setMap(Dimap);
        directionsDisplay.setPanel(document.getElementById('directions-body'));
    }
     

  }
  render() {
   
    return (
      <Modal
        id="divModal"
        show={this.state.show}
        onShow={this.Onshow}
        onHide={Onclose}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Get Direction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8">
              <div id="map-canvas" />
            </div>
            <div id="directions-panel" className="col-md-4">
              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">Driving directions</h3>
                </div>
                <div
                  id="directions-body"
                  className="box-body"
                  style={{ directstyle }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default GetDirectionContainer;
