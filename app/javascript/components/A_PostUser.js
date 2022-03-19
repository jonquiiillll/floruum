import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'User--white',
  'User--black'
]

const A_PostUser = ({
  link,
  style,
  username,
  avatar,
  date
}) => {

    const checkStyle = STYLES.includes(style)
    ? style : STYLES[0]

    return (
      <div className="userinfo">
      <img src={`${avatar}`}/>
        <a className={`${checkStyle}`} href={`/users/${link}`}> {username} {date} </a>
      </div>
    );
  }

export default A_PostUser
