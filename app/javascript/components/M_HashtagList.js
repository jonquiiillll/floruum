import React from "react"
import PropTypes from "prop-types"
import A_Hashtag from "./A_Hashtag.js"
import A_ArticleHashtag from "./A_ArticleHashtag.js"

class M_HashtagList extends React.Component {
  render () {
    return (
      <div className="tags--search">
          {this.props.hashtags.map(hashtag => (
            <div className="hashtag--item">
            <A_ArticleHashtag
              style="Hashtag--shadow"
              textpart = {{__html: `${hashtag.name}`}}>
            </A_ArticleHashtag>
            </div>
        ))}
      </div>
    );
  }
}

export default M_HashtagList
