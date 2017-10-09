import React, { Component } from "react";
class TaskObjLst extends React.Component {
  render() {
    /* Overdue List */
    let Taskobjlist1 = [];
    Taskobjlist1.push({
      rowid: "Task001",
      dataDate: "14 Jun. 2017",
      title: "Email",
      taskiCon: " fa-envelope-o ",
      Description1: " Send mail to Mr. Sompong",
      AssignTo: " Somsri",
      Priority: "!"
    });

    const listItems1 = Taskobjlist1.map(Taskobj1 =>
      <div className="list-group-item row row-RList-Item " id={Taskobj1.rowid}>
        <div className="col-md-1 mtop4">
          <input type="checkbox" name="chkObject" className="w18 h18" />
        </div>

        <div className="col-md-2 label-row c">
          <span className="redcolor">
            {Taskobj1.dataDate}
          </span>
        </div>
        <div className="col-md-7 label-row">
          <span>
            <i
              title={Taskobj1.title}
              className={"fa " + Taskobj1.taskiCon + " fa-1 no-margin"}
            />
            <a href="#" className="b">
              {Taskobj1.Description1}
            </a>
            <strong
              className={
                Taskobj1.Priority === "!"
                  ? "dodgerbluecolor b"
                  : Taskobj1.Priority === "!!"
                    ? "orangecolor b"
                    : Taskobj1.Priority === "!!!" ? "redcolor b" : ""
              }
            >
              {" " + Taskobj1.Priority + " "}
            </strong>
            <a href="#" className="blackcolor fsize12">
              Assign to :: {Taskobj1.AssignTo}
            </a>
            <i title="private" className="fa fa-lock pull-right" />
          </span>
        </div>

        <div className="col-md-2">
          <div>
            <div className=" pull-right ">
              <button
                id={"btntag" + Taskobj1.rowid}
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                title="Tag"
              >
                <i className="fa fa-tag fa-1 no-margin" />
              </button>
              <button
                id={"btnCom" + Taskobj1.rowid}
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                title="Completed"
              >
                <i className="fa fa-check fa-1 no-margin" />
              </button>
              <button
                id={"btnEdit" + Taskobj1.rowid}
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                title="Edit"
              >
                <i className="fa fa-pencil fa-1 no-margin" />
              </button>
              <button
                id={"btnDel" + Taskobj1.rowid}
                type="button"
                className="btn btn-circle-micro btn-default btn-inverse whiteborder "
                title="Deleted"
              >
                <i className="fa fa-trash-o fa-1 no-margin" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    /* Overdue List */

    /* Plan List */
    let Taskobjlist2 = [];
    Taskobjlist2.push({
      rowid: "Task002",
      dataDate: "21 Jun. 2017",
      title: "Meeting",
      taskiCon: " fa-users ",
      Description1: " Meeting with Mr. Sompong",
      AssignTo: " Sales Team ",
      Priority: "!!!"
    });

    const listItems2 = Taskobjlist2.map(
      Taskobj2 =>
        <div
          className="list-group-item row row-RList-Item "
          id={Taskobj2.rowid}
        >
          <div className="col-md-1 mtop4">
            <input type="checkbox" name="chkObject" className="w18 h18" />
          </div>

          <div className="col-md-2 label-row c">
            <span>
              {Taskobj2.dataDate}
            </span>
          </div>
          <div className="col-md-7 label-row">
            <span>
              <i
                title={Taskobj2.title}
                className={"fa " + Taskobj2.taskiCon + " fa-1 no-margin"}
              />
              <a href="#" className="b">
                {Taskobj2.Description1}
              </a>
              <strong
                className={
                  Taskobj2.Priority === "!"
                    ? "dodgerbluecolor b"
                    : Taskobj2.Priority === "!!"
                      ? "orangecolor b"
                      : Taskobj2.Priority === "!!!" ? "redcolor b" : ""
                }
              >
                {" " + Taskobj2.Priority + " "}
              </strong>
              <a href="#" className="blackcolor fsize12">
                Assign to :: {Taskobj2.AssignTo}
              </a>
              <i title="private" className="fa fa-lock pull-right" />
            </span>
          </div>

          <div className="col-md-2">
            <div>
              <div className=" pull-right ">
                <button
                  id={"btntag" + Taskobj2.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                  title="Tag"
                >
                  <i className="fa fa-tag fa-1 no-margin" />
                </button>
                <button
                  id={"btnCom" + Taskobj2.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                  title="Completed"
                >
                  <i className="fa fa-check fa-1 no-margin" />
                </button>
                <button
                  id={"btnEdit" + Taskobj2.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                  title="Edit"
                >
                  <i className="fa fa-pencil fa-1 no-margin" />
                </button>
                <button
                  id={"btnDel" + Taskobj2.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder "
                  title="Deleted"
                >
                  <i className="fa fa-trash-o fa-1 no-margin" />
                </button>
              </div>
            </div>
          </div>
        </div>

      /* Plan List */
    );

    /* Plan List */

    /* Completed List */

    let Taskobjlist3 = [];
    Taskobjlist3.push({
      rowid: "Task003",
      dataDate: "",
      title: "Phone calling",
      taskiCon: " fa-phone ",
      Description1: " Phone call Mr. Sompong",
      AssignTo: " Sales Team ",
      Priority: "!"
    });

    Taskobjlist3.push({
        rowid: "Task004",
        dataDate: "",
        title: "Lunch",
        taskiCon: " fa-coffee ",
        Description1: " Luch with Mr. Sakchai",
        AssignTo: " Sales Team ",
        Priority: "!!"
      });

    const listItems3 = Taskobjlist3.map(
      Taskobj3 =>
        <div
          className="list-group-item row row-RList-Item "
          id={Taskobj3.rowid}
        >
          <div className="col-md-1 mtop4">
            <input type="checkbox" name="chkObject" className="w18 h18" />
          </div>

          <div className="col-md-2 label-row c">
            <span>
              {Taskobj3.dataDate}
            </span>
          </div>
          <div className="col-md-7 label-row">
            <span>
              <i
                title={Taskobj3.title}
                className={"fa " + Taskobj3.taskiCon + " fa-1 no-margin"}
              />
              <a href="#" className="b">
                {Taskobj3.Description1}
              </a>
              <strong
                className={
                  Taskobj3.Priority === "!"
                    ? "dodgerbluecolor b"
                    : Taskobj3.Priority === "!!"
                      ? "orangecolor b"
                      : Taskobj3.Priority === "!!!" ? "redcolor b" : ""
                }
              >
                {" " + Taskobj3.Priority + " "}
              </strong>
              <a href="#" className="blackcolor fsize12">
                Assign to :: {Taskobj3.AssignTo}
              </a>
              <i title="private" className="fa fa-lock pull-right" />
            </span>
          </div>

          <div className="col-md-2">
            <div>
              <div className=" pull-right ">
                <button
                  id={"btntag" + Taskobj3.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                  title="Tag"
                >
                  <i className="fa fa-tag fa-1 no-margin" />
                </button>
                <button
                  id={"btnCom" + Taskobj3.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse noborder mright2 "
                  disabled="disabled"
                  title="Completed"
                >
                  <i className="fa fa-check fa-1 bg-green no-margin" />
                </button>
                <button
                  id={"btnEdit" + Taskobj3.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder mright2"
                  title="Edit"
                >
                  <i className="fa fa-pencil fa-1 no-margin" />
                </button>
                <button
                  id={"btnDel" + Taskobj3.rowid}
                  type="button"
                  className="btn btn-circle-micro btn-default btn-inverse whiteborder "
                  title="Deleted"
                >
                  <i className="fa fa-trash-o fa-1 no-margin" />
                </button>
              </div>
            </div>
          </div>
        </div>

      /* Plan List */
    );


    /* Completed List */

    return (
      <div className="list-group">
        <div className="time-label">
          <label className="whitecolor lb-LabelBox2 bgred ">
            Overdue Tasks
          </label>
          <hr className="hr-hrBox redborder" />
        </div>
        {listItems1}
        <div className="time-label">
          <label className="whitecolor lb-LabelBox2 bgOrange ">
            Plan Tasks
          </label>
          <hr className="hr-hrBox orangeborder" />
        </div>
        {listItems2}
        <div className="time-label">
          <label className="whitecolor lb-LabelBox2 bgGreen ">
            Completed Tasks
          </label>
          <hr className="hr-hrBox greenborder" />
        </div>
        {listItems3}
      </div>
    );
  }
}
export default TaskObjLst;
