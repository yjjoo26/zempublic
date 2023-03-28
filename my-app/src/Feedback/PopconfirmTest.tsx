import '../App.css';
import { Popconfirm, message, Button } from 'antd';

const text = 'Are you sure to delete this task?';

function PopconfirmTest() {

  return (
    <div className="PopconfirmTest">
        <h3>Popconfirm Examples-(Locale text) </h3>
        <div>
            <Popconfirm title="Are you sure?" okText="Yes" cancelText="No">
                <a href="#">Delete</a>
            </Popconfirm>
        </div>
        <h3>Popconfirm Examples-(Placement) </h3>
        <div style={{ width:350, margin:" 0 auto "}}>
            <div className="demo" >
                <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                    <Popconfirm placement="topLeft" title={text} okText="Yes" cancelText="No">
                        <Button>TL</Button>
                    </Popconfirm>
                    <Popconfirm placement="top" title={text} okText="Yes" cancelText="No">
                        <Button>Top</Button>
                    </Popconfirm>
                    <Popconfirm
                        placement="topRight"
                        title={text}
                        // onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>TR</Button>
                    </Popconfirm>
                </div>
                <div style={{ width: 70, float: 'left' }}>
                    <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                        <Button>LT</Button>
                    </Popconfirm>
                    <Popconfirm placement="left" title={text} okText="Yes" cancelText="No">
                        <Button>Left</Button>
                    </Popconfirm>
                    <Popconfirm
                        placement="leftBottom"
                        title={text}
                        // onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>LB</Button>
                    </Popconfirm>
                </div>
                <div style={{ width: 70, marginLeft: 304 }}>
                    <Popconfirm
                        placement="rightTop"
                        title={text}
                        // onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>RT</Button>
                    </Popconfirm>
                    <Popconfirm placement="right" title={text} okText="Yes" cancelText="No">
                        <Button>Right</Button>
                    </Popconfirm>
                    <Popconfirm
                        placement="rightBottom"
                        title={text}
                        // onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>RB</Button>
                    </Popconfirm>
                </div>
                <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popconfirm
                        placement="bottomLeft"
                        title={text}
                        // onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>BL</Button>
                    </Popconfirm>
                    <Popconfirm placement="bottom" title={text} okText="Yes" cancelText="No">
                        <Button>Bottom</Button>
                    </Popconfirm>
                    <Popconfirm
                        placement="bottomRight"
                        title={text}
                        // onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>BR</Button>
                    </Popconfirm>
                </div>
            </div>
        </div>
        <h3>Popconfirm Examples-(Customize icon) </h3>
        <div>
            <Popconfirm
                title="Are you sure?"
                icon={<Button icon='question-circle-o' type='link' size='small' style={{color:"red"}}/>}
            >
                <a href='#'>Delete</a>
            </Popconfirm>
        </div>
    </div>
    
  );
}

export default PopconfirmTest;