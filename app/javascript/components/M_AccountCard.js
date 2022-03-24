import React from "react"
import PropTypes from "prop-types"
import A_Avatar from "./A_Avatar.js"

class M_AccountCard extends React.Component {
  render () {
    return (
      <div className="account--card">
      <div className="account--avatar">
      <A_Avatar
          link = {this.props.current_user.id}
          avatar = {this.props.current_user.avatar.thumb.url}
          size="avatar_page">
      </A_Avatar>
      </div>
      <p className="account--avatar p_tag"> {this.props.current_user.username} </p>
      <div className="account--avatar">
      <a href={`/users/sign_out`}> Выйти </a>
      </div>
      </div>

    );
  }
}

export default M_AccountCard
