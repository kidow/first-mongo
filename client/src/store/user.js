import { Map, List } from 'immutable'
import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import * as api from '../lib/api'

const INITIALIZE = 'user/INITIALIZE'
const CHANGE_INPUT = 'user/CHANGE_INPUT'
const TOGGLE = 'user/TOGGLE'
const GET_USER = 'user/GET_USER'
const POST_USER = 'user/POST_USER'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const toggle = createAction(TOGGLE)
export const getUser = createAction(GET_USER, api.getUsers)
export const postUser = createAction(POST_USER, api.postUser)

const initialState = Map({
  name: '',
  age: '',
  married: false,
  users: List()
})

export default handleActions({
  [INITIALIZE]: (state, action) => {
    return state.set('name', '')
                .set('age', '')
                .set('married', false)
  },
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.set(name, value) 
  },
  [TOGGLE]: (state, action) => {
    return state.update('married', married => !married)
  },
  ...pender({
    type: GET_USER,
    onSuccess: (state, action) => {
      const { data: users } = action.payload
      return state.set('users', users)
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