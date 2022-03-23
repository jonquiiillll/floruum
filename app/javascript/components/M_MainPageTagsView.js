import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_PostContent from "./A_PostContent.js"
import A_PostDate from "./A_PostDate.js"
import A_PostPreview from "./A_PostPreview.js"
import A_PostTitle from "./A_PostTitle.js"
import A_Category from "./A_Category.js"
import A_PostUser from "./A_PostUser.js"

class M_MainPageTagsView extends React.Component {
  render () {

    const Posts = this.props.posts.slice(0,3).map((post) =>

    <a href={`/posts/${post.id}`}>
      <div className="window" key={post.id} >
        <div className="preview" style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${post.image.url})` }}>
            <div className="top_question">

            <A_Category
              style="Category--default"
              textpart = {{__html: `${post.category.name}`}}>
            </A_Category>

            </div>
            <div className="bottom_question">

            <A_PostTitle style="title--white"
                title = {post.name}>
            </A_PostTitle>

            <A_PostUser
                username = {post.user.username}
                avatar = {post.user.avatar.small_thumb.url}
                date = {post.created_at}>
            </A_PostUser>

            </div>
      </div>
            <A_PostContent style="content--grey"
              text = {post.content.slice(0, 20)}/>
      </div>
    </a>
    );

    return (
  <div className="container_tags_and_posts">
    <div className="MainTags">
       <div className="main_text_cat">
       <A_H4 content ="Вместе мы знаем больше"/>
       </div>
       <p className="small_text"> Чтобы помочь единомышленникам
       не&nbsp;обязательно знать о растениях все. Делитесь своим опытом и мыслями
       в&nbsp;темах на любой вкус </p>
       <div className="">
    {this.props.categories.map(category => (
      <A_Category
        style="Category--shadow"
        textpart = {{__html: `${category.name}`}}>
      </A_Category>
    ))}
      </div>
    </div>
      <div className="post_on_main_page">
      {Posts}
    </div>
  </div>
    );
  }
}

export default M_MainPageTagsView
