import React from 'react'
const TextField = ({ meta, input, ...props }) => {
  return (
    <div>
      <div>{meta.dirty && meta.invalid ? meta.error : ''}</div>
      <input {...input} {...props} />
    </div>
  )
}
export default TextField