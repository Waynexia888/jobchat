import React, { Component } from 'react';
import { text } from 'body-parser';
import { Grid, List} from 'antd-mobile';

class AvatarSelector extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const avatarList = 'avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10,avatar11,avatar12,avatar13,avatar14,avatar15,avatar16,avatar17,avatar18,avatar19,avatar20'
                            .split(',')
                            .map((v) => ({
                                icon: require(`../img/${v}.png`),
                                text: v
                            }))
        const gridHeader = this.state.icon
                            ? (<div>
                                <span>Selected</span>
                                <img style={{width:20}} src={this.state.icon} alt=''></img>
                                </div>)
                            : 'Please Choose a Avatar'
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                        data={avatarList} 
                        columnNum={5}
                        onClick={ele => {
                            this.setState(ele)
                            this.props.selectAvatar(ele.text)}}
                    />
                </List>
            </div>
        )
    }
}

export default AvatarSelector