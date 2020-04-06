import React, { Component } from 'react'
import { addGun } from './index.redux'

class App extends Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={() => store.dispatch(addGun())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGun())}>上交武器</button>
        <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button>
      </div>
    );
  }
}


export default App;
