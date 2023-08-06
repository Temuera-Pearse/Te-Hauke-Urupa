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

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}></Route>
  </Route>
)
