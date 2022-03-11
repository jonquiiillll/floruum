import React from "react"
import PropTypes from "prop-types"
class A_Category extends React.Component {
  render () {
    return (
      <>
      {this.props.categories(
            <li key={this.props.category}>{`${category.id} `}</li>
          )}
      </>
    );
  }
}
A_Category.propTypes = {
  category: PropTypes.array
};
export default A_Category
