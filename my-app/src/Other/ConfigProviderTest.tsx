import '../App.css';
import {
    ConfigProvider,
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Popconfirm,
    Table,
    Modal,
    Button,
    Select,
    Transfer,
    Radio,
} from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

function ConfigProviderTest() {
  
  return (
    <div className="ConfigProviderTest">
        <h3>ConfigProvider Examples-(Basic) </h3>
        <div style={{ textAlign:"left"}}>
            <div className="locale-components">
                <div className="example">
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                </div>
                <div className="example">
                    {/* <Select showSearch style={{ width: 200 }}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                    </Select> */}
                    <DatePicker />
                    <TimePicker />
                    <RangePicker style={{ width: 200 }} />
                </div>
                <div className="example">
                    <Button type="primary">
                        Show Modal
                    </Button>
                    <Button >Show info</Button>
                    <Button>Show confirm</Button>
                    <Popconfirm title="Question?">
                        <a href="#">Click to confirm</a>
                    </Popconfirm>
                </div>
                <div className="example">
                    <Transfer dataSource={[]} showSearch targetKeys={[]} />
                </div>
                <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} value={moment()} />
                </div>
                <div className="example">
                    <Table dataSource={[]} columns={columns} />
                </div>
                {/* <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
                    <p>Locale Modal</p>
                </Modal> */}
            </div>
        </div>
        
    </div>
    
  );
}

export default ConfigProviderTest;