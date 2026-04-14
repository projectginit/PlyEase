import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { productsData } from '../data/products';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = productsData.find(p => p.id === productId);
    if (found) setProduct(found);
    else navigate('/products'); 
  }, [productId, navigate]);

  if (!product) return null; 

  const addToCart = () => {
    setToast(product.name);
    setTimeout(() => setToast(null), 2400);
  };

  return (
    <div className="bg-cream-light min-h-screen flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <button 
          onClick={() => navigate('/products')}
          className="mb-8 flex items-center text-sm font-semibold text-ink-mid hover:text-wood transition-colors group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
        </button>

        <div className="bg-white rounded-[2rem] border border-wood/10 overflow-hidden shadow-2xl shadow-wood/5 flex flex-col lg:flex-row">
          
          {/* Left: Product "Image" View */}
          <div className="w-full lg:w-5/12 min-h-[400px] lg:min-h-auto relative overflow-hidden flex flex-col items-center justify-center p-8 lg:p-12" style={{ background: product.bg }}>
            {product.grain && <div className="absolute inset-0 opacity-25 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] mix-blend-overlay"></div>}
            
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-white/95 backdrop-blur text-xs font-bold uppercase tracking-wider text-wood px-3.5 py-1.5 rounded-full shadow-sm">
                {product.cat === 'ply' ? 'Plywood' : product.cat === 'veneer' ? 'Veneer' : 'Laminate'}
              </span>
              <span className="bg-ink/85 backdrop-blur text-xs font-bold uppercase tracking-wider text-white px-3.5 py-1.5 rounded-full shadow-sm">
                Premium
              </span>
            </div>

            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-center relative z-10 backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-transform duration-500">
                <span className="font-display font-bold text-3xl sm:text-4xl text-white/95 opacity-90 text-center drop-shadow-lg px-6 leading-tight">
                  {product.name}
                </span>
            </div>
          </div>

          {/* Right: Product Details Info */}
          <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-14 flex flex-col h-full">
            
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-widest uppercase text-wood mb-3 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-wood inline-block"></span>
                PlyEase Exclusive
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-ink mb-4 leading-[1.1]">{product.name}</h1>
              <p className="text-xl font-body text-ink-mid/80 font-medium tracking-wide">
                {product.meta}
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-3 mb-8 pb-8 border-b border-wood/10">
              <span className="text-5xl sm:text-6xl font-display font-bold text-wood-dark leading-none tracking-tight">{product.price}</span>
              <span className="text-lg font-body text-ink-light mb-1.5">{product.unit}</span>
              <span className="ml-auto mt-4 sm:mt-0 text-xs font-semibold bg-forest-light border border-forest/20 text-forest px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-forest animate-pulse"></span>
                In Stock & Ready to Dispatch
              </span>
            </div>

            <p className="text-base text-ink-mid leading-relaxed mb-10 pl-5 border-l-[3px] border-wood/40">
              {product.description}
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <div className="flex items-center border-[2px] border-wood/20 rounded-xl overflow-hidden bg-cream-light/30 w-full sm:w-auto h-14">
                <button 
                  className="px-5 h-full text-ink hover:bg-wood/10 transition-colors font-bold text-xl flex items-center justify-center cursor-pointer"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >−</button>
                <div className="w-14 text-center font-bold text-ink text-lg">{quantity}</div>
                <button 
                  className="px-5 h-full text-ink hover:bg-wood/10 transition-colors font-bold text-xl flex items-center justify-center cursor-pointer"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >+</button>
              </div>

              <button 
                onClick={addToCart}
                className="flex-grow w-full h-14 bg-wood text-cream hover:bg-wood-dark transition-all duration-300 px-8 rounded-xl font-body font-bold text-lg flex items-center justify-center gap-3 group shadow-md hover:shadow-xl hover:shadow-wood/20 cursor-pointer"
              >
                Add to Cart
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-normal group-hover:scale-110 transition-transform">
                  +
                </span>
              </button>
            </div>

            {/* Features & Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-auto bg-cream-light/40 rounded-2xl p-6 border border-wood/5">
              <div>
                <h4 className="text-sm font-bold text-ink uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wood">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Key Highlights
                </h4>
                <ul className="space-y-2.5">
                  {product.features.map(f => (
                    <li key={f} className="flex items-start text-sm text-ink-mid">
                      <span className="text-wood mr-2 font-bold opacity-70">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-ink uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wood">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  Specifications
                </h4>
                <div className="space-y-2.5">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm py-1 border-b border-wood/5 last:border-0">
                      <span className="text-ink-light font-medium">{key}</span>
                      <span className="text-ink font-semibold text-right max-w-[55%]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 bg-ink text-white text-sm font-body font-medium
                    px-6 py-4 rounded-2xl shadow-2xl pointer-events-none transition-all duration-350
                    ${toast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 rotate-1 scale-95'}`}
      >
        <span className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-xs font-bold text-white shadow-inner">✓</span>
        <span><strong className="text-wood-pale font-bold">{quantity}x {toast}</strong> added to cart</span>
      </div>
    </div>
  );
}
