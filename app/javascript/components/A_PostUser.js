import React from "react"
import PropTypes from "prop-types"


const A_PostUser = ({
  link,
  style,
  username,
  avatar
}) => {
    return (
      <div className="userinfo">
      <img src={`${avatar}`}/>
        <a href={link}>{username} </a>
      </div>
    );
  }

export default A_PostUser
