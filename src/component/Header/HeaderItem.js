import React from "react";

class HeaderItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    let btitleStyle = {
      margin: "0px 0px 0px 5px"
    };

    let HeaderSel = this.props.htype;
    let Headerleft = "";
    let Headerright = "";
    if (this.props.htype !== "nobtn") {
      Headerleft = {
        SearchType: (
          <a
            id="btnAdd"
            data-lang="btnAdd"
            //href={this.props.btnAddLink}
            onClick={() => this.props.btnAddClick()}
            title="Add"
            className="btn btn-circle btn-danger"
            style={btitleStyle}
          >
            <i className="fa fa-plus fa" />
          </a>
        ),
        NewType: (
          <a
            id="btnBack"
            data-lang="btnBack"
            //href={this.props.btnBackLink}
            onClick={() => this.props.btnBackClick()}
            title="Back"
            className="btn btn-circle btn-default pull-left "
            style={btitleStyle}
          >
            <i className=" fa fa-arrow-circle-left fa-2" />
          </a>
        ),
        EditType: (
          <a
            id="btnBack"
            data-lang="btnBack"
            //href={this.props.btnBackLink}
            onClick={() => this.props.btnBackClick()}
            title="Back"
            className="btn btn-circle btn-default pull-left "
            style={btitleStyle}
          >
            <i className=" fa fa-arrow-circle-left fa-2" />
          </a>
        )
      }[HeaderSel];

      Headerright = {
        SearchType: "",
        NewType: (
          <div className="pull-right">
            <button
              className="btn btn-primary mright5"
              id="btnSave"
              onClick={() => this.props.btnSaveClick()}
            >
              <span data-lang="lblSave">
                <i className="fa fa-floppy-o" />Save
              </span>
            </button>

            <button
              className="btn btn-default "
              id="btnClose"
              onClick={() => this.props.btnCloseClick()}
            >
              <span data-lang="lblClose">
                <i className="fa fa-times-circle-o" />Close
              </span>
            </button>
          </div>
        )
      }[HeaderSel];
    }

    if (this.props.filiter === "Y") {
      Headerright = this.props.filterobj;
    }
    return (
      <div className="box-header with-border">
        <h3 className="box-title ">
          <label
            className={
              this.props.htype === "nobtn" ? (
                "mleft5 mright5 "
              ) : (
                "mleft5 mright5 mtop10"
              )
            }
            id="lblHeader"
            data-lang="lblHeader"
          >
            {this.props.HeaderText}
          </label>
          {Headerleft}
          {this.props.DelYn === "Y" ? (
            <a
              id="btnDel"
              data-lang="btnDel"
              onClick={() => this.props.btnDeleteClick()}
              title="Delete"
              className="btn btn-circle btn-default"
              style={btitleStyle}
            >
              <i className="fa fa-trash-o fa-2" />
            </a>
          ) : (
            ""
          )}
          {this.props.CompleteYn === "Y" ? (
            <a
              id="btnCom"
              data-lang="btnCom"
              onClick={() => this.props.btnCompletedClick()}
              title="Complete"
              className="btn btn-circle btn-success"
              style={btitleStyle}
            >
              <i className="fa fa-check fa-2" />
            </a>
          ) : (
            ""
          )}
        </h3>
        {Headerright}
      </div>
    );
  }
}

export default HeaderItem;
