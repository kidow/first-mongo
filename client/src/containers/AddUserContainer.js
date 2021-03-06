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

  handleToggle = (married) => {
    const { UserActions } = this.props
    UserActions.toggle(married)
  }

  handleSubmit = () => {
    const { name, age, married, UserActions } = this.props 
    if (name && age.match(/^[0-9]*$/g)) {
      UserActions.postUser({name, age, married})
      UserActions.initialize()
    } else {
      alert('올바른 값을 입력하세요')
      UserActions.initialize()
    }
  }
  render() {
    const { handleChange, handleSubmit, handleToggle } = this
    const { name, age, married } = this.props
    return (
      <AddUser 
        onChange={handleChange}
        onToggle={handleToggle}
        onSubmit={handleSubmit}
        name={name}
        age={age}
        married={married}
      />
    );
  }
}

export default connect(
  state => ({
    name: state.user.get('name'),
    age: state.user.get('age'),
    married: state.user.get('married')
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(AddUserContainer);