import '../App.css';
import { Row, Col, Divider } from 'antd';

// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

function GridTest() {
  return (
    <div className="GridTest">
        <h3>Grid Example-(Basic)</h3>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
        <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
        </Row>
        <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
        </Row>
        <Divider />

        <h3>Grid Example-(Grid Gutter)</h3>
        <div className='gutter-example'>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>
        </div>
        <Divider />

        <h3>Grid Example-(Column offset)</h3>
        <Row>
            <Col span={8} style={{ background:'pink'}}>col-8</Col>
            <Col span={8} offset={8} style={{ background:'skyblue'}}>
                col-8
            </Col>
        </Row>
        <Row>
            <Col span={6} offset={6} style={{ background:'pink'}}>
                col-6 col-offset-6
            </Col>
        <Col span={6} offset={6} style={{ background:'pink'}}>
            col-6 col-offset-6
        </Col>
        </Row>
        <Row>
            <Col span={12} offset={6} style={{ background:'skyblue'}}>
                col-12 col-offset-6
            </Col>
        </Row>

        <Divider />

        <h3>Grid Example-(Grid sort)</h3>
        <Row>
            <Col span={18} push={6} style={{ background:'pink'}}>
                col-18 col-push-6
            </Col>
            <Col span={6} pull={18} style={{ background:'skyblue'}}>
                col-6 col-pull-18
            </Col>
        </Row>

        <Divider />

        <h3>Grid Example-(Flex)</h3>
        <p style={{ textAlign:'left'}}>sub-element align left</p>
        <Row type="flex" justify="start">
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
        </Row>

        <p style={{ textAlign:'left'}}>sub-element align center</p>
        <Row type="flex" justify="center">
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
        </Row>

        <p style={{ textAlign:'left'}}>sub-element align right</p>
        <Row type="flex" justify="end">
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
        </Row>

        <p style={{ textAlign:'left'}}>sub-element monospaced arrangement</p>
        <Row type="flex" justify="space-between">
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
        </Row>

        <p style={{ textAlign:'left'}}>sub-element align full</p>
        <Row type="flex" justify="space-around">
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
            <Col span={4} style={{ background:'pink'}}>col-4</Col>
            <Col span={4} style={{ background:'skyblue'}}>col-4</Col>
        </Row>

        <Divider />
        <h3>Grid Example-(Flex Order)</h3>
        {/* Demobox 문제로 인하여 align top,middle,bottom 작성 생략 */}
        {/* <p>Align Top</p>
        <Row type="flex" justify="center" align="top">
            <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
            </Col>
            <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
            </Col>
            <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
            </Col>
            <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
            </Col>
        </Row> */}
            <Row type="flex">
                <Col span={6} order={4}>
                    1 col-order-4
                </Col>
                <Col span={6} order={3}>
                    2 col-order-3
                </Col>
                <Col span={6} order={2}>
                    3 col-order-2
                </Col>
                <Col span={6} order={1}>
                    4 col-order-1
                </Col>
            </Row>

        <Divider />

        <h3>Grid Example-(Responsive)</h3>
        <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ background:'pink'}}>
        Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ background:'beige'}}>
        Col
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ background:'pink'}}>
        Col
        </Col>
        <br />
        <Divider />

        <h3>Grid Example-(Responsive2)</h3>
        <Col xs={{ span: 5 , offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ background:'pink'}}>col</Col>
        <Col xs={{ span: 11 , offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ background:'beige'}}>col</Col>
        <Col xs={{ span: 5 , offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ background:'pink'}}>col</Col>
    </div>
  );
}

export default GridTest;