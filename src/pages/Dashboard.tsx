import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ImageGenerator from './dashboard/ImageGenerator'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed inset-y-0 z-50 transition-transform duration-300 lg:relative lg:transform-none ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container py-8">
            <Routes>
              <Route index element={<div className="text-2xl font-bold">Welcome to Illusio AI Studio</div>} />
              <Route path="image" element={<ImageGenerator />} />
              <Route path="enhance" element={<div>AI Enhancement Coming Soon</div>} />
              <Route path="chat" element={<div>Chat Assistant Coming Soon</div>} />
              <Route path="video" element={<div>Video Generation Coming Soon</div>} />
              <Route path="music" element={<div>Music Generation Coming Soon</div>} />
              <Route path="code" element={<div>Code Assistant Coming Soon</div>} />
              <Route path="styles" element={<div>Art Styles Coming Soon</div>} />
              <Route path="share" element={<div>Share & Export Coming Soon</div>} />
              <Route path="settings" element={<div>Settings Coming Soon</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard 