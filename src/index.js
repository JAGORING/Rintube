import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Youtube from './service/youtube';

const apiKey = process.env.REACT_APP_API_KEY;
const youtube = new Youtube(apiKey);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
