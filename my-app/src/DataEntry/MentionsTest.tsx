import '../App.css';
import { Mentions } from 'antd';
// import debounce from 'lodash/debounce';

const { Option } = Mentions;

const MOCK_DATA = {
    '@': ['afc163', 'zombiej', 'yesmeck'],
    '#': ['1.0', '2.0', '3.0'],
};

function MentionsTest() {
  
  return (
    <div className="MentionsTest">
      <h3>Mentions Example-(Basic)</h3>
      <div style={{ width: "400px", margin:"0 auto", textAlign:"left"}}>
        <Mentions
            style={{ width:"100%"}}
            defaultValue="@afc163"
        >
            <Option value='afc163'>afc163</Option>
            <Option value="zombieJ">zombieJ</Option>
            <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </div>
      <h3>Mentions Example-(Customize Trigger Token)</h3>
      <div style={{ width: "400px", margin:"0 auto", textAlign:"left"}}>
        <Mentions
            style={{ width: '100%' }}
            placeholder="input @ to mention people, # to mention tag"
            prefix={['@', '#']}
            // onSearch={this.onSearch}
        >
            {/* {(MOCK_DATA[prefix] || []).map(value => (
            <Option key={value} value={value}>
                {value}
            </Option>
            ))} */}
        </Mentions>
      </div>
      <h3>Mentions Example-(Disabled or readOnly)</h3>
      <div style={{ width: "400px", margin:"0 auto", textAlign:"left"}}>
        <div style={{ marginBottom: 10 }}>
            <Mentions style={{ width: '100%' }} placeholder="this is disabled Mentions" disabled>
            {/* {getOptions()} */}
            </Mentions>
        </div>
        <Mentions style={{ width: '100%' }} placeholder="this is readOnly Mentions" readOnly>
            {/* {getOptions()} */}
        </Mentions>
      </div>
      <h3>Mentions Example-(Placement)</h3>
      <div style={{ width: "400px", margin:"0 auto", textAlign:"left"}}>
        <Mentions style={{ width: '100%' }} placement="top">
            <Option value="afc163">afc163</Option>
            <Option value="zombieJ">zombieJ</Option>
            <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </div>
    </div>
    
  );
}

export default MentionsTest;