import React from "react"
import PropTypes from "prop-types"
import A_ArticleTitle from "./A_ArticleTitle.js"
import A_ArticleHashtag from "./A_ArticleHashtag.js"

const M_ArticleCard1Column = ({
link,
preview,
kke,
text,
hashtag,
title,
}) => {

    return (
      <div>
      <a href={`/articles/${link}`} className="OneColumn" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${preview})` }}>
        <div  key={kke}  >
        <div className="top_question_column1">
        <A_ArticleHashtag
          style="Hashtag--default"
          textpart = {{__html: `${hashtag}`}}>
        </A_ArticleHashtag>
        </div>
        <div className="bottom_question">
        <A_ArticleTitle style="aricle--white"
            title = {title}>
        </A_ArticleTitle>
        </div>
        </div>
      </a>
      </div>
    );
  }


export default M_ArticleCard1Column
