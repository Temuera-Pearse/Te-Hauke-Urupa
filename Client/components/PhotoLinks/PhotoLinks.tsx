import { useEffect, useState } from 'react'
import Photos from '../Photos/Photos'
import { fetchProfilePics } from '../../api/profilesAPI'
import { useQuery } from 'react-query'

function PhotoLinks() {
  const {
    data: photos,
    isLoading,
    isError,
  } = useQuery('photos', fetchProfilePics)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching photos.</p>
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {photos.map((photo, index) => (
        <Photos key={index} src={photo.src} profileLink={photo.profileLink} />
      ))}
    </div>
  )
}

export default PhotoLinks
