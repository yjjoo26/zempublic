import '../App.css';
import { BackTop } from 'antd';

function BackTopTest() {
  
  return (
    <div className="BackTopTest">
        <h3>BackTop Example-(Basic)</h3>
        <div>
            <BackTop />
            Scroll down to see the bottom-right<strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>Gray</strong>button
        </div>
        <h3>BackTop Example-(Custom style)</h3>
        <div>
            <BackTop>
                <div className="ant-back-top-inner">Up</div>
            </BackTop>
            Scroll down to see the bottom-right<strong style={{ color: '#1088e9' }}>Blue</strong>button
        </div>
    </div>
    
  );
}

export default BackTopTest;