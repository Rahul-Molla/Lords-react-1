import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import PasswordForm from './components/PasswordForm'
import PasswordList from './components/PasswordList'

const App = () => {

const [passwords, setPasswords] = useState([])
const [editPassword, setEditPassword] = useState(null)


useEffect(()=>{
  const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || []
  setPasswords(storedPasswords)
}, [])


useEffect(()=>{
  localStorage.setItem("passwords", JSON.stringify(passwords))
}, [passwords])

const handleSavePassword = (password) =>{ 
  if(editPassword){
    setPasswords(passwords.map(p => (p.id === editPassword.id ? password : p ) ))
    setEditPassword(null)
  }
  else{
    setPasswords([...passwords, {...password, id : Date.now()}])
  }
}


const handleDeletePassword = (id) =>{
  setPasswords(passwords.filter((p)=> p.id !== id))
}


  return (
    <>
      <Header />
      <div className='container'>
        <PasswordForm 
        onSavePassword = {handleSavePassword}
        editPassword = {editPassword}
        />

        <div>
          <PasswordList
          passwords = { passwords }
          onDelete = {handleDeletePassword}
          onEdit = { setEditPassword}
          />
        </div>
      </div>

    </>
  )
}

export default App
