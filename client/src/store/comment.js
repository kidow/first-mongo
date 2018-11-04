import { Map } from 'immutable'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'

const CHANGE_INPUT = 'comment/CHANGE_INPUT'
const GET_COMMENT = 'comment/GET_COMMENT'
const POST_COMMENT = 'comment/POST_COMMENT'

export const changeInput = createAction(CHANGE_INPUT)
export const getComment = createAction(GET_COMMENT)
export const postComment = createAction(POST_COMMENT)

const initialState = Map({
  commenter: '',
  comment: ''
})

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.set(name, value)
  },
  ...pender({
    type: GET_COMMENT,
    onSuccess: (state, action) => {
      const { comment, commenter } = action.payload.data
      return state.set('commenter', commenter)
                  .set('comment', comment)
    }
  }),
  ...pender({
    type: POST_COMMENT,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data
      return state.set('commentId', _id)
    }
  })
}, initialState)