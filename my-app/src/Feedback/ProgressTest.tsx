import '../App.css';
import { Progress, Tooltip } from 'antd';

const Demo = () => (
    <div>
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={99.9}
      />
      <Progress
        strokeColor={{
          from: '#108ee9',
          to: '#87d068',
        }}
        percent={99.9}
        status="active"
      />
      <Progress
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={90}
      />
      <Progress
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={100}
      />
    </div>
);


function ProgressTest() {
  
  return (
    <div className="ProgressTest">
        <h3>Progress Examples-(Basic) </h3>
        <div style={{ width: 500, margin:"0 auto"}}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
        </div>
        <h3>Progress Examples-(Circular) </h3>
        <div style={{ width: 500, margin:"0 auto"}}>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
        </div>
        <h3>Progress Examples-(Minisize)</h3>
        <div style={{ width: 170 , margin:"0 auto"}}>
            <Progress percent={30} size="small" />
            <Progress percent={50} size="small" status="active" />
            <Progress percent={70} size="small" status="exception" />
            <Progress percent={100} size="small" />
        </div>
        <h3>Progress Examples-(Custom text format)</h3>
        <div>
            <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
            <Progress type="circle" percent={100} format={() => 'Done'} />
        </div>
        <h3>Progress Examples-(Custom text format)</h3>
        <div>
            <Progress type="dashboard" percent={75} />
        </div>
        <h3>Progress Examples-(Progress bar with success segment)</h3>
        <div style={{ width: 500, margin:"0 auto"}}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30}/>
            </Tooltip>
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="circle" />
            </Tooltip>
            <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="dashboard" />
            </Tooltip>
        </div>
        <h3>Progress Examples-(Square linecaps)</h3>
        <div style={{ width: 500, margin:"0 auto"}}>
            <Progress strokeLinecap="square" percent={75} />
            <Progress strokeLinecap="square" type="circle" percent={75} />
            <Progress strokeLinecap="square" type="dashboard" percent={75} />
        </div>
        <h3>Progress Examples-(custom line gradient)</h3>
        <div style={{ width: 500, margin:"0 auto"}}>
            <Demo />
        </div>
    </div>
    
  );
}

export default ProgressTest;