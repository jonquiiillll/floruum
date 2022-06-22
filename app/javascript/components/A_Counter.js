import React from "react"
import PropTypes from "prop-types"
import A_Like from "./A_Like.js"
class A_Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="counter">
        <p>{this.state.count} </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          <A_Like />
        </button>
      </div>
    );
  }
}
export default A_Counter
