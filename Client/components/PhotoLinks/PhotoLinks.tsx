import React from 'react'
import Photos from '../Photos/Photos'
import { fetchedProfiles } from '../../api/profilesAPI'
import { useQuery } from 'react-query'
import { proBackSchema } from '../../../models/profile'

interface Props {
  data: proBackSchema[]
}

function PhotoLinks(props: Props) {
  const profiles = props.data
  console.log(profiles)
  const { isLoading, isError } = useQuery(
    'profile_picture',
    () => fetchedProfiles
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching photos.</p>
  }

  // Ensure 'photos' is an array before using .map
  if (!Array.isArray(profiles)) {
    console.log(profiles)
    return <p>No photos available.</p>
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
