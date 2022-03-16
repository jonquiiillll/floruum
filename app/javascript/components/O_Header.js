import React from "react"
import PropTypes from "prop-types"
import A_Logo from "./A_Logo.js"
import A_Button from "./A_Button.js"
import A_Avatar from "./A_Avatar.js"

class O_Header extends React.Component {
  render () {
    return (
      <div>
      <nav>
      <div className="right_section_navbar">
        <A_Logo />
        <div className="right_links">
          <a href="\posts" className="right_link black"> Вопросы </a>
          <a href="\articles" className="black" >Статьи</a>
        </div>
      </div>
        <A_Button link = {'posts/new'} type = {"NewPost white"} content = {'Задать вопрос'}/>
      </nav>
      </div>
    );
  }
}

export default O_Header
