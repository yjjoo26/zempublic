import '../App.css';
import { Affix, Button } from 'antd';


function AffixTest() {
  
  return (
    <div className="AffixTest">
      <h3>Affix Example-(Callback)</h3>
      <Affix offset={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
    </div>
    
  );
}

export default AffixTest;