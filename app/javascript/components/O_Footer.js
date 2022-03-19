import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import M_LinksGroup from "./M_LinksGroup.js"
class O_Footer extends React.Component {
  render () {
    return (
      <footer>
      <div className="links_and_words">
      <div className="right_footer">
      <A_H3 content ="Мы делаем мир зеленее сегодня, чтобы было легче дышать завтра"/>
      </div>
      <div className="left_footer">
      <M_LinksGroup/>
      </div>
      </div>
      <div className="about_us">
      <p className="dark--link"> 2022 Ⓒ Florum Все права защищены </p>
      <p className="dark--link"> Дизайн выполнили Александра Павлова и Мила Галиаскарова</p>
      </div>
      </footer>
    );
  }
}

export default O_Footer
