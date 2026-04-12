const footerLinks = {
  Services: ['Sample Kit', 'Doorstep Assist', 'Bulk Orders'],
  Company:  ['About Us', 'Distributor Portal', 'Admin Login'],
  Support:  ['How It Works', 'Track Order', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 pt-16 pb-0 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-wood rounded-lg flex items-center justify-center text-white flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <rect x="3"  y="3"  width="8" height="4" rx="1" fill="currentColor" opacity="0.9"/>
                <rect x="3"  y="9"  width="8" height="4" rx="1" fill="currentColor" opacity="0.7"/>
                <rect x="3"  y="15" width="8" height="4" rx="1" fill="currentColor" opacity="0.5"/>
                <rect x="13" y="3"  width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/>
                <rect x="13" y="13" width="8" height="6" rx="1" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">PlyEase</span>
              <span className="text-[0.6rem] tracking-widest uppercase text-white/40">B.B. Timber</span>
            </div>
          </div>
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">
            India's trusted doorstep timber &amp; laminate platform. GST registered. Escrow protected.
          </p>
        </div>

        {/* Link groups */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h5 className="text-xs font-bold tracking-widest uppercase text-white/85 mb-4">{group}</h5>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-wood-light transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/25">
        <span>© 2024 PlyEase — B.B. Timber. All rights reserved.</span>
        <span>GST Registered Entity</span>
      </div>
    </footer>
  );
}