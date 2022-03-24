import React from "react"
import PropTypes from "prop-types"
import A_PTag from "./A_PTag.js"
import A_Category from "./A_Category.js"

class M_EndOfArticle extends React.Component {
  render () {
    return (
      <div className="end--of--article">
      <A_PTag
        color = "A_PTag--white--default"
        content = "Понравилась статья? Посмотрите похожие по тегам">
      </A_PTag>
      <A_Category
        style="Category--default"
        textpart = {{__html: `${this.props.hashtag.name}`}}>
      </A_Category>
      </div>
    );
  }
}

export default M_EndOfArticle
