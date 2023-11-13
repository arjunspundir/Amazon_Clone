// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/cart"
            element={
              <div>
                <h1>Your cart is Empty</h1>
              </div>
            }
          />
        </Route>
      </Routes>
      <Routes >
      <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
