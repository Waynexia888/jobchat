import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';
import reducers from './recuder';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

// 登陆
//     没有登陆信息， 统一跳转login
// 页面 导航+显示+注销
//     一营1
//     二营
//     骑兵连


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path="/login" component={Auth}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);




