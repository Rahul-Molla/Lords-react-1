import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import PasswordForm from './components/PasswordForm'
import PasswordList from './components/PasswordList'

const App = () => {

const [passwords, setPasswords] = useState([])
const [editPassword, setEditPassword] = useState(null)
console.log(passwords);

useEffect(()=>{
  const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || []
  setPasswords(storedPasswords)
}, [])


useEffect(()=>{
  localStorage.setItem("passwords", JSON.stringify(passwords))
}, [passwords])

const handleSavePassword = (password) =>{
  setPasswords([...passwords, {...password, id : Date.now()}])
}


  return (
    <>
      <Header />
      <div className='container'>
        <PasswordForm 
        onSavePassword = {handleSavePassword}
        />

        <div>
          <PasswordList
          passwords = { passwords }
          />
        </div>
      </div>

    </>
  )
}

export default App
