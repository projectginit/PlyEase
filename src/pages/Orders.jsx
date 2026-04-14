import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Orders() {
  const navigate = useNavigate();
  const { orders } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-4xl font-bold font-display text-wood mb-8">My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-wood-pale">
            <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10 text-wood/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-ink mb-2">No orders yet</h2>
            <p className="text-ink-light mb-8">You haven't placed any orders in this session.</p>
            <button 
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-wood text-cream rounded-xl font-bold hover:bg-wood-dark transition-all"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-wood-pale p-6 hover:shadow-md transition-shadow">

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-4 border-b border-wood-pale/50">
                <div>
                  <p className="text-sm text-ink-light font-body mb-1">Order ID: <span className="font-semibold text-ink">{order.id}</span></p>
                  <p className="text-sm text-ink-light font-body">Placed on: {order.date}</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="text-sm text-ink-light font-body mb-1">Total</p>
                  <p className="text-lg font-semibold text-wood font-display">{order.total}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-ink mb-2">Items</h4>
                <ul className="space-y-1">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-ink-mid flex justify-between">
                      <span>{item.quantity}x {item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center flex-wrap gap-4">
                <span className={`px-4 py-1 rounded-full text-xs font-semibold ${
                  order.status === 'Processing' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
                }`}>
                  {order.status}
                </span>
                <button 
                  onClick={() => navigate(`/tracking/${order.id}`)}
                  className="px-6 py-2 bg-wood text-cream rounded-lg hover:bg-wood-dark transition-colors font-body text-sm font-semibold">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
