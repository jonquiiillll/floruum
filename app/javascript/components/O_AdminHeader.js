import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery'
import A_Logo from "./A_Logo.js"
import A_Button from "./A_Button.js"
import A_Avatar from "./A_Avatar.js"
import M_SearchButton from "./M_SearchButton.js"
import UserNotLoginIn from './UserNotLoginIn.svg';

class O_AdminHeader extends React.Component {
  render () {
    return (
      <div>
      <nav>
      <div className="right_section_navbar">
        <A_Logo />
        <div className="right_links--admin">
          <a href="\posts" className="right_link black"> Публикации </a>
          <a href="\stories" className="black second--link" > Статьи </a>
          <a href="\users" className="black third--link" > Пользователи </a>
          <a href="\categories" className="black" > Категории </a>
        </div>
      </div>
      <div class="right_section">
      <div className="active_header">
        <A_Avatar
            link = {this.props.current_user.id}
            avatar = {this.props.current_user.avatar.url == null ? UserNotLoginIn : this.props.current_user.avatar.small_thumb.url}>
        </A_Avatar>
      </div>
      </div>
      </nav>
      <div>
      </div>
      </div>
    );
  }
}

export default O_AdminHeader
