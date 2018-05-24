import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { addEmail } from './store/email.js'
import TextField from './TextField.js'

const addEmailSubmit = (values, dispatch) => {
  dispatch(addEmail(values.email))
}

const addEmailValidate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  errors._error = 'some global error'
  return errors
}

const AddEmailForm = props => {
  console.log('form props', props)
  const {
    handleSubmit,
    invalid,
  } = props
  return (
    <form onSubmit={handleSubmit(addEmailSubmit)}>
      <Field name="email" component={TextField} />
      <button disabled={invalid} type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'AddEmail',
  validate: addEmailValidate,
})(AddEmailForm)