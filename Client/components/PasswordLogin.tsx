import React, { useState } from 'react'

function PasswordLogin() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    alert(`You typed: ${inputValue}`)
    setInputValue('')
  }

  return (
    <div className="justify-center mt-8">
      <input
        type="password"
        id="myTextbox"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="password"
        className="w-full p-2 mt-1 border rounded shadow-sm focus:ring focus:ring-opacity-50"
        style={{ fontStyle: 'italic', color: 'grey' }}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </div>
  )
}

export default PasswordLogin
