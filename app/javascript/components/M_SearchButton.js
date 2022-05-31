import React from "react"
import PropTypes from "prop-types"
var Icon = require('../../assets/images/A_IconSearch.svg');

class M_SearchButton extends React.Component {
  render () {
    return (
      <div className="search--header">
      <img className="icon--search" src={Icon}/>
      <p className="text--search--header"> Поиск по Florum </p>
      </div>
    );
  }
}

export default M_SearchButton
