import React, { useState } from 'react'

function PasswordLogin() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async () => {
    const response = await fetch('/api/v1/check-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: inputValue }),
    })

    const data = await response.json()

    if (data.correct) {
      // Password is correct, take appropriate action
    } else {
      // Password is incorrect, show error message
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
