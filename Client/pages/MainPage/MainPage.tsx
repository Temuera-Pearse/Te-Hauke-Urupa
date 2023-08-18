import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import PhotoLinks from '../../components/PhotoLinks/PhotoLinks'
import SearchBar from '../../components/SearchBar/SearchBar'
import { proBackSchema } from '../../../models/profile'
import { fetchedProfiles } from '../../api/profilesAPI'

function MainPage() {
  const [profiles, setProfiles] = useState<proBackSchema[]>([])
  const [filteredProfiles, setFilteredProfiles] = useState<proBackSchema[]>([])

  useEffect(() => {
    // Fetch profiles using the API function
    fetchedProfiles()
      .then((data) => {
        setProfiles(data)
        setFilteredProfiles(data)
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error)
      })
  }, [])

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="my-32">
        <SearchBar
          profiles={profiles}
          setFilteredProfiles={setFilteredProfiles}
        />{' '}
      </div>
      <div>
        <PhotoLinks />
      </div>
    </div>
  )
}

export default MainPage
