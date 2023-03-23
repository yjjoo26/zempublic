import '../App.css';
import { Pagination } from 'antd';


function PaginationTest() {
  
  return (
    <div className="PaginationTest">
      <h3>Pagination Examples-(Basic) </h3>
      <Pagination defaultCurrent={1} total={50} />
      <br />
      <h3>Pagination Examples-(More) </h3>
      <Pagination defaultCurrent={6} total={500} />
      <br />
      <h3>Pagination Examples-(Changer) </h3>
      <div>
        <Pagination
          showSizeChanger
          // onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <br />
        <Pagination
          showSizeChanger
          // onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          disabled
        />
      </div>
      <br />
      <h3>Pagination Examples-(Jumper) </h3>
      <div>
        <Pagination showQuickJumper defaultCurrent={2} total={500} />
          <br />
        <Pagination showQuickJumper defaultCurrent={2} total={500} disabled />
      </div>
      <br />
      <h3>Pagination Examples-(Mini size) </h3>
      <div>
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        {/* <Pagination size="small" total={50} showTotal={showTotal}  /> */}
      </div>
      <br />
      <h3>Pagination Examples-(Simple mode) </h3>
      <Pagination simple defaultCurrent={2} total={50} />
      <br />
      <h3>Pagination Examples-(Total number) </h3>
      <Pagination
        total={85}
        showTotal={total => `Total ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
      <br />
      <Pagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />

    </div>

    
  );
}

export default PaginationTest;