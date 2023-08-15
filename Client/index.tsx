import { createRoot } from 'react-dom/client'
import { Suspense, lazy, useEffect } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './components/App/App'
import MainPage from './pages/MainPage/MainPage'
import LandingPage from './pages/LandingPage/LandingPage'
import Profile from './pages/Profile/Profile'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
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
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <AppProvider />
      </Suspense>
    </QueryClientProvider>
  )
})
