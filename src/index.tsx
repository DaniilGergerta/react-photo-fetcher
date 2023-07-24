import React from 'react';
import ReactDOM from 'react-dom/client';
import MainLayout from './layouts/Main';
import Home from './pages/Home';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </React.StrictMode>
);
