import React from "react"
import PropTypes from "prop-types"
import A_Logo from "./A_Logo.js"
import A_Button from "./A_Button.js"
import A_Avatar from "./A_Avatar.js"
import UserNotLoginIn from './UserNotLoginIn.svg';

class O_HeaderDefault extends React.Component {
  render () {
    return (
      <div>
      <nav>
      <div className="right_section_navbar">
        <A_Logo />
        <div className="right_links">
          <a href="\posts" className="right_link black"> Вопросы </a>
          <a href="\stories" className="black" >Статьи</a>
        </div>
      </div>
      <div className="active_header">
        <A_Button link = {'posts/new'} color="white button--default" content = {'Задать вопрос'}/>
        <a href="\users\sign_up"><img className="answer--icon" src={UserNotLoginIn}/></a>
      </div>
      </nav>
      </div>
    );
  }
}

export default O_HeaderDefault
