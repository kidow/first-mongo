import { Map, List, fromJS } from 'immutable'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import * as api from '../lib/api'

const INITIALIZE = 'comment/INITIALIZE'
const CHANGE_INPUT = 'comment/CHANGE_INPUT'
const GET_COMMENT = 'comment/GET_COMMENT'
const POST_COMMENT = 'comment/POST_COMMENT'
const MODIFY_COMMENT = 'comment/MODIFY_COMMENT'
const REMOVE_COMMENT = 'comment/REMOVE_COMMENT'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const getComment = createAction(GET_COMMENT, api.getComments)
export const postComment = createAction(POST_COMMENT, api.postComment)
export const modifyComment = createAction(MODIFY_COMMENT, api.modifyComment)
export const removeComment = createAction(REMOVE_COMMENT, api.removeComment)

const initialState = Map({
  commenter: '',
  comment: '',
  comments: List()
})

export default handleActions({
  [INITIALIZE]: (state, action) => {
    return state.set('commenter', '')
                .set('comment', '')
  },
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.set(name, value)
  },
  ...pender({
    type: GET_COMMENT,
    onSuccess: (state, action) => {
      const { data: comments } = action.payload
      return state.set('commenter', fromJS(comments))
    }
  }),
  ...pender({
    type: POST_COMMENT,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data
      return state.set('commentId', _id)
    }
  }),
  ...pender({
    type: MODIFY_COMMENT,
    onSuccess: (state, action) => {

    }
  }),
  ...pender({
    type: REMOVE_COMMENT,
    onSuccess: (state, action) => {

    }
  })
}, initialState)