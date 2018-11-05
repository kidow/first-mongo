import axios from 'axios'

export const getUsers = () => axios.get('/api/users')
export const postUser = ({name, age, married}) => axios.post('/api/users', {name, age, married})
export const getComments = () => axios.get('/api/comments')
export const postComment = ({comment, commenter}) => axios.post('/api/comments', {comment, commenter})
export const modifyComment = id => axios.patch(`/api/comments/${id}`)
export const removeComment = id => axios.delete(`/api/comments/${id}`)