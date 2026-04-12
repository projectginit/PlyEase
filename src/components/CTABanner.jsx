import './CTABanner.css';

export default function CtaBanner() {
  return (
    <section id="ctabanner" className="bg-wood-dark py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <p className="section-label" style={{ color: '#C49A6C' }}>Ready to Begin?</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight tracking-tight mb-4">
            Start with a <em className="text-wood-light" style={{ fontStyle:'italic' }}>Sample Kit</em> Today
          </h2>
          <p className="text-white/65 font-light text-base leading-relaxed max-w-xl mb-8">
            ₹249 gets you 7 real ply swatches at your door — fully redeemable when you place your order.
            No risk, no regret.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary !bg-wood-light !text-wood-dark hover:!bg-wood-pale px-6 py-1 border-wood-pale rounded-xl text-sm font-medium transition-all duration-100 active:scale-95 cursor-pointer">
              Order Sample Kit — ₹249
            </button>
            <button className="inline-flex items-center gap-2 bg-transparent text-white/80 border border-white/25 px-7 py-3
           rounded-xl text-sm font-medium transition-all duration-200
           hover:border-white/50 hover:bg-white/10 hover:text-white cursor-pointer active:scale-95">Talk to Support</button>
          </div>
        </div>

        {/* Decorative wood stack */}
        <div className="hidden md:block w-28 rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          {['#C49A6C','#8B5E3C','#E8C99A','#5C3D20','#A0785A'].map((c, i) => (
            <div key={i} className="relative h-5" style={{ background: c }}>
              <div className="grain-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}