import React from 'react'
import { Link } from 'react-router-dom'
import Photos from '../Photos/Photos'
import { fetchedProfiles } from '../../api/profilesAPI'
import { useQuery } from 'react-query'
import { proBackSchema } from '../../../models/profile'

interface Props {
  data: proBackSchema[]
}

function PhotoLinks(props: Props) {
  const {
    data: profiles,
    isLoading,
    isError,
  } = useQuery('profiles', fetchedProfiles)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching profiles.</p>
  }

  if (!Array.isArray(profiles)) {
    return <p>No profiles available.</p>
  }
  console.log(profiles)

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {props.data.map((profileData) => (
        <Link
          key={profileData.id}
          to={`/main/${profileData.id}`}
          className="block"
        >
          <Photos
            src={profileData.profile_picture}
            profileLink={`/main/${profileData.id}`}
          />
        </Link>
      ))}
    </div>
  )
}

export default PhotoLinks
