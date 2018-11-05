import React, { Component } from 'react';
import { UserList } from '../components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../store/user'

class UserListContainer extends Component {
  getUserList = () => {
    const { UserActions } = this.props
    UserActions.getUser()
  }

  componentDidMount() {
    this.getUserList()
  }

  render() {
    const { users } = this.props
    return (
      <UserList users={users}/>
    );
  }
}

export default connect(
  state => ({
    users: state.user.get('users')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(UserListContainer);