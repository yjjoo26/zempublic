import '../App.css';
import { Tag, Typography, Button } from 'antd';

const { Text } = Typography;
const { CheckableTag } = Tag;

function Tragest() {
  
  return (
    <div className="TagTest">
        <h3>Tag Examples-(Basic) </h3>
        <div>
            <Tag>Tag 1</Tag>
            <Tag>
                <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
            </Tag>
            <Tag closable>
                Tag 2
            </Tag>
            <Tag closable>
                Prevent Default
            </Tag>
        </div>
        <h3>Tag Examples-(Colorful Tag) </h3>
        <div>
            <h4 style={{ marginBottom: 16 }}>Presets:</h4>
            <div>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
            </div>
            <h4 style={{ margin: '16px 0' }}>Custom:</h4>
            <div>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
            </div>
        </div>
        <h3><Text delete>Tag Examples-(Add & Remove Dynamically)</Text ></h3>
        <h3><Text delete>Tag Examples-(Checkable)</Text ></h3>
        <h3>Tag Examples-(Controlled) </h3>
        <div>
            <Tag
            closable
            // visible={this.state.visible}
            // onClose={() => this.setState({ visible: false })}
            >
            Movies
            </Tag>
            <br />
            <Button size="small">
            Toggle
            </Button>
        </div>
    </div>
    
  );
}

export default Tragest;