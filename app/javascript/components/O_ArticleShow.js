import React from "react"
import PropTypes from "prop-types"
import A_ArticlePreview from "./A_ArticlePreview.js"
import A_ArticleHashtag from "./A_ArticleHashtag.js"
import A_ArticleTitle from "./A_ArticleTitle.js"
import M_ArticleRemark from "./M_ArticleRemark.js"
import A_ArticleContent from "./A_ArticleContent.js"
import A_Counter from "./A_Counter.js"

class O_ArticleShow extends React.Component {
  render () {
    return (
    <div className="all_article_show">
      <div className="cont_art">
        <div className="container_show_article" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${this.props.story.picture.url})` }}>
          <div className="hashtag_article">
           <A_ArticleHashtag
             style="Hashtag--default"
             textpart = {{__html: `${this.props.story.cate}`}}>
           </A_ArticleHashtag>
          </div>
          <div className="title_article">
            <A_ArticleTitle style="article--white--show"
                title = {this.props.story.name}>
            </A_ArticleTitle>
          </div>
        </div>
   </div>
     <div className = "article_content">
     <A_ArticleContent
         style="content--article"
         text = {this.props.story.content}>
     </A_ArticleContent>
     <M_ArticleRemark
         style="remark--article"
         text = {this.props.story.remark}>
     </M_ArticleRemark>
     </div>
     <A_Counter />
   </div>
    );
  }
}

export default O_ArticleShow
