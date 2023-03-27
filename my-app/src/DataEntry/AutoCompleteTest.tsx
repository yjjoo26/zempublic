import '../App.css';
import { AutoComplete } from 'antd';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function AutoCompleteTest() {
  
  return (
    <div className="AutoCompleteTest">
        <h3>AutoComplete Examples-(Basic) </h3>
        <div>
            <AutoComplete
            // dataSource={dataSource}
            style={{ width: 200 }}
            // onSelect={onSelect}
            // onSearch={this.onSearch}
            placeholder="input here"
            />
            <br />
            <br />
            <AutoComplete
            // value={value}
            // dataSource={dataSource}
            style={{ width: 200 }}
            // onSelect={onSelect}
            // onSearch={this.onSearch}
            // onChange={this.onChange}
            placeholder="control mode"
            />
        </div>
        <h3>AutoComplete Examples-(Non-case-sensitive AUtoComplete) </h3>
        <div>
            <AutoComplete
                style={{width : 200}}
                dataSource={dataSource}
                placeholder="try to type 'b'"
                // filterOption={(inputValue, option) =>
                //     option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                // }
            />
        </div>
    </div>
    
  );
}

export default AutoCompleteTest;