import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { counter, addGun, removeGun, addGunAsync } from './index.redux'
import thunk from 'redux-thunk';

const store = createStore(counter, applyMiddleware(thunk))

function render(){
  ReactDOM.render(
  <App store={store} addGunAsync={addGunAsync} addGun={addGun} removeGun={removeGun} />,
  document.getElementById('root')
);
}


render()
store.subscribe(render)

