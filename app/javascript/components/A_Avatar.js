import React from "react"
import PropTypes from "prop-types"


const A_Avatar = ({
  avatar,
  link,
  size
}) => {
    return (
      <div className="userinfo">
        <a href={`/users/${link}`}>
        <img className={size} src={`${avatar}`}/>
        </a>
      </div>
    );
  }

export default A_Avatar
