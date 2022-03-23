import React from "react"
import PropTypes from "prop-types"
import A_ArticleTitle from "./A_ArticleTitle.js"

class M_VideoPost extends React.Component {
  render () {
    const FourColumn = thisprops.articles.slice(6,10).map((articles) =>

    <a href={`/articles/${articles.id}`} className="FourColumn" >
    <div  key={articles.id}  >
    <div className="top_question_column" style={{backgroundImage: `url(${articles.preview.url})` }}>
    <div className="border_margin">
    <A_ArticleHashtag
      style="Hashtag--default"
      textpart = {{__html: `${articles.hashtag.name}`}}>
    </A_ArticleHashtag>
    </div>
    </div>
    <div className="bottom_question_column">
    <A_ArticleTitle style="article--black"
        title = {articles.name}>
    </A_ArticleTitle>
    </div>
    </div>
    </a>
  );

    return (
      <div className="articles_columns top">
      {FourColumn}
      </div>
    );
  }
}

export default M_VideoPost
