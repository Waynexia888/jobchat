import React, { Component } from 'react';
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import { login } from '../../redux/user.redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

@connect(
    //你要state什么属性放到props里
    state => state.user,
    //你要什么方法，放到props里，自动dispatch
    { login }
)
    

class Login extends Component {
     constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('./register')
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleLogin(){
        this.props.login(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        < WhiteSpace />
                        <InputItem
                            onChange={(v) => this.handleChange('user', v)}
                        >Username
                        </InputItem>
                        <WhiteSpace />
                        <InputItem
                            type = 'password'
                            onChange={(v) => this.handleChange('pwd', v)}
                        >Password
                        </InputItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={this.handleLogin}type='primary'>Login</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>Sign Up</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;