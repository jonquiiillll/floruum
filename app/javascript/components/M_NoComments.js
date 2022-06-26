import React from "react"
import PropTypes from "prop-types"
class M_NoComments extends React.Component {
  render () {
    return (
      <div className="block--comments">
      <div className="no_comments_block">
    <p className="h1--comments"> Ответов пока что нет </p>
    <p className="p--comments"> Как только появится ответ, вы получите <br/>уведомление на почту или телефон </p>
      </div>
      </div>
    );
  }
}

export default M_NoComments
