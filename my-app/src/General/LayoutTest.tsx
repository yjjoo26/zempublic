import '../App.css';
import { Layout, Breadcrumb  } from 'antd';
// import { Menu } from '../../node_modules/antd/es/menu'

const { Header, Footer, Sider, Content } = Layout;

function LayoutTest() {
  return (
    <div className="LayoutTest">
        <h3>Layout Example-(Basic)</h3>
        <br />
        <br />
        <Layout>
            <Header className='l-h'>Header</Header>
            <Content className='l-c'>Content</Content>
            <Footer className='l-f'>Footer</Footer>
        </Layout>
        <br />
        <br />
        <Layout>
            <Header className='l-h'>Header</Header>
            <Layout>
                <Sider className='l-s'>Sider</Sider>
                <Content className='l-c'>Content</Content>
            </Layout>
            <Footer className='l-f'>Footer</Footer>
        </Layout>
        <br />
        <br />
        <Layout>
            <Header className='l-h'>Header</Header>
            <Layout>
                <Content className='l-c'>Content</Content>
                <Sider className='l-s'>Sider</Sider>
            </Layout>
            <Footer className='l-f'>Footer</Footer>
        </Layout>
        <br />
        <br />
        <Layout>
            <Sider className='l-s'>Sider</Sider>
            <Layout>
                <Header className='l-h'>Header</Header> 
                <Content className='l-c'>Content</Content>
                <Footer className='l-f'>Footer</Footer>
            </Layout>
        </Layout>

        {/* <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout> */}
    </div>
  );
}

export default LayoutTest;