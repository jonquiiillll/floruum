import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock"
import M_CategoryMenu from "./M_CategoryMenu"
class Tests extends React.Component {
  render () {
    return (
      <div>
         <A_Textblock />
         <M_CategoryMenu />
      </div>
    );
  }
}

export default Tests
