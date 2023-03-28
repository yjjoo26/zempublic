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

// 누락실수
const hoverContent = <div>This is hover content.</div>;

const clickContent = <div>This is click content.</div>;

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
        <h3>Propover Example-(Arrow)</h3> 
        <div>
            <Popover placement="topLeft" title={text2} content={content4}>
            <Button>Align edge / 边缘对齐</Button>
            </Popover>
            <Popover placement="topLeft" title={text2} content={content4} arrowPointAtCenter>
            <Button>Arrow points to center / 箭头指向中心</Button>
            </Popover>
        </div>
        {/* 누락실수 */}
        <h3>Propover Example-(Hover)</h3> 
        <div>
            <Popover
                style={{ width: 500 }}
                content={hoverContent}
                title="Hover title"
                trigger="hover"
                // visible={this.state.hovered}
                // onVisibleChange={this.handleHoverChange}
            >
                <Popover
                    content={
                        <div>
                        {clickContent}
                        {/* <a onClick={this.hide}>Close</a> */}
                        </div>
                    }
                    title="Click title"
                    trigger="click"
                    // visible={this.state.clicked}
                    // onVisibleChange={this.handleClickChange}
                    >
                    <Button>Hover and click / 悬停并单击</Button>
                </Popover>
            </Popover>
        </div>
    </div>
    
  );
}

export default PropoverTest;