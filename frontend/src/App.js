import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

const { Header, Content } = Layout;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router >
      <Layout style={{ minHeight: '100vh', backgroundColor: 'black' }}>
        <Header style={{backgroundColor: 'black', padding: 0, color: 'white', textAlign: 'center' }}>
          <h1>Pal Extra</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center' }}>
            <Routes>
              <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/register" element={<Register onRegisterSuccess={handleLoginSuccess} />} />
              <Route
                path="/home"
                element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" replace />}
              />
              <Route
                path="*"
                element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;