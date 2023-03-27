import '../App.css';
import { Cascader } from 'antd';

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
];

function CascaderTest() {
  
  return (
    <div className="CascaderTest">
        <h3>cascader Examples-(Basic) </h3>
        <div>
            <Cascader options={options} placeholder="Please select" />
        </div>
        <h3>cascader Examples-(Default value) </h3>
        <div>
            <Cascader
                defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                options={options}
                // onChange={onChange}
            />
        </div>
        <h3>cascader Examples-(Hover) </h3>
        <div>
            <Cascader
                options={options}
                expandTrigger="hover"
                // displayRender={displayRender}
                // onChange={onChange}
            />
        </div>
        <h3>cascader Examples-(Change on select) </h3>
        <div>
            <Cascader 
                options={options} 
                // onChange={onChange} 
            />
        </div>
        <h3>cascader Examples-(Size) </h3>
        <div>
            <Cascader 
                size="large"
                options={options} 
            />
            <br />
            <br />
            <Cascader 
                options={options} 
            />
            <br />
            <br />
            <Cascader 
                size="small"
                options={options} 
            />
            <br />
            <br />
        </div>
        <h3>cascader Examples-(Custom Field Names) </h3>
        <div>
            <Cascader
                fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                options={options}
                // onChange={onChange}
                placeholder="Please select"
            />
        </div>
    </div>
    
  );
}

export default CascaderTest;