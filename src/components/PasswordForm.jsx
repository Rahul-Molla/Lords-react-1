import React, { useState } from 'react'
import './PasswordForm.scss'


const PasswordForm = ({onSavePassword}) => {

  const [title, setTitle] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  console.log(title, username, password);

  const handleClick = (e) => {
    e.preventDefault()
    console.log(title, username, password);
    
    onSavePassword({
      title, username, password
    })

    setTitle("")
    setUsername("")
    setPassword("")


  }


  return (
    <div className='form-div'>
      <h1>Enter details</h1>
      <form action="">
        <label htmlFor="website">Enter a website title</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} required id='website' type="text" />

        <label htmlFor="title">Enter User name</label>
        <input onChange={(e) => setUsername(e.target.value)} value={username} required id='title' type="text" />

        <label htmlFor="password">Enter Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} required id='password' type="text" />

        <button type='submit' onClick={(e) => handleClick(e)}>Save</button>
      </form>
    </div>
  )
}

export default PasswordForm
