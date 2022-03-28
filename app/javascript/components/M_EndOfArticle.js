import React from "react"
import PropTypes from "prop-types"
import A_PTag from "./A_PTag.js"
import A_Category from "./A_Category.js"

class M_EndOfArticle extends React.Component {
  render () {
    return (
      <div className="end--of--article">
      <div className="text--end--article">
      <A_PTag
        color = "A_PTag--white--default"
        content = "Понравилась статья? Посмотрите&nbsp;похожие по тегам">
      </A_PTag>
      </div>
      <div className="category--end--article">
      <A_Category
        style="Category--default"
        textpart = {{__html: `${this.props.hashtag.name}`}}>
      </A_Category>
      </div>
      </div>
    );
  }
}

export default M_EndOfArticle
