import { createStore, combineReducers } from 'redux'
import { reducer as emailReducer } from './email.js'
import { reducer as formReducer } from 'redux-form'
const reducer = combineReducers({
  email: emailReducer,
  form: formReducer,
})
const store = createStore(reducer)
export default store