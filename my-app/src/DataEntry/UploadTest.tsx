import '../App.css';
import { Upload, message, Button } from 'antd';

const props1 = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    // onChange(info) {
    //   if (info.file.status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (info.file.status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully`);
    //   } else if (info.file.status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
};
  
const props2 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    // onChange({ file, fileList }) {
    //   if (file.status !== 'uploading') {
    //     console.log(file, fileList);
    //   }
    // },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
};

const { Dragger } = Upload;

const props3 = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
};

const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
];
  
const props4 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
};
  
const props5 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
};

function UploadTest() {
  
  return (
    <div className="UploadTest">
        <h3>Upload Examples-(Upload by clicking)</h3>
        <div style={{ width : "300px", margin:"0 auto"}}>
            <Upload {...props1}>
                <Button icon='upload'>
                Click to Upload
                </Button>
            </Upload>
        </div>
        {/* <h3>Upload Examples-(Avatar)</h3>
        <div>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
            </Upload>  
        </div> */}
        <br /><br />
        {/* <h3>Upload Examples-(Default Files)</h3>
        <div style={{ width : "300px", margin:"0 auto"}}>
            <Upload {...props2}>
                <Button>Upload</Button>
            </Upload>
        </div> */}
        <h3>Upload Examples-(Drag and Drop)</h3>
        <div style={{ width : "500px", margin:"0 auto"}}>
            <Dragger {...props3}>
                <p className="ant-upload-drag-icon">
                <Button icon='inbox' type='link' size="large" ghost/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
                </p>
            </Dragger>
        </div>
        {/* <h3>Upload Examples-(Upload directory)</h3>
        <div style={{ width : "500px", margin:"0 auto"}}>
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
                <Button icon='upload'>
                    Upload Directory
                </Button>
            </Upload>
            <Upload directory>
                <Button icon='upload'>Upload Directory</Button>
            </Upload>
        </div> */}
        {/* <h3>Upload Examples-(Picture with list style)</h3>
        <div style={{ width : "500px", margin:"0 auto"}}>
            <Upload {...props4}>
                <Button>
                    Upload
                </Button>
            </Upload>
            <br />
            <br />
            <Upload {...props5}>
                <Button>
                    Upload
                </Button>
            </Upload>
        </div> */}
    </div>
    
  );
}

export default UploadTest;