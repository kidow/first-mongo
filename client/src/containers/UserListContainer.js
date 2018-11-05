import React, { Component } from 'react';
import { UserList } from '../components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../store/user'
import * as commentActions from '../store/comment'

class UserListContainer extends Component {
  getUserList = () => {
    const { UserActions } = this.props
    UserActions.getUser()
  }

  getCommentList = () => {
    const { CommentActions, id } = this.props
    CommentActions.getComment(id)
  }

  componentDidMount() {
    this.getUserList()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.users !== this.props.users) {
      this.getUserList()
    }
  }

  render() {
    const { users, comments } = this.props
    return (
      <UserList users={users} comments={comments}/>
    );
  }
}

export default connect(
  state => ({
    users: state.user.get('users'),
    comments: state.comment.get('comments')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
    CommentActions: bindActionCreators(commentActions, dispatch)
  })
)(UserListContainer);