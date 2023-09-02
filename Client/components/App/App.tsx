import { Outlet, Route, Navigate } from 'react-router-dom'
// import PasswordProvider from '../../context/passwordProvider'
// import usePasswordContext from '../../context/UsePasswordContext'

function App() {
  // const { isPasswordEntered } = usePasswordContext()

  // if (!isPasswordEntered) {
  //   return <Navigate to="/LandingPage" />
  // }

  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
