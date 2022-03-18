import React from "react"
import PropTypes from "prop-types"

class O_Postform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.post.name ? props.post.name : '',
        content: props.post.content ? props.post.content : '',
        category_id: props.post.category_id ? props.post.category_id : '',
        image: props.post.image ? props.post.image : '',
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);

    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
    handleCategoryChange(e) {
    this.setState({ category_id: e.target.value });
    }
    handleImageChange(e) {
    this.setState({ image: e.target.value });
    }

    render() {
      return (
        <div>
        <p className="heading">Создание вопроса</p>
          <label>Название</label>
          <input
            type="text"
            name="post[name]"
            value={this.state.name}
            className="input_form"
            placeholder="Коротко опишите ваш вопрос"
            onChange={this.handleNameChange}
          />
        </div>
      );
    }
  }

export default O_Postform
