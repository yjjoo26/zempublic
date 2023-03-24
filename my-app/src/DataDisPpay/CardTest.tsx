import '../App.css';
import { Card, Col, Row  , Skeleton, Switch, Icon, Avatar, Button } from 'antd';

const { Meta } = Card;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


function CardTest() {

    // state = {
    //     loading: true,
    // };

    // onChange = checked => {
    //     this.setState({ loading: !checked });
    // };
  
  return (
      <div>
        <h3>Card Example-(Basic)</h3>
        <div className="CardTest" style={{width:"500px", margin:"0 auto"}}>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{width : 300, textAlign: "left"}}>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </Card>
            <Card size='small' title='small size card' extra={<a href="#">More</a>} style={{ width:300 , textAlign: "left"}}>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </Card>
        </div>
        <h3>Card Example-(No border)</h3>
        <div style={{ background: '#ECECEC', padding: '30px', width:"500px", margin:"0 auto" }}>
            <Card title="Card title" bordered={false} style={{ width: 300, textAlign: "left" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
        <h3>Card Example-(Simple card)</h3>
        <div style={{ width:"500px", margin:"0 auto" }}>
            <Card style={{ width: 300, textAlign: "left" }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
        <h3>Card Example-(Customized card)</h3>
        <div style={{width:"500px", margin:"0 auto"}}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
        <h3>Card Example-(Card in Column)</h3>
        <div style={{ backgroundColor:'#ececec', padding: '30px'}}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="title" bordered={false}>
                        Card Contents
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="title" bordered={false}>
                        Card Contents
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="title" bordered={false}>
                        Card Contents
                    </Card>
                </Col>
            </Row>
        </div>
        <h3>Card Example-(Loading Card)</h3>
        <div style={{width:"300px", margin:"0 auto"}}>
            <Switch checked />
            <Card style={{ width: 300, marginTop: 16}} loading>
                <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <Button icon='setting'/>,
                    <Button icon="edit" />,
                    <Button icon="ellipsis" />
                ]}
            >
                <Skeleton loading avatar active>
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                    />
                </Skeleton>

            </Card>
        </div>
        <h3>Card Example-(Grid Card)</h3>
        <Card title="Card Title">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                Content
            </Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
        <h3>Card Example-(Inner Card)</h3>
        <Card title="Card title">
            <p
            style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.85)',
                marginBottom: 16,
                fontWeight: 500,
            }}
            >
                Group title
            </p>
            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
            Inner Card content
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
            >
                Inner Card content
            </Card>
        </Card>
        <h3>Card Example-(Support more content configuration)</h3>
        <div style={{ width: 300, margin:"0 auto" }}>
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                    <Button icon='setting'/>,
                    <Button icon="edit" />,
                    <Button icon="ellipsis" />
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>

    </div>
    
  );
}

export default CardTest;