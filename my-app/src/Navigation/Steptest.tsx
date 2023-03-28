import '../App.css';
import { Steps } from 'antd';

const { Step } = Steps;

function StepTest() {
  
  return (
    <div className="StepTest">
        <h3>Step Example-(Basic)</h3>
        {/* Steps import X */}
        {/* <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps> */}
    </div>
    
  );
}

export default StepTest;