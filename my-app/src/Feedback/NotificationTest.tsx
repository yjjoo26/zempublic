import '../App.css';
import { Button, notification, Divider } from 'antd';

const openNotification = () => {
  notification.open({
    message:'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    // onClick: ()=> {
    //   console.log('Notification Clicked!');
    // }
  })
}

const openNotification2 = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  notification.open(args);
};

// const openNotificationWithIcon = type => {
//   notification[type]({
//     message: 'Notification Title',
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//   });
// };

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

// const openNotification = () => {
//   const key = `open${Date.now()}`;
//   const btn = (
//     <Button type="primary" size="small" onClick={() => notification.close(key)}>
//       Confirm
//     </Button>
//   );
//   notification.open({
//     message: 'Notification Title',
//     description:
//       'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
//     btn,
//     key,
//     onClose: close,
//   });
// };

// const openNotification3 = placement => {
//   notification.info({
//     message: `Notification ${placement}`,
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//     placement,
//   });
// };

const openNotification4 = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

const key = 'updatable';

const openNotification5 = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

function NotificationTest() {
  
  return (
    <div className="NotificationTest">
        <h3>Notification Examples-(Basic) </h3>
        <div>
          <Button type="primary" onClick={openNotification}>
            open the notification box
          </Button>
        </div>
        <h3>Notification Examples-(Duration after which the notification box is closed) </h3>
        <div>
          <Button type="primary" onClick={openNotification2}>
            open the notification box
          </Button>
        </div>
        {/* <div>
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </div> */}
        <h3>Notification Examples-(Custom close button) </h3>
        <div>
          <Button type="primary" onClick={openNotification}>
            Open the notification box
          </Button>
        </div>
        {/* <div>
          <Button type="primary" onClick={() => openNotification3('topLeft')}>
            topLeft
          </Button>
          <Button type="primary" onClick={() => openNotification3('topRight')}>
            topRight
          </Button>
          <Divider />
          <Button type="primary" onClick={() => openNotification3('bottomLeft')}>
            bottomLeft
          </Button>
          <Button type="primary" onClick={() => openNotification3('bottomRight')}>
            bottomRight
          </Button>
        </div> */}
        <h3>Notification Examples-(Customized style) </h3>
        <div>
          <Button type="primary" onClick={openNotification4}>
            Open the notification box
          </Button>
        </div>
        <h3>Notification Examples-(Update Message) </h3>
        <div>
          <Button type="primary" onClick={openNotification5}>
            Open the notification box
          </Button>
        </div>
    </div>
    
  );
}

export default NotificationTest;