import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { counter } from './index.redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

function Erying(){
  return <h2>二营</h2>
}

function Qibinglian(){
  return <h2>骑兵连</h2>
}

class Test extends React.Component{
  render(){
    console.log(this.props)
    // this.props.history.push('/'); //直接跳转'/'路径

    return <h2>测试组件 {this.props.match.params.location}</h2>
  }
}

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">一营</Link>
          </li>
          <li>
            <Link to="/erying">二营</Link>
          </li>
          <li>
            <Link to="/qibinglian">骑兵连</Link>
          </li>
        </ul>
        {/* <Redirect to='/qibinglian'></Redirect> */}
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/erying" component={Erying}></Route>
          <Route path="/qibinglian" component={Qibinglian}></Route>
          <Route path="/:location" compoment={Test}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);




