import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { Duukan } from './redux/store.';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider  store={Duukan}>
    <App />
    </Provider>
  </React.StrictMode>
);
