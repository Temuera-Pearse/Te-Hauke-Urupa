import React from 'react'
import { Link } from 'react-router-dom'
import Photos from '../Photos/Photos'
import { fetchedProfiles } from '../../api/profilesAPI'
import { useQuery } from 'react-query'
import { proBackSchema } from '../../../models/profile'

function PhotoLinks() {
  const { data, isLoading, isError } = useQuery('profiles', fetchedProfiles)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching profiles.</p>
  }

  if (!Array.isArray(data)) {
    return <p>No profiles available.</p>
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data?.map((profileData) => (
        <Photos
          key={profileData.id}
          src={profileData.profile_picture}
          profileLink={`/main/${profileData.id}`}
        />
      ))}
    </div>
  )
}

export default PhotoLinks
