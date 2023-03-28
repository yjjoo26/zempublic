import '../App.css';
import { Skeleton, Button } from 'antd';

function SkeletonTest() {
  
  return (
    <div className="SkeletonTest">
        <h3>Skeleton Examples-(Basic) </h3>
        <div style={{ width : 800, margin:" 0 auto "}}>
            <Skeleton />
        </div>
        <h3>Skeleton Examples-(Complex combination) </h3>
        <div style={{ width : 800, margin:" 0 auto "}}>
            <Skeleton avatar paragraph={{ rows: 4 }}/>
        </div>
        <h3>Skeleton Examples-(Active animation) </h3>
        <div style={{ width : 800, margin:" 0 auto "}}>
            <Skeleton active />
        </div>
    </div>
    
  );
}

export default SkeletonTest;