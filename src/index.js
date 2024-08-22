import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persist_store, store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
        <PersistGate persist_store={persist_store}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PersistGate>  
    </Provider>
  </>
);
