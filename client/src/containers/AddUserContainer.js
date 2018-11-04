import React, { Component } from 'react';
import { AddUser } from '../components';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../store/user'

class AddUserContainer extends Component {
  handleChange = (e) => {
    const { UserActions } = this.props
    const { name, value } = e.target
    UserActions.changeInput({name, value})
  }
  render() {
    const { handleChange } = this
    const { name, age } = this.props
    return (
      <AddUser 
        onChange={handleChange}
        name={name}
        age={age}
      />
    );
  }
}

export default connect(
  state => ({
    name: state.user.get('name'),
    age: state.user.get('age')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(AddUserContainer);