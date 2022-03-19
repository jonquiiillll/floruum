import React from "react"
import PropTypes from "prop-types"
import A_ArticleTitle from "./A_ArticleTitle.js"
import A_ArticleHashtag from "./A_ArticleHashtag.js"

class O_PostsMainPage extends React.Component {
  render () {
    const TwoColumn = this.props.articles.slice(0,2).map((articles) =>

    <a href={`/articles/${articles.id}`} className="article_card" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${articles.preview.url})` }}>
      <div key={articles.id}  >
      <div className="top_question">
      <A_ArticleHashtag
        style="Hashtag--default"
        textpart = {{__html: `${articles.hashtag.name}`}}>
      </A_ArticleHashtag>
      </div>
      <div className="bottom_question">
      <A_ArticleTitle style="aricle--white"
          title = {articles.name}>
      </A_ArticleTitle>
      </div>
      </div>
    </a>
  );

  const ThreeColumn = this.props.articles.slice(2,5).map((articles) =>

  <a href={`/articles/${articles.id}`} className="ThreeColumn" >
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
      {TwoColumn}
      {ThreeColumn}
      </div>

    );
  }
}

export default O_PostsMainPage
