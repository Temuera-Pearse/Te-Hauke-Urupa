import { createRoot } from 'react-dom/client'
import { Suspense, lazy, useEffect } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App/App'
import MainPage from './pages/MainPage/MainPage'
import LandingPage from './pages/LandingPage/LandingPage'
import Profile from './pages/Profile/Profile'
import Redirect from './pages/Redirect/Redirect'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="redirect" element={<Redirect />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/main/:id" element={<Profile />} />
    </Route>
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-6y46q58gseefv2ag.us.auth0.com"
      clientId="SkptOkvgTHbSvYEFNKJreFxvWbLNW1fz"
      cacheLocation="localstorage"
      authorizationParams={{
        audience: 'https://neighbours/api',
        redirect_uri: `${window.location.origin}/newmarket`,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <AppProvider />
        </Suspense>
      </QueryClientProvider>
    </Auth0Provider>
  )
})
