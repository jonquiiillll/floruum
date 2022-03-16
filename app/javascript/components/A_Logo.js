import React from "react"
import PropTypes from "prop-types"

var Logotype = require('../../assets/images/logo.png');


export class A_Logo extends React.Component {
  render () {
    return (
      <div>
      <a href="\promo">  <img className="logo" src={Logotype}/> </a>
      </div>
    );
  }
}

export default A_Logo
