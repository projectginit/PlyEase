import React from "react";
import { useState } from "react";

function Process() {
  const steps = [
    {
      num: "01",
      title: "Browse & Choose",
      desc: "Search wide categories of ply and laminates. Request a sample kit or doorstep assist.",
      icon: (
        <path
          d="M8 11l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      num: "02",
      title: "Place Order (40%)",
      desc: "Redeem your sample amount and pay 40% booking. An instant purchase voucher is generated.",
      icon: (
        <>
          <rect
            x="3"
            y="5"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M3 9h16" stroke="currentColor" strokeWidth="1.5" />
        </>
      ),
    },
    {
      num: "03",
      title: "Order Confirmed",
      desc: "Admin coordinates with distributor on an urgent basis. You are updated throughout.",
      icon: (
        <path
          d="M4 12l4 4 10-10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      num: "04",
      title: "Goods Ready — Pay 60%",
      desc: "Once goods are ready, pay the remaining 60%. Your Tax Invoice is uploaded instantly.",
      icon: (
        <>
          <path
            d="M3 11h14M13 7l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="7"
            width="6"
            height="8"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ),
    },
    {
      num: "05",
      title: "OTP Delivery",
      desc: "You receive an OTP. Share it with the delivery partner to confirm receipt of goods.",
      icon: (
        <>
          <rect
            x="3"
            y="3"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 11l3 3 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
    {
      num: "06",
      title: "Funds Released",
      desc: "Escrow funds are instantly transferred to the distributor upon your delivery confirmation.",
      icon: (
        <>
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 11l1.5 1.5L13 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
  ];
  const [active, setActive] = useState(null);
  return (
    <section id="process" className="w-full bg-cream-light py-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h6>
          <span className="text-wood font-body text-xl">Our Process</span>
        </h6>
        <h2 className="text-5xl font-extrabold font-display text-ink mb-4">
          From Browse to{" "}
          <span className="text-wood font-display italic">Doorstep</span>
        </h2>
        <p className="text-lg font-body text-ink-light mb-10">
          A transparent, escrow-protected workflow so every party stays in sync.
        </p>
      </div>
      {/* Process Steps Grid */}
      <div className="max-w-6xl mx-auto">
        {/* <div className="mb-14">
          <p className="section-label">The Process</p>
          <h2 className="section-title">
            From Browse to <em>Delivered</em>
          </h2>
          <p className="section-sub">
            A transparent, escrow-protected workflow so every party stays in
            sync.
          </p>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative"> 
          {/* Dashed connector — desktop only */}
          <div className="hidden lg:block absolute top-[34px] left-[8%] right-[8%] h-px dashed-line z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal flex flex-col items-center text-center px-2 relative z-10 cursor-default"
              data-delay={parseInt(step.num) * 80}
              onMouseEnter={() => setActive(step.num)}
              onMouseLeave={() => setActive(null)}
            >
              <div
                className={`w-[68px] h-[68px] rounded-full border-2 flex items-center justify-center mb-4
                    transition-all duration-250 relative
                    ${
                      active === step.num
                        ? "bg-wood border-wood text-white scale-105"
                        : "bg-white border-wood/30 text-wood"
                    }`}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  {step.icon}
                </svg>
                {/* Step number badge */}
                <span
                  className={`absolute -bottom-2 -right-2 w-[22px] h-[22px] rounded-full text-[0.58rem] font-black
                    flex items-center justify-center border-2 border-white
                    ${active === step.num ? "bg-wood-pale text-wood-dark" : "bg-wood-light text-wood-dark"}`}
                >
                  {step.num}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-ink mb-1 leading-tight">
                {step.title}
              </h4>
              <p className="text-xs text-ink-light font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
