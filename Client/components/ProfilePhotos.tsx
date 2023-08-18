import React from 'react'
import { Link } from 'react-router-dom'

interface PhotoProps {
  src: string
}

function ProfileImage({ src }: PhotoProps) {
  return <img src={src} alt="Profile" className="w-48 h-auto" />
}

export default ProfileImage
