import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBL5RNhR45VUeUZ4btUk-u6JubVXBNbo6U',
  authDomain: 'new-jbim.firebaseapp.com',
  projectId: 'new-jbim',
  storageBucket: 'new-jbim.appspot.com',
  messagingSenderId: '1016346023000',
  appId: '1:1016346023000:web:cbb8dbccb3b74eda03662d',
  measurementId: 'G-72L6K6D901',
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
