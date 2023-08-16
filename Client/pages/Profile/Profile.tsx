import { useParams } from 'react-router-dom'
import { proBackSchema } from '../../../models/profile'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import { useQuery } from 'react-query'
import { fetchedPerson } from '../../api/profilesAPI'

function Profile() {
  const defaultProfileData: proBackSchema = {
    profile_picture: '',
    family_name: '',
    given_name: '',
    address: '',
    gender: '',
    Occupation: '',
    age: '',
    birthDate: '',
    deathDate: '',
    intermentDate: '',
    intermentType: '',
    placement: '',
    depth: '',
    purchaseDate: '',
    funeralDirector: '',
    notes: '',
    headstonePermitNumber: '',
    inscriptions: '',
    headstonePicture: '',
    headstoneLocationPic: '',
    id: 0,
  }
  const { id } = useParams()
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery('profile', async () => fetchedPerson(Number(id)))

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching profile.</p>
  }

  const selectedProfile = profileData ? profileData[0] : defaultProfileData

  return (
    <div>
      <h1> im the profile </h1>
      {profileData ? (
        <ProfileInfo id={Number(id)} data={[selectedProfile]} />
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  )
}

export default Profile
