import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCreateServiceAndAddToCart = (serviceType) => {
    if (serviceType === 'sampleKit') {
      addToCart({
        id: 'service-sample-kit',
        name: 'Sample Kit (7 ply options)',
        price: '₹249',
        image: 'https://images.unsplash.com/photo-1533090635-46aaab38f4d9?q=80&w=2938&auto=format&fit=crop',
        category: 'Service'
      }, 1);
    } else if (serviceType === 'doorstep') {
      addToCart({
        id: 'service-doorstep',
        name: 'Doorstep Assist',
        price: '₹349',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
        category: 'Service'
      }, 1);
    }
    navigate('/cart');
  };

  return (
    <section id="services" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-wood font-body text-sm md:text-base font-semibold tracking-wide mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-ink mb-4">
            Two Ways to <span className="text-wood font-display italic">Experience</span> the Wood.
          </h2>
          <p className="text-ink-light font-body text-base md:text-lg max-w-2xl mx-auto">
            Never buy blind again. We put the material in your hands before you commit to an order.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: Sample Kit */}
          <div className="bg-cream-light rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            {/* Icon and Label */}
            <div>
              <div className="w-16 h-16 bg-wood-pale rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-wood" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v2H3V3zm10 0h8v2h-8V3zM3 7h8v2H3V7zm10 0h8v2h-8V7zM3 11h8v2H3v-2zm10 0h8v2h-8v-2zM3 15h8v2H3v-2zm10 0h8v2h-8v-2z"/>
                </svg>
              </div>
              <p className="text-wood font-body text-xs font-semibold tracking-wider mb-3">PLY SAMPLE</p>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-ink mb-3">
                Sample Kit
              </h3>
              <p className="text-ink-light font-body text-sm md:text-base leading-relaxed mb-6">
                Receive up to 7 hand-picked ply swatches couriered to your address. Feel the grain, check the finish, and decide with confidence.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-ink-mid font-body text-sm">Up to 7 ply options</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-ink-mid font-body text-sm">2"x2" real-material swatches</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-ink-mid font-body text-sm">Courier delivered</span>
              </div>
            </div>

            {/* Price and Badge */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold font-display text-wood">₹249</span>
                <span className="bg-forest-light text-forest font-body text-xs font-semibold px-3 py-1 rounded-full">
                  100% redeemable on order
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => handleCreateServiceAndAddToCart('sampleKit')}
              className="w-full bg-wood text-cream font-body font-semibold py-3 md:py-4 rounded-full hover:bg-wood-dark transition-colors duration-300">
              Order Sample Kit
            </button>
          </div>

          {/* Card 2: Doorstep Assist */}
          <div className="relative bg-wood rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            {/* Most Popular Badge */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4">
              <div className="bg-wood-pale text-wood font-body text-xs font-bold px-4 py-2 rounded-full transform rotate-12">
                MOST POPULAR
              </div>
            </div>

            {/* Icon and Label */}
            <div className="hover:border-t hover:border-wood">
              <div className="w-16 h-16 bg-wood-dark rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="text-wood-pale font-body text-xs font-semibold tracking-wider mb-3">LAMINATES</p>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-cream mb-3">
                Doorstep Assist
              </h3>
              <p className="text-cream-light font-body text-sm md:text-base leading-relaxed mb-6">
                An expert executive visits your doorstep with full sample books, guides you through laminate patterns, finishes, and helps decide order quantity.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-wood-pale flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-cream font-body text-sm">Expert design consultation</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-wood-pale flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-cream font-body text-sm">Full sample book walkthrough</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-wood-pale flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-cream font-body text-sm">Order assistance on-site</span>
              </div>
            </div>

            {/* Price and Badge */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold font-display text-cream">₹349</span>
                <span className="bg-forest-light text-forest font-body text-xs font-semibold px-3 py-1 rounded-full">
                  100% redeemable on order
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => handleCreateServiceAndAddToCart('doorstep')}
              className="w-full bg-cream-light text-wood font-body font-semibold py-3 md:py-4 rounded-full hover:bg-cream-mid transition-colors duration-300">
              Book Doorstep Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
