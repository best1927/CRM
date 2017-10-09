import React from "react";

class AutoSearch extends React.Component {
  constructor(props) {
    super(props); 
  } 
  render() {
    return (
      <input
        type="text"
        className={this.props.inputstyle + " form-group "}
        name={this.props.id} 
        id={this.props.id}
        placeholder={this.props.placeholder}
        ref={this.props.ref} 
        onChange={this.props.onChange}
      onKeyPress={this.props.onKeyPress}
      />
    );
  }
}

export default AutoSearch;
