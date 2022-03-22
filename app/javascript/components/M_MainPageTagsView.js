import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_Category from "./A_Category.js"

class M_MainPageTagsView extends React.Component {
  render () {
    return (
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

    );
  }
}

export default M_MainPageTagsView
