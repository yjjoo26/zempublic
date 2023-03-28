import '../App.css';
import { Alert } from 'antd';

function AlertTest() {
  
  return (
    <div className="AlertTest">
        <h3>Alert Examples-(Basic) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Success Text" type="success" />
        </div>
        <h3>Alert Examples-(More type) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Success Text" type="success" />
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Info text" type='info' />
            <div style={{ marginBottom :"10px"}} />
            <Alert message='Warning text' type='warning'/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message='Error text' type='error' />
        </div>
        <h3>Alert Examples-(Closable) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text" type="warning" closable />
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Error Tex" description='Error Description Error Description Error Description Error Description Error Description Error Description' type="error" closable />
        </div>
        <h3>Alert Examples-(Description) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Success Text" description="Success Description Success Description Success Description" type='success'/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info"/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Warning Text" description="Warning Description Warning Description Warning Description Warning Description" type="warning"/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="error" />
        </div>
        <h3>Alert Examples-(Show Icon) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Success Text" type="success" showIcon/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Info text" type='info' showIcon />
            <div style={{ marginBottom :"10px"}} />
            <Alert message='Warning text' type='warning' showIcon/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message='Error text' type='error'  showIcon/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Success Tips" description="Detailed description and advice about successful copywriting." type='success' showIcon/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Informational Notes" description="Additional description and information about copywriting." type="info" showIcon/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Warning" description="This is a warning notice about copywriting." type="warning" showIcon/>
            <div style={{ marginBottom :"10px"}} />
            <Alert message="Error" description="This is an error message about copywriting." type="error" showIcon />
        </div>
        <h3>Alert Examples-(Customize closed) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Info Text" type="info" closeText="Close Now"/>
        </div>
        <h3>Alert Examples-(Banner) </h3>
        <div style={{width : "500px", margin:"0 auto", textAlign:"left"}}>
            <Alert message="Warning text" banner/>
            <br />
            <Alert
                message="Very long warning text warning text text text text text text text"
                banner
                closable
            />
            <br />
            <Alert showIcon={false} message="Warning text without icon" banner />
            <br />
            <Alert type='error' message="Error text" banner />
        </div>
    </div>
    
  );
}

export default AlertTest;