import '../App.css';
import { List, Typography } from 'antd';
import {  Avatar } from 'antd';
import { Card  } from "antd";


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


const data2 = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const data3 = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
];

const data4 = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
];

function ListTest() {
  
  return (
    <div className="ListTest">
        <h3>List Example-(Simple)</h3>
        <div style={{ textAlign:"left"}}>
            <h3 style={{ marginBottom: 16 }}>Default Size</h3>
            <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
            />
            <h3 style={{ margin: '16px 0' }}>Small Size</h3>
            <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
            />
            <h3 style={{ margin: '16px 0' }}>Large Size</h3>
            <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
        <h3>List Example-(Basic)</h3>
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data2}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />
        </div>
        <h3>List Example-(Grid)</h3>
        <div style={{textAlign:"left"}}>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data3}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
                )}
            />
        </div>
        <h3>List Example-(Responsive Grid)</h3>
        <div style={{textAlign:"left"}}>
            <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
                }}
                dataSource={data4}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
                )}
            />
        </div>
    </div>
    
  );
}

export default ListTest;