import React, { useState } from 'react';
import './App.css';
import AdminPage from './pages/adminpage';
import Books from './components/books'
import LoginPage from './components/loginpage';
import loginDetails from './data/logindetails';
function App() {
  const [userType, setUserType] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    const user = loginDetails.find(
      (detail) =>
        detail.username === username && detail.password === password
    );
    if (user) {
      setUserType(user.type);
      setIsAuthenticated(true);
    } else {
      setUserType('');
      setIsAuthenticated(false);
    }
  };
  return (
    <div>
      {userType === 'admin' && isAuthenticated ? (
        <AdminPage />
      ) : isAuthenticated ? (
        <Books />
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
