import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('plyease-auth') === 'true';
  });

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('plyease-auth', 'true');
      // Mock user data
      setUser({ name: 'Pranjal', email: 'pranjal@example.com' });
    } else {
      localStorage.removeItem('plyease-auth');
      setUser(null);
    }
  }, [isLoggedIn]);

  const login = (email, password) => {
    // Mock login logic
    setIsLoggedIn(true);
    return true;
  };

  const signup = (name, email, password) => {
    // Mock signup logic
    setIsLoggedIn(true);
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
