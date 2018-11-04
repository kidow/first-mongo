import React, { Component } from 'react';
import { UserList } from '../components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from '../store/comment'

class UserListContainer extends Component {
  render() {
    return (
      <UserList />
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    CommentActions: bindActionCreators(commentActions, dispatch)
  })
)(UserListContainer);