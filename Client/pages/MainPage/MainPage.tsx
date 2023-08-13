import Header from '../../components/Header/Header'
import PhotoLinks from '../../components/PhotoLinks/PhotoLinks'
import SearchBar from '../../components/SearchBar/SearchBar'

function MainPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="my-32">
        <SearchBar />
      </div>
      <div>
        <PhotoLinks />
      </div>
    </div>
  )
}

export default MainPage
