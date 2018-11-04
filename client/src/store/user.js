import { Map } from 'immutable'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'

const CHANGE_INPUT = 'user/CHANGE_INPUT'
const GET_USER = 'user/GET_USER'
const POST_USER = 'user/POST_USER'

export const changeInput = createAction(CHANGE_INPUT)
export const getUser = createAction(GET_USER)
export const postUser = createAction(POST_USER)

const initialState = Map({
  name: '',
  age: '',
  error: '',
  married: ''
})

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.set(name, value) 
  },
  ...pender({
    type: GET_USER,
    onSuccess: (state, action) => {
      const { name, age, married } = action.payload.data
      return state.set('name', name)
                  .set('age', age)
                  .set('married', married)
    }
  }),
  ...pender({
    type: POST_USER,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data
      return state.set('userId', _id)
    }
  })
}, initialState)