import React from "react"
import PropTypes from "prop-types"

class A_Select extends React.Component {
  render () {
    return (
    <div className="form-group">
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {this.props.categories.map(category => {
          return (
            <option key={category.id} value={category.id} label={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  )
}
}
A_Select.propTypes = {
  categories: PropTypes.array
};
export default A_Select
