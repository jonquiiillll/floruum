import React from "react"
import PropTypes from "prop-types"


const A_Avatar = ({
  avatar,
  link
}) => {
    return (
      <div className="userinfo">
        <a href={`/users/${link}`}><img src={`${avatar}`}/></a>
      </div>
    );
  }

export default A_Avatar
