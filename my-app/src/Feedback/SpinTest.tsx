import '../App.css';
import { Spin, Switch, Alert, Button } from 'antd';

const antIcon = <Button icon="loading" type="link" style={{ fontSize: 24 }} />;

function SpinTest() {
  
  return (
    <div className="SpinTest">
        <h3>Spin Examples-(Basic) </h3>
        <div>
            <Spin />
        </div>
        <h3>Spin Examples-(Size) </h3>
        <div>
            <Spin size='small' style={{ margin : "10px"}}/>
            <Spin style={{ margin : "10px"}} />
            <Spin size='large' style={{ margin : "10px"}}/>
        </div>
        <h3>Spin Examples-(Inside a container) </h3>
        <div className="example">
            <Spin />
        </div>
        <h3>Spin Examples-(Customized description) </h3>
        <div>
            <Spin>
                <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
                />
            </Spin>
        </div>
        <h3>Spin Examples-(Custom spining indicator) </h3>
        <div>
            <Spin indicator={antIcon} />
        </div>
    </div>
    
  );
}

export default SpinTest;