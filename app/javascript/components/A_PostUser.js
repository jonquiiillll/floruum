import React from "react"
import PropTypes from "prop-types"


const A_PostUser = ({
  link,
  style,
  username,
  avatar,
  date
}) => {
    return (
      <div className="userinfo">
      <img src={`${avatar}`}/>
        <a href={link}>{username} {date} </a>
      </div>
    );
  }

export default A_PostUser
