import React from "react"
import PropTypes from "prop-types"
// import 'stylesheets/M_Category.scss';

class M_CategoryMenu extends React.Component {

  render() {

    return (
      <div className="CategoryMenu">
      <a href={`/posts`} className="category_content">Все</a>
      {this.props.categories.map (category=> (
        <a className="category_content" key={category.id} href={`/posts?category=${category.name}`}>
            <div> {`${category.name}`} </div>
        </a>
      ))}
      </div>
    );
  }
}
M_CategoryMenu.propTypes = {
  categories: PropTypes.array
};
export default M_CategoryMenu
