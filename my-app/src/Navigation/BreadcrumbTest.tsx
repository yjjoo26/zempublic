import '../App.css';

// import { Router, Route, Link, hashHistory } from 'react-router';
import { Breadcrumb, Alert } from 'antd';


function BreadcrumbTest() {
  
  return (
    <div className="BreadcrumbTest">
        <h3>Breadcrumb Example-(Basic)</h3>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href=''>Application Center</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href=''>Application List</a></Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        {/* Breadcrumb.Item 내부에 href주소 삽입 불가 */}
        {/* <Breadcrumb>
            <Breadcrumb.Item href="">home</Breadcrumb.Item>
        </Breadcrumb> */}
    </div>
    
  );
}

export default BreadcrumbTest;