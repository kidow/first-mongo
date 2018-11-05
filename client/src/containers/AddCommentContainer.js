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

  handleSubmit = () => {
    const { comment, commenter, CommentActions } = this.props
    if (comment && commenter) {
      CommentActions.initialize()
    } else {
      alert('bad')
    }
  }

  handleModify = () => {
    alert('modify')
  }

  handleRemove = () => {
    alert('remove')
  }
  
  render() {
    const { handleChange, handleSubmit, handleModify, handleRemove } = this
    const { comment, commenter } = this.props
    return (
      <AddComment 
        onChange={handleChange}
        onSubmit={handleSubmit}
        onModify={handleModify}
        onRemove={handleRemove}
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