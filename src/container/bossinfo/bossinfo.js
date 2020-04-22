import React, { Component } from 'react';
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux';
import {update} from '../../redux/user.redux'

@connect(
    state => state.user,
    {update}
)

class BossInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }

    onChange(key, val){
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div>
                <NavBar mode="dark">
                    Recuiter Information Form
                </NavBar>
                <AvatarSelector 
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title',v)}>
                    Position
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company',v)}>
                    Company
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('money',v)}>
                    Salary
                </InputItem>
                <TextareaItem 
                    onChange={(v)=>this.onChange('desc',v)}
                    rows={3}
                    autoHeight
                    title = 'Job Desc'
                    >
                </TextareaItem>
                <Button 
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                    type='primary'>Save</Button>
            </div>
        )
    }
}

export default BossInfo
