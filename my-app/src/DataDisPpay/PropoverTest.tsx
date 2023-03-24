import '../App.css';
import { Popover, Button } from 'antd';

const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
);
const content2 = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
);

const text = <span>Title</span>;
const content3 = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 70;

const text2 = <span>Title</span>;
const content4 = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function PropoverTest() {
  
  return (
    <div>
        <h3>Propover Example-(Basic)</h3> 
        <div className="PropoverTest">
            <Popover content={content} title="Title">
                <Button type="primary">Hover me</Button>
            </Popover>
        </div>
        <h3>Propover Example-(Three ways to trigger)</h3> 
        <div>
            <Popover content={content2} title="Title" trigger="hover">
            <Button>Hover me</Button>
            </Popover>
            <Popover content={content2} title="Title" trigger="focus">
            <Button>Focus me</Button>
            </Popover>
            <Popover content={content2} title="Title" trigger="click">
            <Button>Click me</Button>
            </Popover>
        </div>
        <h3>Propover Example-(Placement)</h3> 
        <div>
            <div className="demo">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title={text} content={content3} trigger="click">
                        <Button>TL</Button>
                    </Popover>
                    <Popover placement="top" title={text} content={content3} trigger="click">
                        <Button>Top</Button>
                    </Popover>
                    <Popover placement="topRight" title={text} content={content3} trigger="click">
                        <Button>TR</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, float: 'left' }}>
                    <Popover placement="leftTop" title={text} content={content3} trigger="click">
                        <Button>LT</Button>
                    </Popover>
                    <Popover placement="left" title={text} content={content3} trigger="click">
                        <Button>Left</Button>
                    </Popover>
                    <Popover placement="leftBottom" title={text} content={content3} trigger="click">
                        <Button>LB</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
                    <Popover placement="rightTop" title={text} content={content3} trigger="click">
                        <Button>RT</Button>
                    </Popover>
                    <Popover placement="right" title={text} content={content3} trigger="click">
                        <Button>Right</Button>
                    </Popover>
                    <Popover placement="rightBottom" title={text} content={content3} trigger="click">
                        <Button>RB</Button>
                    </Popover>
                </div>
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" title={text} content={content3} trigger="click">
                        <Button>BL</Button>
                    </Popover>
                    <Popover placement="bottom" title={text} content={content3} trigger="click">
                        <Button>Bottom</Button>
                    </Popover>
                    <Popover placement="bottomRight" title={text} content={content3} trigger="click">
                        <Button>BR</Button>
                    </Popover>
                </div>
            </div>
        </div>
        {/* <h3>Propover Example-(Controlling)</h3> 
        <div>
            <Popover
                content={<a onClick={this.hide}>Close</a>}
                title="Title"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <Button type="primary">Click me</Button>
            </Popover>
        </div> */}
        <h3>arrow</h3>
        <div>
            <Popover placement="topLeft" title={text2} content={content4}>
            <Button>Align edge / 边缘对齐</Button>
            </Popover>
            <Popover placement="topLeft" title={text2} content={content4} arrowPointAtCenter>
            <Button>Arrow points to center / 箭头指向中心</Button>
            </Popover>
        </div>
        {/* <h3>hover with</h3> */}

    </div>
    
  );
}

export default PropoverTest;