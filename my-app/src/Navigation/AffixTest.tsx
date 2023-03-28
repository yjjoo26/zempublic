import '../App.css';
import { Affix, Button } from 'antd';


function AffixTest() {
  
  return (
    <div className="AffixTest">
      <h3>Affix Example-(Callback)</h3>
      <Affix offset={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
      {/* class 컴포넌트 사용 미숙, onClick함수와 this선택자등 x */}
    </div>
    
  );
}

export default AffixTest;