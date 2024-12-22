import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  )
}

export default App
