import React, { useState } from 'react'
import { fetchVerification } from '../../api/passwordVerify'
import { useNavigate } from 'react-router-dom'

function PasswordLogin() {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const isCorrect = await fetchVerification(inputValue)

    if (isCorrect) {
      console.log('correct')
      navigate('/main')
    } else {
      console.log('not correct')
    }

    setInputValue('')
  }

  return (
    <div className="flex flex-col rad justify-center items-center bg-gray-100">
      <div className="text-center">
        <input
          type="password"
          id="myTextbox"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="password"
          className="w-48 p-2 rounded shadow-sm focus:ring focus:ring-opacity-50"
          style={{ fontStyle: 'italic', color: 'grey' }}
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          login
        </button>
      </div>
    </div>
  )
}

export default PasswordLogin
