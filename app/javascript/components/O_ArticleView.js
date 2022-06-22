import React from "react"
import PropTypes from "prop-types"
import A_ArticleTitle from "./A_ArticleTitle.js"
import A_ArticleHashtag from "./A_ArticleHashtag.js"
import A_Button from "./A_Button.js"
import A_Counter from "./A_Counter.js"



class O_ArticleView extends React.Component {
  render () {

    const TwoColumn = this.props.stories.slice(0,2).map((stories) =>


    <a href={`/stories/${stories.id}`} className="article_card" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${stories.picture.url})` }}>
      <div key={stories.id}  >
      <div className="top_question">
      <p className="Hashtag--default">{stories.cate}</p>
      </div>
      <div className="bottom_question">
      <A_ArticleTitle style="aricle--white"
          title = {stories.name}>
      </A_ArticleTitle>
      </div>
      </div>
    </a>
  );

  const ThreeColumn = this.props.stories.slice(2,5).map((stories) =>

  <a href={`/stories/${stories.id}`} className="ThreeColumn" >
    <div  key={stories.id}  >
    <div className="top_question_column" style={{backgroundImage: `url(${stories.picture.url})` }}>
   <div className="border_margin">
   <p className="Hashtag--default">{stories.cate}</p>
    </div>
    </div>
    <div className="bottom_question_column">
    <A_ArticleTitle style="article--black"
        title = {stories.name}>
    </A_ArticleTitle>
    </div>
    </div>
  </a>
);

const FourColumn = this.props.stories.slice(6,10).map((stories) =>

<a href={`/stories/${stories.id}`} className="FourColumn" >
<div  key={stories.id}  >
<div className="top_question_column" style={{backgroundImage: `url(${stories.picture.url})` }}>
<div className="border_margin">
<p className="Hashtag--default">{stories.cate}</p>
</div>
</div>
<div className="bottom_question_column">
<A_ArticleTitle style="article--black"
    title = {stories.name}>
</A_ArticleTitle>
</div>
</div>
</a>
);

const OneColumn = this.props.stories.slice(5,6).map((stories) =>

<a href={`/articles/${stories.id}`} className="OneColumn" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${stories.picture.url})` }}>
  <div  key={stories.id}  >
  <div className="top_question_column1">
  <p className="Hashtag--default">{stories.cate}</p>
  </div>
  <div className="bottom_question">
  <A_ArticleTitle style="aricle--white"
      title = {stories.name}>
  </A_ArticleTitle>
  </div>
  </div>
</a>
);

    return (
      <div>
      <div className="articles_columns">
      {TwoColumn}
      {ThreeColumn}
      {OneColumn}
      {FourColumn}
      </div>
      <A_Button link = {'posts/new'} type="button--text" color="black" content = {'Больше знаний'}/>


      </div>
    );
  }
}
O_ArticleView.propTypes = {
  articles: PropTypes.array
};
export default O_ArticleView
