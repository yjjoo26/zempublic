import '../App.css';
import { PageHeader, Button, Descriptions, Tag, Statistic, Row} from 'antd';

const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
];

function HeaderTest() {
  
  return (
    <div className="HeaderTest">
        <h3>Header Example-(Basic)</h3>
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
        />
        <h3>Header Example-(White background mode)</h3>
        <div
            style={{
                backgroundColor: '#F5F5F5',
                padding: 24,
            }}
            >
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                    Primary
                    </Button>,
                ]}
                >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                    <Descriptions.Item label="Association">
                    <a>421421</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
        <h3>Header Example-(Breadcrumb)</h3>
        <PageHeader
            style={{
            border: '1px solid rgb(235, 237, 240)',
            }}
            title="Title"
            breadcrumb={{ routes }} //삽입 누락(수정완료)
            subTitle="This is a subtitle"
        />
        <h3>Header Example-(Complete example)</h3>
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => window.history.back()}
            title="Title"
            subTitle="This is a subtitle"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                Primary
                </Button>,
            ]}
        >
            <Descriptions size="small" column={3}>
                <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                <Descriptions.Item label="Association">
                <a>421421</a>
                </Descriptions.Item>
                <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                <Descriptions.Item label="Remarks">
                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>
        </PageHeader>
        <br />
        <PageHeader
            onBack={() => window.history.back()}
            title="Title"
            tags={<Tag color="blue">Running</Tag>}
            subTitle="This is a subtitle"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                Primary
                </Button>,
            ]}
        >
            <Row type="flex">
                <Statistic title="Status" value="Pending" />
                <Statistic
                title="Price"
                prefix="$"
                value={568.08}
                style={{
                    margin: '0 32px',
                }}
                />
                <Statistic title="Balance" prefix="$" value={3345.08} />
            </Row>
        </PageHeader>
    </div>
    
  );
}

export default HeaderTest;