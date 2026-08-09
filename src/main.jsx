import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n.js' // انتقال به بعد از React
import App from './App.jsx'
import './index.css'

// خاموش کردن وارنینگ موقت R3F
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
    return;
  }
  originalWarn(...args);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)