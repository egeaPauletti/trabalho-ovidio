import { Toaster } from "react-hot-toast"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthScreen from './pages/auth'
import DashboardScreen from './pages/dashboard'
import HomeScren from './pages/home'

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" element={<HomeScren />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </>
  )
}

export default App
