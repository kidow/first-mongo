import React, { Component } from 'react';
import { AddUser, UserList, AddComment, CommentList } from './components';
class App extends Component {
  render() {
    return (
      <>
        <AddUser />
        <UserList />
        <AddComment />
        <CommentList />
      </>
    );
  }
}

export default App;
