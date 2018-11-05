import React, { Component } from 'react';
import { CommentList } from '../components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from '../store/comment'

class CommentListContainer extends Component {
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
  render() {
    const { handleModify, handleRemove } = this
    return (
      <CommentList 
        onModify={handleModify}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  state => ({
    
  }),
  dispacth => ({
    CommentActions: bindActionCreators(commentActions, dispacth)
  })
)(CommentListContainer);