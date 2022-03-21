import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_Button from "./A_Button.js"


class M_EmailSend extends React.Component {
  render () {
    return (
      <div className="email--box">
      <div className="content_email">
      <div className="text_email">
      <A_H4 content ="Подпишитесь на&nbsp;свежие новости"/>
      </div>
      <p className="small_text"> Получайте подборку самых свежих статей на любимые темы. Вы можете отменить подписку в любое время. </p>
      <div className="submit_info">
      <input
        type="text"
        name="post[name]"
        className="input_form"
        placeholder="Электронная почта"
      />
      <A_Button link = {'posts/new'} color="white button--default" content = {'Подписаться'}/>
      </div>
      </div>

      </div>
    );
  }
}

export default M_EmailSend
