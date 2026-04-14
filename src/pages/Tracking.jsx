import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';

export default function Tracking() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // Mock tracking steps
  const steps = [
    { label: "Order Placed", date: "Oct 12, 10:30 AM", completed: true },
    { label: "Processing", date: "Oct 13, 09:15 AM", completed: true },
    { label: "Quality Check", date: "Pending", completed: false },
    { label: "Out for Delivery", date: "Pending", completed: false },
    { label: "Delivered", date: "Pending", completed: false },
  ];

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <button onClick={() => navigate('/orders')} className="text-wood hover:text-wood-dark font-body text-sm mb-6 flex items-center transition-colors">
          <svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Orders
        </button>
        
        <div className="bg-white rounded-3xl shadow-xl border border-wood-pale/30 p-8 md:p-12 overflow-hidden relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cream rounded-full opacity-50 blur-3xl pointer-events-none"></div>

          <div className="mb-12 text-center md:text-left relative z-10">
            <h1 className="text-4xl font-bold font-display text-ink mb-3">Track Order</h1>
            <p className="text-ink-light font-body text-lg">Tracking details for <span className="font-semibold text-wood uppercase">{orderId || "ORD-7230-891"}</span></p>
          </div>

          <div className="relative mt-8 mb-12">
            {/* Connecting Line styling across devices */}
            <div className="absolute left-[29px] top-4 bottom-4 w-1 bg-cream-mid rounded-full pointer-events-none md:left-auto md:w-full md:h-1 md:top-[29px] md:bottom-auto md:bg-cream-mid z-0"></div>
            
            {/* Active connecting line overlay */}
            <div className="absolute left-[29px] top-4 h-[40%] w-1 bg-wood rounded-full pointer-events-none md:left-0 md:top-[29px] md:h-1 md:w-[40%] md:bg-wood z-0 shadow-[0_0_8px_rgba(74,44,42,0.5)]"></div>

            <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 relative z-10 w-full">
              {steps.map((step, idx) => (
                <div key={idx} className="flex md:flex-col items-start md:items-center relative z-10 group md:flex-1">
                  
                  {/* Circle indicating status */}
                  <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0 mb-0 md:mb-5 transition-all duration-500 z-10 ${
                    step.completed ? 'bg-wood text-white shadow-[0_4px_12px_rgba(74,44,42,0.3)] scale-110 ring-4 ring-white' : 'bg-white text-ink-light border-2 border-wood-pale'
                  }`}>
                    {step.completed ? (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <span className="font-bold font-display text-xl">{idx + 1}</span>
                    )}
                  </div>
                  
                  {/* Step Info */}
                  <div className="ml-6 md:ml-0 md:text-center mt-2 md:mt-0 max-w-[120px]">
                    <h4 className={`font-bold font-display text-lg md:text-base lg:text-lg mb-1 leading-tight ${step.completed ? 'text-ink' : 'text-ink-mid'}`}>{step.label}</h4>
                    <p className={`text-sm font-body font-medium ${step.completed ? 'text-wood' : 'text-ink-lighter'}`}>{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Support section */}
          <div className="mt-16 p-6 md:p-8 bg-cream-light border border-wood-pale/50 rounded-2xl flex flex-col md:flex-row justify-between items-center relative z-10 hover:shadow-md transition-shadow">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="font-bold text-ink text-lg font-display">Need help with your order?</h4>
              <p className="text-base text-ink-light font-body mt-1">Our support team is available 24/7</p>
            </div>
            <button className="px-8 py-3 bg-white border-2 border-wood text-wood font-bold font-body rounded-xl hover:bg-wood hover:text-white transition-all shadow-sm">
              Contact Support
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
