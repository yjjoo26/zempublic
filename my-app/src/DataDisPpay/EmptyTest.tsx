import '../App.css';
import { Empty, Button } from 'antd';
import {
    ConfigProvider,
    Switch,
    Divider,
    Icon,
    TreeSelect,
    Select,
    Cascader,
    Transfer,
    Table,
    List,
} from 'antd';

function EmptyTest() {
  
  return (
    <div className="EmptyTest">
        <h3>Empty Example-(Basic, Chose image, Customize, Nodescription)</h3>
        <Empty />
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
            height: 60,
            }}
            description={
            <span>
                Customize <a href="#API">Description</a>
            </span>
            }
        >
            <Button type="primary">Create Now</Button>
        </Empty>
        <Empty description={false} />
    </div>
    
  );
}

export default EmptyTest;