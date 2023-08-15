import React, { useEffect, useState } from 'react'
import Photos from '../Photos/Photos'
import { fetchedProfiles } from '../../api/profilesAPI' // You'll need to import your API function here
import { useQuery } from 'react-query' // Assuming you are using react-query
import { proBackSchema } from '../../../models/profile'

interface Props {
  data: proBackSchema[]
}

function PhotoLinks(props: Props) {
  const {
    data: profiles,
    isLoading,
    isError,
  } = useQuery('profiles', fetchedProfiles) // Use the useQuery hook

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching profiles.</p>
  }

  // Ensure 'profiles' is an array before using .map
  if (!Array.isArray(profiles)) {
    return <p>No profiles available.</p>
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {profiles.map((profileData) => (
        <Photos
          key={profileData.id}
          src={profileData.profile_picture}
          profileLink={''}
        />
      ))}
    </div>
  )
}

export default PhotoLinks
