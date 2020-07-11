import React from "react";
import Book from "../components/Book";
import { connect } from "react-redux";
import { removeBook } from "../actions";

function mapStateToProps(state) {
  const { books } = state;
  return { books };
}

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id))
});

const BookList = ({ books, removeBook }) => {
  return (
    <div>
      {books.map(book => (
        <ul key={book.id}>
          <Book book={book} removeBook={removeBook} />
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
