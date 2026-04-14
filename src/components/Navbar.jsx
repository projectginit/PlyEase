import { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isLoggedIn, logout } = useContext(AuthContext)
  const { getCartCount } = useContext(CartContext)
  const cartCount = getCartCount()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/')
  }


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

          {/* Auth Buttons & Cart - Desktop */}
          <div className='hidden md:flex space-x-4 items-center'>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => navigate('/orders')}
                  className='font-body text-ink-mid hover:text-wood transition-colors font-semibold'
                >
                  Orders
                </button>
                <button 
                  onClick={() => navigate('/cart')}
                  className='relative p-2 text-wood hover:text-wood-dark transition-colors mr-2 cursor-pointer'
                  aria-label="Cart"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-wood-dark rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
                {/* User avatar/logout */}
                <div className="relative group cursor-pointer ml-2">
                  <div className="w-10 h-10 rounded-full bg-wood flex items-center justify-center text-white font-bold text-lg border-2 border-wood-pale">
                    P
                  </div>
                  <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-wood-pale/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-ink hover:bg-cream-light font-body font-medium transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')} className='font-body px-6 py-2 text-wood border-2 border-wood rounded-lg hover:bg-wood-pale transition-colors font-semibold'>
                  Login
                </button>
                <button onClick={() => navigate('/login')} className='font-body px-6 py-2 bg-wood text-cream rounded-lg hover:bg-wood-dark transition-colors font-semibold'>
                  Sign Up
                </button>
              </>
            )}
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

              {/* Mobile Auth Buttons & Cart */}
              <div className='pt-4 border-t border-wood-pale space-y-2'>
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => { setIsMenuOpen(false); navigate('/orders'); }}
                      className='block w-full text-left font-body px-4 py-2 text-wood hover:bg-wood-pale rounded-lg transition-colors font-semibold'
                    >
                      My Orders
                    </button>
                    <button 
                      onClick={() => { setIsMenuOpen(false); navigate('/cart'); }}
                      className='flex justify-between items-center w-full font-body px-4 py-2 bg-wood-pale/30 text-wood-dark rounded-lg hover:bg-wood-pale transition-colors font-semibold'
                    >
                      <span>Cart</span>
                      {cartCount > 0 && (
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-wood rounded-full">
                          {cartCount} items
                        </span>
                      )}
                    </button>
                    <button onClick={handleLogout} className='block w-full font-body px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-semibold text-left'>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className='block w-full font-body px-4 py-2 text-wood border-2 border-wood rounded-lg hover:bg-wood-pale transition-colors font-semibold'>
                      Login
                    </button>
                    <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className='block w-full font-body px-4 py-2 bg-wood text-cream rounded-lg hover:bg-wood-dark transition-colors font-semibold'>
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

