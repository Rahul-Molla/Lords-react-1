import React from 'react'
import './PasswordForm.scss'


const PasswordForm = () => {
  return (
    <div className='form-div'>
      <h1>Enter details</h1>
      <form action="">
        <label htmlFor="website">Enter website name</label>
        <input id='website' type="text" />

        <label htmlFor="title">Enter User name</label>
        <input id='title' type="text" />

        <label htmlFor="password">Enter Password</label>
        <input id='password' type="text" />
       
       <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default PasswordForm
