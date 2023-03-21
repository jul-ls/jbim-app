import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: 'AIzaSyDyU0HX-JIcNcTGkGW6-wqqlZeM4LdP5jM',
  authDomain: 'jbim-app.firebaseapp.com',
  projectId: 'jbim-app',
  storageBucket: 'jbim-app.appspot.com',
  messagingSenderId: '90182938991',
  appId: '1:90182938991:web:d7c09412d039fb4838b89a',
};

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
