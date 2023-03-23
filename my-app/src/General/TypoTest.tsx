import '../App.css'
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

function TypoTest() {
    return (
      <div className="TypoTest" style={{width:"800px", margin:"0 auto", textAlign:"left"}}>
        <h3>Typography Example (Basic)</h3>
        <Typography>
        <Title>Introduction</Title>
        <Paragraph>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
        </Paragraph>
        <Paragraph>
            After massive project practice and summaries, Ant Design, a design language for background
            applications, is refined by Ant UED Team, which aims to 
            <Text strong>
                uniform the user interface specs for internal background projects, lower the unnecessary
                cost of design differences and implementation and liberate the resources of design and
                front-end development
            </Text>
            .
        </Paragraph>
        <Title level={2}>Guidelines and Resources</Title>
        <Paragraph>
            We supply a series of design principles, practical patterns and high quality design resources
            (<Text code>Sketch</Text>and<Text code>Sketch</Text>), to help poeple create their produce 
            prototypes beautifully and efficiently.
        </Paragraph>

        <Paragraph>
            <ul>
                <li>
                    <a href="/docs/spec/proximity">Principles</a>
                </li>
                <li>
                    <a href="/docs/pattern/navigation">Patterns</a>
                </li>
                <li>
                    <a href="/docs/resource/download">Resource Download</a>
                </li>
            </ul>
        </Paragraph>

        <Divider />

        </Typography>
       
        <h3>Typography Example-(Title)</h3>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        
        <Divider />

        <h3>Typography Example-(Text)</h3>
        <Text>Ant Design</Text>
        <br />
        <Text type='secondary'>Ant Design</Text>
        <br />
        <Text type="warning">Ant Design</Text>
        <br />
        <Text type="danger">Ant Design</Text>
        <br />
        <Text disabled>Ant Design</Text>
        <br />
        <Text mark>Ant Design</Text>
        <br />
        <Text code>Ant Design</Text>
        <br />
        <Text underline>Ant Design</Text>
        <br />
        <Text delete>Ant Design</Text>
        <br />
        <Text strong>Ant Design</Text>
        <br />

        <Divider />

        <h3>Typography Example-(Interactive)</h3>

        {/* <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph> */}
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        
        <Divider />

        <h3>Typography Example-(Ellipsis)</h3>
        <Paragraph ellipsis>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
            a design language for background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team.
        </Paragraph>

        <Paragraph ellipsis={{ rows: 3, expandable: true }}>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
            a design language for background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </div>
    );
  }
  
  export default TypoTest;