import React from "react"
import PropTypes from "prop-types"




export class A_Avatar extends React.Component {
  render () {
    return (
      <div>
       <a className="category_content" key={this.props.user}>
           <p>{this.props.user.id}</p>
       </a>

      </div>
    );
  }
}
A_Avatar.propTypes = {
  current_user: PropTypes.array
};
export default A_Avatar
