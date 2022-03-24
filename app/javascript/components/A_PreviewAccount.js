import React from "react"
import PropTypes from "prop-types"
var Preview = require('../../assets/images/back.png');

class A_PreviewAccount extends React.Component {
  render () {
    return (
      <img className="preview--account" src={Preview}/>
    );
  }
}

export default A_PreviewAccount
