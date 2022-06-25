import React from "react"
import PropTypes from "prop-types"

var Like = require('../../assets/images/LikeIcon.svg');


export class A_Like extends React.Component {
  render () {
    return (
      <div>
       <img className="like" src={Like}/>
      </div>
    );
  }
}
export default A_Like
