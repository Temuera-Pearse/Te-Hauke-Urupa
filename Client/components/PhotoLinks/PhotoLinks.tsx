import Photos from '../Photos/Photos'

function PhotoLinks() {
  const photos = [
    {
      src: 'public/images/test-photos/maori-pair.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people1.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people2.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people3.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people4.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people5.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people6.jpeg',
      profileLink: '/profiles/profile1',
    },
    {
      src: 'public/images/test-photos/maori-people7.jpeg',
      profileLink: '/profiles/profile1',
    },
    // {
    //   src: 'public/images/test-photos/maori-people8.jpg',
    //   profileLink: '/profiles/profile1',
    // },
    {
      src: 'public/images/test-photos/maori-people9.webp',
      profileLink: '/profiles/profile1',
    },
  ]
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {photos.map((photo, index) => (
        <Photos key={index} src={photo.src} profileLink={photo.profileLink} />
      ))}
    </div>
  )
}

export default PhotoLinks
