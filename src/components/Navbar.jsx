import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='sticky top-0 z-50 bg-cream shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <button
              onClick={() => {
                navigate('/')
                window.scrollTo(0, 0)
                setIsMenuOpen(false)
              }}
              className='text-3xl font-bold font-display text-wood hover:text-wood-dark transition-colors cursor-pointer'
            >
              PlyEase
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex space-x-8'>
            <button
              onClick={() => scrollToSection('services')}
              className='font-body text-ink-mid hover:text-wood transition-colors font-semibold'
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className='font-body text-ink-mid hover:text-wood transition-colors font-semibold'
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className='font-body text-ink-mid hover:text-wood transition-colors font-semibold'
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('ctabanner')}
              className='font-body text-ink-mid hover:text-wood transition-colors font-semibold'
            >
              Contact
            </button>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className='hidden md:flex space-x-4'>
            <button className='font-body px-6 py-2 text-wood border-2 border-wood rounded-lg hover:bg-wood-pale transition-colors'>
              Login
            </button>
            <button className='font-body px-6 py-2 bg-wood text-cream rounded-lg hover:bg-wood-dark transition-colors'>
              Sign Up
            </button>
          </div>

          {/* Hamburger Menu Icon - Mobile */}
          <button
            onClick={toggleMenu}
            className='md:hidden flex flex-col space-y-1'
          >
            <span className={`block w-6 h-0.5 bg-wood transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-wood transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-wood transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-cream border-t border-wood-pale'>
            <div className='px-4 py-4 space-y-3'>
              <button
                onClick={() => scrollToSection('services')}
                className='block w-full text-left font-body text-ink-mid hover:text-wood transition-colors font-semibold py-2'
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className='block w-full text-left font-body text-ink-mid hover:text-wood transition-colors font-semibold py-2'
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className='block w-full text-left font-body text-ink-mid hover:text-wood transition-colors font-semibold py-2'
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('ctabanner')}
                className='block w-full text-left font-body text-ink-mid hover:text-wood transition-colors font-semibold py-2'
              >
                Contact
              </button>

              {/* Mobile Auth Buttons */}
              <div className='pt-4 border-t border-wood-pale space-y-2'>
                <button className='block w-full font-body px-4 py-2 text-wood border-2 border-wood rounded-lg hover:bg-wood-pale transition-colors'>
                  Login
                </button>
                <button className='block w-full font-body px-4 py-2 bg-wood text-cream rounded-lg hover:bg-wood-dark transition-colors'>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

