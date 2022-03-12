import React from "react"
import PropTypes from "prop-types"
import A_Logo from "./A_Logo.js"
import A_Button from "./A_Button.js"

class O_Header extends React.Component {
  render () {
    return (
      <div>
      <nav>
      <div className="right_section_navbar">
        <A_Logo />
        <div className="right_links">
          <a href="\posts" className="right_link"> Вопросы </a>
          <a href="\articles" >Статьи</a>
        </div>
      </div>
        <A_Button />

      </nav>
      </div>
    );
  }
}

export default O_Header