import '../App.css';
import { Input, Select, Button, Tooltip } from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }} />
//     <Option value="Http://">Http://</Option>
//     <Option value="Https://">Https://</Option>
//   </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }} />
//     <Option value=".com">.com</Option>
//     <Option value=".jp">.jp</Option>
//     <Option value=".cn">.cn</Option>
//     <Option value=".org">.org</Option>
//   </Select>
);
const { Search } = Input;

const { TextArea } = Input;

function InputTest() {
  
  return (
    <div className="InputTest">
        <h3>Input Examples-(Basic)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <Input placeholder='Basic usage'/>
        </div>
        <h3>Input Examples-(Three Size of Input)</h3>
        <div>
            <div  className="example-input">
                <Input size="large" placeholder="large size" />
                <Input placeholder="default size" />
                <Input size="small" placeholder="small size" />
            </div>
        </div> 
        <h3>Input Examples-(Pre/Post tab)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <div style={{ marginBottom: 16 }}>
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
            <Input addonAfter={<Button icon="setting" />} defaultValue="mysite" />
            </div>
        </div>
        <h3>Input Examples-(Text Area)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <TextArea rows={4}/>
        </div>
        <h3>Input Examples-(Autosizing the heigth)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <TextArea placeholder='Autosize height based on contents lines' autosize />
            <div style={{ margin: '24px 0' }} />
            <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autoSize={{ minRows: 2, maxRows: 6 }}
            />
            <div style={{ margin: '24px 0' }} />
            <TextArea
                // value={value}
                // onChange={this.onChange}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
        </div>
        <h3>Input Examples-(prefix and suffix)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <Input
                placeholder="Enter your username"
                prefix={<Button icon="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                    <Tooltip title="Extra information">
                    <Button icon="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />

            <br />
            <br />

            <Input prefix="￥" suffix="RMB" />
        </div>
        {/* 누락실수 */}
        <h3>Input Examples-(Search)</h3>
        <div style={{width:400, margin:"0 auto", textAlign:"left"}}>
            <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            />
            <br />
            <br />
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            <br />
            <br />
            <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
            />
        </div>
        <h3>Input Examples-(password)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <Input.Password placeholder='input password'/>
        </div>
        <h3>Input Examples-(With clear icon)</h3>
        <div style={{ width:"400px", margin:"0 auto"}}>
            <Input placeholder='input with clear icon' />
            <Input placeholder='input with clear icon' allowClear/>
            <TextArea placeholder='textarea with clear icon' />
            <TextArea placeholder='textarea with clear icon' allowClear/>
        </div>
    </div>
    
  );
}

export default InputTest;