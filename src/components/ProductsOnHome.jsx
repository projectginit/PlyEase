import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { CartContext } from '../context/CartContext';

const products = productsData.slice(0, 6);

const FILTERS = ['all', 'ply', 'laminate', 'veneer'];
const LABELS  = { all:'All Products', ply:'Plywood', laminate:'Laminates', veneer:'Veneers' };

export default function Products() {
  const [active, setActive] = useState('all');
  const [toast,  setToast] = useState(null);
  const navigate = useNavigate();
  const { addToCart: globalAddToCart } = useContext(CartContext);

  const filtered = active === 'all' ? products : products.filter(p => p.cat === active);

  const addToCart = (product) => {
    globalAddToCart(product, 1);
    setToast(product.name);
    setTimeout(() => setToast(null), 2400);
  };

  return (
    <section id="products" className="py-24 px-6 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-wood font-body text-xl">Our Range</p>
          <h2 className="text-5xl font-extrabold font-display text-ink mb-4">Explore the <span className="text-wood font-display italic">Collection</span></h2>
          <p className="text-lg font-body text-ink-light">
            From commercial-grade ply to designer laminates — sourced from verified distributors.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium border border-wood/25 text-ink-mid
           transition-all duration-200 cursor-pointer hover:bg-wood hover:text-white hover:border-wood ${active === f ? 'bg-wood text-white border-wood' : ''}`}
            >
              {LABELS[f]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {filtered.map((p, i) => (
            <div
              key={p.name}
              onClick={() => {
                navigate(`/product/${p.id}`);
                window.scrollTo(0, 0);
              }}
              className="reveal bg-white rounded-2xl border border-wood/12 overflow-hidden cursor-pointer
                         transition-all duration-250 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-wood/20"
              data-delay={i * 60}
            >
              <div className="h-36 relative overflow-hidden" style={{ background: p.bg }}>
                {p.grain && <div className="grain-overlay" />}
                <span className="absolute top-2.5 left-2.5 bg-white text-[0.62rem] font-bold uppercase tracking-wider text-wood px-2.5 py-1 rounded-full">
                  {LABELS[p.cat]}
                </span>
              </div>
              <div className="p-4">
                <h5 className="text-sm font-semibold text-ink mb-0.5 leading-tight">{p.name}</h5>
                <p className="text-xs text-ink-light font-light mb-3">{p.meta}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold text-wood-dark">
                    {p.price}<span className="font-body text-xs font-normal text-ink-light">{p.unit}</span>
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                    className="w-7 h-7 bg-wood text-white rounded-lg flex items-center justify-center
                               text-lg leading-none transition-all duration-150 hover:bg-wood-dark hover:scale-110 active:scale-95"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 ">
          <button 
            onClick={() => {
              navigate('/products');
              window.scrollTo(0, 0);
            }}
            className="btn-inline-flex items-center gap-2 bg-transparent text-ink border border-wood/25 px-7 py-3
           rounded-xl text-sm font-medium transition-all duration-200
           hover:border-wood-light hover:bg-wood-dark hover:text-cream-mid hover:-translate-y-0.5 cursor-pointer">View Full Catalogue</button>
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-2.5 bg-ink text-white text-sm font-medium
                    px-5 py-3 rounded-xl shadow-2xl pointer-events-none transition-all duration-350
                    ${toast ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      >
        <span className="w-5 h-5 rounded-full bg-forest-mid flex items-center justify-center text-xs font-bold">✓</span>
        <span>&quot;{toast}&quot; added to cart</span>
      </div>
    </section>
  );
}