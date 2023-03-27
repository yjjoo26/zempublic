import '../App.css';
import { Radio, Input } from 'antd';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

function RadioTest() {
  
  return (
    <div className="RadioTest">
        <h3>Radio Examples-(Basic) </h3>
        <div>
            <Radio>Radio</Radio>
        </div>
        <h3>Radio Examples-(Disabled) </h3>
        <div>
            <Radio defaultChecked={false} disabled>Disabled</Radio>
            <Radio defaultChecked>Disabled</Radio>
        </div>
        <h3>Radio Examples-(Radio Group) </h3>
        <div>
            <Radio.Group>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
        </div>
        <h3>Radio Examples-(Vertical Radio.Group) </h3>
        <div>
            <Radio.Group>
                <Radio style={radioStyle} value={1}>
                Option A
                </Radio>
                <Radio style={radioStyle} value={2}>
                Option B
                </Radio>
                <Radio style={radioStyle} value={3}>
                Option C
                </Radio>
                <Radio style={radioStyle} value={4}>
                More...
                <Input style={{ width: 100, marginLeft: 10 }}/>
                {/* {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null} */}
                </Radio>
            </Radio.Group>
        </div>
        <h3>Radio Examples-(Radio Style)</h3>
        <div>
            <div>
                <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b" disabled>Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div style={{ marginTop: 16 }}>
                <Radio.Group disabled defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
        </div>
        <h3>Radio Examples-(Radio.Group with name)</h3>
        <div>
            <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
        </div>
        <h3>Radio Examples-(Size)</h3>
        <div>
            <div>
                <Radio.Group defaultValue="a" size="large">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="a" size="small">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
        </div>
        <h3>Radio Examples-(Solid radio button)</h3>
        <div>
            <div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="c" buttonStyle="solid">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b" disabled>
                    Shanghai
                    </Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
            </div>
        </div>
    </div>
    
  );
}

export default RadioTest;