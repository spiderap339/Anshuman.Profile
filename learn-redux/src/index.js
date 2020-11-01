import React, {Provider} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './reducers/combine';

const store = createStore(
  allReducer,
  );

ReactDOM.render(
  
    <Provider store={store}>
      <App />,
    </Provider>,
  
  document.getElementById('root')
);
reportWebVitals();
