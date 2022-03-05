import React from "react"
import PropTypes from "prop-types"

class A_Tags extends React.Component {

  constructor(){
       super();
       this.state = {
          black: true
       }
   }
   changeColor(){
       this.setState({black: !this.state.black})
    }

  render() {

    return (
      <div className="Tags">
      <a href={`/posts`} className="category">Все</a>
      {this.props.categories.map(category=> (
        <a href={`/posts?category=${category.name}`}>
            <div key={category.id}> {`${category.name}`} </div>
        </a>
          ))}
      </div>
    );
  }
}
export default A_Tags
