import React, { Component } from 'react';
import logoImg from './8888888.png';
import logo1 from './6666666.png'
import './logo.css'

class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logoImg} alt="" />
                {/* <br/>
                <img src={logo1} alt="" /> */}
                
            </div>
        )
    }
}

export default Logo;
