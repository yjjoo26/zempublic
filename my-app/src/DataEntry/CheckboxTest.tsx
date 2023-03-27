import '../App.css';
import { Checkbox, Row, Col } from 'antd';

function CheckboxTest() {
  
  return (
    <div className="CheckboxTest">
        <h3>Checkbox Examples-(Basic) </h3>
        <div>
            <Checkbox>Checkbox</Checkbox>
        </div>
        <h3>Checkbox Examples-(Disabled) </h3>
        <div>
            <Checkbox defaultChecked={false} disabled />
            <br />
            <Checkbox defaultChecked disabled />
        </div>
        <h3>Checkbox Examples-(Use with Grid) </h3>
        <div>
            <div style={{ width: '100%' }}>
                <Row>
                <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="E">E</Checkbox>
                </Col>
                </Row>
            </div>
        </div>
    </div>
    
  );
}

export default CheckboxTest;