import React from "react"
import PropTypes from "prop-types"
class O_Postform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.post.name ? props.post.name : '',
        content: props.post.content ? props.post.content : '',
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }

    render() {
      return (
        <div>
          <label>Название</label>
          <input
            type="text"
            name="post[name]"
            value={this.state.name}
            placeholder="Коротко опишите ваш вопрос"
            onChange={this.handleNameChange}
          />

        </div>
      );
    }
  }

export default O_Postform
