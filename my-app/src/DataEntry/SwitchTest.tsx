import '../App.css';
import { Button, Switch } from 'antd';

function SwitchTest() {
  
  return (
    <div className="SwitchTest">
        <h3>Switch Examples-(Basic) </h3>
        <div>
            <Switch defaultChecked />
        </div>
        <h3>Switch Examples-(Disabled) </h3>
        <div>
            <Switch defaultChecked disabled/>
        </div>
        <h3>Switch Examples-(Text & Icon) </h3>
        <div>
            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked/>
            <br />
            <Switch checkedChildren="1" unCheckedChildren="0" />
            <br />
            <Switch
                checkedChildren={<Button icon='check' size='small' type='link' ghost/>}
                unCheckedChildren={<Button icon="close" size='small' type='link' ghost/>}
            />
        </div>
        <h3>Switch Examples-(Two size) </h3>
        <div>
            <Switch defaultChecked/>
            <br/>
            <Switch size="small" defaultChecked/>
        </div>
        <h3>Switch Examples-(Loading)</h3>
        <div>
            <Switch loading defaultChecked/>
            <br />
            <Switch size="small" loading/>
        </div>
    </div>
    
  );
}

export default SwitchTest;