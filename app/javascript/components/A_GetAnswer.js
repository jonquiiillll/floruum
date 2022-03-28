import React from "react"
import PropTypes from "prop-types"

var SetAnswerIcon = require('../../assets/images/AnswerIcon.svg');
var FlagIcon = require('../../assets/images/Flag.svg');
var FavoriteIcon = require('../../assets/images/Favorite--icon.svg');
class A_GetAnswer extends React.Component {
  render () {
    return (
      <div className="post--buttons">
      <a className="answer_button"> <img className="answer--icon" src={SetAnswerIcon}/> Ответить </a>
      <div className="right--post--buttons">
      <a><img className="answer--icon" src={FlagIcon}/></a>
      <a><img className="answer--icon" src={FavoriteIcon}/></a>
      </div>
      </div>
    );
  }
}

export default A_GetAnswer
