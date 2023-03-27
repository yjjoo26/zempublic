import '../App.css';
import { TimePicker, Button } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

// function onChange(time, timeString) {
//     console.log(time, timeString);
// }

function TimePickerTest() {
  
  return (
    <div className="TimePickerTest">
        <h3>TimePicker Examples-(Basic) </h3>
        <div>
            <TimePicker defaultOpenValue={moment('00:00:00',"HH:mm:ss")} />
        </div>
        <h3>TimePicker Examples-(size) </h3>
        <div>
            <TimePicker defaultOpenValue={moment('00:00:00',"HH:mm:ss")} size="large"/>
            <TimePicker defaultOpenValue={moment('00:00:00',"HH:mm:ss")} />
            <TimePicker defaultOpenValue={moment('00:00:00',"HH:mm:ss")} size="small"/>
        </div>
        <h3>TimePicker Examples-(Disabled) </h3>
        <div>
            <TimePicker defaultOpenValue={moment('00:00:00',"HH:mm:ss")} disabled/>
        </div>
        <h3>TimePicker Examples-(Hour and Minute) </h3>
        <div>
            <TimePicker defaultOpenValue={moment('12:08',format)} format={format} />
        </div>
        <h3>TimePicker Examples-(Interver Option)</h3>
        <div>
            <TimePicker minuteStep={15} secondStep={10} />
        </div>
        <h3>TimePicker Examples-(Addon)</h3>
        <div>
            <TimePicker
                addon={() => (
                    <Button size='small' type='primary'>
                        OK
                    </Button>
                )}
            />
        </div>
        <h3>TimePicker Examples-(12hours)</h3>
        <div>
            <TimePicker use12Hours  />
            <TimePicker use12Hours format="h:mm:ss A" />
            <TimePicker use12Hours format="h:mm a" />
        </div>
    </div>
    
  );
}

export default TimePickerTest;