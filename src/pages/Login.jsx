import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { login, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(formData.email, formData.password);
    } else {
      signup(formData.name, formData.email, formData.password);
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col font-body">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-wood-pale/30 overflow-hidden">
          <div className="bg-wood p-8 text-center text-cream">
            <h2 className="text-3xl font-bold font-display">{isLogin ? 'Welcome Back' : 'Join PlyEase'}</h2>
            <p className="mt-2 text-cream/70">Premium Materials at Your Doorstep</p>
          </div>
          
          <form className="p-8 space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-wood-pale focus:ring-2 focus:ring-wood focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-wood-pale focus:ring-2 focus:ring-wood focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-wood-pale focus:ring-2 focus:ring-wood focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-wood text-cream font-bold py-4 rounded-xl hover:bg-wood-dark transition-all shadow-lg hover:shadow-wood/20 active:scale-95"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
            
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-wood font-semibold hover:underline"
              >
                {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
