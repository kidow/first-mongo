import React, { Component } from 'react';
import { AddComment } from '../components';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as commentActions from '../store/comment'

class AddCommentContainer extends Component {
  handleChange = (e) => {
    const { CommentActions } = this.props
    const { name, value } = e.target
    CommentActions.changeInput({name, value})
  }
  
  render() {
    const { handleChange } = this
    const { comment, commenter } = this.props
    return (
      <AddComment 
        onChange={handleChange} 
        comment={comment} 
        commenter={commenter}
      />
    );
  }
}

export default connect(
  state => ({
    comment: state.comment.get('comment'),
    commenter: state.comment.get('commenter')
  }),
  dispatch => ({
    CommentActions: bindActionCreators(commentActions, dispatch)
  })
)(AddCommentContainer);