import '../App.css';
import { Avatar,  Button } from 'antd';
import { Badge } from 'antd';

function AvatarTest() {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       user: UserList[0],
    //       color: colorList[0],
    //     };
    // }
    
    // changeUser = () => {
    //     const index = UserList.indexOf(this.state.user);
    //     this.setState({
    //         user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
    //         color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    //     });
    // };

    // const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    // const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  
  return (
    <div className="AvatarTest">
        <h3>Avatar Examples-(Basic)</h3>
        <div>
            <Avatar size={64} icon="user"/>
            <Avatar size="large" icon="user"/>
            <Avatar icon="user"/>
            <Avatar size="small" icon="user"/>
        </div>
        {/* 누락 */}
        <div>
            <Avatar shape="square" size={64} icon="user"/>
            <Avatar shape="square" size="large" icon="user"/>
            <Avatar shape="square" icon="user"/>
            <Avatar shape="square" size="small" icon="user"/>
        </div>
        <h3>Avatar Examples-(Type)</h3>
        <Avatar icon="user"/>
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar size={45}>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{color:'#f56a00', backgroundColor:'#fde3cf'}}>U</Avatar>
        <Avatar icon='user' style={{ backgroundColor:'#87d068'}}></Avatar>
        <Avatar icon='loading' style={{ backgroundColor:'#87d068'}}></Avatar>
        {/* class 컴포넌트 사용 미숙 */}
        <h3>Avatar Examples-(Autoset Font size)</h3>
        <div>
            <Avatar style={{ backgroundColor: 'pink', verticalAlign: 'middle' }} size="large">
            {/* {this.state.user} */}
            </Avatar>
            <Button
            size="small"
            style={{ marginLeft: 16, verticalAlign: 'middle' }}
            //   onClick={this.changeUser}
            >
            Change
            </Button>
        </div>
        <h3>Avatar Examples-(With Badge)</h3> 
        <div>
            <span style={{ marginRight: 24 }}>
                {/* <Badge count={1}/> 과 같은 형태는 적용이 되나 열린태그 닫힌태그 형태로는 적용 불가 */}
                {/* <Badge count={1}> */}
                    <Avatar shape="square" icon="user" />
                {/* </Badge>  */}
            </span>
            <span>
                {/* <Badge dot> */}
                    <Avatar shape="square" icon="user" />
                {/* </Badge>  */}
            </span>
        </div>
    </div>
    
  );
}

export default AvatarTest;