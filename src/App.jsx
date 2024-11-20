import React from 'react'
import Header from './components/Header'
import PasswordForm from './components/PasswordForm'
import PasswordList from './components/PasswordList'

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <PasswordForm />

        <div>
          <PasswordList />
        </div>
      </div>

    </>
  )
}

export default App
