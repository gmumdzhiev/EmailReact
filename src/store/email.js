const initialState = {
  emails: ['olmo', 'tom', 'nikos'],
}

export const addEmail = (email) => ({
  type: 'ADD_EMAIL',
  payload: email,
})
export const removeEmail = (email) => ({
  type: 'REMOVE_EMAIL',
  payload: email,
})

export const reducer = (state = initialState, action) => {
  console.log('action', action)
  if (action.type === 'ADD_EMAIL') {
    return {
      emails: [action.payload, ...state.emails]
    }
  }
  if (action.type === 'REMOVE_EMAIL') {
    return {
      emails: state.emails.filter(email => email !== action.payload),
    }
  }
  return state
}