import React from "react"
import PropTypes from "prop-types"
import A_Category from "./A_Category.js"

class M_TagsBar extends React.Component {
  render () {
    return (
      <div className="header_second">
      <div className="header_tags">
          {this.props.categories.map(category => (
            <A_Category
              style="Category--default"
              category = {`${category.name}`}
              textpart = {{__html: `${category.name}`}}>
            </A_Category>
        ))}
      </div>
      </div>
    );
  }
}

export default M_TagsBar
