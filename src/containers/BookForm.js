import React from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = { title: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { addBook } = this.props;

    if (title) {
      addBook(title);
      this.setState({
        title: ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          name="title"
          placeholder="Book Title"
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(null, { addBook })(BookForm);
