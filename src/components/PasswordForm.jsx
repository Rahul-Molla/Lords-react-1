import React, { useEffect, useState } from 'react'
import './PasswordForm.scss'


const PasswordForm = ({ onSavePassword, editPassword }) => {

  const [title, setTitle] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (editPassword) {
      setTitle(editPassword.title)
      setUsername(editPassword.username)
      setPassword(editPassword.password)
    }
  }, [editPassword])


  const handleClick = (e) => {
    e.preventDefault()
   

    onSavePassword({ title, username, password, id: editPassword?.id || null })

    setTitle("")
    setUsername("")
    setPassword("")


  }


  return (
    <div className='form-div'>
      <h1>Enter details</h1>
      <form action="">
        <label htmlFor="website">Enter a Website Title</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} required id='website' type="text" placeholder='Enter Your Title'/>

        <label htmlFor="title">Enter UserName</label>
        <input onChange={(e) => setUsername(e.target.value)} value={username} required id='title' type="text" placeholder='Enter Your UserName'/>

        <label htmlFor="password">Enter Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} required id='password' type="text" placeholder='Enter Your Password'/>

        <button type='submit' onClick={(e) => handleClick(e)}>
          { 
            editPassword ? "Update Password" : "Save Password"
          }

        </button>
      </form>
    </div>
  )
}

export default PasswordForm
