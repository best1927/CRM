/* global google */

import React from "react";
//import directionModal from "../Map/GetDirectionContainer"
import { Modal } from "react-bootstrap";

let directionsDisplay = new google.maps.DirectionsRenderer();
let directionsService = new google.maps.DirectionsService();
let bound = new google.maps.LatLngBounds();
let listPoint = [];
let Dimap;
let maptmp;
let OrgObj;

class AboutTab extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    ////////////////////////////////////// MapShow //////////////////////////////////////

    let mapOptions = {
      center: new google.maps.LatLng(13.826515, 100.748794),
      zoom: 10
    };
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(13.826515, 100.748794),
      map: map
    });

    let contentString = '<div id="infomation_container" align="center">';
    contentString += '<label id="lblAddLocation"> </label>';
    contentString += "</div>";

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addDomListener(marker, "click", function() {
      infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(marker, "mouseover", function() {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);

    ////////////////////////////////////// MapShow //////////////////////////////////////
  }
  componentWillUpdate(){
    if (this.props.DataContext !== undefined && this.props.DataContext !== null && document.getElementById("map") !== null){
 OverloadMap(this.props.DataContext );
    }
   
  }
  
  Onshow(e) {
    // init
    let mapOptions = {
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
    Dimap = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
    let bangkok = new google.maps.LatLng(13.723419, 100.476232);
    Dimap.setCenter(bangkok);
    directionsDisplay.setMap(Dimap);
    directionsDisplay.setPanel(document.getElementById("directions-body"));

    // calroute
    if (
      this.container.props.DataContext !== null &&
      this.container.props.DataContext !== undefined
    ) {
      let Mdata = this.container.props.DataContext;
      let source = new google.maps.LatLng(13.734233, 100.531479);
      let destination = new google.maps.LatLng(Mdata.AddLat, Mdata.AddLong);
      let start, end;
      start = source;
      end = destination;
      listPoint.push(start);
      listPoint.push(end);
      let request = {
        origin: start,
        destination: end,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });

      google.maps.event.trigger(Dimap, "resize");
    }
  }

  render() {
    let MapStyle = {
      width: "100%",
      height: "250px"
    };

    let OrgName = "";
    let OrgCate = "";
    let OrgPhone = "";
    let OrgAddress = "";
    let OrgCreateDt = "";
    let OrgCreateUser = "";
    let mapprops = {};
    let lkData = [];
    if (
      this.props.DataContext !== null &&
      this.props.DataContext !== undefined
    ) {
      OrgObj = this.props.DataContext;
      OrgName = OrgObj.OrgName;
      OrgCate = OrgObj.OrgTypeName;
      OrgPhone = OrgObj.Phone;
      OrgAddress = OrgObj.FullAddress;
      OrgCreateDt = OrgObj.CreateDateStr;
      OrgCreateUser = OrgObj.Createuser;
      if (document.getElementById("map") !== null){
          OverloadMap(OrgObj);
      } 
      mapprops = {
        lat: OrgObj.AddLat,
        lng: OrgObj.AddLong,
        zoomsize: 10,
        address: OrgObj.FullAddress
      };
      if (OrgObj.OrgLinklst !== undefined && OrgObj.OrgLinklst !== null) {
        lkData = OrgObj.OrgLinklst;
      }
    }

    let lkDatalist = [];

    if (lkData !== undefined && lkData !== null) {
      lkDatalist = lkData.map(DataLk => (
        <p className="lb-dataStyle">
          {DataLk.IconPic !== undefined && DataLk.IconPic !== null ? (
            <img src={process.env.PUBLIC_URL + "/images/" + DataLk.IconPic} />
          ) : (
            ""
          )}
          <a href="#">{DataLk.LinkName}</a> {DataLk.RelateName}
        </p>
      ));
    }

    let Onclose = () => this.setState({ show: false });
    let directstyle = {
      overflow: "auto",
      height: "380px"
    };

    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">Organization Details</h4>
          <div className="pull-right">
            <a
              id="btnDirection"
              href="#"
              title="Get Direction"
              className="btn btn-circle-sm btn-default fa-inverse"
              onClick={() => this.setState({ show: true })}
            >
              <img
                className="imgDirect"
                src={process.env.PUBLIC_URL + "/images/directions.png"}
                alt=""
              />
            </a>
          </div>
        </div>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="box-body">
                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">
                        Organization ::
                      </label>
                      <label className="lb-dataStyle">{OrgName}</label>
                    </div>
                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">
                        Organization Category ::
                      </label>
                      <label className="lb-dataStyle">{OrgCate}</label>
                    </div>
                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">Phone ::</label>
                      <label className="lb-dataStyle">{OrgPhone}</label>
                    </div>
                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">
                        Address ::
                      </label>
                      <p className="lb-dataStyle">{OrgAddress}</p>
                    </div>
                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">
                        Contact Created ::
                      </label>
                      <label className="lb-dataStyle">{OrgCreateDt}</label>
                    </div>

                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">
                        Contact Owner ::
                      </label>
                      <label className="lb-dataStyle">
                        <a href="#">{OrgCreateUser}</a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <test />
                  <div className="mtop10 w100p h250" id="map" />
                </div>
              </div>
              <hr className="hr-format" />
              <div className="box-header with-border mtop5">
                <h4 className="box-title">Link</h4>
              </div>
              <div className="row">
                <div className=" row col-md-6">
                  <div className="box-body">
                    <div className="form-group col-md-12 mbottom0">
                      <label className="col-md-4 lb-LabelStyle">Link ::</label>
                      {lkDatalist}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          id="divModal"
          bsSize="lg"
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
                <div id="map-canvas" className="mapDirectionStyle" />
              </div>
              <div id="directions-panel" className="col-md-4">
                <div className="box box-default">
                  <div className="box-header with-border">
                    <h3 className="box-title">Driving directions</h3>
                  </div>
                  <div
                    id="directions-body"
                    className="box-body mapDirectionStyle"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default AboutTab;

function OverloadMap(param) {
  let mapOptions = {
    center: new google.maps.LatLng(param.AddLat, param.AddLong),
    zoom: 10
  };
  // Original => 13.826515, 100.748794
  // 13.734169, 100.533286
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(param.AddLat, param.AddLong),
    map: map
  });

  let contentString = '<div id="infomation_container" align="center">';
  contentString +=
    '<label id="lblAddLocation"> ' + param.FullAddress + " </label>";
  contentString += "</div>";

  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addDomListener(marker, "click", function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(marker, "mouseover", function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}
