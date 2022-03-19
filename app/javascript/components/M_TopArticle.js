import React from "react"
import PropTypes from "prop-types"
import A_H1 from "./A_H1.js"
import A_Links from "./A_Links.js"

class M_TopArticle extends React.Component {
  render () {
    return (
      <div className="M_TopArticle">
      <div className="content_top">
      <A_H1 content ="Лучшее на Florum"/>
      <A_Links content ="Поиск по всем вопросам о поливе растений"/>
      </div>
      </div>
    );
  }
}

export default M_TopArticle
