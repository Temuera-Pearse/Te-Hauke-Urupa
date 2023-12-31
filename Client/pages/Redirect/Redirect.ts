import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchedProfiles } from '../../api/profilesAPI'

function Redirect() {
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    const fn = async () => {
      try {
        const token = await getAccessTokenSilently()
        const user = await fetchedProfiles(token)
        navigate(`/${user.location_id}`, { replace: true })
      } catch (error) {
        console.error(error)
      }
    }
    fn()
  }, [navigate, getAccessTokenSilently])

  return null
}

export default Redirect
