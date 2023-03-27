import '../App.css';
import { Timeline, Button } from 'antd';

function TimelineTest() {
  
  return (
    <div className="TimelineTest">
        <h3>Timeline Example-(Basic)</h3>
        <div style={{width:"300px",margin:"0 auto", textAlign:"left"}}>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
        <h3>Timeline Example-(color)</h3>
        <div style={{width:"300px",margin:"0 auto", textAlign:"left"}}>
            <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3</p>
                </Timeline.Item>
            </Timeline>
        </div>
        <h3>Timeline Example-(Last node and Reversing)</h3>
        <div style={{width:"300px",margin:"0 auto", textAlign:"left"}}>
            <Timeline pending="Recording..." >
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            </Timeline>
            <Button type="primary" style={{ marginTop: 16 }}>
            Toggle Reverse
            </Button>
        </div>
        <h3>Timeline Example-(Alternate)</h3>
        <div style={{width:"300px",margin:"0 auto", textAlign:"left"}}>
            <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                <Timeline.Item dot={<Button type="link" icon='clock-circle-o' style={{ fontSize: '16px' }}/>}>Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Button type="link" icon='clock-circle-o' style={{ fontSize: '16px' }}/>}>Technical testing 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
        <h3>Timeline Example-(Custom)</h3>
        <div style={{width:"300px",margin:"0 auto", textAlign:"left"}}>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item  dot={<Button type="link" icon='clock-circle-o' color='red' style={{ fontSize: '16px' }}/>} color="red">
                Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
        <h3>Timeline Example-(Right Alternate)</h3>
        <div style={{width:"300px",margin:"0 auto", textAlign:"left"}}>
            <Timeline mode="right">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item  dot={<Button type="link" icon='clock-circle-o' color='red' style={{ fontSize: '16px' }} />} color="red">
                Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
    </div>
    
  );
}

export default TimelineTest;