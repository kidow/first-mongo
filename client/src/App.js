import React, { Component } from 'react';
import { AddUserContainer, UserListContainer, AddCommentContainer, CommentListContainer } from './containers';
import { Divider } from 'antd';
class App extends Component {
  render() {
    return (
      <>
        <AddUserContainer />
        <Divider style={{ width: '700px'}}/>
        <UserListContainer />
        <Divider style={{ width: '700px' }}/>
        <AddCommentContainer />
        <Divider style={{ width: '700px' }}/>
        <CommentListContainer />
      </>
    );
  }
}

export default App;
