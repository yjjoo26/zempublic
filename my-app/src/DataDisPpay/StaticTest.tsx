import '../App.css';
import { Statistic, Row, Col, Button, Card } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK


function StaticTest() {
  
  return (
    <div className="StaticTest">  
      <h3>Static Example-(Basic)</h3>
      <div style={{width:"500px", margin:"0 auto", textAlign:"left"}}>
        <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
        </Row>
      </div>
      <h3>Static Example-(Unit)</h3>
      <div style={{width:"500px", margin:"0 auto", textAlign:"left"}}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Feedback" value={1128} prefix="Like" />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </div>
      <h3>Static Example-(In card)</h3>
      <div style={{width:"500px", margin:"0 auto", textAlign:"left"}}>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  // prefix={<Icon type="arrow-up" />}
                  prefix="↑"
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  // prefix={<Icon type="arrow-down" />}
                  prefix="↓"
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <h3>Static Example-(Countdown)</h3>
      <div style={{width:"500px", margin:"0 auto", textAlign:"left"}}>
        <Row gutter={16}>
          <Col span={12}>
            <Countdown title="Countdown" value={deadline} />
          </Col>
          <Col span={12}>
            <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={24} style={{ marginTop: 32 }}>
            <Countdown title="Day Level" value={deadline} format="D 일 H 시 m 분 s 초" />
          </Col>
        </Row>
      </div>


    </div>
    
  );
}

export default StaticTest;