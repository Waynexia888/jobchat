import React, { Component } from 'react'
import Logo from '../../component/logo/logo';
import { List, InputItem, Radio, WhiteSpace, Button} from 'antd-mobile';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'genuis'
        }
    }
   
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo />
                <h2>注册页面</h2>
                <List>
                    <InputItem>Username</InputItem>
                    <WhiteSpace />
                    <InputItem>Password</InputItem>
                    <WhiteSpace />
                    <InputItem>Confirm Password</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type === 'genuis'}>
                        Job Seeker
                    </RadioItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type === 'boss'}>
                        Recruiter
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary'>Sign Up</Button>
                </List>
                
            </div>
        )
    }
}
export default Register;
