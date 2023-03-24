import '../App.css';
import { Badge, Switch } from 'antd';

const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ];

function BadgeTest() {

  return (
    <div className="BadgeTest">
        <h3>Badge Examples-(Basic, Standaione)</h3>
        <div>
            {/* <Badge count={5}> */}
                {/* <a href="#" className='head-example' /> */}
            {/* </Badge> */}
            <Badge count={5}/>
            <Badge count={0} showZero/>
            {/* <Badge count={<Button icon="clock-circle"/>} showZero/> */}
        </div>
        <div>
            <Badge count={25} />
            <Badge
            count={4}
            style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
            />
            <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
        </div>
        <h3>Badge Examples-(Overflow Count)</h3>
        <Badge count={99}/>
        <Badge count={100}/>
        <Badge count={99} overflowCount={10}/>
        <Badge count={1000} overflowCount={999}/>
        <h3>Badge Examples-(Red badge)</h3>
        <Badge dot/>
        <Badge count={0} dot/>
        <h3>Badge Examples-(Dynamic)</h3>
        {/* <Badge dot={this.state.show} /> */}
        <Switch/>
        <h3>Badge Examples-(Status)</h3>
        <div style={{width:"150px", textAlign:"left", margin:"0 auto"}}>
            <Badge status='success'/>
            <Badge status='error'/>
            <Badge status='default'/>
            <Badge status='processing'/>
            <Badge status='warning'/>
            <br />
            <Badge status='success' text='Success'/>
            <br />
            <Badge status='error' text='error'/>
            <br />
            <Badge status='default' text='default'/>
            <br />
            <Badge status='processing' text='processing'/>
            <br />
            <Badge status='warning' text='warning'/>
        </div>
        <h3>Badge Examples-(Colorful Badge)</h3>
        <div style={{width:"150px", textAlign:"left", margin:"0 auto"}}>
            <h4 style={{marginBottom: 16}}>Presets:</h4>
            <div>
                {colors.map(color => (
                    <div key={color}>
                        <Badge color={color} text={color}/>
                    </div>
                ))}
            </div>
            <h4>Custom:</h4>
            <div>
                <Badge color= "#f50" text="#f50"/>
                <br />
                <Badge color= "#2db7f5" text="#2db7f5"/>
                <br />
                <Badge color= "#87d068" text="#87d068"/>
                <br />
                <Badge color= "#108ee9" text="#108ee9"/>
            </div>
        </div>
    </div>
    
  );
}

export default BadgeTest;