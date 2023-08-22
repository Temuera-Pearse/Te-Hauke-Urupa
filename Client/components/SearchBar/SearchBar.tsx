import React, { useState } from 'react'
import { proBackSchema } from '../../../models/profile'
import { fetchProfileByName } from '../../api/profilesAPI' // Import the fetchProfiles function here

interface Props {
  setFilteredProfiles: React.Dispatch<React.SetStateAction<proBackSchema[]>>
}

function SearchBar({ setFilteredProfiles }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async () => {
    const searchTerm = inputValue.trim().toLowerCase()

    if (searchTerm === '') {
      setFilteredProfiles([])
      return
    }

    try {
      const filteredProfiles = await fetchProfileByName(searchTerm)
      setFilteredProfiles(filteredProfiles)
      console.log(filteredProfiles)
    } catch (error) {
      console.error('Error searching profiles:', error)
      setFilteredProfiles([]) // Clear the filtered profiles on error
    }

    setInputValue('')
  }

  return (
    <div className="flex flex-col rad justify-center items-center bg-gray-100">
      <div className="text-center w-96">
        <input
          type="search"
          id="myTextbox"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
          className="p-2 rounded shadow-sm focus:ring focus:ring-opacity-50 w-full max-w-full"
          style={{ fontStyle: 'italic', color: 'grey' }}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
