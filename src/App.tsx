import React from 'react';
import IntlProvider from 'i18n/provider';
import Router from './Router';
import './App.scss';

const App = () => (
  <IntlProvider>
    <Router />
  </IntlProvider>
);

export default App;
