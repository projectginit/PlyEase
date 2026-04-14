import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { productsData } from '../data/products';
import { CartContext } from '../context/CartContext';

const allProducts = productsData;

const FILTERS = ['all', 'ply', 'laminate', 'veneer'];
const LABELS  = { all:'All Products', ply:'Plywood', laminate:'Laminates', veneer:'Veneers' };

export default function Products() {
  const [active, setActive] = useState('all');
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const { addToCart: globalAddToCart } = useContext(CartContext);

  const filtered = active === 'all' ? allProducts : allProducts.filter(p => p.cat === active);

  const addToCart = (product) => {
    globalAddToCart(product, 1);
    setToast(product.name);
    setTimeout(() => setToast(null), 2400);
  };

  return (
    <div className="bg-cream-light min-h-screen flex flex-col font-body">
      <Navbar />

      <main className="flex-grow pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-wood-pale/30 px-4 py-2 rounded-full inline-block">
              <p className="text-sm font-body font-semibold text-wood-dark">• PREMIUM COLLECTION</p>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-display text-ink mb-6">
            Our <span className="text-wood italic">Products</span>
          </h1>
          <p className="text-lg font-body text-ink-light max-w-2xl mx-auto leading-relaxed">
            Discover our extensive catalog of high-quality plywood, designer laminates, and premium veneers, tailored for all your architectural and interior needs.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-wrap justify-center gap-3">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-full text-base font-body font-medium border border-wood/25 transition-all duration-200 cursor-pointer hover:shadow-md ${
                active === f 
                  ? 'bg-wood text-white border-wood shadow-lg shadow-wood/20 scale-105' 
                  : 'text-ink-mid hover:bg-wood/5 hover:border-wood/50'
              }`}
            >
              {LABELS[f]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {filtered.map((p, i) => (
            <div
              key={p.name}
              onClick={() => {
                navigate(`/product/${p.id}`);
                window.scrollTo(0, 0);
              }}
              className="bg-white rounded-2xl border border-wood/10 overflow-hidden cursor-pointer
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-wood/15 group flex flex-col"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="h-48 relative overflow-hidden" style={{ background: p.bg }}>
                {p.grain && <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] mix-blend-overlay"></div>}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-wood px-3 py-1.5 rounded-full shadow-sm">
                  {LABELS[p.cat]}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h5 className="text-xl font-display font-bold text-ink mb-1 group-hover:text-wood transition-colors">{p.name}</h5>
                  <p className="text-sm font-body text-ink-light mb-4">{p.meta}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="font-display text-2xl font-bold text-wood-dark leading-none">
                      {p.price}
                    </span>
                    <span className="font-body text-xs text-ink-light mt-1">{p.unit}</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                    className="w-10 h-10 bg-cream text-wood border border-wood/20 rounded-full flex items-center justify-center
                               text-2xl leading-none transition-all duration-200 hover:bg-wood hover:text-white hover:border-wood shadow-sm hover:shadow-md hover:scale-110 active:scale-95"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-ink text-white text-sm font-body font-medium
                    px-6 py-4 rounded-2xl shadow-2xl pointer-events-none transition-all duration-300
                    ${toast ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 scale-95'}`}
      >
        <span className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-xs font-bold text-white shadow-inner">✓</span>
        <span><strong className="text-wood-pale font-bold">{toast}</strong> added to cart</span>
      </div>
    </div>
  );
}
