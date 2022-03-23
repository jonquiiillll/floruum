import React from "react"
import PropTypes from "prop-types"
import A_H2 from "./A_H2.js"
import A_ArticleTitle from "./A_ArticleTitle.js"
import A_ArticleHashtag from "./A_ArticleHashtag.js"


class O_VideoBar extends React.Component {
  render () {
    const FourColumn = this.props.articles.slice(10, 14).map((articles) =>

    <a href={`/articles/${articles.id}`} className="Video_post" >
    <div  key={articles.id}  >
    <div className="video_posts_view" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${articles.preview.url})` }}>
    <div className="top_video">
    <A_ArticleHashtag
      style="Hashtag--default"
      textpart = {{__html: `${articles.hashtag.name}`}}>
    </A_ArticleHashtag>
    </div>
    <div className="bottom_video">
    <A_ArticleTitle style="article--white--small"
        title = {articles.name}>
    </A_ArticleTitle>
    </div>
    </div>
    </div>
    </a>
    );

    return (
    <div className="O_VideoBar">
    <div className="text_video">
    <A_H2
      content="Видео-уроки"
    />
    </div>
    <div className="video_column">
   {FourColumn}
    </div>
    </div>
    );
  }
}

export default O_VideoBar
