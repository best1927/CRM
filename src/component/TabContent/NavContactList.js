import React, { Component } from "react";
import ContactsObj from "../ObjTemplate/ContactsObj";
class NavContactList extends React.Component {
  render() {
    //Chat Contacts//
    let ContactLst = [];
    if (this.props.id === "tbcontact") {
      ContactLst.push({ PicName: "Toey50.png", Name: "Jack Sparrow" });
      ContactLst.push({ PicName: "Cheer50.png", Name: "Bhaumik Patel" });
    } else {
      ContactLst.push({ PicName: "Users_50.png", Name: "Sales Team" });
    }

    let ContactItemList = ContactLst.map(Contact => (
      <ContactsObj PicName={Contact.PicName} Name={Contact.Name} />
    ));

    return (
      <div className="tab-content mbottom5">
        <div id={this.props.id} className="list-group">
          {ContactItemList}
        </div>
      </div>
    );
  }
}
export default NavContactList;
