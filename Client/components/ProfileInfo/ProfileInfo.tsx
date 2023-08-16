import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchedPerson } from '../../api/profilesAPI'
import { proBackSchema } from '../../../models/profile'

interface Props {
  id: number
  data: proBackSchema[]
}

function ProfileInfo(props: Props) {
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery('profile', async () => fetchedPerson(props.id))

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching profiles.</p>
  }

  if (!profile || !Array.isArray(profile) || profile.length === 0) {
    console.log(profile)
    return <p>No profile available.</p>
  }

  const selectedProfile = profile[0]

  return (
    <div>
      <h2>
        {selectedProfile.given_name} {selectedProfile.family_name}
      </h2>
      <p>Age: {selectedProfile.age}</p>
      <p>Gender: {selectedProfile.gender}</p>
      {/* Render other profile information here */}
    </div>
  )
}

export default ProfileInfo
