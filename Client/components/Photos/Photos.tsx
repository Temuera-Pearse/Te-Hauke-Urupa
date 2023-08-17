import React from 'react'
import { Link } from 'react-router-dom'

interface PhotoProps {
  src: string
  profileLink: string
}

function Photos({ src, profileLink }: PhotoProps) {
  return (
    <Link to={profileLink} className="block">
      <img src={src} alt="Profile" className="w-full h-auto" />
    </Link>
  )
}

export default Photos
