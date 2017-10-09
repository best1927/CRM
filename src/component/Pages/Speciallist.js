import React, { Component } from "react";
import { Button, Dropdown, MenuItem } from "react-bootstrap";
import HeaderItem from "../Header/HeaderItem";
import AutoSearch from "../standard/AutoSearch";
import Alphabetdiv from "../standard/Alphabetdiv";
import TagSearchdiv from "../standard/TagSearchdiv";
import BusinessCard from "../standard/BusinessCard";
import SuggestionObjLst from "../ObjTemplate/SuggestionObjLst";

class Speciallist extends React.Component {
  constructor() {
    super();
    this.AlphaClick = this.AlphaClick.bind(this);
  }

 AlphaClick(param) {
    console.log(param);
    console.log('test Alpha Click');
  }

  render() {
    let Speciallists = [];
    Speciallists.push({
      PicName: "Doc100.jpg",
      PersonName: "Mr. Sukaseam ",
      Position: "Veterinarian",
      Department: "Diagnostic Center",
      Specialty: "Swine Specialist",
      Email: "Sukaseam@cpf.co.th",
      tel: "669 9874568"
    });
    Speciallists.push({
      PicName: "Doc2-100.jpg",
      PersonName: "Miss Ratsamee ",
      Position: "Veterinarian",
      Department: "Diagnostic Center",
      Specialty: "Poultry Specialist",
      Email: "Ratsamee@cpf.co.th",
      tel: "669 9874568"
    });
    Speciallists.push({
      PicName: "vet100.jpg",
      PersonName: "Mr. Duangdao ",
      Position: "Veterinarian",
      Department: "Diagnostic Center",
      Specialty: "Animal Drug",
      Email: "DuangDao@cpf.co.th",
      tel: "669 9874568"
    });
    Speciallists.push({
      PicName: "Poultry100.jpg",
      PersonName: "Mr. Chanchai ",
      Position: "Animal Husbandry",
      Department: "Diagnostic Center",
      Specialty: "Poultry Specialist",
      Email: "Chanchai@cpf.co.th",
      tel: "669 9874568"
    });
    Speciallists.push({
      PicName: "Product1-100.jpg",
      PersonName: "Mr. Danai ",
      Position: "Product Manager",
      Department: "Sales Department",
      Specialty: "Medical Supplies",
      Email: "Danai@cpf.co.th",
      tel: "669 9874568"
    });
    Speciallists.push({
      PicName: "feed100.jpg",
      PersonName: "Mr. Chanchai ",
      Position: "Animal Husbandry",
      Department: "Diagnostic Center",
      Specialty: "Poultry Specialist",
      Email: "Chanchai@cpf.co.th",
      tel: "669 9874568"
    });

    let listItems = Speciallists.map(Speciallist => (
      <div className="col-md-6 mleft0 pleft0 pright0">
        <BusinessCard
          PicName={Speciallist.PicName}
          PersonName={Speciallist.PersonName}
          Position={Speciallist.Position}
          Department={Speciallist.Department}
          Specialty={Speciallist.Specialty}
          Email={Speciallist.Email}
          tel={Speciallist.tel}
        />
      </div>
    ));

    let filterelement = (
      <div className="btn-group pull-right">
        <Dropdown id="dropdown-custom-1" pullRight>
          <Dropdown.Toggle className="btn">
            <i className="fa fa-filter" />
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">All</MenuItem>
            <MenuItem eventKey="2">Veterinarian</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );

    return (
      <div className="box box-primary mbottom5">
        <HeaderItem
          htype="nobtn"
          HeaderText="Specialist"
          filiter="Y"
          filterobj={filterelement}
        />
        <div className="box-body">
          <div className="row">
            <div className="frame mleft10 mright10">
              <div className="col-md-9 no-margin no-padding">
                <div className="col-md-11 mright0 pright0">
                  <AutoSearch
                    inputstyle=" input-Search mbottom0 "
                    id="txtSearcgOrg"
                    placeholder=""
                  />
                  <div>{listItems}</div>
                </div>
                <Alphabetdiv onClick={this.AlphaClick}  />
              </div>
              <SuggestionObjLst />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Speciallist;
