const trustItems = [
  {
    title: "Escrow-Protected",
    desc: "Your payment is held securely until goods are received and confirmed by you.",
    icon: (
      <path
        d="M16 3L4 8v8c0 7.2 5.2 13.9 12 15.5C22.8 29.9 28 23.2 28 16V8L16 3z M10 16l4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "GST Registered",
    desc: "Fully compliant business. Download your Tax Invoice the moment it is available.",
    icon: (
      <>
        <rect
          x="4"
          y="8"
          width="24"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 14h24M12 8V5M20 8V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Real-Time Status",
    desc: "Customer support keeps you updated at every stage, from order to doorstep delivery.",
    icon: (
      <>
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 10v6l4 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "OTP Verification",
    desc: "An OTP-based delivery system ensures proof of physical handover every time.",
    icon: (
      <>
        <path
          d="M8 16l6 6 10-10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </>
    ),
  },
];

export default function Trust() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustItems.map((item, i) => (
          <div
            key={item.title}
            className="reveal text-center p-8 rounded-2xl bg-cream-light border border-wood/12
                       transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:shadow-wood/15"
            data-delay={i * 100}
          >
            <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-wood mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                {item.icon}
              </svg>
            </div>
            <h4 className="font-display text-lg font-semibold text-ink mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-ink-mid font-light leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
