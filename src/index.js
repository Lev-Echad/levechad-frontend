import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { StoreProvider } from 'easy-peasy';
import store from './context/store';

ReactDOM.render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
,  document.getElementById('root')
);