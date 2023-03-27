import '../App.css';
import { Rate, Button } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function RateTest() {
  
  return (
    <div className="RateTest">
        <h3>Rate Examples-(Basic)</h3>
        <div>
            <Rate />
        </div>
        <h3>Rate Examples-(Half star)</h3>
        <div>
            <Rate allowHalf defaultValue={2.5} />
        </div>
        <h3>Rate Examples-(Read Only)</h3>
        <div>
            <Rate disabled defaultValue={2} />
        </div>
        <h3>Rate Examples-(Clear Star)</h3>
        <div>
            <Rate defaultValue={3} />
            <span className="ant-rate-text">allowClear: true</span>
            <br />
            <Rate allowClear={false} defaultValue={3} />
            <span className="ant-rate-text">allowClear: false</span>
        </div>
        <h3>Rate Examples-(Other Character)</h3>
        <div>
            <Rate character={<Button icon="heart" />} allowHalf />
            <br />
            <Rate character="A" allowHalf style={{ fontSize: 36 }} />
            <br />
            <Rate character="好" allowHalf />
        </div>
    </div>
    
  );
}

export default RateTest;