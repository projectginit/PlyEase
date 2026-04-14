import { useState } from 'react';
import './CTABanner.css';

export default function CtaBanner() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if(phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setPhoneNumber('');
    }
  };

  return (
    <section id="ctabanner" className="relative bg-wood-dark py-24 px-4 sm:px-6 overflow-hidden">
      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-wood-light/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[400px] h-[400px] bg-wood/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-wood-light inline-block"></span>
            <p className="font-bold tracking-widest uppercase text-xs text-wood-light">Ready to Begin?</p>
          </div>
          
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Start with a <em className="text-wood-pale relative" style={{ fontStyle:'italic' }}>
              Sample Kit
              <svg className="absolute -bottom-2 left-0 w-full text-wood-pale/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,-5 100,10" fill="transparent" stroke="currentColor" strokeWidth="4"/>
              </svg>
            </em> Today
          </h2>
          
          <p className="text-white/80 font-body text-lg leading-relaxed max-w-xl mb-8">
            ₹249 gets you 7 real ply & laminate swatches at your door — fully redeemable when you place your order. No risk, no regret.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <button className="bg-wood-pale text-wood-dark hover:bg-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(232,201,154,0.3)] hover:shadow-[0_0_30px_rgba(232,201,154,0.5)] cursor-pointer flex items-center justify-center">
              Order Sample Kit — ₹249
            </button>
            
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-white border border-[#25D366]/30 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] cursor-pointer group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pl-2">
            <div>
              <div className="flex -space-x-3 mb-2">
                <img className="w-10 h-10 rounded-full border-2 border-wood-dark shadow-sm bg-ink" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-wood-dark shadow-sm bg-ink" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-wood-dark shadow-sm bg-ink" src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
                <div className="w-10 h-10 rounded-full border-2 border-wood-dark bg-wood-mid flex items-center justify-center text-xs font-bold text-white shadow-sm">+</div>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {'★★★★★'.split('').map((star, i) => <span key={i} className="text-wood-pale text-sm">{star}</span>)}
              </div>
              <p className="text-white/70 text-xs font-body tracking-wide font-medium">Joined by <strong className="text-white">500+</strong> Architects</p>
            </div>
            
            <div className="hidden sm:block w-px h-14 bg-white/10"></div>
            
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-forest/20 flex flex-shrink-0 items-center justify-center text-forest-light">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
               </div>
               <div>
                  <p className="text-white text-sm font-bold tracking-wide">100% Refundable</p>
                  <p className="text-white/60 text-sm font-medium">Secure Escrow Checkout</p>
               </div>
            </div>
          </div>
        </div>

        {/* Interactive Callback Form & "Wood Stack" Card */}
        <div className="w-full max-w-sm lg:ml-auto relative mt-10 lg:mt-0">
          
          {/* 3D Decorative Stack */}
          <div className="absolute -top-12 -right-8 w-full h-full pointer-events-none hidden md:block">
            <div className="absolute top-0 right-0 w-32 h-40 bg-gradient-to-br from-[#8B5E3C] to-[#5C3D20] rounded-2xl shadow-2xl rotate-[15deg] translate-x-8 -translate-y-4 border border-white/10 transform transition-transform hover:rotate-12 hover:-translate-y-6 duration-500">
               <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] mix-blend-overlay rounded-2xl"></div>
               <span className="absolute bottom-3 right-3 text-[10px] font-bold text-white/50 tracking-widest uppercase">Teak</span>
            </div>
            <div className="absolute top-4 right-10 w-32 h-40 bg-gradient-to-br from-[#C49A6C] to-[#8B5E3C] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[5deg] translate-x-4 -translate-y-2 border border-white/20 transform transition-transform hover:rotate-12 duration-500 z-10">
               <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] mix-blend-overlay rounded-2xl"></div>
               <span className="absolute bottom-3 right-3 text-[10px] font-bold text-white/50 tracking-widest uppercase">BWR</span>
            </div>
          </div>

          {/* Callback Lead Form */}
          <div className="bg-ink p-8 rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative z-20 backdrop-blur-md">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Request a Callback</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">Drop your number and an expert will call you in 5 minutes to assist.</p>
            
            {submitted ? (
              <div className="bg-forest/20 border border-forest/30 text-forest-light rounded-xl p-4 flex items-center justify-center gap-3 animate-pulse h-[112px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="font-bold text-base">We'll call you shortly!</span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex flex-col gap-3">
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91 Mobile Number" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-wood focus:ring-1 focus:ring-wood transition-colors font-body text-base font-medium leading-none"
                />
                <button type="submit" className="w-full bg-wood text-white hover:bg-wood-light py-4 rounded-xl font-bold transition-all duration-200 leading-none">
                  Call Me Back
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
               <a href="mailto:hello@plyease.com" className="flex items-center gap-4 text-white/60 hover:text-wood-pale transition-colors text-sm font-medium group">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-wood-pale/10 transition-colors">
                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                 </div>
                 hello@plyease.com
               </a>
               <a href="tel:+919876543210" className="flex items-center gap-4 text-white/60 hover:text-wood-pale transition-colors text-sm font-medium group">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-wood-pale/10 transition-colors">
                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                 </div>
                 +91 98765 43210
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}