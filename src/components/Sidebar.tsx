import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Image,
  Wand2,
  MessageSquare,
  Video,
  Music,
  Code,
  Settings,
  Brush,
  Share2,
  Sparkles,
} from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Image, label: 'Image Generation', path: '/dashboard/image' },
  { icon: Wand2, label: 'AI Enhancement', path: '/dashboard/enhance' },
  { icon: MessageSquare, label: 'Chat Assistant', path: '/dashboard/chat' },
  { icon: Video, label: 'Video Generation', path: '/dashboard/video' },
  { icon: Music, label: 'Music Generation', path: '/dashboard/music' },
  { icon: Code, label: 'Code Assistant', path: '/dashboard/code' },
  { icon: Brush, label: 'Art Styles', path: '/dashboard/styles' },
  { icon: Share2, label: 'Share & Export', path: '/dashboard/share' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
]

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 relative group">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <span className="relative">
            Illusio AI
            <span className="absolute inset-0 blur-lg bg-primary/20 group-hover:bg-primary/40 transition-all duration-300" />
          </span>
        </h2>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm relative ${
                isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-full bg-primary"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar 