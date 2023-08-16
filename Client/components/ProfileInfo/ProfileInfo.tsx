import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchedPerson } from '../../api/profilesAPI'
import { proBackSchema } from '../../../models/profile'
import Photos from '../Photos/Photos'

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
    return <p>Error fetching profile.</p>
  }

  if (!profile) {
    return <p>No profile available.</p>
  }

  return (
    <div>
      <div>
        <Photos
          key={profile.id}
          src={profile.profile_picture}
          profileLink={''}
        />
      </div>
      <h2>
        {profile.given_name} {profile.family_name}
      </h2>
      <p>Age: {profile.age}</p>
      <p>Gender: {profile.gender}</p>
    </div>
  )
}

export default ProfileInfo
