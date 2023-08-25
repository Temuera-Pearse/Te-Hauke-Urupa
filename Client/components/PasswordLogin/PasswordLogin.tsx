import React, { useState } from 'react'
import { fetchVerification } from '../../api/passwordVerify'

function PasswordLogin() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async () => {
    const isCorrect = await fetchVerification(inputValue)

    if (isCorrect) {
      console.log('correct')
    } else {
      console.log('not correct')
    }

    setInputValue('')
  }

  return (
    <div>
      <input
        type="password"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default PasswordLogin
