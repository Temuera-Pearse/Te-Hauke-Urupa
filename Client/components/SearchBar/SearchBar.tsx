import React, { useState } from 'react'
import { proBackSchema } from '../../../models/profile'
import { fetchedProfiles } from '../../api/profilesAPI'

interface Props {
  profiles: proBackSchema[]
  setFilteredProfiles: React.Dispatch<React.SetStateAction<proBackSchema[]>>
}

function SearchBar({ profiles, setFilteredProfiles }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    const searchTerm = inputValue.trim().toLowerCase()

    if (searchTerm === '') {
      setFilteredProfiles(profiles)
    } else {
      const filteredProfiles = profiles.filter(
        (profile) =>
          profile.given_name.toLowerCase().includes(searchTerm) ||
          profile.family_name.toLowerCase().includes(searchTerm)
      )
      setFilteredProfiles(filteredProfiles)
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
