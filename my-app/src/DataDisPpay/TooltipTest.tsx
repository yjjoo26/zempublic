import '../App.css';
import { Tooltip, Button } from 'antd';

const text = <span>prompt text</span>;

const buttonWidth = 70;

function ToolipTest() {
  
  return (
    <div className="ToolipTest">
      <h3>Toolip Example-(Basic)</h3>
      <div>
        <Tooltip title="prompt text">
            <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div>
      <br />
      <h3>Toolip Example-(Placement)</h3>
      <div style={{width:"300px", margin:"0 auto"}}>
        <div className="demo">
            <div style={{ marginLeft: buttonWidth, whiteSpace:'nowrap'}}>
                <Tooltip placement="topLeft" title={text}>
                    <Button>TL</Button>
                </Tooltip>
                <Tooltip placement="top" title={text}>
                    <Button>TOP</Button>
                </Tooltip>
                <Tooltip placement="topRight" title={text}>
                    <Button>TR</Button>
                </Tooltip>
            </div>
            <div style={{ width:buttonWidth, float:"left"}}>
                <Tooltip placement="leftTop" title={text}>
                  <Button>LT</Button>
                </Tooltip>
                <Tooltip placement="left" title={text}>
                  <Button>Left</Button>
                </Tooltip>
                <Tooltip placement="leftBottom" title={text}>
                  <Button>LB</Button>
                </Tooltip>
            </div>
            <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
              <Tooltip placement="rightTop" title={text}>
                <Button>RT</Button>
              </Tooltip>
              <Tooltip placement="right" title={text}>
                <Button>Right</Button>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text}>
                <Button>RB</Button>
              </Tooltip>
            </div>
            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <Tooltip placement="bottomLeft" title={text}>
                <Button>BL</Button>
              </Tooltip>
              <Tooltip placement="bottom" title={text}>
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text}>
                <Button>BR</Button>
              </Tooltip>
            </div>
        </div>
      </div>
      <br />
      <h3>Toolip Example-(Arrow pointing at center)</h3>
      <br />
      <div>
        <Tooltip placement='topLeft' title='promt text'>
          <Button>Align edge / ㅇㅇㅇ </Button>
        </Tooltip>
        <Tooltip placement='topLeft' title='promt text'arrowPointAtCenter>
          <Button>Arrow point to center / o o o</Button>
        </Tooltip>
      </div>
    </div>
    
    
  );
}

export default ToolipTest;