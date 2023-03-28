import '../App.css'
import { Button, Radio, Icon, Dropdown } from 'antd';
// import Menu from'../../node_modules/antd/es/menu';

const ButtonGroup = Button.Group;

function ButtonTest() {
  return (
    <div className="ButtonTest" style={{width:"800px", margin:"0 auto", textAlign:"left"}}>
        <h3>Button Examples-(Type) </h3>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <br />
        <br />
        <h3>Button Examples-(Icon) </h3>
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon="search">
          Search
        </Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">
          Search
        </Button>
        <br />
        <br />
        <h3>Button Examples-(Disabled) </h3>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
        <br />
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
        <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </div>
        <br />
        <h3>Button Examples-(Size) </h3>
        {/* size가 적용되지 않아 radio 생략 */}
        <div>
          <Button type="primary">
            Primary
          </Button>
          <Button>
            Normal
          </Button>
          <Button type="dashed">
            Dashed
          </Button>
          <Button type="danger">
              Danger
          </Button>

          <br />
          <Button type="primary" icon="download"/>
          <Button type="primary" shape="circle" icon="download"/>
          <Button type="primary" shape="round" icon="download"/>
          <Button type="primary" shape="round" icon="download">
            Download
          </Button>
          <Button type="primary" shape='round' icon='donwnload'>
              Download
          </Button>
          <br />
          <Button.Group>
              <Button type='primary'>
                  {/* Icon import되지 않아 생략 */}
                  {/* <Icon type="left" /> */}
                  Backward
              </Button>
              <Button type='primary'>
                  {/* Icon import되지 않아 생략 */}
                  {/* <Icon type="right" /> */}
                  Forward
              </Button>
          </Button.Group>
        </div>
        <div>
          <Button type="primary" size="large" >
            Primary
          </Button>
          <Button>
            Normal
          </Button>
          <Button type="dashed" size="large" >
            Dashed
          </Button>
          <Button type="danger" size="large" >
              Danger
          </Button>

          <br />
          <Button type="primary" icon="download" size="large" />
          <Button type="primary" shape="circle" icon="download" size="large" />
          <Button type="primary" shape="round" icon="download" size="large" />
          <Button type="primary" shape="round" icon="download" size="large" >
            Download
          </Button>
          <Button type="primary" shape='round' icon='donwnload' size="large" >
              Download
          </Button>
          <br />
          <Button.Group>
              <Button type='primary' size="large" >
                  {/* Icon import되지 않아 생략 */}
                  {/* <Icon type="left" /> */}
                  Backward
              </Button>
              <Button type='primary' size="large" >
                  {/* Icon import되지 않아 생략 */}
                  {/* <Icon type="right" /> */}
                  Forward
              </Button>
          </Button.Group>
        </div>
        <div>
          <Button type="primary" size="small">
            Primary
          </Button>
          <Button>
            Normal
          </Button>
          <Button type="dashed" size="small">
            Dashed
          </Button>
          <Button type="danger" size="small">
              Danger
          </Button>

          <br />
          <Button type="primary" icon="download" size="small"/>
          <Button type="primary" shape="circle" icon="download" size="small"/>
          <Button type="primary" shape="round" icon="download" size="small"/>
          <Button type="primary" shape="round" icon="download" size="small">
            Download
          </Button>
          <Button type="primary" shape='round' icon='donwnload' size="small">
              Download
          </Button>
          <br />
          <Button.Group>
              <Button type='primary' size="small">
                  {/* Icon import되지 않아 생략 */}
                  {/* <Icon type="left" /> */}
                  Backward
              </Button>
              <Button type='primary' size="small">
                  {/* Icon import되지 않아 생략 */}
                  {/* <Icon type="right" /> */}
                  Forward
              </Button>
          </Button.Group>
        </div>
        <br />
        <br />
        <h3>Button Examples-(Loading) </h3>
        {/* state가 지정되지않아 생략 */}
        <Button type="primary" loading>
            Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" >
          Click me!
        </Button>
        <Button
          type="primary"
          icon="poweroff"
        >
          Click me!
        </Button>
        <br />
        <Button type="primary" loading />
        <Button type="primary" shape="circle" loading />
        <Button type="danger" shape="round" loading />
        <br />
        <br />
        <h3>Button Examples-(Multiple) </h3>
        {/* menu와 icon이 적용되지 x */}
        {/* <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu> */}

        <Button type='primary'>Primary</Button>
        <Button>Secondary</Button>
        {/* <Dropdown overlay={menu}>
            <Button>
                Actions<Icon type='down' />
            </Button>
        </Dropdown> */}
                <br />
        <br />
        <br />
        <h3>Button Examples-(Ghost)</h3>
        <div style={{ background:'rgba(190, 200, 200)', padding: '26px 16px 16px'}}>
            <Button type='primary' ghost>
                Primary
            </Button>
            <Button ghost>
                Default
            </Button>
            <Button type='dashed' ghost>
                Dashed
            </Button>
            <Button type='danger' ghost>
                Danger
            </Button>
            <Button type='link' ghost>
                Link
            </Button>
        </div>
        <br />
        <br />
        <h3>Button Examples-(ButtonGroup)</h3>
        <h4 style={{textAlign:'left'}}>Basic</h4>
        <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
        </ButtonGroup>
        <br />
        {/* Icon 생략 */}
        <h4 style={{textAlign:'left'}}>With icon</h4>
        <ButtonGroup>
        <Button type="primary" icon="left">
            Go back
        </Button>
        <Button type="primary">
            Go forward
            {/* <Icon type="right" /> */}
        </Button>
        </ButtonGroup>
        <ButtonGroup>
        <Button type="primary" icon="cloud" />
        <Button type="primary" icon="cloud-download" />
        </ButtonGroup>
        <ButtonGroup>
        <Button type="primary" size="small" icon="cloud" />
        <Button type="primary" size="small" icon="cloud-download" />
        </ButtonGroup>
        <br />
        <br />
        <h3>Button Examples-(Block)</h3>
        <Button type='primary' block>
            primary
        </Button>
        <Button block>
            Default
        </Button>
        <Button block type='dashed'>
            Dashed
        </Button>
        <Button block type='danger'>
            Danger
        </Button>
        <Button block type='link'>
            Link
        </Button>
    </div>
  );
}

export default ButtonTest;

