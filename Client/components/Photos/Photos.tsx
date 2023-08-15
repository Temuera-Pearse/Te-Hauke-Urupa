import Profile from '../../pages/Profile/Profile'

interface PhotoProps {
  src: string
  profileLink: string
}

function Photos({ src, profileLink }: PhotoProps) {
  return (
    <a href={profileLink} className="block">
      <img src={src} alt="Profile" className="w-full h-auto" />
    </a>
  )
}

export default Photos
