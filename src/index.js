import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Settings from './Settings';
// import { Provider } from 'react-redux';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Settings/> */}
  </React.StrictMode>
);
