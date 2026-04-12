export default function Hero() {
  return (
    <section id="home" className='min-h-screen bg-cream-light pt-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Badge */}
        <div className='flex justify-start mb-12'>
          <div className='bg-forest-light px-4 py-2 rounded-full inline-block'>
            <p className='text-sm font-body font-semibold text-forest'>• GST REGISTERED & TRUSTED SINCE DAY ONE</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div>
            {/* Main Heading */}
            <h1 className='text-5xl md:text-6xl font-bold font-display text-ink mb-2'>
              Premium Ply &
            </h1>
            <h1 className='text-5xl md:text-6xl font-bold font-display text-wood mb-6'>
              Laminates,
            </h1>
            <h1 className='text-5xl md:text-6xl font-bold font-display text-ink mb-8'>
              Delivered Right.
            </h1>

            {/* Description */}
            <p className='text-lg font-body text-ink-light mb-8 leading-relaxed'>
              India's first doorstep-assist timber platform. Browse, sample, and order quality plywood & laminates — with secure escrow payments and real-time order tracking.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-16'>
              <button className='bg-wood font-body font-semibold text-cream px-8 py-3 rounded-full hover:bg-wood-dark transition-colors flex items-center justify-center group'>
                Order a Sample Kit
                <span className='ml-2 group-hover:translate-x-1 transition-transform'>→</span>
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('process')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className='border-2 border-wood font-body font-semibold text-wood px-8 py-3 rounded-full hover:bg-wood-pale transition-colors'>
                See How It Works
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-8'>
              <div>
                <p className='text-3xl font-bold font-display text-wood'>50+</p>
                <p className='text-sm font-body text-ink-light'>Products Listed</p>
              </div>
              <div>
                <p className='text-3xl font-bold font-display text-wood'>100%</p>
                <p className='text-sm font-body text-ink-light'>Sample Redeemable</p>
              </div>
              <div>
                <p className='text-3xl font-bold font-display text-wood'>48hr</p>
                <p className='text-sm font-body text-ink-light'>Dispatch Turnaround</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Cards */}
          <div className='hidden md:flex flex-col gap-6 items-center'>
            {/* Order Card */}
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-sm'>
              <div className='flex items-center justify-between mb-4'>
                <span className='bg-wood-pale text-wood font-body text-xs font-semibold px-3 py-1 rounded-full'>PURCHASE VOUCHER</span>
                <span className='text-ink-light font-body text-xs'>#PLE-2024-8821</span>
              </div>
              <h3 className='text-lg font-display font-bold text-ink mb-2'>Premium Teak Veneer Ply</h3>
              <p className='text-sm font-body text-ink-light mb-4'>18mm · Grade A · 8x4 ft</p>
              
              <div className='mb-4'>
                <div className='flex justify-between mb-2'>
                  <span className='text-sm font-body text-ink'>Booking Paid (40%)</span>
                  <span className='text-sm font-body font-semibold text-wood'>40%</span>
                </div>
                <div className='w-full bg-cream-mid rounded-full h-2'>
                  <div className='bg-wood rounded-full h-2 w-2/5'></div>
                </div>
              </div>

              <div className='flex justify-between items-center'>
                <span className='text-lg font-body font-bold text-ink'>₹12,480 <span className='text-sm text-ink-light'>total</span></span>
                <span className='bg-forest-light text-forest font-body text-xs font-semibold px-3 py-1 rounded-full'>In Progress</span>
              </div>
            </div>

            {/* Sample Kit */}
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-sm'>
              <p className='text-sm font-body font-semibold text-ink-mid mb-4'>Sample Kit</p>
              <div className='grid grid-cols-5 gap-2 mb-4'>
                <div className='w-12 h-12 bg-wood-light rounded-lg border-2 border-wood-pale'></div>
                <div className='w-12 h-12 bg-wood-pale rounded-lg border-2 border-wood-pale'></div>
                <div className='w-12 h-12 bg-wood-dark rounded-lg border-2 border-wood-pale'></div>
                <div className='w-12 h-12 bg-wood rounded-lg border-2 border-wood-pale'></div>
                <div className='w-12 h-12 bg-wood-mid rounded-lg border-2 border-wood-pale'></div>
                <div className='w-12 h-12 bg-cream rounded-lg border-4 border-wood-pale'></div>
                <div className='w-12 h-12 bg-wood-dark rounded-lg border-2 border-wood-pale'></div>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-lg font-body font-bold text-wood'>₹249</span>
                <span className='bg-forest-light text-forest font-body text-xs font-semibold px-3 py-1 rounded-full'>fully redeemable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
