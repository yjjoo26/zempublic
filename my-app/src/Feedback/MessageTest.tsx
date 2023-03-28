import '../App.css';
import { message, Button } from 'antd';

const info = () => {
    message.info('This is a normal message')
};
const success = () => {
    message.success('This is a success message');
};
  
const error = () => {
    message.error('This is an error message');
};
  
const warning = () => {
    message.warning('This is a warning message');
};

const dura = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

const load = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
};

const promise = () => {
    message
      .loading('Action in progress..', 2.5)
    //   .then(() => message.success('Loading finished', 2.5))
    //   .then(() => message.info('Loading finished is finished', 2.5));
};

const key = 'updatable';

// const openMessage = () => {
//   message.loading({ content: 'Loading...', key });
//   setTimeout(() => {
//     message.success({ content: 'Loaded!', key, duration: 2 });
//   }, 1000);
// };


function MessageTest() {
  
  return (
    <div className="MessageTest">
        <h3>Message Examples-(Normal) </h3>
        <div>
            <Button type='primary' onClick={info}>
                Display normal message
            </Button>
        </div>
        <h3>Message Examples-(Other type message) </h3>
        <div>
            <Button onClick={success}>
                Success
            </Button>
            <Button onClick={error}>
                Error                
            </Button>
            <Button onClick={warning}>
                Warning
            </Button>
        </div>
        <h3>Message Examples-(Customize duration) </h3>
        <div>
            <Button onClick={dura}>
                Customized display duration
            </Button>
        </div>
        <h3>Message Examples-(Message with loading indicator) </h3>
        <div>
            <Button onClick={load}>
                Display a loading indicator
            </Button>
        </div>
        <h3>Message Examples-(Promise interface) </h3>
        <div>
            <Button onClick={promise}>
                Display sequential messages
            </Button>
        </div>
    </div>
    
  );
}

export default MessageTest;