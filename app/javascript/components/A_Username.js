import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'Username--white',
  'Username--black'
]

const A_Username = ({
  link,
  style,
  username,
}) => {

    const checkStyle = STYLES.includes(style)
    ? style : STYLES[0]

    return (
      <div className="userinfo">
        <a className={`${checkStyle}`} href={`/users/${link}`}> {username}  </a>
      </div>
    );
  }

export default A_Username
