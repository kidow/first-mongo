import React, { Component } from 'react';
import { AddUser, UserList, AddComment, CommentList } from './components';
import { Divider } from 'antd';
class App extends Component {
  render() {
    return (
      <>
        <AddUser />
        <Divider style={{ width: '700px'}}/>
        <UserList />
        <Divider style={{ width: '700px' }}/>
        <AddComment />
        <Divider style={{ width: '700px' }}/>
        <CommentList />
      </>
    );
  }
}

export default App;
