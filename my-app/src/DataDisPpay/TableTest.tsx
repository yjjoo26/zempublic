import '../App.css';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </span>
    //   ),
    },
    {
      title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <span>
    //       <a>Invite {record.name}</a>
    //       <Divider type="vertical" />
    //       <a>Delete</a>
    //     </span>
    //   ),
    },
];


const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
];

const { Column, ColumnGroup } = Table;

const data2 = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
];

const columns2 = [
    {
      title: 'Name',
      dataIndex: 'name',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
];

const data3 = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
];

function TableTest() {
  
  return (
    <div className="TableTest">
        <h3>Table Examples-(Basic Usage) </h3>
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
        <h3>Table Examples-(Jsx style API) </h3>
        <div>
            <Table dataSource={data2}>
                <Column title="Name" />
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <span>
                    {/* {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))} */}
                    </span>
                )}
                />
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <span>
                    <a>Invite </a>
                    <Divider type="vertical" />
                    <a>Delete</a>
                    </span>
                )}
                />
            </Table>
        </div>
        <h3>Table Examples-(Selection) </h3>
        <div>
            <Table columns={columns2} dataSource={data3} />
        </div>
    </div>
    
  );
}

export default TableTest;