import React, { useState } from 'react'

function SearchBar() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    alert(`You typed: ${inputValue}`)
    setInputValue('')
  }

  return (
    <div className="flex flex-col rad justify-center items-center bg-gray-100">
      <div className="text-center w-96">
        {' '}
        <input
          type="search"
          id="myTextbox"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
          className="p-2 rounded shadow-sm focus:ring focus:ring-opacity-50 w-full max-w-full"
          style={{ fontStyle: 'italic', color: 'grey' }}
        />
      </div>
    </div>
  )
}

export default SearchBar
