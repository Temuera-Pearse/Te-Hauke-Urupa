import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchedPerson } from '../../api/profilesAPI'
import ProfileImage from '../ProfilePhotos' // Import the ProfileImage component

interface ProfileData {
  profile_picture: string
  family_name: string
  given_name: string
  gender: string
  age: string
}

function ProfileInfo() {
  const { id } = useParams() // Get the 'id' from the route parameters
  const { data, isLoading, isError } = useQuery('profile', () =>
    fetchedPerson(Number(id))
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching profile.</p>
  }

  if (!data) {
    return <p>No profile available.</p>
  }

  console.log(data)

  return (
    <div>
      <ProfileImage
        src={`${process.env.VITE_BASE_URL}/${data.profile_picture}`}
      />
      <div>
        <p>
          {data.given_name} {data.family_name}
        </p>
        <p>Age: {data.age}</p>
        <p>Gender: {data.gender}</p>
      </div>
    </div>
  )
}

export default ProfileInfo
