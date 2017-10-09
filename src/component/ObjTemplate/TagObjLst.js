import React, { Component } from "react";
class TagObjLst extends React.Component {
  render() {
    // let TagClick =this.props.onClick;
    let Tagobjlist = [];

    let boxstyle = "lb-TagBox";

    if (this.props.TagTeam === "Y") {
      boxstyle = "lb-TagBoxgrey";
      Tagobjlist.push({ TagId: "idSales", TagLabel: "Sales Team" });
      Tagobjlist.push({ TagId: "idAdmin", TagLabel: "Admin Team" });
    } else {
      if (
        this.props.ObjList !== undefined &&
        this.props.ObjList !== null
      ) {
        Tagobjlist = this.props.ObjList.TagList;
      } else {
        Tagobjlist.push({ TagId: "idTag1", TagLabel: "Tag1" });
      }
    }

    const listItems = Tagobjlist.map(Tagobj => (
      <a
        id={Tagobj.TagId}
        href="#"
        className={boxstyle}
        onClick={() => {
          this.props.TagOnClick(Tagobj.TagId);
        }}
      >
        {Tagobj.TagLabel}
      </a>
    ));

    return (
      <div>
        <span id={this.props.spid}>{listItems}</span>
      </div>
    );
  }
}
export default TagObjLst;
