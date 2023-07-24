import React from 'react';
import ReactDOM from 'react-dom/client';
import MainLayout from './layouts/Main';
import Home from './pages/Home';
import ReduxProvider from './redux/provider';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ReduxProvider>
  </React.StrictMode>
);
