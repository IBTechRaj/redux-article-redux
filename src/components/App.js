import React from "react";
import BookForm from "../containers/BookForm";
import BookList from "../containers/BookList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> This is Redux</h1>
        <BookList />
        <BookForm />
      </div>
    );
  }
}

export default App;

// const App = () => (
//   <div>
//     <h1> This is Redux</h1>
//     <BookList />
//     <BookForm />
//   </div>
// );
