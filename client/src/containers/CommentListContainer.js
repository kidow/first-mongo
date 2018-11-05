import React, { Component } from 'react';
import { CommentList } from '../components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from '../store/comment'

class CommentListContainer extends Component {
  getCommentsList = () => {
    const { CommentActions } = this.props
    CommentActions.getComment()
  }

  handleModify = () => {
    const { CommentActions, match } = this.props
    const { id } = match.params
    CommentActions.modify(id)
  }

  handleRemove = () => {
    const { CommentActions, match } = this.props
    const { id } = match.params
    CommentActions.remove(id)
  }

  componentDidMount() {
    this.getCommentsList()
  }

  render() {
    const { handleModify, handleRemove, comments } = this
    return (
      <CommentList 
        onModify={handleModify}
        onRemove={handleRemove}
        comments={comments}
      />
    );
  }
}

export default connect(
  state => ({
    comments: state.comment.get('comments')
  }),
  dispacth => ({
    CommentActions: bindActionCreators(commentActions, dispacth)
  })
)(CommentListContainer);