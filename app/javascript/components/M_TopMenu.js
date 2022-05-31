import React from "react"
import PropTypes from "prop-types"
import A_H2 from "./A_H2.js"
import A_PTag from "./A_PTag.js"
import A_Button from "./A_Button.js"
var TopMenu = require('../../assets/images/logo.png');

class M_TopMenu extends React.Component {
  render () {
    return (
       <div className="background-top">
       <div className="TextBlock">
       <A_H2
           content = {'Найдется все'}>
        </A_H2>
        <A_PTag
            content = {'Мы сможем найти статью по любому вашему запросу. Просто выберите интересующую вас тему'}>
         </A_PTag>
         <a href="/search">
         <select className="select_main">
           <option value="" disabled selected>Что будем искать?</option>
         </select>
         </a>
         </div>
       </div>
    );
  }
}

export default M_TopMenu
