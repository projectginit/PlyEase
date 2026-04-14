import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const LABELS = { ply: 'Plywood', laminate: 'Laminates', veneer: 'Veneers' };

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount, placeOrder } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [removingId, setRemovingId] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleRemove = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingId(null);
    }, 300);
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    const orderId = placeOrder();
    if (orderId) {
      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        navigate('/orders');
      }, 2000);
    }
  };


  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal >= 5000 ? 0 : 299) : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-cream-light min-h-screen flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* Page Header */}
        <div className="mb-10">
          <button
            onClick={() => navigate('/products')}
            className="mb-6 flex items-center text-sm font-semibold text-ink-mid hover:text-wood transition-colors group"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            Continue Shopping
          </button>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-ink">
                Your <span className="text-wood italic">Cart</span>
              </h1>
              <p className="text-ink-light font-body mt-2">
                {getCartCount() > 0
                  ? `${getCartCount()} item${getCartCount() > 1 ? 's' : ''} in your cart`
                  : 'Your cart is empty'}
              </p>
            </div>
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-sm font-semibold text-ink-light hover:text-red-500 transition-colors border border-ink-light/20 hover:border-red-400 px-4 py-2 rounded-lg"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-28 h-28 rounded-full bg-wood-pale/30 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-wood/50">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-ink mb-3">Nothing here yet</h2>
            <p className="text-ink-light max-w-sm mb-8 leading-relaxed">
              Browse our premium collection of plywood, laminates, and veneers to get started.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3.5 bg-wood text-cream rounded-xl font-semibold hover:bg-wood-dark transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-wood/20 hover:-translate-y-0.5"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(({ product: p, quantity }) => (
                <div
                  key={p.id}
                  className={`bg-white rounded-2xl border border-wood/10 overflow-hidden shadow-sm
                              transition-all duration-300
                              ${removingId === p.id ? 'opacity-0 scale-95 -translate-x-4' : 'opacity-100 scale-100 translate-x-0'}`}
                >
                  <div className="flex flex-col sm:flex-row items-stretch">
                    {/* Product Swatch */}
                    <div
                      className="w-full sm:w-32 min-h-[100px] sm:min-h-0 flex-shrink-0 flex items-center justify-center relative"
                      style={{ background: p.bg }}
                    >
                      <span className="font-display text-xs font-bold text-white/80 text-center px-3 drop-shadow-md leading-tight">
                        {p.name}
                      </span>
                      <span className="absolute top-2 left-2 bg-white/90 text-[0.6rem] font-bold uppercase tracking-wider text-wood px-2 py-0.5 rounded-full">
                        {LABELS[p.cat]}
                      </span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-grow">
                        <h3 className="font-display font-bold text-lg text-ink mb-0.5">{p.name}</h3>
                        <p className="text-sm text-ink-light font-body">{p.meta}</p>
                        <p className="text-xs text-wood font-semibold mt-1 uppercase tracking-wide">{LABELS[p.cat]}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center border-2 border-wood/15 rounded-xl overflow-hidden bg-cream-light/50 self-start sm:self-center h-10">
                        <button
                          onClick={() => updateQuantity(p.id, quantity - 1)}
                          disabled={quantity <= 1}
                          className="px-3.5 h-full text-ink hover:bg-wood/10 transition-colors font-bold text-base disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                          aria-label="Decrease"
                        >−</button>
                        <div className="w-10 text-center font-bold text-ink text-sm">{quantity}</div>
                        <button
                          onClick={() => updateQuantity(p.id, quantity + 1)}
                          className="px-3.5 h-full text-ink hover:bg-wood/10 transition-colors font-bold text-base cursor-pointer"
                          aria-label="Increase"
                        >+</button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 self-start sm:self-center">
                        <div className="text-right">
                          <p className="font-display font-bold text-xl text-wood-dark leading-none">
                            ₹{(parseInt(p.price.replace(/[^0-9]/g, ''), 10) * quantity).toLocaleString('en-IN')}
                          </p>
                          <p className="text-xs text-ink-light mt-0.5">{p.price}{p.unit} × {quantity}</p>
                        </div>
                        <button
                          onClick={() => handleRemove(p.id)}
                          className="text-ink-light/60 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-lg"
                          aria-label="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6l-1 14H6L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M9 6V4h6v2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Suggested Products Banner */}
              <div className="mt-8 bg-wood-pale/20 border border-wood/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold text-ink text-base">Want to explore more?</p>
                  <p className="text-sm text-ink-light font-body mt-0.5">We have over 12 premium products in our catalogue.</p>
                </div>
                <button
                  onClick={() => navigate('/products')}
                  className="px-5 py-2.5 bg-wood text-cream text-sm font-semibold rounded-xl hover:bg-wood-dark transition-all duration-200 whitespace-nowrap flex-shrink-0"
                >
                  View All Products →
                </button>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-wood/10 shadow-xl shadow-wood/5 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-wood to-wood-dark px-6 py-5">
                    <h2 className="font-display font-bold text-xl text-cream">Order Summary</h2>
                    <p className="text-cream/70 text-sm font-body mt-0.5">{getCartCount()} item{getCartCount() > 1 ? 's' : ''}</p>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Line items */}
                    {cartItems.map(({ product: p, quantity }) => (
                      <div key={p.id} className="flex justify-between text-sm">
                        <span className="text-ink-mid truncate pr-2 max-w-[60%]">{p.name} <span className="text-ink-light">×{quantity}</span></span>
                        <span className="font-semibold text-ink whitespace-nowrap">
                          ₹{(parseInt(p.price.replace(/[^0-9]/g, ''), 10) * quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}

                    <div className="border-t border-wood/10 pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-ink-mid">Subtotal</span>
                        <span className="font-semibold text-ink">₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-ink-mid flex items-center gap-1.5">
                          Shipping
                          {shipping === 0 && (
                            <span className="text-[0.65rem] font-bold text-forest bg-forest-light px-2 py-0.5 rounded-full uppercase tracking-wide">Free</span>
                          )}
                        </span>
                        <span className={`font-semibold ${shipping === 0 ? 'text-forest' : 'text-ink'}`}>
                          {shipping === 0 ? 'FREE' : `₹${shipping}`}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-wood bg-wood-pale/30 px-3 py-2 rounded-lg">
                          Add ₹{(5000 - subtotal).toLocaleString('en-IN')} more for free shipping!
                        </p>
                      )}
                    </div>

                    <div className="border-t border-wood/10 pt-4">
                      <div className="flex justify-between">
                        <span className="font-display font-bold text-ink text-lg">Total</span>
                        <span className="font-display font-bold text-wood-dark text-2xl">
                          ₹{total.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-xs text-ink-light mt-1">Prices per sq ft · GST included</p>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full mt-2 h-14 bg-wood text-cream rounded-xl font-body font-bold text-base
                                 hover:bg-wood-dark transition-all duration-300 flex items-center justify-center gap-3
                                 shadow-md hover:shadow-xl hover:shadow-wood/25 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                      Place Order
                    </button>

                    {/* Trust signals */}
                    <div className="pt-4 grid grid-cols-2 gap-3">
                      {[
                        { icon: '🔒', label: 'Secure Payment' },
                        { icon: '🚚', label: 'Pan-India Delivery' },
                        { icon: '✅', label: 'Quality Certified' },
                        { icon: '↩️', label: 'Easy Returns' },
                      ].map(t => (
                        <div key={t.label} className="flex items-center gap-2 text-xs text-ink-mid">
                          <span>{t.icon}</span>
                          <span>{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Order Placed Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 bg-ink text-white
                    px-7 py-4 rounded-2xl shadow-2xl pointer-events-none transition-all duration-400
                    ${orderPlaced ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
      >
        <span className="w-7 h-7 rounded-full bg-forest flex items-center justify-center font-bold text-sm shadow-inner">✓</span>
        <div>
          <p className="font-bold text-sm">Order Placed Successfully!</p>
          <p className="text-white/60 text-xs">Our team will contact you shortly.</p>
        </div>
      </div>
    </div>
  );
}
