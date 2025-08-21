import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Home } from './pages/Home/Home.jsx'
import { TheTeam } from './pages/TheTeam.jsx'
import { ESummit } from './pages/ESummit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/team' element={<TheTeam />} />
      <Route path='/esummit-25' element={<ESummit />} />

      {/* Add more routes as needed */}
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);