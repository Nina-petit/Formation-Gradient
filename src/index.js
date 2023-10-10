import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from 'src/store';

import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootReactElement, document.getElementById('root'));
