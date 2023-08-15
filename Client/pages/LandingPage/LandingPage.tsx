import React from 'react'
import PasswordLogin from '../../components/PasswordLogin/PasswordLogin'
import profiles from '../../../Server/routes/profiles'

function LandingPage() {
  const backgroundImage = 'public/images/background/kahuranaki-marae.webp'

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <PasswordLogin />
      </div>
    </div>
  )
}

export default LandingPage
