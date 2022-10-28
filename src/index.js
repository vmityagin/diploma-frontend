import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
=======
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from '../src/components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);
>>>>>>> 15e22bb9ad80f7bcc43058c9ccd0896c603aeb7b
