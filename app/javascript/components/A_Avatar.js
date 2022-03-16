import React from "react"
import PropTypes from "prop-types"

var UserPic = require('../../assets/images/logo.png');

export class A_Avatar extends React.Component {
  render () {
    return (
      <div>
        <a href={`/users/${user.current_user.id}`}> <img className="logo" src={UserPic}/> </a>
      </div>
    );
  }
}

export default A_Avatar
