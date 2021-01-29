import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ViewItem extends React.Component {

  render() {
    console.log("bbb");
    console.log(this.props);
    console.log(this.state);
    if (this.props.selectedId == undefined) {
      return "no selected item";
    }
    if (this.props.selectedId == null) {
      return "no selected item";
    }
    return (
      this.props.selectedId
    );
  }
}

export default ViewItem;