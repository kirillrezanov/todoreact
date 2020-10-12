import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';

const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={Store.dispatch.bind(Store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(Store.getState());

Store.subscribe(() => {
  rerender(Store.getState());
});