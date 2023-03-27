import '../App.css';
import { Slider, InputNumber, Row, Col  } from 'antd';

const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
};

const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
};

function SliderTest() {
  
  return (
    <div className="SliderTest">
        <h3>Slider Examples-(Basic) </h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <Slider defaultValue={30} />
            <Slider range defaultValue={[20, 50]} />
        </div>
        <br /><br />
        <h3>Slider Examples-(Slide with InputNumber)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        // value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        // value={inputValue}
                    />
                </Col>
            </Row>
        </div>
        <br /><br />
        <h3>Slider Examples-(Customize toolip)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <Slider tipFormatter={value => `${value.toFixed(1)}%`} />
        </div>
        <br /><br />
        <h3>Slider Examples-(Event)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <Slider defaultValue={30}/>
            <Slider
                range
                step={10}
                defaultValue={[20, 50]}
            />
        </div>
        <br /><br />
        <h3>Slider Examples-(Graduated slider)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <h4>included=true</h4>
            <Slider marks={marks} defaultValue={37} />
            <Slider range marks={marks} defaultValue={[26, 37]} />

            <h4>included=false</h4>
            <Slider marks={marks} included={false} defaultValue={37} />

            <h4>marks & step</h4>
            <Slider marks={marks} step={10} defaultValue={37} />

            <h4>step=null</h4>
            <Slider marks={marks} step={null} defaultValue={37} />
        </div>
        <br /><br />
        <h3>Slider Examples-(Vertical)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <div style={style}>
                <Slider vertical defaultValue={30}/>
            </div>
            <div style={style}>
                <Slider vertical range step={10} defaultValue={[20, 50]}/>
            </div>
            <div style={style}>
                <Slider vertical range marks={marks} defaultValue={[26, 37]}/>
            </div>
        </div>
        <br /><br />
        <h3>Slider Examples-(Control visible of Tooltip)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <Slider defaultValue={30} tooltipVisible/>
        </div>
        <h3>Slider Examples-(Reverse)</h3>
        <div style={{ width:"500px", margin:"0 auto"}}>
            <Slider defaultValue={30} reverse/>
            <Slider range defaultValue={[20, 50]} reverse/>
        </div>
    </div>
    
  );
}

export default SliderTest;