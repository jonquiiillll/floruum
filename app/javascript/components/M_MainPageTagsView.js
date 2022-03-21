import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"

class M_MainPageTagsView extends React.Component {
  render () {
    return (
    <div className="MainTags">
    <A_H4 content ="Вместе мы знаем больше"/>
    <p className="small_text"> Чтобы помочь единомышленникам
не обязательно знать о растениях все. Делитесь своим опытом и мыслями
в темах на любой вкус </p>
    </div>
    );
  }
}

export default M_MainPageTagsView
