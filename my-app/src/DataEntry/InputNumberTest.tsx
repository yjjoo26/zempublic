import '../App.css';
import { InputNumber , Button } from 'antd';

function InputNumberTest() {
  
  return (
    <div className="InputNumberTest">
        <h3>InputNumber Examples-(Basic) </h3>
        <div>
            <InputNumber min={1} max={10} defaultValue={3} />
        </div>
        <h3>InputNumber Examples-(sizes) </h3>
        <div>
            <InputNumber size="large" min={1} max={100000} defaultValue={3}  />
            <InputNumber min={1} max={100000} defaultValue={3}  />
            <InputNumber size="small" min={1} max={100000} defaultValue={3}  />
        </div>
        <h3>InputNumber Examples-(disabled) </h3>
        <div>
            <InputNumber min={1} max={10} defaultValue={3} />
            <InputNumber min={1} max={10} disabled defaultValue={3} />
            {/* <div style={{ marginTop: 20 }}>
            <Button type="primary">
                Toggle disabled
            </Button>
            </div> */}
        </div>
        <h3>InputNumber Examples-(Decimals)</h3>
        <div>
            <InputNumber min={0} max={10} step={0.1} /> 
        </div>
        <h3>InputNumber Examples-(Formatter)</h3>
        <div>
            <InputNumber
                defaultValue={1000}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                // parser={value => value.replace(/\$\s?|(,*)/g, '')}
                // onChange={onChange}
            />
            <InputNumber
                defaultValue={100}
                min={0}
                max={100}
                formatter={value => `${value}%`}
                // parser={value => value.replace('%', '')}
                // onChange={onChange}
            /> 
        </div>
    </div>
    
  );
}

export default InputNumberTest;