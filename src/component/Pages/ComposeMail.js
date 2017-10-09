import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//import 'draft-js/dist/Draft.css';
import { convertFromHTML, ContentState, convertToRaw } from "draft-js";
import { Dropdown, Button, MenuItem } from "react-bootstrap";

class ComposeMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorContent: this._getInitialHTML() };
  }

  _getInitialHTML() {
    const contentBlocks = convertFromHTML("<p>Hello world</p>");
    const contentState = ContentState.createFromBlockArray(contentBlocks);
    return convertToRaw(contentState);
  }

  onEditorChange(editorContent) {
    //console.log(draftToHtml(editorContent))
    this.setState({ editorContent });
  }
  render() {
    const { editorContent } = this.state;
    let EditorHeight = {
      height: "250px"
    };

    let toolbaroption = {
      options: [
        "inline",
        "blockType",
        "fontSize",
        "fontFamily",
        "list",
        "textAlign",
        "colorPicker",
        "link",
        /*"embedded",
        "emoji",
        "image",
        "remove",
        "history"*/
      ],
      inline: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: [
          "bold",
          "italic",
          "underline",
          //"strikethrough",
          //"monospace",
         // "superscript",
          //"subscript"
        ]
      },
      blockType: {
        inDropdown: true,
        options: [
          "Normal",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "Blockquote",
          "Code"
        ],
        className: undefined,
        component: undefined,
        dropdownClassName: undefined
      },

      list: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["unordered", "ordered", "indent", "outdent"]
      },
      textAlign: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["left", "center", "right", "justify"]
      },

      link: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        dropdownClassName: undefined,
        showOpenOptionOnHover: true,
        defaultTargetOption: "_self",
        options: ["link", "unlink"]
      },

      history: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["undo", "redo"]
      }
    };

    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h3 className="box-title">
            <label className="mtop10" id="lblHeader" data-lang="lblHeader">
              Compose Mail
            </label>
          </h3>

          <div className="btn-group pull-right">
            <Dropdown id="dropdown-custom-1" pullRight>
              <Dropdown.Toggle className="btn btn-primary ">
                <i className="fa fa-envelope-o" />
                Save
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem eventKey="1">Send Now</MenuItem>
                <MenuItem eventKey="2">Send By Schedule</MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="pull-left mright10">
            <a href="#" className="btn btn-circle btn-default">
              <i className=" fa fa-arrow-circle-left fa-2" />
            </a>
          </div>
        </div>
        <div className="box-body">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content">
                <h3
                  className="mtop0"
                  id=" lblComposeHeader"
                  data-lang="lblComposeHeader"
                >
                  Compose New Message
                </h3>
                <div className="box box-primary mbottom5">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="form-group pright5">
                        <label
                          className="lb-LabelStyle col-md-3 pright0"
                          id=" lblSenderFrom"
                          data-lang="llblSenderFromblSender"
                        >
                          From ::
                        </label>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="form-group col-md-12">
                        <label
                          className="lb-dataStyle pleft0"
                          id=" lblSender"
                          data-lang="lblSender"
                        >
                          Somsri &lt;somsri@cpf.co.th&gt;
                        </label>
                      </div>
                    </div>
                    <hr className="hr-format mtop0 mbottom0" />
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label
                          className="lb-LLabelStyle pleft0"
                          id=" lblTemplateType"
                          data-lang="lblTemplateType"
                        >
                          Template Type ::
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <Dropdown id="dropdown-custom-1">
                          <Dropdown.Toggle>No Select</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <MenuItem eventKey="1">Contact</MenuItem>
                            <MenuItem eventKey="2">Lead</MenuItem>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    <hr className="hr-format mtop0 mbottom0" />
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label
                          className="lb-LLabelStyle pleft0"
                          id=" lblTemplate"
                          data-lang="lblTemplate"
                        >
                          Email Template ::
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <Dropdown id="dropdown-custom-1" dropup>
                          <Dropdown.Toggle>No Select</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <MenuItem eventKey="1">Greeting</MenuItem>
                            <MenuItem eventKey="2">Appointment</MenuItem>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 ptop5">
                    <Editor className="well" toolbar={toolbaroption} 
                    wrapperClassName="demo-wrapper"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ComposeMail;

/*
  <Editor id="txtContent"
                    
                      rawContentState={editorContent}  
                      //toolbarClassName="demo-toolbar"
                      wrapperClassName="demo-wrapper"
                      //editorClassName="demo-editor"
                      onChange={this.onEditorChange.bind(this)}
                      //toolbarAlwaysVisible
                    />  <Editor id="txtContent"
                    
                      rawContentState={editorContent}  
                      //toolbarClassName="demo-toolbar"
                      wrapperClassName="demo-wrapper"
                      //editorClassName="demo-editor"
                      onChange={this.onEditorChange.bind(this)}
                      //toolbarAlwaysVisible
                    />*/
