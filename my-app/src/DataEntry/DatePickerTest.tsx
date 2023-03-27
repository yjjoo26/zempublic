import '../App.css';
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// const { MonthPicker, RangePicker } = DatePicker;

const dateFormat2 = 'YYYY/MM/DD';
const monthFormat2 = 'YYYY/MM';

const dateFormatList2 = ['DD/MM/YYYY', 'DD/MM/YY'];

const dateFormat = 'YYYY-MM-DD';

function DataPickerTest() {
  
  return (
    <div className="DataPickerTest">
        <h3>DataPicker Examples-(Basic) </h3>
        <div>
            <DatePicker 
                // onChange={onChange} 
            />
            <br />
            <MonthPicker 
                // onChange={onChange} 
                placeholder="Select month" 
            />
            <br />
            <RangePicker 
                // nChange={onChange}  
            />
            <br />
            {/* <WeekPicker 
                onChange={onChange} 
                placeholder="Select week" 
            > */}
        </div>
        <h3>DataPicker Examples-(Data Format) </h3>
        <div>
            <DatePicker defaultValue={moment('2015/01/01', dateFormat2)} format={dateFormat2} />
            <br />
            <DatePicker defaultValue={moment('01/01/2015', dateFormatList2[0])} format={dateFormatList2} />
            <br />
            <MonthPicker defaultValue={moment('2015/01', monthFormat2)} format={monthFormat2} />
            <br />
            <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat2), moment('2015/01/01', dateFormat2)]}
                format={dateFormat2}
            />
        </div>
        <h3>DataPicker Examples-(Choose Time) </h3>
        <div>
            <DatePicker 
                showTime placeholder="Select Time" 
                // onChange={onChange} 
                // onOk={onOk} 
            />
            <br />
            <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
                // onChange={onChange}
                // onOk={onOk}
            />
        </div>
        <h3>DataPicker Examples-(Disabled) </h3>
        <div>
            <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled/>
            <br />
            <DatePicker defaultValue={moment('2015-06-06')} disabled/>
            <br />
            <RangePicker
                defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                disabled
            />
        </div>
        <h3>DataPicker Examples-(Preset Ranges)</h3>
        <div>
            <RangePicker
                ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
                // onChange={onChange}
            />
            <br />
            <RangePicker
                ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
                showTime
                format="YYYY/MM/DD HH:mm:ss"
                // onChange={onChange}
            />
        </div>
        <h3>DataPicker Examples-(Extra Footer)</h3>
        <div>
            <DatePicker renderExtraFooter={() => 'extra footer'} />
            <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
            <RangePicker renderExtraFooter={() => 'extra footer'} />
            <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
        </div>
    </div>
    
  );
}

export default DataPickerTest;