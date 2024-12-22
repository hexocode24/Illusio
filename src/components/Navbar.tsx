import { UserButton } from '@clerk/clerk-react'
import { Menu, Sparkles } from 'lucide-react'

interface NavbarProps {
  onMenuClick: () => void
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Illusio AI Studio
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'w-8 h-8',
            },
          }}
        />
      </div>
    </div>
  )
}

export default Navbar 